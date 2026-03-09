/**
 * scripts/gen-icons.js
 * Generates PNG app icons for the PWA manifest using pure Node.js (no external deps).
 */
'use strict';

const zlib = require('zlib');
const fs   = require('fs');
const path = require('path');

// ── PNG encoder ──────────────────────────────────────────────────────────────

function crc32(buf) {
    let crc = 0xFFFFFFFF;
    for (const b of buf) {
        crc ^= b;
        for (let i = 0; i < 8; i++) crc = (crc >>> 1) ^ (0xEDB88320 & -(crc & 1));
    }
    return (crc ^ 0xFFFFFFFF) >>> 0;
}

function chunk(type, data) {
    const len  = Buffer.alloc(4);  len.writeUInt32BE(data.length, 0);
    const tb   = Buffer.from(type, 'ascii');
    const crcB = Buffer.alloc(4);  crcB.writeUInt32BE(crc32(Buffer.concat([tb, data])), 0);
    return Buffer.concat([len, tb, data, crcB]);
}

function encodePNG(width, height, rgba) {
    // IHDR
    const ihdr = Buffer.alloc(13);
    ihdr.writeUInt32BE(width, 0); ihdr.writeUInt32BE(height, 4);
    ihdr[8] = 8; ihdr[9] = 6; // 8-bit RGBA

    // Raw rows with filter byte
    const raw = Buffer.alloc(height * (1 + width * 4));
    for (let y = 0; y < height; y++) {
        raw[y * (1 + width * 4)] = 0; // None filter
        for (let x = 0; x < width; x++) {
            const si = (y * width + x) * 4;
            const di = y * (1 + width * 4) + 1 + x * 4;
            raw[di]     = rgba[si];
            raw[di + 1] = rgba[si + 1];
            raw[di + 2] = rgba[si + 2];
            raw[di + 3] = rgba[si + 3];
        }
    }

    const sig = Buffer.from([137,80,78,71,13,10,26,10]);
    return Buffer.concat([
        sig,
        chunk('IHDR', ihdr),
        chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
        chunk('IEND', Buffer.alloc(0))
    ]);
}

// ── Pixel drawing helpers ─────────────────────────────────────────────────────

function makeCanvas(size) {
    const data = new Uint8Array(size * size * 4);
    const set  = (x, y, r, g, b, a = 255) => {
        if (x < 0 || x >= size || y < 0 || y >= size) return;
        const i = (y * size + x) * 4;
        // Alpha blend over existing
        const aa = a / 255, ab = data[i + 3] / 255;
        const out = aa + ab * (1 - aa);
        if (out === 0) { data[i+3] = 0; return; }
        data[i]   = Math.round((r * aa + data[i]   * ab * (1 - aa)) / out);
        data[i+1] = Math.round((g * aa + data[i+1] * ab * (1 - aa)) / out);
        data[i+2] = Math.round((b * aa + data[i+2] * ab * (1 - aa)) / out);
        data[i+3] = Math.round(out * 255);
    };

    const fillRect = (x1, y1, w, h, r, g, b, a = 255) => {
        for (let y = y1; y < y1 + h; y++)
            for (let x = x1; x < x1 + w; x++)
                set(x, y, r, g, b, a);
    };

    const fillCircle = (cx, cy, radius, r, g, b, a = 255) => {
        for (let y = Math.floor(cy - radius); y <= Math.ceil(cy + radius); y++)
            for (let x = Math.floor(cx - radius); x <= Math.ceil(cx + radius); x++) {
                const dx = x - cx, dy = y - cy;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist <= radius) {
                    // Antialiasing at edge
                    const alpha = dist > radius - 1 ? Math.round((radius - dist) * a) : a;
                    set(x, y, r, g, b, alpha);
                }
            }
    };

    const roundedRect = (x, y, w, h, rx, r, g, b, a = 255) => {
        // Fill middle
        fillRect(x + rx, y, w - rx * 2, h, r, g, b, a);
        fillRect(x, y + rx, w, h - rx * 2, r, g, b, a);
        // Corners
        fillCircle(x + rx,     y + rx,     rx, r, g, b, a);
        fillCircle(x + w - rx, y + rx,     rx, r, g, b, a);
        fillCircle(x + rx,     y + h - rx, rx, r, g, b, a);
        fillCircle(x + w - rx, y + h - rx, rx, r, g, b, a);
    };

    return { data, set, fillRect, fillCircle, roundedRect, size };
}

// ── Draw icon ─────────────────────────────────────────────────────────────────

