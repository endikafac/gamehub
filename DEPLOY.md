# Games Hub – Deploy Instructions

## 1. Create / configure Firebase project

1. Go to https://console.firebase.google.com/
2. Select project **anthropic-training-hub** (you can rename it to **games-hub** in Settings)
3. **Authentication**: Enable Google Sign-In provider
4. **Firestore Database**: Create in production mode (rules are in `firestore.rules`)
5. **Hosting**: Enable Firebase Hosting

## 2. Add your Firebase config

Edit `platform/firebase-config.js` and replace the placeholder values:

```js
const FIREBASE_CONFIG = {
    apiKey:            "YOUR_REAL_API_KEY",
    authDomain:        "your-project-id.firebaseapp.com",
    projectId:         "your-project-id",
    storageBucket:     "your-project-id.appspot.com",
    messagingSenderId: "123456789",
    appId:             "1:123:web:abc123"
};
```

Values are in: **Firebase Console → Project Settings → General → Your apps → Web app → firebaseConfig**

## 3. Authorize your domain

Firebase Console → Authentication → Settings → Authorized domains
Add: `localhost` (for dev) and your final domain.

## 4. Install Firebase CLI (once)

```bash
npm install -g firebase-tools
firebase login
```

## 5. Update project reference

Edit `.firebaserc` if your project ID differs from `anthropic-training-hub`:

```json
{
  "projects": {
    "default": "your-actual-project-id"
  }
}
```

## 6. Deploy

```bash
cd /path/to/AI4Devs-videogame-2510-Sr
firebase deploy
```

This deploys:
- Firebase Hosting (all static files)
- Firestore Security Rules

## 7. Verify

Open the Hosting URL shown in the terminal (e.g. `https://your-project-id.web.app`).

---

## Local testing (no Firebase)

Open `index.html` or `mathMaster-EFC/index.html` directly in browser.
The app will run in **guest mode** with localStorage – no Firebase required.

---

## Project structure

```
platform/
  firebase-config.js   ← EDIT THIS with your config
  auth.js              ← Google Sign-In
  firestore.js         ← Cloud data
  platform-header.js   ← Shared header component
  platform.css         ← Shared design tokens
  i18n-platform.js     ← ES / EN / EU translations

mathMaster-EFC/
  game.js              ← Game logic (v3.0, Firebase-integrated)
  storage.js           ← Storage layer (Firestore + localStorage)
  i18n.js              ← Game translations
  audio.js             ← Web Audio API + TTS
  achievements.js      ← Achievement system
  styles.css           ← Game styles

index.html             ← Games Hub landing page
firebase.json          ← Firebase Hosting config
firestore.rules        ← Security rules
```