function drawIcon(size) {
    const c  = makeCanvas(size);
    const s  = size;
    const cx = s / 2, cy = s / 2;

    // Background: dark #0f0f1a
    c.fillRect(0, 0, s, s, 0x0f, 0x0f, 0x1a);

    // Gradient-ish: slightly lighter purple at bottom-right
    for (let y = 0; y < s; y++)
        for (let x = 0; x < s; x++) {
            const t = (x + y) / (s * 2);
            const r = Math.round(0x0f + (0x1e - 0x0f) * t);
            const g = Math.round(0x0f + (0x1e - 0x0f) * t);
            const b = Math.round(0x1a + (0x30 - 0x1a) * t);
            c.set(x, y, r, g, b, 255);
        }

    // Brand circle background
    const outerR = Math.round(s * 0.42);
    c.fillCircle(cx, cy, outerR, 0x63, 0x66, 0xf1);

    // Gamepad body (horizontal rounded rect in white)
    const gw = Math.round(s * 0.50), gh = Math.round(s * 0.28);
    const gx = Math.round(cx - gw / 2), gy = Math.round(cy - gh / 2);
    const gr = Math.round(gh * 0.45);
    c.roundedRect(gx, gy, gw, gh, gr, 0xff, 0xff, 0xff);

    // Controller grips (bottom two bumps)
    const gripW = Math.round(gw * 0.28), gripH = Math.round(gh * 0.5);
    const gripY = Math.round(gy + gh - 2);
    c.roundedRect(Math.round(gx + gw * 0.08), gripY, gripW, gripH, Math.round(gripW * 0.45), 0xff, 0xff, 0xff);
    c.roundedRect(Math.round(gx + gw * 0.64), gripY, gripW, gripH, Math.round(gripW * 0.45), 0xff, 0xff, 0xff);

    // D-pad (left side, purple cross)
    const dpad = Math.round(s * 0.045);
    const dpx  = Math.round(gx + gw * 0.22), dpy = Math.round(cy - dpad * 0.5);
    c.fillRect(dpx - dpad * 3, dpy, dpad * 6, dpad, 0x63, 0x66, 0xf1); // horizontal
    c.fillRect(dpx - dpad * 0.5, dpy - dpad * 2, dpad, dpad * 5, 0x63, 0x66, 0xf1); // vertical

    // Buttons (right side, small colored circles)
    const br = Math.round(s * 0.04);
    const bx = Math.round(gx + gw * 0.72), by = Math.round(cy);
    c.fillCircle(bx,      by - br * 2.2, br, 0x22, 0xc5, 0x5e); // green top
    c.fillCircle(bx + br * 2.2, by,      br, 0xe8, 0x4d, 0x4d); // red right
    c.fillCircle(bx,      by + br * 2.2, br, 0xf5, 0x9e, 0x0b); // orange bottom
    c.fillCircle(bx - br * 2.2, by,      br, 0x60, 0xa5, 0xfa); // blue left

    return encodePNG(s, s, c.data);
}

// ── Generate all sizes ────────────────────────────────────────────────────────

const outDir = path.join(__dirname, '..', 'icons');
fs.mkdirSync(outDir, { recursive: true });

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
for (const sz of sizes) {
    const buf  = drawIcon(sz);
    const file = path.join(outDir, `icon-${sz}.png`);
    fs.writeFileSync(file, buf);
    console.log(`  [OK] icons/icon-${sz}.png  (${buf.length} bytes)`);
}

// Placeholder screenshots (solid color) — real screenshots can be added manually
function plainPNG(w, h, r, g, b) {
    const c = makeCanvas(Math.max(w, h));
    // Create exactly w×h canvas
    const data = new Uint8Array(w * h * 4);
    for (let i = 0; i < w * h; i++) {
        data[i*4]=r; data[i*4+1]=g; data[i*4+2]=b; data[i*4+3]=255;
    }
    const raw = Buffer.alloc(h * (1 + w * 4));
    for (let y = 0; y < h; y++) {
        raw[y * (1 + w * 4)] = 0;
        for (let x = 0; x < w; x++) {
            const si = (y * w + x) * 4;
            const di = y * (1 + w * 4) + 1 + x * 4;
            raw[di]=data[si]; raw[di+1]=data[si+1]; raw[di+2]=data[si+2]; raw[di+3]=data[si+3];
        }
    }
    const ihdr = Buffer.alloc(13);
    ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4);
    ihdr[8]=8; ihdr[9]=6;
    const sig = Buffer.from([137,80,78,71,13,10,26,10]);
    return Buffer.concat([sig, chunk('IHDR',ihdr), chunk('IDAT', zlib.deflateSync(raw,{level:1})), chunk('IEND',Buffer.alloc(0))]);
}

fs.writeFileSync(path.join(outDir, 'screenshot-wide.png'),   plainPNG(1280, 720, 0x0f, 0x0f, 0x1a));
fs.writeFileSync(path.join(outDir, 'screenshot-mobile.png'), plainPNG(390, 844, 0x0f, 0x0f, 0x1a));
console.log('  [OK] placeholder screenshots');

console.log('\nAll icons generated in /icons/');
