/**
 * WordSearch - Word Database
 * Each entry: word (A-Z no accents), display (with accents), category, emoji,
 * and definitions/synonyms/antonyms in ES, EN, EU.
 */
const WS_WORDS = [

    // ── ANIMALES (25) ──────────────────────────────────────────────────────────
    {
        word: 'GATO', display: 'Gato', category: 'animales', emoji: '🐱',
        es: { def: 'Animal doméstico de la familia de los felinos. Maúlla y ronronea, y es muy hábil cazador.', syn: ['felino', 'minino', 'michino'], ant: [] },
        en: { def: 'Domestic animal of the feline family. It meows and purrs, and is a skilled hunter.', syn: ['feline', 'kitty', 'tabby'], ant: [] },
        eu: { def: 'Felidoen familiako etxeko animalia. Miyau egiten du eta marruma, eta ehiztari trebea da.', syn: ['felino', 'pizti', 'katu'], ant: [] }
    },
    {
        word: 'PERRO', display: 'Perro', category: 'animales', emoji: '🐶',
        es: { def: 'Mamífero doméstico considerado el mejor amigo del ser humano. Es fiel y leal a su dueño.', syn: ['can', 'chucho', 'canino'], ant: [] },
        en: { def: 'Domestic mammal considered the best friend of humans. It is faithful and loyal to its owner.', syn: ['dog', 'canine', 'hound'], ant: [] },
        eu: { def: 'Gizakiaren lagunik onena den etxeko ugaztuna. Leial eta fidela da bere jabearekin.', syn: ['txakur', 'zakur', 'kanino'], ant: [] }
    },
    {
        word: 'VACA', display: 'Vaca', category: 'animales', emoji: '🐮',
        es: { def: 'Mamífero rumiante doméstico que produce leche. Es un animal muy importante en la ganadería.', syn: ['res', 'bovino', 'ternera'], ant: [] },
        en: { def: 'Domestic ruminant mammal that produces milk. It is a very important animal in livestock farming.', syn: ['bovine', 'heifer', 'cattle'], ant: [] },
        eu: { def: 'Esnea ematen duen etxeko haragijale ugaztuna. Abeltzaintzan garrantzitsua den animalia da.', syn: ['behia', 'abere', 'borono'], ant: [] }
    },
    {
        word: 'PATO', display: 'Pato', category: 'animales', emoji: '🦆',
        es: { def: 'Ave acuática con pico plano y patas palmeadas que le permiten nadar con facilidad. Produce el sonido "cuac".', syn: ['ánade', 'pata', 'ganso'], ant: [] },
        en: { def: 'Aquatic bird with a flat beak and webbed feet that allow it to swim easily. It makes a "quack" sound.', syn: ['drake', 'mallard', 'waterfowl'], ant: [] },
        eu: { def: 'Mokozabala eta oinen arteko mintza dituen hegazti ur-ingurunekoa. "Kua" egiten du.', syn: ['ahate', 'antzara', 'hegazti'], ant: [] }
    },
    {
        word: 'OSO', display: 'Oso', category: 'animales', emoji: '🐻',
        es: { def: 'Mamífero de gran tamaño con pelaje espeso. Es omnívoro y hiberna en invierno en las regiones frías.', syn: ['úrsido', 'oso pardo', 'plantígrado'], ant: [] },
        en: { def: 'Large mammal with thick fur. It is omnivorous and hibernates in winter in cold regions.', syn: ['ursine', 'bruin', 'bear'], ant: [] },
        eu: { def: 'Ile lodidun ugaztun handia. Omnibora da eta neguan lo egiten du lurralde hotzetan.', syn: ['hartz', 'urso', 'marrazkilu'], ant: [] }
    },
    {
        word: 'LOBO', display: 'Lobo', category: 'animales', emoji: '🐺',
        es: { def: 'Mamífero carnívoro salvaje que vive en manadas. Es el ancestro del perro doméstico y un excelente cazador.', syn: ['lobo gris', 'lupino', 'cánido'], ant: [] },
        en: { def: 'Wild carnivorous mammal that lives in packs. It is the ancestor of the domestic dog and an excellent hunter.', syn: ['grey wolf', 'lupine', 'canid'], ant: [] },
        eu: { def: 'Taldean bizi den harrapari ugaztun basatia. Etxeko txakurraren arbasoa da.', syn: ['otso', 'otso grisa', 'kanido'], ant: [] }
    },
    {
        word: 'TORO', display: 'Toro', category: 'animales', emoji: '🐂',
        es: { def: 'Bovino macho adulto de gran fuerza y energía. Es el símbolo de la fuerza y la bravura en muchas culturas.', syn: ['buey', 'bóvido', 'astado'], ant: [] },
        en: { def: 'Adult male bovine of great strength. It is a symbol of strength and bravery in many cultures.', syn: ['bull', 'bovine', 'ox'], ant: [] },
        eu: { def: 'Indar eta energia handiko bovino ar heldua. Indarraren eta ausardiaren ikurra da kultura askotan.', syn: ['zezen', 'idi', 'adar'], ant: [] }
    },
    {
        word: 'TIGRE', display: 'Tigre', category: 'animales', emoji: '🐯',
        es: { def: 'El felino más grande del mundo, con rayas anaranjadas y negras. Es un depredador solitario y poderoso.', syn: ['felino', 'félido', 'gran felino'], ant: [] },
        en: { def: 'The largest feline in the world, with orange and black stripes. It is a powerful solitary predator.', syn: ['feline', 'big cat', 'panther'], ant: [] },
        eu: { def: 'Munduko felino handiena, laranja eta beltzezko marrekin. Harrapari bakartu eta indartsua da.', syn: ['tigrea', 'felino', 'pizti'], ant: [] }
    },
    {
        word: 'LEON', display: 'León', category: 'animales', emoji: '🦁',
        es: { def: 'Conocido como el rey de la selva, este gran felino vive en grupos llamados manadas. Es un cazador en equipo.', syn: ['félido', 'gran felino', 'rey de la selva'], ant: [] },
        en: { def: 'Known as the king of the jungle, this large feline lives in groups called prides. It hunts as a team.', syn: ['big cat', 'feline', 'lion'], ant: [] },
        eu: { def: 'Oihaneko errege bezala ezaguna, felino handi hau taldetan bizi da. Taldean ehizatzen du.', syn: ['lehoia', 'felino', 'pizti'], ant: [] }
    },
    {
        word: 'AGUILA', display: 'Águila', category: 'animales', emoji: '🦅',
        es: { def: 'Ave rapaz de gran tamaño y vista agudísima. Es símbolo de libertad y poder en muchas culturas del mundo.', syn: ['rapaz', 'ave de presa', 'halcón'], ant: [] },
        en: { def: 'Large bird of prey with extremely sharp eyesight. It is a symbol of freedom and power in many cultures.', syn: ['raptor', 'bird of prey', 'hawk'], ant: [] },
        eu: { def: 'Tamaina handiko harrapakin hegaztia, ikusmen zorrotzarekin. Askatasunaren ikurra da kultura askotan.', syn: ['arrano', 'harrapakin', 'hegazti'], ant: [] }
    },
    {
        word: 'DELFIN', display: 'Delfín', category: 'animales', emoji: '🐬',
        es: { def: 'Mamífero marino muy inteligente y social. Se comunica mediante sonidos y es conocido por su alegría y agilidad.', syn: ['cetáceo', 'marsopa', 'tursiops'], ant: [] },
        en: { def: 'Highly intelligent and social marine mammal. It communicates through sounds and is known for its joy and agility.', syn: ['cetacean', 'porpoise', 'bottlenose'], ant: [] },
        eu: { def: 'Oso adimentsua eta soziala den itsas ugaztuna. Soinuen bidez komunikatzen da eta alaitasunagatik ezaguna da.', syn: ['izurde', 'zetazeo', 'ugaztun'], ant: [] }
    },
    {
        word: 'BALLENA', display: 'Ballena', category: 'animales', emoji: '🐋',
        es: { def: 'El animal más grande que existe en la Tierra. Es un mamífero marino que respira aire y vive en los océanos.', syn: ['cetáceo', 'cachalote', 'rorcual'], ant: [] },
        en: { def: 'The largest animal on Earth. It is a marine mammal that breathes air and lives in the oceans.', syn: ['cetacean', 'sperm whale', 'humpback'], ant: [] },
        eu: { def: 'Lurreko animalia handiena. Airea arnasten duen itsas ugaztuna da eta ozeanoeitan bizi da.', syn: ['balea', 'zetazeo', 'ugaztun'], ant: [] }
    },
    {
        word: 'ELEFANTE', display: 'Elefante', category: 'animales', emoji: '🐘',
        es: { def: 'El mamífero terrestre más grande del mundo. Tiene trompa, grandes orejas y colmillos de marfil. Vive en manadas.', syn: ['paquidermo', 'proboscídeo', 'elefante africano'], ant: [] },
        en: { def: 'The largest land mammal in the world. It has a trunk, large ears and ivory tusks. It lives in herds.', syn: ['pachyderm', 'proboscidean', 'tusker'], ant: [] },
        eu: { def: 'Munduko lurreko ugaztun handiena. Zurda, belarri handiak eta marfil-hortzak ditu. Taldetan bizi da.', syn: ['elefantea', 'proboszidea', 'ugaztun'], ant: [] }
    },
    {
        word: 'COCODRILO', display: 'Cocodrilo', category: 'animales', emoji: '🐊',
        es: { def: 'Reptil carnívoro de gran tamaño que vive cerca del agua. Es uno de los animales más antiguos del planeta.', syn: ['reptil', 'saurio', 'caimán'], ant: [] },
        en: { def: 'Large carnivorous reptile that lives near water. It is one of the oldest animals on the planet.', syn: ['reptile', 'saurian', 'caiman'], ant: [] },
        eu: { def: 'Uraren ondoan bizi den narrastia, harraparia eta tamaina handikoa. Planetako animalia zaharrenetako bat da.', syn: ['kaimana', 'narrastia', 'saurio'], ant: [] }
    },
    {
        word: 'JIRAFA', display: 'Jirafa', category: 'animales', emoji: '🦒',
        es: { def: 'El animal más alto del mundo, con un cuello muy largo. Se alimenta de hojas de árboles altos como la acacia.', syn: ['rumiante', 'artiodáctilo', 'cérvido'], ant: [] },
        en: { def: 'The tallest animal in the world, with a very long neck. It feeds on leaves from tall trees like the acacia.', syn: ['ruminant', 'artiodactyl', 'ungulate'], ant: [] },
        eu: { def: 'Munduko animalia altuena, leze luzea duena. Akaziaoren bezalako zuhaitz altuen hostoz elikatzen da.', syn: ['jirafea', 'hausnartzaile', 'ugaztun'], ant: [] }
    },
    {
        word: 'CEBRA', display: 'Cebra', category: 'animales', emoji: '🦓',
        es: { def: 'Équido africano con rayas negras y blancas únicas, distintas en cada individuo. Vive en manadas en la sabana.', syn: ['équido', 'mamífero', 'herbívoro'], ant: [] },
        en: { def: 'African equid with unique black and white stripes, different in each individual. It lives in herds on the savanna.', syn: ['equid', 'herbivore', 'ungulate'], ant: [] },
        eu: { def: 'Afrikako ekido bat, ezberdinak diren banako bakoitzean zerrenda beltz eta zuriak dituena. Sabanako taldetan bizi da.', syn: ['zebra', 'ekido', 'ugaztun'], ant: [] }
    },
    {
        word: 'GORILA', display: 'Gorila', category: 'animales', emoji: '🦍',
        es: { def: 'El primate más grande del mundo. Es el pariente más cercano al ser humano y vive en los bosques de África.', syn: ['primate', 'simio', 'hominoide'], ant: [] },
        en: { def: 'The largest primate in the world. It is the closest relative to humans and lives in African forests.', syn: ['primate', 'ape', 'hominoid'], ant: [] },
        eu: { def: 'Munduko primate handiena. Gizakiaren senide hurbilena da eta Afrikako basoetan bizi da.', syn: ['primate', 'simo', 'hominoide'], ant: [] }
    },
    {
        word: 'PINGUINO', display: 'Pingüino', category: 'animales', emoji: '🐧',
        es: { def: 'Ave marina que no puede volar pero nada con gran habilidad. Vive principalmente en el Antártico en colonias.', syn: ['ave marina', 'sphenisciforme', 'pájaro bobo'], ant: [] },
        en: { def: 'Sea bird that cannot fly but swims with great skill. It lives mainly in Antarctica in large colonies.', syn: ['seabird', 'spheniscid', 'penguin'], ant: [] },
        eu: { def: 'Hegan egin ezin duen itsas hegaztia, baina ondo igeri egiten duena. Antartikoan koloniotan bizi da.', syn: ['itsas hegaztia', 'penguin', 'txori'], ant: [] }
    },
    {
        word: 'CAMELLO', display: 'Camello', category: 'animales', emoji: '🐪',
        es: { def: 'Mamífero con una o dos jorobas que le permiten almacenar grasa. Está perfectamente adaptado para vivir en el desierto.', syn: ['dromedario', 'camélido', 'rumiante'], ant: [] },
        en: { def: 'Mammal with one or two humps that allow it to store fat. It is perfectly adapted to live in the desert.', syn: ['dromedary', 'camelid', 'ruminant'], ant: [] },
        eu: { def: 'Koipea gordetzeko gailur bat edo bi dituen ugaztuna. Basamortuan bizitzeko ondo egokituta dago.', syn: ['gameilu', 'kamelido', 'hausnartzaile'], ant: [] }
    },
    {
        word: 'PULPO', display: 'Pulpo', category: 'animales', emoji: '🐙',
        es: { def: 'Molusco marino con ocho tentáculos dotados de ventosas. Es muy inteligente y puede cambiar de color.', syn: ['cefalópodo', 'molusco', 'octópodo'], ant: [] },
        en: { def: 'Marine mollusc with eight tentacles equipped with suckers. It is very intelligent and can change colour.', syn: ['cephalopod', 'mollusc', 'octopod'], ant: [] },
        eu: { def: 'Zortzi tentakulu dituen itsas moluskua. Oso adimentsua da eta kolorez alda daiteke.', syn: ['zefalopodo', 'moluskua', 'oktopodo'], ant: [] }
    },
    {
        word: 'TIBURON', display: 'Tiburón', category: 'animales', emoji: '🦈',
        es: { def: 'Pez cartilaginoso depredador que lleva millones de años en los océanos. Tiene filas de dientes que se renuevan.', syn: ['selacio', 'escualo', 'pez cartilaginoso'], ant: [] },
        en: { def: 'Cartilaginous predatory fish that has been in the oceans for millions of years. It has rows of teeth that renew.', syn: ['selachian', 'elasmobranch', 'cartilaginous fish'], ant: [] },
        eu: { def: 'Milioika urtez ozeanoeitan dagoen kartilaginozko arrain harraparia. Berritzen diren hortz ilarak ditu.', syn: ['marrazo', 'arrain', 'harrapari'], ant: [] }
    },
    {
        word: 'SERPIENTE', display: 'Serpiente', category: 'animales', emoji: '🐍',
        es: { def: 'Reptil sin patas que se desplaza ondulatoriamente. Existen especies venenosas y no venenosas en todo el mundo.', syn: ['víbora', 'culebra', 'réptil'], ant: [] },
        en: { def: 'Legless reptile that moves in an undulating manner. Venomous and non-venomous species exist worldwide.', syn: ['viper', 'snake', 'reptile'], ant: [] },
        eu: { def: 'Zangorik gabeko narrastia, uhin mugimenduz aurreratzen dena. Pozoitsuak eta ez pozoitsuak daude munduan.', syn: ['suge', 'narrastia', 'biperma'], ant: [] }
    },
    {
        word: 'MARIPOSA', display: 'Mariposa', category: 'animales', emoji: '🦋',
        es: { def: 'Insecto con alas de colores que se alimenta del néctar de las flores. Pasa por una metamorfosis desde oruga a adulto.', syn: ['lepidóptero', 'insecto', 'polilla'], ant: [] },
        en: { def: 'Insect with colourful wings that feeds on flower nectar. It undergoes metamorphosis from caterpillar to adult.', syn: ['lepidopteran', 'insect', 'moth'], ant: [] },
        eu: { def: 'Lore-nektarrarekin elikatzen den hego koloretako intsektua. Beldurtik helduarenera metamorfosia egiten du.', syn: ['tximeleta', 'intsektua', 'lepidoptero'], ant: [] }
    },
    {
        word: 'ARANA', display: 'Araña', category: 'animales', emoji: '🕷️',
        es: { def: 'Arácnido con ocho patas que teje telas para atrapar a sus presas. La mayoría son inofensivas para los seres humanos.', syn: ['arácnido', 'tarántula', 'araneido'], ant: [] },
        en: { def: 'Eight-legged arachnid that weaves webs to catch prey. Most are harmless to humans.', syn: ['arachnid', 'tarantula', 'spider'], ant: [] },
        eu: { def: 'Harrapakiak harrapatzeko sarea ehuntzen duen zortzi-hankako araknidoa. Gehienak gizakientzat kaltegarriak ez dira.', syn: ['armiarma', 'araknidoa', 'tarantula'], ant: [] }
    },
    {
        word: 'HORMIGA', display: 'Hormiga', category: 'animales', emoji: '🐜',
        es: { def: 'Insecto social que vive en colonias muy organizadas. Es capaz de cargar objetos 50 veces más pesados que su propio cuerpo.', syn: ['insecto', 'himenóptero', 'formícido'], ant: [] },
        en: { def: 'Social insect that lives in highly organised colonies. It can carry objects 50 times heavier than its own body.', syn: ['insect', 'hymenopteran', 'formicid'], ant: [] },
        eu: { def: 'Oso antolatutako koloniotan bizi den intsektu soziala. Bere gorputzaren 50 aldiz pisu gehiagoko objektuak eraman ditzake.', syn: ['inurri', 'intsektua', 'himenoptero'], ant: [] }
    },

    // ── COLORES (10) ──────────────────────────────────────────────────────────
    {
        word: 'ROJO', display: 'Rojo', category: 'colores', emoji: '🔴',
        es: { def: 'Color de la sangre y del fuego. Es uno de los colores primarios y se asocia con el amor, el peligro y la energía.', syn: ['carmesí', 'escarlata', 'bermejo'], ant: ['verde', 'azul'] },
        en: { def: 'Colour of blood and fire. It is one of the primary colours associated with love, danger and energy.', syn: ['crimson', 'scarlet', 'vermilion'], ant: ['green', 'blue'] },
        eu: { def: 'Odolaren eta suaren kolorea. Oinarrizko koloreen artean dago eta maitasunarekin eta energiarekin lotzen da.', syn: ['gorria', 'eskarlata', 'karmesi'], ant: ['berdea', 'urdina'] }
    },
    {
        word: 'AZUL', display: 'Azul', category: 'colores', emoji: '🔵',
        es: { def: 'Color del cielo y del mar. Es un color primario que representa la calma, la serenidad y la confianza.', syn: ['celeste', 'zafiro', 'índigo'], ant: ['naranja', 'rojo'] },
        en: { def: 'Colour of the sky and sea. It is a primary colour representing calmness, serenity and trust.', syn: ['sky blue', 'sapphire', 'indigo'], ant: ['orange', 'red'] },
        eu: { def: 'Zeruaren eta itsasoaren kolorea. Oinarrizko kolorea da eta lasaitasuna eta konfiantza adierazten du.', syn: ['urdina', 'zafiro', 'indigo'], ant: ['laranja', 'gorria'] }
    },
    {
        word: 'VERDE', display: 'Verde', category: 'colores', emoji: '🟢',
        es: { def: 'Color de las plantas y la naturaleza. Simboliza la vida, la esperanza y el crecimiento en muchas culturas.', syn: ['esmeralda', 'jade', 'oliva'], ant: ['rojo', 'morado'] },
        en: { def: 'Colour of plants and nature. It symbolises life, hope and growth in many cultures.', syn: ['emerald', 'jade', 'olive'], ant: ['red', 'purple'] },
        eu: { def: 'Landareen eta naturaren kolorea. Bizitza, itxaropena eta hazkundea sinbolizatzen du kultura askotan.', syn: ['berdea', 'esmeralda', 'jade'], ant: ['gorria', 'morea'] }
    },
    {
        word: 'BLANCO', display: 'Blanco', category: 'colores', emoji: '⚪',
        es: { def: 'Color que resulta de la combinación de todos los colores de la luz. Representa la pureza, la paz y la limpieza.', syn: ['níveo', 'marfil', 'albino'], ant: ['negro', 'oscuro'] },
        en: { def: 'Colour resulting from the combination of all colours of light. It represents purity, peace and cleanliness.', syn: ['ivory', 'snow-white', 'alabaster'], ant: ['black', 'dark'] },
        eu: { def: 'Argiaren kolore guztiak batuz lortzen den kolorea. Garbitasuna, bakea eta xinpletasuna adierazten du.', syn: ['zuria', 'boli', 'marfil'], ant: ['beltza', 'iluna'] }
    },
    {
        word: 'NEGRO', display: 'Negro', category: 'colores', emoji: '⚫',
        es: { def: 'Color que resulta de la ausencia de luz. Se asocia a la elegancia, el misterio y la formalidad.', syn: ['oscuro', 'azabache', 'ébano'], ant: ['blanco', 'claro'] },
        en: { def: 'Colour resulting from the absence of light. It is associated with elegance, mystery and formality.', syn: ['dark', 'jet-black', 'ebony'], ant: ['white', 'light'] },
        eu: { def: 'Argirik ez dagoenean lortzen den kolorea. Elegantziarekin, misterioarekin eta formalitatearekin lotzen da.', syn: ['beltza', 'iluna', 'ebano'], ant: ['zuria', 'argia'] }
    },
    {
        word: 'AMARILLO', display: 'Amarillo', category: 'colores', emoji: '🟡',
        es: { def: 'Color del sol y del oro. Es un color primario que representa la alegría, la energía y el optimismo.', syn: ['dorado', 'ocre', 'ámbar'], ant: ['morado', 'violeta'] },
        en: { def: 'Colour of the sun and gold. It is a primary colour representing joy, energy and optimism.', syn: ['golden', 'ochre', 'amber'], ant: ['purple', 'violet'] },
        eu: { def: 'Eguzkiaren eta urrearen kolorea. Oinarrizko kolorea da eta alaitasuna eta baikortasuna adierazten du.', syn: ['horia', 'urrezko', 'anbar'], ant: ['morea', 'bioleta'] }
    },
    {
        word: 'ROSA', display: 'Rosa', category: 'colores', emoji: '🌸',
        es: { def: 'Tono suave que se obtiene al mezclar el rojo con el blanco. Se asocia con la ternura, el romanticismo y la delicadeza.', syn: ['rosado', 'carmín', 'fucsia'], ant: ['gris', 'negro'] },
        en: { def: 'Soft tone obtained by mixing red with white. It is associated with tenderness, romance and delicacy.', syn: ['pink', 'rosy', 'fuchsia'], ant: ['grey', 'black'] },
        eu: { def: 'Gorria eta zuria nahasiz lortzen den tono leuna. Samurtasunarekin eta erromantikoiarekin lotzen da.', syn: ['arrosa', 'fuxia', 'gorriaren'], ant: ['grisa', 'beltza'] }
    },
    {
        word: 'NARANJA', display: 'Naranja', category: 'colores', emoji: '🟠',
        es: { def: 'Color cálido entre el rojo y el amarillo. Simboliza el entusiasmo, la creatividad y la energía positiva.', syn: ['anaranjado', 'cítrico', 'mandarina'], ant: ['azul', 'violeta'] },
        en: { def: 'Warm colour between red and yellow. It symbolises enthusiasm, creativity and positive energy.', syn: ['tangerine', 'amber', 'citrus'], ant: ['blue', 'violet'] },
        eu: { def: 'Gorria eta horiaren arteko kolore epela. Entusiasmo, sormena eta energia positiboa sinbolizatzen du.', syn: ['laranja', 'mandarina', 'zitrikoaren'], ant: ['urdina', 'bioleta'] }
    },
    {
        word: 'MORADO', display: 'Morado', category: 'colores', emoji: '🟣',
        es: { def: 'Color que se obtiene mezclando el rojo y el azul. Históricamente se asocia con la realeza, la sabiduría y el misterio.', syn: ['violeta', 'lila', 'púrpura'], ant: ['amarillo', 'verde'] },
        en: { def: 'Colour obtained by mixing red and blue. Historically associated with royalty, wisdom and mystery.', syn: ['violet', 'lilac', 'purple'], ant: ['yellow', 'green'] },
        eu: { def: 'Gorria eta urdina nahastuz lortzen den kolorea. Historikoki errealdiarekin eta jakitasunarekin lotzen da.', syn: ['morea', 'bioleta', 'lila'], ant: ['horia', 'berdea'] }
    },
    {
        word: 'GRIS', display: 'Gris', category: 'colores', emoji: '🩶',
        es: { def: 'Color neutro entre el blanco y el negro. Se asocia con la neutralidad, la madurez y la elegancia discreta.', syn: ['ceniciento', 'plomizo', 'pardo'], ant: ['blanco', 'negro'] },
        en: { def: 'Neutral colour between white and black. It is associated with neutrality, maturity and discrete elegance.', syn: ['ashen', 'grey', 'pewter'], ant: ['white', 'black'] },
        eu: { def: 'Zuriaren eta beltzaren arteko kolore neutroa. Neutraltasunarekin eta heldutasunarekin lotzen da.', syn: ['grisa', 'erre-kolorea', 'plomua'], ant: ['zuria', 'beltza'] }
    },

    // ── NATURALEZA (20) ───────────────────────────────────────────────────────
    {
        word: 'ARBOL', display: 'Árbol', category: 'naturaleza', emoji: '🌳',
        es: { def: 'Planta de tronco leñoso y ramas que puede vivir muchos años. Produce oxígeno y es hogar de muchos animales.', syn: ['vegetal', 'planta leñosa', 'arboleda'], ant: ['hierba', 'arbusto'] },
        en: { def: 'Woody-trunked plant with branches that can live many years. It produces oxygen and is home to many animals.', syn: ['tree', 'woody plant', 'timber'], ant: ['grass', 'shrub'] },
        eu: { def: 'Enbor egurrezkoa eta adarrak dituen landarea, urte asko bizi daitekeena. Oxigenoa ekoizten du eta animalia askoren etxea da.', syn: ['zuhaitza', 'landarea', 'basoa'], ant: ['belarra', 'zuhaixka'] }
    },
    {
        word: 'FLOR', display: 'Flor', category: 'naturaleza', emoji: '🌸',
        es: { def: 'Parte reproductora de las plantas que produce semillas y frutos. Posee pétalos de colores para atraer polinizadores.', syn: ['pétalo', 'capullo', 'brote'], ant: ['espina', 'raíz'] },
        en: { def: 'Reproductive part of plants that produces seeds and fruit. It has coloured petals to attract pollinators.', syn: ['petal', 'blossom', 'bloom'], ant: ['thorn', 'root'] },
        eu: { def: 'Haziak eta fruituak ekoizten dituen landareen ugalketa zatia. Polinizatzaileak erakartzeko kolore-petalo dituen landarea.', syn: ['lorea', 'petalo', 'botoi'], ant: ['arantza', 'erroa'] }
    },
    {
        word: 'RIO', display: 'Río', category: 'naturaleza', emoji: '🏞️',
        es: { def: 'Corriente de agua dulce que fluye de manera continua hacia el mar o un lago. Es fuente de vida para muchos ecosistemas.', syn: ['caudal', 'corriente', 'arroyo'], ant: ['desierto', 'sequía'] },
        en: { def: 'Freshwater stream that flows continuously towards the sea or a lake. It is a source of life for many ecosystems.', syn: ['stream', 'current', 'watercourse'], ant: ['desert', 'drought'] },
        eu: { def: 'Ur gezako korrontea, etengabe itsasora edo aintzirara isurtzen dena. Ekosistema askoren bizitzaren iturria da.', syn: ['ibaia', 'erreka', 'korrontea'], ant: ['basamortua', 'lehortea'] }
    },
    {
        word: 'LAGO', display: 'Lago', category: 'naturaleza', emoji: '🏔️',
        es: { def: 'Masa de agua rodeada completamente de tierra. Los lagos albergan ecosistemas únicos con peces, plantas y aves acuáticas.', syn: ['laguna', 'estanque', 'embalse'], ant: ['desierto', 'llanura'] },
        en: { def: 'Body of water completely surrounded by land. Lakes host unique ecosystems with fish, plants and water birds.', syn: ['lagoon', 'pond', 'reservoir'], ant: ['desert', 'plain'] },
        eu: { def: 'Lurrez erabat inguratutako ur masa. Lakuek ekosistema bereziak dituzte arrainekin, landareekin eta ur-hegaztiekin.', syn: ['aintzira', 'urtegia', 'putzu'], ant: ['basamortua', 'zelaia'] }
    },
    {
        word: 'MAR', display: 'Mar', category: 'naturaleza', emoji: '🌊',
        es: { def: 'Gran extensión de agua salada que cubre más del 70% de la superficie de la Tierra. Regula el clima del planeta.', syn: ['océano', 'piélago', 'alta mar'], ant: ['desierto', 'montaña'] },
        en: { def: 'Large expanse of salt water covering more than 70% of Earth\'s surface. It regulates the planet\'s climate.', syn: ['ocean', 'sea', 'deep'], ant: ['desert', 'mountain'] },
        eu: { def: 'Lurraren azaleraren %70 baino gehiago hartzen duen ur gazi hedadura handia. Planetaren klimaren erregulatzen laguntzen du.', syn: ['itsasoa', 'ozeano', 'urak'], ant: ['basamortua', 'mendia'] }
    },
    {
        word: 'SOL', display: 'Sol', category: 'naturaleza', emoji: '☀️',
        es: { def: 'La estrella del centro de nuestro sistema solar. Proporciona luz y calor a la Tierra y es esencial para toda vida.', syn: ['astro rey', 'estrella', 'astro solar'], ant: ['luna', 'noche'] },
        en: { def: 'The star at the centre of our solar system. It provides light and heat to Earth and is essential for all life.', syn: ['star', 'solar body', 'sun'], ant: ['moon', 'night'] },
        eu: { def: 'Gure eguzki-sistemaren erdiko izarra. Lurra argitu eta berotzen du eta bizitza guztiarentzat ezinbestekoa da.', syn: ['eguzkia', 'izarra', 'astro'], ant: ['ilargia', 'gaua'] }
    },
    {
        word: 'LUNA', display: 'Luna', category: 'naturaleza', emoji: '🌕',
        es: { def: 'El único satélite natural de la Tierra. Alumbra la noche con la luz que refleja del sol e influye en las mareas.', syn: ['satélite', 'astro nocturno', 'Selene'], ant: ['sol', 'día'] },
        en: { def: 'The only natural satellite of Earth. It lights up the night with reflected sunlight and influences the tides.', syn: ['satellite', 'moon', 'Selene'], ant: ['sun', 'day'] },
        eu: { def: 'Lurraren satelite natural bakarra. Gauean eguzkiaren islapenarekin argitzen du eta itsasaldetan eragiten du.', syn: ['ilargia', 'satelitea', 'Selene'], ant: ['eguzkia', 'eguna'] }
    },
    {
        word: 'NUBE', display: 'Nube', category: 'naturaleza', emoji: '☁️',
        es: { def: 'Conjunto de gotas de agua o cristales de hielo suspendidos en la atmósfera. Las nubes producen lluvia y nieve.', syn: ['nublado', 'cúmulo', 'nimbo'], ant: ['cielo despejado', 'sol'] },
        en: { def: 'Collection of water droplets or ice crystals suspended in the atmosphere. Clouds produce rain and snow.', syn: ['cloud', 'cumulus', 'nimbus'], ant: ['clear sky', 'sunshine'] },
        eu: { def: 'Atmosferan esekitako ur-tantak edo izotz-kristalez osatutako multzoa. Hodei batetik euria eta elurra eroritzen da.', syn: ['hodeia', 'kumulo', 'nimbo'], ant: ['zeru garbiak', 'eguzkia'] }
    },
    {
        word: 'LLUVIA', display: 'Lluvia', category: 'naturaleza', emoji: '🌧️',
        es: { def: 'Precipitación de gotas de agua que caen desde las nubes. Es fundamental para la vida vegetal y el suministro de agua dulce.', syn: ['precipitación', 'chubasco', 'aguacero'], ant: ['sequía', 'sol'] },
        en: { def: 'Precipitation of water droplets falling from clouds. It is fundamental to plant life and fresh water supply.', syn: ['precipitation', 'downpour', 'shower'], ant: ['drought', 'sun'] },
        eu: { def: 'Hodietatik ur-tantak erortzea. Landaretzarentzat eta ur geziaren hornidurarentzat ezinbestekoa da.', syn: ['euria', 'prezipitazioa', 'zaparrada'], ant: ['lehortea', 'eguzkia'] }
    },
    {
        word: 'VIENTO', display: 'Viento', category: 'naturaleza', emoji: '💨',
        es: { def: 'Movimiento de masas de aire en la atmósfera. Influye en el clima, transporta semillas y permite el vuelo de las aves.', syn: ['brisa', 'vendaval', 'corriente de aire'], ant: ['calma', 'quietud'] },
        en: { def: 'Movement of air masses in the atmosphere. It influences climate, transports seeds and enables birds to fly.', syn: ['breeze', 'gale', 'airflow'], ant: ['calm', 'stillness'] },
        eu: { def: 'Atmosferako aire masak mugimendu. Kliman eragiten du, haziak garraiatu eta txoriei hegan egiten laguntzen die.', syn: ['haizea', 'brisa', 'ekaitza'], ant: ['lasaitasuna', 'geldotasuna'] }
    },
    {
        word: 'BOSQUE', display: 'Bosque', category: 'naturaleza', emoji: '🌲',
        es: { def: 'Extensión de terreno densamente poblada de árboles y arbustos. Es el hogar de miles de especies animales y vegetales.', syn: ['selva', 'foresta', 'arboleda'], ant: ['desierto', 'llanura'] },
        en: { def: 'Area of land densely populated with trees and shrubs. It is home to thousands of animal and plant species.', syn: ['forest', 'woods', 'woodland'], ant: ['desert', 'plain'] },
        eu: { def: 'Zuhaitz eta zuhaixkaz betetako lur-eremua. Milaka animalia eta landare espezieen etxea da.', syn: ['basoa', 'oihana', 'zuhaitzadia'], ant: ['basamortua', 'zelaia'] }
    },
    {
        word: 'MONTANA', display: 'Montaña', category: 'naturaleza', emoji: '⛰️',
        es: { def: 'Gran elevación natural del terreno con cumbres que superan los 1000 metros. Tiene un clima más frío y su flora es única.', syn: ['monte', 'pico', 'sierra'], ant: ['valle', 'llanura'] },
        en: { def: 'Large natural elevation of land with summits exceeding 1000 metres. It has a colder climate and unique flora.', syn: ['mount', 'peak', 'highland'], ant: ['valley', 'plain'] },
        eu: { def: 'Lurraren gailur handiak 1000 metro gainditzen dituen erliebe naturala. Klima hotzagoa du eta flora bakarra du.', syn: ['mendia', 'tontorra', 'gailurra'], ant: ['harana', 'zelaia'] }
    },
    {
        word: 'DESIERTO', display: 'Desierto', category: 'naturaleza', emoji: '🏜️',
        es: { def: 'Región árida con muy escasas precipitaciones. Los desiertos pueden ser cálidos como el Sáhara o fríos como la Antártida.', syn: ['erial', 'yermo', 'árido'], ant: ['selva', 'bosque'] },
        en: { def: 'Arid region with very scarce rainfall. Deserts can be hot like the Sahara or cold like Antarctica.', syn: ['wasteland', 'arid land', 'badlands'], ant: ['rainforest', 'forest'] },
        eu: { def: 'Prezipitazio gutxiko eskualde lehorra. Basamortuak beroak izan daitezke Sahararen moduan edo hotzak Antartikoaren moduan.', syn: ['basamortua', 'eremu lehor', 'eremua'], ant: ['oihana', 'basoa'] }
    },
    {
        word: 'VOLCAN', display: 'Volcán', category: 'naturaleza', emoji: '🌋',
        es: { def: 'Abertura en la corteza terrestre por la que emergen lava, cenizas y gases del interior de la Tierra. Puede entrar en erupción.', syn: ['cráter', 'monte volcánico', 'erupción'], ant: ['llano', 'meseta'] },
        en: { def: 'Opening in Earth\'s crust through which lava, ash and gases emerge from inside the Earth. It can erupt.', syn: ['crater', 'volcanic mount', 'eruption'], ant: ['plain', 'plateau'] },
        eu: { def: 'Lurraren azaleko irekidura, Lurraren barrutik laba, errautsa eta gasak ateratzen direlarik. Eruptatu daiteke.', syn: ['sumentua', 'kalderea', 'kraterra'], ant: ['zelaia', 'goi-zelaia'] }
    },
    {
        word: 'PLAYA', display: 'Playa', category: 'naturaleza', emoji: '🏖️',
        es: { def: 'Franja de arena o grava junto al mar, lago o río. Es un lugar de recreo y también hábitat de muchas especies.', syn: ['costa', 'orilla', 'litoral'], ant: ['interior', 'montaña'] },
        en: { def: 'Strip of sand or gravel alongside the sea, lake or river. It is a place of recreation and habitat for many species.', syn: ['shore', 'coast', 'seaside'], ant: ['inland', 'mountain'] },
        eu: { def: 'Itsas, aintzira edo ibaiaren ondoko harea edo harrizko zerrenda. Aisialdirako lekua da eta espezie askoren habitata.', syn: ['hondartza', 'itsasbaztera', 'kostaldea'], ant: ['barnekaldea', 'mendia'] }
    },
    {
        word: 'SELVA', display: 'Selva', category: 'naturaleza', emoji: '🌴',
        es: { def: 'Bosque tropical muy denso con gran variedad de plantas y animales. Recibe lluvia abundante todo el año.', syn: ['jungla', 'floresta', 'bosque tropical'], ant: ['desierto', 'tundra'] },
        en: { def: 'Very dense tropical forest with great variety of plants and animals. It receives abundant rain all year round.', syn: ['jungle', 'rainforest', 'tropical forest'], ant: ['desert', 'tundra'] },
        eu: { def: 'Landare eta animalia askotariko baso tropikal trinkoa. Urte osoan euri ugari jasotzen du.', syn: ['oihana', 'jungla', 'baso tropikala'], ant: ['basamortua', 'tundra'] }
    },
    {
        word: 'GLACIAR', display: 'Glaciar', category: 'naturaleza', emoji: '🧊',
        es: { def: 'Gran masa de hielo que se forma durante siglos en zonas de alta montaña o en los polos. Almacena agua dulce.', syn: ['hielo polar', 'casquete glaciar', 'ventisquero'], ant: ['desierto cálido', 'trópico'] },
        en: { def: 'Large mass of ice formed over centuries in high mountain areas or at the poles. It stores fresh water.', syn: ['ice sheet', 'ice cap', 'snowpack'], ant: ['hot desert', 'tropics'] },
        eu: { def: 'Mendi garaietako eremuetan edo poloetan mendetan zehar sortutako izotz-masa handia. Ur gezi-biltegi da.', syn: ['glaziarra', 'izotz-masa', 'elurte'], ant: ['basamortu beroa', 'tropikoa'] }
    },
    {
        word: 'OCEANO', display: 'Océano', category: 'naturaleza', emoji: '🌊',
        es: { def: 'Las cinco grandes masas de agua salada que cubren la mayor parte de la Tierra: Pacífico, Atlántico, Índico, Ártico y Antártico.', syn: ['mar profundo', 'pelágico', 'abismo marino'], ant: ['continente', 'desierto'] },
        en: { def: 'The five large bodies of salt water covering most of Earth: Pacific, Atlantic, Indian, Arctic and Antarctic.', syn: ['deep sea', 'pelagic', 'marine abyss'], ant: ['continent', 'desert'] },
        eu: { def: 'Lurraren gehiena estaltzen duten bost ur gazi masa handiak: Pazifikoa, Atlantikoa, Indiakoa, Arktikoa eta Antartikoa.', syn: ['ozeano', 'itsaso sakona', 'ur abysmoa'], ant: ['kontinentea', 'basamortua'] }
    },
    {
        word: 'TORNADO', display: 'Tornado', category: 'naturaleza', emoji: '🌪️',
        es: { def: 'Torbellino de viento muy violento que gira en forma de embudo. Puede causar grandes destrucciones en segundos.', syn: ['torbellino', 'manga de viento', 'ciclón'], ant: ['calma', 'brisa'] },
        en: { def: 'Violent whirlwind of wind rotating in a funnel shape. It can cause great destruction in seconds.', syn: ['whirlwind', 'twister', 'cyclone'], ant: ['calm', 'breeze'] },
        eu: { def: 'Haize-zurrunbilo bortitza, embudo formako biratzen dena. Segundoetan kalte handiak eragin ditzake.', syn: ['bihurrikia', 'zurrunbiloa', 'ziklona'], ant: ['lasaitasuna', 'brisa'] }
    },
    {
        word: 'TERREMOTO', display: 'Terremoto', category: 'naturaleza', emoji: '💥',
        es: { def: 'Sacudida brusca y temporal de la corteza terrestre causada por el movimiento de las placas tectónicas.', syn: ['sismo', 'seísmo', 'temblor de tierra'], ant: ['calma', 'estabilidad'] },
        en: { def: 'Sudden and temporary shaking of Earth\'s crust caused by the movement of tectonic plates.', syn: ['seism', 'earthquake', 'tremor'], ant: ['calm', 'stability'] },
        eu: { def: 'Lur-plaken mugimenduak eragindako lur-azalaren ustekaberoko eta aldi baterako astindua.', syn: ['lurrikara', 'seismoa', 'lurrimara'], ant: ['lasaitasuna', 'egonkortasuna'] }
    },

    // ── ESCUELA (15) ──────────────────────────────────────────────────────────
    {
        word: 'LIBRO', display: 'Libro', category: 'escuela', emoji: '📚',
        es: { def: 'Conjunto de páginas encuadernadas que contienen textos, imágenes o ambos. Es la herramienta fundamental para aprender.', syn: ['obra', 'volumen', 'tomo'], ant: [] },
        en: { def: 'Set of bound pages containing texts, images or both. It is the fundamental tool for learning.', syn: ['volume', 'tome', 'work'], ant: [] },
        eu: { def: 'Testuak, irudiak edo biak dituzten orri-multzo ligatua. Ikasteko oinarrizko tresna da.', syn: ['liburua', 'bolumena', 'tomoa'], ant: [] }
    },
    {
        word: 'LAPIZ', display: 'Lápiz', category: 'escuela', emoji: '✏️',
        es: { def: 'Instrumento de escritura con una mina de grafito en su interior. Permite borrar lo escrito con una goma de borrar.', syn: ['grafito', 'mina', 'lápiz de color'], ant: ['bolígrafo', 'pluma'] },
        en: { def: 'Writing instrument with a graphite core inside. It allows what is written to be erased with a rubber eraser.', syn: ['graphite pencil', 'coloured pencil', 'crayon'], ant: ['pen', 'marker'] },
        eu: { def: 'Barruan grafito-mina duen idazteko tresna. Idatzia goma batekin ezabatzea onartzen du.', syn: ['arkatz', 'margoketa', 'grafito'], ant: ['boligrafo', 'pluma'] }
    },
    {
        word: 'PAPEL', display: 'Papel', category: 'escuela', emoji: '📄',
        es: { def: 'Lámina delgada fabricada con fibras vegetales sobre la que se puede escribir, dibujar e imprimir.', syn: ['folio', 'hoja', 'cartulina'], ant: ['pantalla', 'tableta'] },
        en: { def: 'Thin sheet made from plant fibres on which one can write, draw and print.', syn: ['sheet', 'folio', 'leaf'], ant: ['screen', 'tablet'] },
        eu: { def: 'Landare-zuntzez egindako orri mehea, idatzi, marraztu eta inprimatu daitekeena.', syn: ['papera', 'orria', 'kartulina'], ant: ['pantaila', 'tableta'] }
    },
    {
        word: 'PIZARRA', display: 'Pizarra', category: 'escuela', emoji: '🖊️',
        es: { def: 'Superficie oscura en la que se escribe con tiza o rotuladores. El maestro la usa para enseñar la clase.', syn: ['encerado', 'tablero', 'lousa'], ant: ['papel', 'libro'] },
        en: { def: 'Dark surface on which one writes with chalk or markers. The teacher uses it to teach the class.', syn: ['blackboard', 'chalkboard', 'whiteboard'], ant: ['paper', 'book'] },
        eu: { def: 'Karearekin edo boligrafo-errotulatzaileekin idazten den gainazal iluna. Irakasleak klase emateko erabiltzen du.', syn: ['arbela', 'taula', 'lousa'], ant: ['papera', 'liburua'] }
    },
    {
        word: 'REGLA', display: 'Regla', category: 'escuela', emoji: '📏',
        es: { def: 'Instrumento recto y alargado que sirve para medir longitudes y trazar líneas rectas con precisión.', syn: ['escuadra', 'metro', 'medidor'], ant: [] },
        en: { def: 'Straight and elongated instrument used to measure lengths and draw straight lines with precision.', syn: ['ruler', 'straightedge', 'scale'], ant: [] },
        eu: { def: 'Luzeerak neurtzeko eta lerro zuzenak zehaztasunez marrazteko erabiltzen den tresna zuzen eta luzea.', syn: ['erregeleta', 'neurria', 'eskuaira'], ant: [] }
    },
    {
        word: 'BORRADOR', display: 'Borrador', category: 'escuela', emoji: '🧹',
        es: { def: 'Objeto que sirve para eliminar lo escrito con lápiz o tiza. Ayuda a corregir errores sin dañar el papel.', syn: ['goma de borrar', 'borrón', 'goma'], ant: ['lápiz', 'tinta'] },
        en: { def: 'Object used to erase what has been written with pencil or chalk. It helps correct mistakes without damaging the paper.', syn: ['eraser', 'rubber', 'duster'], ant: ['pencil', 'ink'] },
        eu: { def: 'Arkatzekin edo karearekin idatzitakoa ezabatzeko erabiltzen den objektua. Akatsak zuzentzeko laguntza ematen du.', syn: ['goma', 'ezabagailua', 'arbeleko trapu'], ant: ['arkatz', 'tinta'] }
    },
    {
        word: 'MOCHILA', display: 'Mochila', category: 'escuela', emoji: '🎒',
        es: { def: 'Bolsa con tirantes para llevar a la espalda. Los estudiantes la usan para transportar libros, cuadernos y materiales.', syn: ['bolsa', 'maletín', 'zurrón'], ant: [] },
        en: { def: 'Bag with straps to carry on the back. Students use it to transport books, notebooks and materials.', syn: ['backpack', 'rucksack', 'satchel'], ant: [] },
        eu: { def: 'Bizkarrean eramateko tirante dituen poltsa. Ikasleek liburuak, koadernoak eta materialak garraiatzeko erabiltzen dute.', syn: ['bizkarreko poltsa', 'zorroa', 'motxila'], ant: [] }
    },
    {
        word: 'MAESTRO', display: 'Maestro', category: 'escuela', emoji: '👩‍🏫',
        es: { def: 'Persona que enseña y transmite conocimientos a los alumnos. Es un guía fundamental en el aprendizaje de los niños.', syn: ['profesor', 'docente', 'pedagogo'], ant: ['alumno', 'estudiante'] },
        en: { def: 'Person who teaches and transmits knowledge to students. It is a fundamental guide in children\'s learning.', syn: ['teacher', 'educator', 'instructor'], ant: ['student', 'pupil'] },
        eu: { def: 'Ikasleei ezagutzak irakasteko eta transmititzeko dena. Haurren ikaskuntzan oinarrizko gidaria da.', syn: ['irakaslea', 'hezitzailea', 'pedagogoa'], ant: ['ikaslea', 'ikasmutila'] }
    },
    {
        word: 'ALUMNO', display: 'Alumno', category: 'escuela', emoji: '🧑‍🎓',
        es: { def: 'Persona que aprende en una escuela o institución educativa bajo la guía de un maestro o profesor.', syn: ['estudiante', 'escolar', 'discípulo'], ant: ['maestro', 'profesor'] },
        en: { def: 'Person who learns in a school or educational institution under the guidance of a teacher.', syn: ['student', 'pupil', 'scholar'], ant: ['teacher', 'professor'] },
        eu: { def: 'Eskola edo hezkuntza-erakunde batean irakasle baten gidaritzapean ikasten duen pertsona.', syn: ['ikaslea', 'ikasmutila', 'eskolumea'], ant: ['irakaslea', 'maistrua'] }
    },
    {
        word: 'CIENCIA', display: 'Ciencia', category: 'escuela', emoji: '🔬',
        es: { def: 'Conjunto de conocimientos obtenidos mediante la observación y el razonamiento. Explica cómo funciona el universo.', syn: ['conocimiento', 'disciplina', 'saber'], ant: ['ignorancia', 'superstición'] },
        en: { def: 'Body of knowledge obtained through observation and reasoning. It explains how the universe works.', syn: ['knowledge', 'discipline', 'learning'], ant: ['ignorance', 'superstition'] },
        eu: { def: 'Behaketa eta arrazonamenduz lortutako ezagutza-multzoa. Unibertsoa nola funtzionatzen duen azaltzen du.', syn: ['ezagutza', 'diziplina', 'jakituria'], ant: ['ezjakintasuna', 'sineskeria'] }
    },
    {
        word: 'HISTORIA', display: 'Historia', category: 'escuela', emoji: '📜',
        es: { def: 'Disciplina que estudia el pasado de la humanidad a través de documentos, artefactos y testimonios del tiempo.', syn: ['crónica', 'pasado', 'relato histórico'], ant: ['futuro', 'ficción'] },
        en: { def: 'Discipline that studies humanity\'s past through documents, artefacts and testimonies from the time.', syn: ['chronicle', 'past', 'historical account'], ant: ['future', 'fiction'] },
        eu: { def: 'Dokumentuen, artefaktuen eta garaiaren testigantzen bidez gizateriaren iraganaz ikertzen duen diziplina.', syn: ['historia', 'kronika', 'iragana'], ant: ['etorkizuna', 'fikzioa'] }
    },
    {
        word: 'MATEMATICA', display: 'Matemática', category: 'escuela', emoji: '🔢',
        es: { def: 'Ciencia que estudia los números, las formas, las cantidades y sus relaciones. Es fundamental en la vida diaria y la tecnología.', syn: ['aritmética', 'álgebra', 'cálculo'], ant: [] },
        en: { def: 'Science that studies numbers, shapes, quantities and their relationships. It is fundamental in daily life and technology.', syn: ['arithmetic', 'algebra', 'calculus'], ant: [] },
        eu: { def: 'Zenbakiak, formak, kantitateak eta haien arteko harremanak ikasten dituen zientzia. Eguneroko bizitzan eta teknologian ezinbestekoa da.', syn: ['matematika', 'aritmetika', 'algebra'], ant: [] }
    },
    {
        word: 'PINTURA', display: 'Pintura', category: 'escuela', emoji: '🎨',
        es: { def: 'Arte de representar imágenes, ideas o sentimientos sobre una superficie mediante pigmentos y colores.', syn: ['arte', 'cuadro', 'pigmento'], ant: [] },
        en: { def: 'Art of representing images, ideas or feelings on a surface using pigments and colours.', syn: ['art', 'painting', 'pigment'], ant: [] },
        eu: { def: 'Pigmentu eta koloreen bidez azal baten gainean irudiak, ideiak edo sentipenak irudikatzeko artea.', syn: ['pintura', 'artea', 'pigmentua'], ant: [] }
    },
    {
        word: 'MUSICA', display: 'Música', category: 'escuela', emoji: '🎵',
        es: { def: 'Arte de combinar sonidos en el tiempo para crear melodías y ritmos. Tiene el poder de expresar emociones universales.', syn: ['melodía', 'armonía', 'ritmo'], ant: ['silencio', 'ruido'] },
        en: { def: 'Art of combining sounds in time to create melodies and rhythms. It has the power to express universal emotions.', syn: ['melody', 'harmony', 'rhythm'], ant: ['silence', 'noise'] },
        eu: { def: 'Melodiak eta erritmoak sortzeko soinuak denboran konbinatzen dituen artea. Emozioak adierazteko ahalmena du.', syn: ['musika', 'melodia', 'erritmoa'], ant: ['isiltasuna', 'zarata'] }
    },
    {
        word: 'RECREO', display: 'Recreo', category: 'escuela', emoji: '⚽',
        es: { def: 'Tiempo de descanso en la escuela en el que los alumnos juegan y se relacionan libremente entre sí.', syn: ['descanso', 'pausa', 'tiempo libre'], ant: ['clase', 'estudio'] },
        en: { def: 'Rest period at school during which students play and interact freely with each other.', syn: ['break', 'playtime', 'recess'], ant: ['class', 'study'] },
        eu: { def: 'Ikasleek libreki jolasteko eta harremanak izateko denbora-tartea eskolan.', syn: ['jolas-ordua', 'atsedena', 'pausoa'], ant: ['klasea', 'ikasketa'] }
    },

    // ── CUERPO (12) ───────────────────────────────────────────────────────────
    {
        word: 'CABEZA', display: 'Cabeza', category: 'cuerpo', emoji: '🗣️',
        es: { def: 'Parte superior del cuerpo donde se encuentran el cerebro, los ojos, la nariz, la boca y las orejas.', syn: ['cráneo', 'testa', 'cabezota'], ant: ['pie', 'talón'] },
        en: { def: 'Upper part of the body where the brain, eyes, nose, mouth and ears are located.', syn: ['skull', 'cranium', 'head'], ant: ['foot', 'heel'] },
        eu: { def: 'Burmuina, begiak, sudurra, ahoa eta belarriak dauden gorputzaren goialdeko zatia.', syn: ['burua', 'garezurra', 'kaskoa'], ant: ['oina', 'orpoa'] }
    },
    {
        word: 'MANO', display: 'Mano', category: 'cuerpo', emoji: '✋',
        es: { def: 'Parte del cuerpo al final del brazo, con cinco dedos. Nos permite agarrar, escribir, construir y comunicarnos.', syn: ['palma', 'extremidad', 'zarpa'], ant: ['pie', 'pata'] },
        en: { def: 'Part of the body at the end of the arm, with five fingers. It allows us to grasp, write, build and communicate.', syn: ['palm', 'extremity', 'fist'], ant: ['foot', 'paw'] },
        eu: { def: 'Beso-muturrekoan bost behatz dituen gorputzaren atala. Heldu, idatzi, eraiki eta komunikatzeko aukera ematen digu.', syn: ['eskua', 'ahurra', 'esku-ahurra'], ant: ['oina', 'hanka'] }
    },
    {
        word: 'PIE', display: 'Pie', category: 'cuerpo', emoji: '🦶',
        es: { def: 'Parte inferior de la pierna sobre la que apoya el cuerpo al caminar. Tiene cinco dedos y nos ayuda a mantener el equilibrio.', syn: ['pata', 'extremidad', 'planta del pie'], ant: ['mano', 'cabeza'] },
        en: { def: 'Lower part of the leg on which the body rests when walking. It has five toes and helps us keep balance.', syn: ['paw', 'extremity', 'sole'], ant: ['hand', 'head'] },
        eu: { def: 'Ibiltzean gorputza bertan eusten den hankaren behealdea. Bost behatz ditu eta orekan laguntzen digu.', syn: ['oina', 'hanka-azpikoa', 'hankaburu'], ant: ['eskua', 'burua'] }
    },
    {
        word: 'OJO', display: 'Ojo', category: 'cuerpo', emoji: '👁️',
        es: { def: 'Órgano de la visión que capta la luz y la convierte en imágenes que el cerebro interpreta. Nos permite ver el mundo.', syn: ['globo ocular', 'pupila', 'vista'], ant: [] },
        en: { def: 'Vision organ that captures light and converts it into images that the brain interprets. It allows us to see the world.', syn: ['eyeball', 'pupil', 'sight'], ant: [] },
        eu: { def: 'Argia harrapatzen duen eta burmuinak interpretatzen dituen irudietan bihurtzen duen ikusmen-organoa.', syn: ['begia', 'pupila', 'ikusmena'], ant: [] }
    },
    {
        word: 'NARIZ', display: 'Nariz', category: 'cuerpo', emoji: '👃',
        es: { def: 'Órgano del olfato situado en el centro de la cara. Filtra el aire que respiramos y nos permite detectar olores.', syn: ['hocico', 'morro', 'trompa'], ant: [] },
        en: { def: 'Organ of smell located in the centre of the face. It filters the air we breathe and allows us to detect smells.', syn: ['snout', 'muzzle', 'nostril'], ant: [] },
        eu: { def: 'Aurpegiaren erdian dagoen usaimenaren organoa. Arnastutako airea iragazteko eta usainak hautemateko balio du.', syn: ['sudurra', 'senagiria', 'sudur-irekia'], ant: [] }
    },
    {
        word: 'BOCA', display: 'Boca', category: 'cuerpo', emoji: '👄',
        es: { def: 'Abertura de la cara con dientes, labios y lengua. Sirve para hablar, comer, respirar y expresar emociones.', syn: ['labios', 'jeta', 'morro'], ant: [] },
        en: { def: 'Opening in the face with teeth, lips and tongue. Used for speaking, eating, breathing and expressing emotions.', syn: ['lips', 'oral cavity', 'mouth'], ant: [] },
        eu: { def: 'Hortzak, ezpainak eta mihia dituen aurpegiaren irekidura. Hitz egiteko, jateko, arnasteko eta emozioak adierazteko balio du.', syn: ['ahoa', 'ezpainak', 'mihia'], ant: [] }
    },
    {
        word: 'OREJA', display: 'Oreja', category: 'cuerpo', emoji: '👂',
        es: { def: 'Órgano externo del oído situado a los lados de la cabeza. Capta las vibraciones del aire que percibimos como sonido.', syn: ['oído', 'pabellón auditivo', 'orejón'], ant: [] },
        en: { def: 'External hearing organ located on the sides of the head. It captures air vibrations that we perceive as sound.', syn: ['ear', 'auricle', 'hearing organ'], ant: [] },
        eu: { def: 'Buruaren alboetan dagoen entzumenaren kanpoko organoa. Soinu gisa hautematen ditugun airearen bibrazioak harrapatzen ditu.', syn: ['belarria', 'entzumen-organoa', 'aurikula'], ant: [] }
    },
    {
        word: 'CORAZON', display: 'Corazón', category: 'cuerpo', emoji: '❤️',
        es: { def: 'Órgano muscular que bombea la sangre por todo el cuerpo. Late unas 100.000 veces al día y es el centro del sistema circulatorio.', syn: ['miocardio', 'músculo cardíaco', 'víscera'], ant: [] },
        en: { def: 'Muscular organ that pumps blood throughout the body. It beats about 100,000 times a day and is the centre of the circulatory system.', syn: ['myocardium', 'cardiac muscle', 'heart'], ant: [] },
        eu: { def: 'Odola gorputz osoan zehar ponpatzen duen muskulu-organoa. Egunean 100.000 aldiz taupadaka aritzen da.', syn: ['bihotza', 'miokardioa', 'muskulua'], ant: [] }
    },
    {
        word: 'CEREBRO', display: 'Cerebro', category: 'cuerpo', emoji: '🧠',
        es: { def: 'Órgano principal del sistema nervioso, situado en la cabeza. Controla todos los procesos del cuerpo y el pensamiento.', syn: ['encéfalo', 'masa gris', 'centro nervioso'], ant: [] },
        en: { def: 'Main organ of the nervous system, located in the head. It controls all body processes and thought.', syn: ['encephalon', 'grey matter', 'nerve centre'], ant: [] },
        eu: { def: 'Sistema nerbiozioaren organo nagusia, buruan kokatua. Gorputzeko prozesu guztiak eta pentsamendua kontrolatzen ditu.', syn: ['garunak', 'enzefaloa', 'grisa'], ant: [] }
    },
    {
        word: 'HUESO', display: 'Hueso', category: 'cuerpo', emoji: '🦴',
        es: { def: 'Pieza rígida del esqueleto que da forma y soporte al cuerpo. El cuerpo humano tiene 206 huesos en total.', syn: ['esqueleto', 'osamenta', 'osatura'], ant: ['músculo', 'tejido blando'] },
        en: { def: 'Rigid piece of the skeleton that gives shape and support to the body. The human body has 206 bones in total.', syn: ['bone', 'skeleton', 'ossature'], ant: ['muscle', 'soft tissue'] },
        eu: { def: 'Gorputzari forma eta euskarria ematen dion hezurduraren pieza gogorra. Giza gorputzak 206 hezur ditu guztira.', syn: ['hezurra', 'hezurdura', 'eskeletoa'], ant: ['muskulu', 'ehun biguna'] }
    },
    {
        word: 'MUSCULO', display: 'Músculo', category: 'cuerpo', emoji: '💪',
        es: { def: 'Tejido del cuerpo capaz de contraerse y relajarse para producir movimiento. El cuerpo humano tiene más de 600 músculos.', syn: ['fibra muscular', 'tendón', 'tejido muscular'], ant: ['hueso', 'cartílago'] },
        en: { def: 'Body tissue capable of contracting and relaxing to produce movement. The human body has more than 600 muscles.', syn: ['muscle fibre', 'tendon', 'muscular tissue'], ant: ['bone', 'cartilage'] },
        eu: { def: 'Mugimendua eragiteko uzkurtu eta erlaxatu daitekeen gorputzeko ehuna. Giza gorputzak 600 muskulu baino gehiago ditu.', syn: ['muskulu', 'fibra muskular', 'tendoia'], ant: ['hezurra', 'kartilago'] }
    },
    {
        word: 'PULMON', display: 'Pulmón', category: 'cuerpo', emoji: '🫁',
        es: { def: 'Órgano del aparato respiratorio que permite intercambiar oxígeno y dióxido de carbono con el aire. Tenemos dos pulmones.', syn: ['órgano respiratorio', 'víscera', 'pulmones'], ant: [] },
        en: { def: 'Organ of the respiratory system that allows the exchange of oxygen and carbon dioxide with the air. We have two lungs.', syn: ['respiratory organ', 'lung', 'pulmonary tissue'], ant: [] },
        eu: { def: 'Airarekin oxigenoa eta karbono dioxidoa trukatzeko aukera ematen duen arnas-sistemaren organoa. Bi birika ditugu.', syn: ['birika', 'arnas-organoa', 'biriken ehuna'], ant: [] }
    },

    // ── COMIDA (15) ───────────────────────────────────────────────────────────
    {
        word: 'MANZANA', display: 'Manzana', category: 'comida', emoji: '🍎',
        es: { def: 'Fruta redonda y jugosa de la que existen variedades rojas, verdes y amarillas. Rica en vitaminas y fibra.', syn: ['mela', 'poma', 'fruta'], ant: [] },
        en: { def: 'Round, juicy fruit available in red, green and yellow varieties. Rich in vitamins and fibre.', syn: ['pippin', 'cox', 'fruit'], ant: [] },
        eu: { def: 'Barietate gorriak, berdeak eta horiak dituen fruta biribil eta zukutsua. Bitamina eta zuntzetan aberatsa da.', syn: ['sagarra', 'fruta', 'pippin'], ant: [] }
    },
    {
        word: 'FRESA', display: 'Fresa', category: 'comida', emoji: '🍓',
        es: { def: 'Fruta pequeña, roja y dulce con semillas en la superficie. Es muy apreciada por su sabor y su aroma característico.', syn: ['fresón', 'frutilla', 'fruta roja'], ant: [] },
        en: { def: 'Small, red and sweet fruit with seeds on the surface. It is highly appreciated for its flavour and characteristic aroma.', syn: ['strawberry', 'berry', 'red fruit'], ant: [] },
        eu: { def: 'Azalean haziak dituen fruta gorri, txiki eta gozoa. Bere zapore eta usainagatik baloratua da.', syn: ['marrubi', 'fruta txikia', 'baia'], ant: [] }
    },
    {
        word: 'PAN', display: 'Pan', category: 'comida', emoji: '🍞',
        es: { def: 'Alimento básico elaborado con harina, agua, sal y levadura que se hornea. Es uno de los alimentos más consumidos en el mundo.', syn: ['hogaza', 'barra', 'bollo'], ant: [] },
        en: { def: 'Basic food made from flour, water, salt and yeast that is baked. It is one of the most consumed foods in the world.', syn: ['loaf', 'bun', 'roll'], ant: [] },
        eu: { def: 'Irina, ura, gatza eta legamia erabiliz egositako oinarrizko janaria. Munduan gehien kontsumitzen diren janarietako bat da.', syn: ['ogia', 'barra', 'opila'], ant: [] }
    },
    {
        word: 'LECHE', display: 'Leche', category: 'comida', emoji: '🥛',
        es: { def: 'Líquido blanco producido por las glándulas mamarias de los mamíferos. Es muy nutritiva por su contenido en calcio y proteínas.', syn: ['lácteo', 'suero', 'nata'], ant: [] },
        en: { def: 'White liquid produced by the mammary glands of mammals. Very nutritious due to its calcium and protein content.', syn: ['dairy', 'whey', 'cream'], ant: [] },
        eu: { def: 'Ugaztunen ugaila-guruinek ekoizten duten likido zuria. Kaltzioa eta proteinen edukiagatik oso nutrizio handia du.', syn: ['esnea', 'lakteo', 'serum'], ant: [] }
    },
    {
        word: 'AGUA', display: 'Agua', category: 'comida', emoji: '💧',
        es: { def: 'Sustancia esencial para la vida, incolora e insípida. El cuerpo humano está compuesto en un 60% de agua.', syn: ['líquido', 'H₂O', 'fluido'], ant: ['fuego', 'sequía'] },
        en: { def: 'Essential substance for life, colourless and tasteless. The human body is composed of 60% water.', syn: ['liquid', 'H₂O', 'fluid'], ant: ['fire', 'drought'] },
        eu: { def: 'Bizitzarako ezinbesteko substantzia, koloregabea eta zaporegabea. Giza gorputza %60 ur da.', syn: ['ura', 'likidoa', 'H₂O'], ant: ['sua', 'lehortea'] }
    },
    {
        word: 'ARROZ', display: 'Arroz', category: 'comida', emoji: '🍚',
        es: { def: 'Cereal ampliamente cultivado y consumido en todo el mundo. Es el alimento base de gran parte de la población asiática.', syn: ['grano', 'cereal', 'gramínea'], ant: [] },
        en: { def: 'Widely cultivated and consumed cereal worldwide. It is the staple food of a large part of the Asian population.', syn: ['grain', 'cereal', 'staple'], ant: [] },
        eu: { def: 'Munduan zehar asko landatzen eta kontsumitzen den zerealea. Asiako biztanleria askoren oinarrizko janaria da.', syn: ['arroza', 'zerealea', 'alea'], ant: [] }
    },
    {
        word: 'PASTA', display: 'Pasta', category: 'comida', emoji: '🍝',
        es: { def: 'Alimento elaborado con harina de trigo y agua, en formas variadas como espaguetis, macarrones o fideos. Es muy energético.', syn: ['espagueti', 'macarrón', 'fideos'], ant: [] },
        en: { def: 'Food made from wheat flour and water, in varied shapes like spaghetti, macaroni or noodles. Very energising.', syn: ['spaghetti', 'macaroni', 'noodles'], ant: [] },
        eu: { def: 'Gari-irina eta urarekin egindako janaria, hainbat formatan: espageti, makaro edo fideoetan. Energetikoa da.', syn: ['pasta', 'espageti', 'makaro'], ant: [] }
    },
    {
        word: 'TOMATE', display: 'Tomate', category: 'comida', emoji: '🍅',
        es: { def: 'Fruto rojo y jugoso que se usa tanto en ensaladas como en salsas. Rico en vitamina C y licopeno, un poderoso antioxidante.', syn: ['jitomate', 'tomate cherry', 'fruta'], ant: [] },
        en: { def: 'Red and juicy fruit used in salads and sauces alike. Rich in vitamin C and lycopene, a powerful antioxidant.', syn: ['cherry tomato', 'beefsteak', 'fruit'], ant: [] },
        eu: { def: 'Entzaladan zein saltsan erabiltzen den fruta gorri eta zukutsua. C bitaminan eta likopeno antioxidante bortitzean aberatsa da.', syn: ['tomatea', 'fruta', 'tomate txiki'], ant: [] }
    },
    {
        word: 'ZANAHORIA', display: 'Zanahoria', category: 'comida', emoji: '🥕',
        es: { def: 'Raíz comestible de color naranja, muy rica en betacaroteno que el cuerpo convierte en vitamina A. Beneficiosa para la vista.', syn: ['raíz', 'vegetal', 'hortaliza'], ant: [] },
        en: { def: 'Orange edible root, rich in beta-carotene which the body converts to vitamin A. Beneficial for eyesight.', syn: ['root vegetable', 'carrot', 'veggie'], ant: [] },
        eu: { def: 'Gorputzak A bitaminan bihurtzen duen betakarotenoan aberatsa den sustraia. Ikusmenarentzat onuragarria da.', syn: ['azenarioa', 'sustraia', 'barazkia'], ant: [] }
    },
    {
        word: 'PLATANO', display: 'Plátano', category: 'comida', emoji: '🍌',
        es: { def: 'Fruta tropical de forma curva, amarilla cuando está madura. Aporta potasio y energía rápida al organismo.', syn: ['banana', 'guineo', 'fruta tropical'], ant: [] },
        en: { def: 'Tropical fruit with a curved shape, yellow when ripe. It provides potassium and quick energy to the body.', syn: ['banana', 'plantain', 'tropical fruit'], ant: [] },
        eu: { def: 'Forma okerdura duen fruta tropikala, heldua denean horia. Potasioa eta energia azkarra eskaintzen dio gorputzari.', syn: ['platanoa', 'banana', 'fruta tropikala'], ant: [] }
    },
    {
        word: 'QUESO', display: 'Queso', category: 'comida', emoji: '🧀',
        es: { def: 'Alimento sólido elaborado a partir de la leche coagulada. Existen cientos de variedades con distintos sabores y texturas.', syn: ['lácteo', 'quesillo', 'fromage'], ant: [] },
        en: { def: 'Solid food made from coagulated milk. There are hundreds of varieties with different flavours and textures.', syn: ['dairy', 'cheddar', 'fromage'], ant: [] },
        eu: { def: 'Koagulatutako esnea erabiliz egindako janari solido. Ehunka barietate daude zapore eta ehundura ezberdinekin.', syn: ['gazta', 'lakteo', 'fromage'], ant: [] }
    },
    {
        word: 'HUEVO', display: 'Huevo', category: 'comida', emoji: '🥚',
        es: { def: 'Célula reproductora de las aves, envuelta en una cáscara dura. Es un alimento muy completo con proteínas y nutrientes esenciales.', syn: ['óvulo', 'huevo de gallina', 'huevo duro'], ant: [] },
        en: { def: 'Reproductive cell of birds, encased in a hard shell. It is a very complete food with essential proteins and nutrients.', syn: ['ovum', 'hen egg', 'hard-boiled egg'], ant: [] },
        eu: { def: 'Oskolak estali duen hegaztiaren ugalketa-zelula. Proteinetan eta nutrizio ezinbestekoetan aberatsa den janari osoa da.', syn: ['arrautza', 'oilolo-arrautza', 'oiloa'], ant: [] }
    },
    {
        word: 'POLLO', display: 'Pollo', category: 'comida', emoji: '🍗',
        es: { def: 'Carne de gallina o gallo joven, la más consumida en el mundo. Baja en grasas y rica en proteínas de alta calidad.', syn: ['ave', 'carne blanca', 'gallina'], ant: [] },
        en: { def: 'Meat from young hen or cock, the most consumed in the world. Low in fat and rich in high-quality protein.', syn: ['fowl', 'white meat', 'hen'], ant: [] },
        eu: { def: 'Oilo edo oilasko gaztearen haragia, munduan gehien kontsumitzen dena. Koipe gutxi eta proteina kalitate altukoak ditu.', syn: ['oilaskoa', 'haragi zuria', 'hegaztia'], ant: [] }
    },
    {
        word: 'PESCADO', display: 'Pescado', category: 'comida', emoji: '🐟',
        es: { def: 'Alimento procedente de peces que habitan en el mar o en ríos. Rico en proteínas, omega-3 y minerales esenciales.', syn: ['marisco', 'pieza', 'pez'], ant: [] },
        en: { def: 'Food from fish living in the sea or rivers. Rich in protein, omega-3 and essential minerals.', syn: ['seafood', 'fish', 'catch'], ant: [] },
        eu: { def: 'Itsasoan edo ibaian bizi diren arrainetatik datorren janaria. Proteinetan, omega-3an eta mineral ezinbestekoetan aberatsa da.', syn: ['arraina', 'itsaskia', 'arrainkia'], ant: [] }
    },
    {
        word: 'CHOCOLATE', display: 'Chocolate', category: 'comida', emoji: '🍫',
        es: { def: 'Alimento elaborado con cacao, azúcar y leche. El chocolate negro tiene propiedades antioxidantes y beneficia al estado de ánimo.', syn: ['cacao', 'tableta', 'bombón'], ant: [] },
        en: { def: 'Food made from cocoa, sugar and milk. Dark chocolate has antioxidant properties and benefits mood.', syn: ['cocoa', 'bar', 'bonbon'], ant: [] },
        eu: { def: 'Kakaoa, azukrea eta esnea erabiliz egindako janaria. Txokolate beltzak antioxidante propietateak ditu eta aldartea hobetzen du.', syn: ['txokolatea', 'kakaoa', 'bonboia'], ant: [] }
    },

    // ── CIENCIA (10) ──────────────────────────────────────────────────────────
    {
        word: 'ATOMO', display: 'Átomo', category: 'ciencia', emoji: '⚛️',
        es: { def: 'La partícula más pequeña de un elemento químico que conserva sus propiedades. Todo lo que existe está formado por átomos.', syn: ['partícula', 'elemento', 'molécula'], ant: ['universo', 'galaxia'] },
        en: { def: 'The smallest particle of a chemical element that retains its properties. Everything that exists is made of atoms.', syn: ['particle', 'element', 'molecule'], ant: ['universe', 'galaxy'] },
        eu: { def: 'Bere propietateak mantentzen dituen elementu kimikoaren partikula txikiena. Existitzen den guztia atomoez osatuta dago.', syn: ['atomo', 'partikulak', 'molekula'], ant: ['unibertsoa', 'galaxia'] }
    },
    {
        word: 'PLANETA', display: 'Planeta', category: 'ciencia', emoji: '🪐',
        es: { def: 'Cuerpo celeste que orbita alrededor de una estrella. En nuestro sistema solar hay 8 planetas, incluyendo la Tierra.', syn: ['astro', 'cuerpo celeste', 'orbe'], ant: ['estrella', 'cometa'] },
        en: { def: 'Celestial body that orbits around a star. In our solar system there are 8 planets, including Earth.', syn: ['celestial body', 'orb', 'world'], ant: ['star', 'comet'] },
        eu: { def: 'Izar baten inguruan biraka dabilen gorputz zelestea. Gure eguzki-sisteman 8 planeta daude, Lurra barne.', syn: ['planeta', 'gorputz zelestea', 'izarren orbita'], ant: ['izarra', 'kometea'] }
    },
    {
        word: 'CELULA', display: 'Célula', category: 'ciencia', emoji: '🔬',
        es: { def: 'La unidad básica de la vida. Todos los seres vivos están formados por células. El cuerpo humano tiene 37 billones de células.', syn: ['organismo', 'unidad biológica', 'citoplasma'], ant: [] },
        en: { def: 'The basic unit of life. All living beings are made up of cells. The human body has 37 trillion cells.', syn: ['organism', 'biological unit', 'cytoplasm'], ant: [] },
        eu: { def: 'Bizitzaren oinarrizko unitatea. Izaki bizidun guztiak zelulez osatuta daude. Giza gorputzak 37 bilioi zelula ditu.', syn: ['zelula', 'unitate biologikoa', 'zitoplasmoa'], ant: [] }
    },
    {
        word: 'ENERGIA', display: 'Energía', category: 'ciencia', emoji: '⚡',
        es: { def: 'Capacidad de un sistema para realizar trabajo o producir cambios. Puede ser solar, eléctrica, térmica, cinética o química.', syn: ['fuerza', 'potencia', 'vigor'], ant: ['quietud', 'inercia'] },
        en: { def: 'Capacity of a system to do work or produce changes. It can be solar, electrical, thermal, kinetic or chemical.', syn: ['force', 'power', 'vigour'], ant: ['stillness', 'inertia'] },
        eu: { def: 'Sistema baten lana egiteko edo aldaketak eragiteko ahalmena. Eguzkiarra, elektrikoa, termikoa, zinetikoa edo kimikoa izan daiteke.', syn: ['energia', 'indarra', 'potentzia'], ant: ['gelditasuna', 'inertziak'] }
    },
    {
        word: 'GRAVEDAD', display: 'Gravedad', category: 'ciencia', emoji: '🍎',
        es: { def: 'Fuerza de atracción que ejerce la Tierra sobre todos los objetos. Mantiene los planetas en sus órbitas y nos mantiene en el suelo.', syn: ['gravitación', 'atracción', 'peso'], ant: ['levitación', 'ingravidez'] },
        en: { def: 'Force of attraction exerted by Earth on all objects. It keeps planets in their orbits and keeps us on the ground.', syn: ['gravitation', 'attraction', 'weight'], ant: ['levitation', 'weightlessness'] },
        eu: { def: 'Lurrak objektu guztiengan erabiltzen duen erakarpen-indar. Planetak orbitan mantendu eta lurrera lotzen gaitu.', syn: ['grabitazioa', 'erakarpena', 'pisua'], ant: ['lebitazioa', 'pisugabetasuna'] }
    },
    {
        word: 'OXIGENO', display: 'Oxígeno', category: 'ciencia', emoji: '💨',
        es: { def: 'Gas incoloro e inodoro indispensable para la respiración de los seres vivos. Constituye el 21% del aire que respiramos.', syn: ['gas', 'elemento', 'O₂'], ant: ['dióxido de carbono', 'nitrógeno'] },
        en: { def: 'Colourless and odourless gas essential for the breathing of living beings. It constitutes 21% of the air we breathe.', syn: ['gas', 'element', 'O₂'], ant: ['carbon dioxide', 'nitrogen'] },
        eu: { def: 'Izaki biziduneen arnasketarako ezinbesteko gas koloregabe eta usaingabea. Arnasten dugun airearen %21 da.', syn: ['oxigenoa', 'gasak', 'elementua'], ant: ['karbono dioxidoa', 'nitrogenoa'] }
    },
    {
        word: 'NITROGENO', display: 'Nitrógeno', category: 'ciencia', emoji: '🫧',
        es: { def: 'Gas que forma el 78% de la atmósfera terrestre. Es esencial para la formación de proteínas en los seres vivos.', syn: ['gas', 'elemento', 'N₂'], ant: ['oxígeno', 'hidrógeno'] },
        en: { def: 'Gas forming 78% of Earth\'s atmosphere. It is essential for the formation of proteins in living beings.', syn: ['gas', 'element', 'N₂'], ant: ['oxygen', 'hydrogen'] },
        eu: { def: 'Lurraereko atmosferaren %78 osatzen duen gasa. Izaki bizidunetan proteinak eratzeko ezinbestekoa da.', syn: ['nitrogenoa', 'gasa', 'elementua'], ant: ['oxigenoa', 'hidrogenoa'] }
    },
    {
        word: 'ELECTRICIDAD', display: 'Electricidad', category: 'ciencia', emoji: '🔌',
        es: { def: 'Flujo de electrones a través de un conductor. Hace funcionar todos los aparatos eléctricos y es fundamental en la vida moderna.', syn: ['corriente eléctrica', 'voltaje', 'energía eléctrica'], ant: ['oscuridad', 'apagón'] },
        en: { def: 'Flow of electrons through a conductor. It powers all electrical devices and is fundamental to modern life.', syn: ['electric current', 'voltage', 'electric power'], ant: ['darkness', 'power cut'] },
        eu: { def: 'Elektronen fluxua eroale baten bidez. Gailu elektriko guztiak martxan jartzen ditu eta bizitza modernoan ezinbestekoa da.', syn: ['elektrizitatea', 'korronte elektrikoa', 'tentsioa'], ant: ['iluntasuna', 'itzalketa'] }
    },
    {
        word: 'MAGNETISMO', display: 'Magnetismo', category: 'ciencia', emoji: '🧲',
        es: { def: 'Propiedad de ciertos materiales para atraer o repeler otros materiales metálicos. Los imanes son el ejemplo más conocido.', syn: ['magnetización', 'polo magnético', 'atracción'], ant: ['repulsión', 'indiferencia'] },
        en: { def: 'Property of certain materials to attract or repel other metallic materials. Magnets are the most well-known example.', syn: ['magnetisation', 'magnetic pole', 'attraction'], ant: ['repulsion', 'indifference'] },
        eu: { def: 'Zenbait materialek beste material metalikoak erakartzeko edo alderatzeko duten propietatea. Imaneak adibiderik ezagunena dira.', syn: ['magnetismoa', 'polo magnetikoa', 'erakarpena'], ant: ['aldarapena', 'indiferentzia'] }
    },
    {
        word: 'EVOLUCION', display: 'Evolución', category: 'ciencia', emoji: '🦕',
        es: { def: 'Proceso gradual por el que los seres vivos cambian a lo largo de generaciones para adaptarse mejor al ambiente.', syn: ['adaptación', 'selección natural', 'cambio biológico'], ant: ['estasis', 'extinción'] },
        en: { def: 'Gradual process by which living beings change over generations to better adapt to their environment.', syn: ['adaptation', 'natural selection', 'biological change'], ant: ['stasis', 'extinction'] },
        eu: { def: 'Izaki bizidun belaunaldiz belaunaldi aldatzen diren prozesu gradual bat, ingurumenera hobeto egokitzeko.', syn: ['eboluzioa', 'egokitzapena', 'hautapen naturala'], ant: ['estasia', 'extinzioa'] }
    },

    // ── VOCABULARIO (13) ──────────────────────────────────────────────────────
    {
        word: 'VALIENTE', display: 'Valiente', category: 'vocabulario', emoji: '🦁',
        es: { def: 'Persona que actúa con valentía y determinación aunque sienta miedo. El verdadero valor es seguir adelante pese al peligro.', syn: ['audaz', 'bravo', 'intrépido'], ant: ['cobarde', 'temeroso'] },
        en: { def: 'Person who acts with courage and determination even when feeling fear. True bravery is moving forward despite danger.', syn: ['bold', 'brave', 'intrepid'], ant: ['coward', 'fearful'] },
        eu: { def: 'Beldurrarekin ere ausardiaz eta determinazioz jarduten duen pertsona. Benetako balioa arriskuaren aurrean aurrera egitea da.', syn: ['ausarta', 'kementsu', 'boldrea'], ant: ['koldar', 'beldurtia'] }
    },
    {
        word: 'GENEROSO', display: 'Generoso', category: 'vocabulario', emoji: '🎁',
        es: { def: 'Persona que comparte con los demás sin esperar nada a cambio. La generosidad es una de las virtudes más valoradas en la sociedad.', syn: ['dadivoso', 'espléndido', 'altruista'], ant: ['egoísta', 'avaro'] },
        en: { def: 'Person who shares with others without expecting anything in return. Generosity is one of the most valued virtues in society.', syn: ['giving', 'magnanimous', 'altruistic'], ant: ['selfish', 'greedy'] },
        eu: { def: 'Trukean ezer espero gabe besteekin partekatzen duen pertsona. Eskuzabaltasuna gizarteko birtuterik baloratuenetarikoa da.', syn: ['eskuzabala', 'emankorra', 'altruista'], ant: ['berekoi', 'xuhur'] }
    },
    {
        word: 'HONESTO', display: 'Honesto', category: 'vocabulario', emoji: '🤝',
        es: { def: 'Persona que actúa con sinceridad, transparencia y sin engaños. La honestidad es la base de la confianza en las relaciones.', syn: ['sincero', 'íntegro', 'transparente'], ant: ['mentiroso', 'deshonesto'] },
        en: { def: 'Person who acts with sincerity, transparency and without deception. Honesty is the foundation of trust in relationships.', syn: ['sincere', 'upright', 'transparent'], ant: ['dishonest', 'deceitful'] },
        eu: { def: 'Zintzotasunez, gardentasunez eta engainurik gabe jarduten duen pertsona. Zintzotasuna harremanen konfiantzaren oinarria da.', syn: ['zintzoa', 'osoa', 'garden'], ant: ['gezurti', 'desohore'] }
    },
    {
        word: 'CURIOSO', display: 'Curioso', category: 'vocabulario', emoji: '🔍',
        es: { def: 'Persona que tiene deseo de saber y aprender cosas nuevas. La curiosidad es el motor del conocimiento y del descubrimiento.', syn: ['inquieto', 'investigador', 'inquisidor'], ant: ['apático', 'indiferente'] },
        en: { def: 'Person with a desire to know and learn new things. Curiosity is the engine of knowledge and discovery.', syn: ['inquisitive', 'investigative', 'eager'], ant: ['apathetic', 'indifferent'] },
        eu: { def: 'Gauza berriak jakiteko eta ikasteko gogoa duen pertsona. Jakin-mina ezagutzaren eta aurkikuntzaren motorra da.', syn: ['inkietua', 'ikerlari', 'inquisitibo'], ant: ['apatiko', 'axolagabe'] }
    },
    {
        word: 'CREATIVO', display: 'Creativo', category: 'vocabulario', emoji: '🎨',
        es: { def: 'Persona con capacidad de imaginar y crear cosas nuevas u originales. La creatividad permite resolver problemas de formas innovadoras.', syn: ['imaginativo', 'innovador', 'original'], ant: ['aburrido', 'rutinario'] },
        en: { def: 'Person with the ability to imagine and create new or original things. Creativity allows solving problems in innovative ways.', syn: ['imaginative', 'innovative', 'original'], ant: ['boring', 'routine'] },
        eu: { def: 'Gauza berriak edo originalak imajinatzeko eta sortzeko gaitasuna duen pertsona. Sormena arazoei modu berritzailean aurre egiteko aukera ematen du.', syn: ['sortzaile', 'irudimentsua', 'berrikuntza'], ant: ['aspergarria', 'errutinario'] }
    },
    {
        word: 'PACIENTE', display: 'Paciente', category: 'vocabulario', emoji: '⏰',
        es: { def: 'Persona que sabe esperar con calma y tolerancia sin perder la serenidad. La paciencia es la virtud de los que obtienen grandes logros.', syn: ['tranquilo', 'tolerante', 'sereno'], ant: ['impaciente', 'nervioso'] },
        en: { def: 'Person who knows how to wait calmly and tolerantly without losing serenity. Patience is the virtue of those who achieve great things.', syn: ['calm', 'tolerant', 'serene'], ant: ['impatient', 'nervous'] },
        eu: { def: 'Lasaitasuna eta pazientzia galdugabe itxaroten dakien pertsona. Pazientzia lorpen handiak lortzen dituztenen bertutea da.', syn: ['lasaia', 'tolerante', 'sosegua'], ant: ['inpaziente', 'urduri'] }
    },
    {
        word: 'LIBERTAD', display: 'Libertad', category: 'vocabulario', emoji: '🕊️',
        es: { def: 'Derecho a actuar, pensar y expresarse según la propia voluntad sin coacciones. Es uno de los valores fundamentales de los derechos humanos.', syn: ['autonomía', 'independencia', 'emancipación'], ant: ['esclavitud', 'opresión'] },
        en: { def: 'Right to act, think and express oneself according to one\'s own will without coercion. It is one of the fundamental values of human rights.', syn: ['autonomy', 'independence', 'emancipation'], ant: ['slavery', 'oppression'] },
        eu: { def: 'Bere borondatearen arabera jardun, pentsatu eta adierazteko eskubidea, beharturik gabe. Giza eskubideen oinarrizko balioetatik bat da.', syn: ['askatasuna', 'autonomia', 'independentzia'], ant: ['esklabotza', 'zapaltzea'] }
    },
    {
        word: 'JUSTICIA', display: 'Justicia', category: 'vocabulario', emoji: '⚖️',
        es: { def: 'Principio por el que cada persona recibe lo que merece. La justicia garantiza la igualdad y la equidad en la sociedad.', syn: ['equidad', 'igualdad', 'imparcialidad'], ant: ['injusticia', 'discriminación'] },
        en: { def: 'Principle by which each person receives what they deserve. Justice guarantees equality and equity in society.', syn: ['equity', 'equality', 'impartiality'], ant: ['injustice', 'discrimination'] },
        eu: { def: 'Pertsona bakoitzak merezi duena jasotzearen printzipioa. Justizia gizartean berdintasuna eta ekitatea bermatzen du.', syn: ['justizia', 'berdintasuna', 'inpartzialtasuna'], ant: ['injustizia', 'diskriminazioa'] }
    },
    {
        word: 'AMISTAD', display: 'Amistad', category: 'vocabulario', emoji: '🤗',
        es: { def: 'Relación afectiva profunda entre personas basada en el cariño, la lealtad y el respeto mutuo. Los amigos se apoyan en los momentos difíciles.', syn: ['camaradería', 'afecto', 'compañerismo'], ant: ['enemistad', 'rivalidad'] },
        en: { def: 'Deep emotional relationship between people based on affection, loyalty and mutual respect. Friends support each other in difficult times.', syn: ['camaraderie', 'affection', 'fellowship'], ant: ['enmity', 'rivalry'] },
        eu: { def: 'Maitasunean, leialtasunean eta elkarrekiko errespetuan oinarritutako pertsonen arteko harreman afektibo sakona.', syn: ['adiskidetasuna', 'lagunartea', 'elkartasuna'], ant: ['etsaitasuna', 'lehia'] }
    },
    {
        word: 'RESPETO', display: 'Respeto', category: 'vocabulario', emoji: '🙏',
        es: { def: 'Reconocimiento del valor de las personas, las ideas y los seres vivos. El respeto es la base de la convivencia en sociedad.', syn: ['consideración', 'deferencia', 'tolerancia'], ant: ['irrespeto', 'desprecio'] },
        en: { def: 'Recognition of the value of people, ideas and living beings. Respect is the foundation of coexistence in society.', syn: ['consideration', 'deference', 'tolerance'], ant: ['disrespect', 'contempt'] },
        eu: { def: 'Pertsonen, ideia eta izaki bizidunen balioaren aitorpena. Errespetua gizarteko elkarbizitzaren oinarria da.', syn: ['errespetua', 'kontsidera', 'tolerantzia'], ant: ['irrespetua', 'mespretxua'] }
    },
    {
        word: 'ESPERANZA', display: 'Esperanza', category: 'vocabulario', emoji: '🌱',
        es: { def: 'Sentimiento positivo de que algo bueno sucederá en el futuro. La esperanza ayuda a superar los momentos difíciles.', syn: ['ilusión', 'optimismo', 'confianza'], ant: ['desesperanza', 'pesimismo'] },
        en: { def: 'Positive feeling that something good will happen in the future. Hope helps to overcome difficult times.', syn: ['hope', 'optimism', 'confidence'], ant: ['despair', 'pessimism'] },
        eu: { def: 'Etorkizunean zerbait ona gertatuko delako sentimendu positiboa. Itxarpenak une zailak gainditzen laguntzen du.', syn: ['itxaropena', 'ilusioa', 'baikortasuna'], ant: ['etsipena', 'ezkortasuna'] }
    },
    {
        word: 'FELICIDAD', display: 'Felicidad', category: 'vocabulario', emoji: '😊',
        es: { def: 'Estado de bienestar y satisfacción en el que la persona se siente plena y contenta. No depende de las posesiones sino de las relaciones y actitudes.', syn: ['alegría', 'bienestar', 'dicha'], ant: ['tristeza', 'infelicidad'] },
        en: { def: 'State of wellbeing and satisfaction in which a person feels fulfilled and content. It depends not on possessions but on relationships and attitudes.', syn: ['joy', 'wellbeing', 'bliss'], ant: ['sadness', 'unhappiness'] },
        eu: { def: 'Pertsona bete eta pozik sentitzen den ongizate eta asebetetze egoera. Ez da jabetzetan datza, harremanetan eta jarreretan baizik.', syn: ['zoriontasuna', 'alaitasuna', 'ongizatea'], ant: ['tristura', 'zorigaiztoa'] }
    },
    {
        word: 'SABIDURIA', display: 'Sabiduría', category: 'vocabulario', emoji: '🦉',
        es: { def: 'Capacidad de usar el conocimiento y la experiencia para tomar buenas decisiones y actuar correctamente en la vida.', syn: ['conocimiento', 'prudencia', 'juicio'], ant: ['ignorancia', 'imprudencia'] },
        en: { def: 'Ability to use knowledge and experience to make good decisions and act correctly in life.', syn: ['knowledge', 'prudence', 'judgement'], ant: ['ignorance', 'imprudence'] },
        eu: { def: 'Ezagutza eta esperientzia erabili erabaki onak hartzeko eta bizitzan ondo jarduteko ahalmena.', syn: ['jakituria', 'esperientzia', 'zuhurtzia'], ant: ['ezjakintasuna', 'zuhurtezgabekeria'] }
    },

    // ── GEOGRAFÍA ────────────────────────────────────────────────────────────
    { word: 'NILO', display: 'Nilo', category: 'geografia', emoji: '🌊',
      es: { def: 'Río más largo del mundo, atraviesa Egipto hasta el mar Mediterráneo.', syn: ['río', 'cauce'], ant: [] },
      en: { def: 'Longest river in the world, flows through Egypt to the Mediterranean.', syn: ['river', 'waterway'], ant: [] },
      eu: { def: 'Munduko ibairik luzeena, Egipton zehar Mediterraneora doa.', syn: ['ibaia'], ant: [] } },
    { word: 'AMAZON', display: 'Amazonas', category: 'geografia', emoji: '🌿',
      es: { def: 'Río más caudaloso del mundo, en América del Sur. Atraviesa la mayor selva tropical.', syn: ['río', 'amazonia'], ant: [] },
      en: { def: 'World\'s most voluminous river in South America, crossing the largest rainforest.', syn: ['river', 'amazonia'], ant: [] },
      eu: { def: 'Munduko ur-bolumen handiena duen ibaia, Hego Amerikan.', syn: ['ibaia'], ant: [] } },
    { word: 'EVEREST', display: 'Everest', category: 'geografia', emoji: '🏔️',
      es: { def: 'Montaña más alta del mundo (8.849 m), en la cordillera del Himalaya.', syn: ['cima', 'cumbre', 'montaña'], ant: [] },
      en: { def: 'Highest mountain in the world (8,849 m), in the Himalayas.', syn: ['peak', 'summit', 'mountain'], ant: [] },
      eu: { def: 'Munduko mendiririk altuena (8.849 m), Himalaia mendilerroan.', syn: ['gailurra', 'mendia'], ant: [] } },
    { word: 'SAHARA', display: 'Sahara', category: 'geografia', emoji: '🏜️',
      es: { def: 'Desierto más grande del mundo, situado en el norte de África.', syn: ['desierto', 'arenal'], ant: [] },
      en: { def: 'Largest desert in the world, located in northern Africa.', syn: ['desert', 'wasteland'], ant: [] },
      eu: { def: 'Munduko basamorturik handiena, Afrikako iparraldean.', syn: ['basamortua'], ant: [] } },
    { word: 'ANDES', display: 'Andes', category: 'geografia', emoji: '⛰️',
      es: { def: 'Cordillera más larga del mundo, recorre Sudamérica de norte a sur.', syn: ['cordillera', 'montañas'], ant: [] },
      en: { def: 'Longest mountain range in the world, running along South America.', syn: ['mountain range', 'cordillera'], ant: [] },
      eu: { def: 'Munduko mendilerrorik luzeena, Hego Amerikan zehar doa.', syn: ['mendilerroa'], ant: [] } },
    { word: 'ALPES', display: 'Alpes', category: 'geografia', emoji: '🏔️',
      es: { def: 'Cordillera montañosa de Europa central, con el Mont Blanc como punto más alto.', syn: ['cordillera', 'montañas'], ant: [] },
      en: { def: 'Mountain range in central Europe, with Mont Blanc as highest point.', syn: ['mountains', 'range'], ant: [] },
      eu: { def: 'Erdialdeko Europako mendilerroa, Mont Blanc puntu garaienarekin.', syn: ['mendilerroa'], ant: [] } },
    { word: 'TIBER', display: 'Tíber', category: 'geografia', emoji: '🌊',
      es: { def: 'Río de Italia que atraviesa Roma y desemboca en el mar Tirreno.', syn: ['río', 'cauce'], ant: [] },
      en: { def: 'River in Italy flowing through Rome into the Tyrrhenian Sea.', syn: ['river'], ant: [] },
      eu: { def: 'Italiako ibaia, Erroma zehar doa eta Tirreno itsasora isurtzen da.', syn: ['ibaia'], ant: [] } },
    { word: 'VOLGA', display: 'Volga', category: 'geografia', emoji: '🌊',
      es: { def: 'Río más largo de Europa, atraviesa Rusia hasta el mar Caspio.', syn: ['río', 'cauce'], ant: [] },
      en: { def: 'Longest river in Europe, flowing through Russia to the Caspian Sea.', syn: ['river'], ant: [] },
      eu: { def: 'Europako ibairik luzeena, Errusiako lurraldetik zehar Kaspio itsasora doa.', syn: ['ibaia'], ant: [] } },
    { word: 'GANGES', display: 'Ganges', category: 'geografia', emoji: '🌊',
      es: { def: 'Río sagrado de la India, fundamental para la cultura hindú.', syn: ['río', 'cauce'], ant: [] },
      en: { def: 'Sacred river of India, fundamental to Hindu culture.', syn: ['river', 'sacred'], ant: [] },
      eu: { def: 'Indiako ibai sakratua, kultura hinduistaren oinarri.', syn: ['ibaia'], ant: [] } },
    { word: 'CARIBE', display: 'Caribe', category: 'geografia', emoji: '🏝️',
      es: { def: 'Mar tropical entre América Central, América del Sur y las Antillas.', syn: ['mar', 'océano'], ant: [] },
      en: { def: 'Tropical sea between Central America, South America and the Antilles.', syn: ['sea', 'ocean'], ant: [] },
      eu: { def: 'Itsaso tropikala Erdialdeko Amerika, Hego Amerika eta Antilen artean.', syn: ['itsasoa'], ant: [] } },
    { word: 'PACIFICO', display: 'Pacífico', category: 'geografia', emoji: '🌊',
      es: { def: 'Océano más grande del mundo, entre Asia, Oceanía y América.', syn: ['océano', 'mar'], ant: [] },
      en: { def: 'Largest ocean in the world, between Asia, Oceania and the Americas.', syn: ['ocean', 'sea'], ant: [] },
      eu: { def: 'Munduko ozeanorik handiena, Asia, Ozeania eta Amerika artean.', syn: ['ozeano', 'itsasoa'], ant: [] } },
    { word: 'ATLANTICO', display: 'Atlántico', category: 'geografia', emoji: '🌊',
      es: { def: 'Segundo océano más grande del mundo, separa Europa y América.', syn: ['océano', 'mar'], ant: [] },
      en: { def: 'Second largest ocean, separating Europe and the Americas.', syn: ['ocean', 'sea'], ant: [] },
      eu: { def: 'Bigarren ozeanoa tamainaz, Europa eta Amerika banantzen ditu.', syn: ['ozeano'], ant: [] } },
    { word: 'BRASIL', display: 'Brasil', category: 'geografia', emoji: '🇧🇷',
      es: { def: 'País más grande de América del Sur, conocido por el Carnaval y el fútbol.', syn: ['nación', 'país'], ant: [] },
      en: { def: 'Largest country in South America, known for Carnival and football.', syn: ['nation', 'country'], ant: [] },
      eu: { def: 'Hego Amerikako herririk handiena, Karnabalengatik eta futbolagatik ezaguna.', syn: ['herria'], ant: [] } },
    { word: 'JAPON', display: 'Japón', category: 'geografia', emoji: '🇯🇵',
      es: { def: 'País insular de Asia oriental, conocido por su tecnología y cultura.', syn: ['nación', 'país'], ant: [] },
      en: { def: 'Island country in East Asia, known for technology and culture.', syn: ['nation', 'country'], ant: [] },
      eu: { def: 'Asia ekialdeko uharte-herria, teknologiagatik eta kulturagatik ezaguna.', syn: ['herria'], ant: [] } },
    { word: 'PIRINEOS', display: 'Pirineos', category: 'geografia', emoji: '⛰️',
      es: { def: 'Cordillera que separa la Península Ibérica del resto de Europa.', syn: ['cordillera', 'montañas'], ant: [] },
      en: { def: 'Mountain range separating the Iberian Peninsula from the rest of Europe.', syn: ['mountains', 'range'], ant: [] },
      eu: { def: 'Pirinioek Iberiar Penintsula Europaren gainerakotik bereizten dute.', syn: ['mendilerroa'], ant: [] } },
    { word: 'ROMA', display: 'Roma', category: 'geografia', emoji: '🏛️',
      es: { def: 'Capital de Italia, conocida como la Ciudad Eterna. Centro del Imperio Romano.', syn: ['ciudad', 'capital'], ant: [] },
      en: { def: 'Capital of Italy, known as the Eternal City. Centre of the Roman Empire.', syn: ['city', 'capital'], ant: [] },
      eu: { def: 'Italiako hiriburua, Hiri Eternoa izenaz ezaguna. Erromatar Inperioaren erdigunea.', syn: ['hiria'], ant: [] } },
    { word: 'PARIS', display: 'París', category: 'geografia', emoji: '🗼',
      es: { def: 'Capital de Francia, conocida por la Torre Eiffel y el Louvre.', syn: ['ciudad', 'capital'], ant: [] },
      en: { def: 'Capital of France, known for the Eiffel Tower and the Louvre.', syn: ['city', 'capital'], ant: [] },
      eu: { def: 'Frantziako hiriburua, Eiffel Dorrearengatik eta Louvrearengatik ezaguna.', syn: ['hiria'], ant: [] } },
    { word: 'TOKIO', display: 'Tokio', category: 'geografia', emoji: '🗾',
      es: { def: 'Capital de Japón y una de las ciudades más pobladas del mundo.', syn: ['ciudad', 'capital'], ant: [] },
      en: { def: 'Capital of Japan and one of the most populous cities in the world.', syn: ['city', 'capital'], ant: [] },
      eu: { def: 'Japoniako hiriburua eta munduko hiririk jendetsuenetako bat.', syn: ['hiria'], ant: [] } },
    { word: 'BERLIN', display: 'Berlín', category: 'geografia', emoji: '🇩🇪',
      es: { def: 'Capital de Alemania, famosa por el Muro de Berlín y su historia.', syn: ['ciudad', 'capital'], ant: [] },
      en: { def: 'Capital of Germany, famous for the Berlin Wall and its history.', syn: ['city', 'capital'], ant: [] },
      eu: { def: 'Alemaniako hiriburua, Berlingo Harresiaren eta bere historiarengatik famatua.', syn: ['hiria'], ant: [] } },
    { word: 'ATLAS', display: 'Atlas', category: 'geografia', emoji: '⛰️',
      es: { def: 'Cordillera del noroeste de África que atraviesa Marruecos, Argelia y Túnez.', syn: ['cordillera', 'montañas'], ant: [] },
      en: { def: 'Mountain range in northwest Africa crossing Morocco, Algeria and Tunisia.', syn: ['mountains', 'range'], ant: [] },
      eu: { def: 'Afrikako ipar-mendebaldeko mendilerroa, Maroko, Aljeria eta Tunez zeharkatzen duena.', syn: ['mendilerroa'], ant: [] } },

    // ── BIOLOGÍA ─────────────────────────────────────────────────────────────
    { word: 'CELULA', display: 'Célula', category: 'biologia', emoji: '🔬',
      es: { def: 'Unidad básica y fundamental de la vida que compone todos los seres vivos.', syn: ['unidad', 'organulo'], ant: [] },
      en: { def: 'Basic and fundamental unit of life that makes up all living things.', syn: ['unit', 'organelle'], ant: [] },
      eu: { def: 'Bizitzaren oinarrizko eta funtsezko unitatea, izaki bizidun guztiak osatzen dituena.', syn: ['unitatea'], ant: [] } },
    { word: 'NUCLEO', display: 'Núcleo', category: 'biologia', emoji: '⚛️',
      es: { def: 'Orgánulo celular que contiene el material genético (ADN) de la célula.', syn: ['centro', 'orgánulo'], ant: [] },
      en: { def: 'Cell organelle that contains the genetic material (DNA) of the cell.', syn: ['centre', 'organelle'], ant: [] },
      eu: { def: 'Zelula-organulua, zelularen material genetikoa (DNA) gordetzen duena.', syn: ['organulua'], ant: [] } },
    { word: 'MITOSIS', display: 'Mitosis', category: 'biologia', emoji: '🔬',
      es: { def: 'Proceso de división celular donde la célula madre genera dos células hijas idénticas.', syn: ['división', 'reproducción'], ant: [] },
      en: { def: 'Cell division process where a parent cell generates two identical daughter cells.', syn: ['division', 'reproduction'], ant: [] },
      eu: { def: 'Zelula-banaketa prozesua, non zelula amak bi zelula alaba berdinak sortzen dituen.', syn: ['banaketa'], ant: [] } },
    { word: 'OSMOSIS', display: 'Ósmosis', category: 'biologia', emoji: '💧',
      es: { def: 'Paso de agua a través de una membrana semipermeable desde una zona diluida a una concentrada.', syn: ['difusión', 'transporte'], ant: [] },
      en: { def: 'Movement of water through a semipermeable membrane from dilute to concentrated solution.', syn: ['diffusion', 'transport'], ant: [] },
      eu: { def: 'Uraren mugimendua mintza erdipermeable baten bidez, diluitutik kontzentratutara.', syn: ['difusioa'], ant: [] } },
    { word: 'NEURONA', display: 'Neurona', category: 'biologia', emoji: '🧠',
      es: { def: 'Célula especializada del sistema nervioso que transmite impulsos eléctricos.', syn: ['célula nerviosa', 'neurón'], ant: [] },
      en: { def: 'Specialised nervous system cell that transmits electrical impulses.', syn: ['nerve cell', 'neuron'], ant: [] },
      eu: { def: 'Sistema nerbiosoaren zelula espezializatua, inpultsu elektrikoak transmititzen dituena.', syn: ['nerbio-zelula'], ant: [] } },
    { word: 'ENZIMA', display: 'Enzima', category: 'biologia', emoji: '🧬',
      es: { def: 'Proteína que actúa como catalizador en las reacciones químicas del organismo.', syn: ['catalizador', 'proteína'], ant: [] },
      en: { def: 'Protein that acts as a catalyst in chemical reactions within organisms.', syn: ['catalyst', 'protein'], ant: [] },
      eu: { def: 'Organismoaren erreakzio kimikoetan katalizatzaile gisa jarduten duen proteina.', syn: ['katalizatzaile', 'proteina'], ant: [] } },
    { word: 'BACTERIA', display: 'Bacteria', category: 'biologia', emoji: '🦠',
      es: { def: 'Microorganismo unicelular procariota, uno de los seres vivos más abundantes.', syn: ['microbio', 'microorganismo'], ant: [] },
      en: { def: 'Prokaryotic unicellular microorganism, one of the most abundant living beings.', syn: ['microbe', 'microorganism'], ant: [] },
      eu: { def: 'Mikroorganismo prokariotiko zelulabakarra, izaki bizidun ugarienetako bat.', syn: ['mikrobioa'], ant: [] } },
    { word: 'VIRUS', display: 'Virus', category: 'biologia', emoji: '🦠',
      es: { def: 'Agente infeccioso microscópico que solo puede reproducirse dentro de células vivas.', syn: ['patógeno', 'microbio'], ant: [] },
      en: { def: 'Microscopic infectious agent that can only replicate inside living cells.', syn: ['pathogen', 'microbe'], ant: [] },
      eu: { def: 'Agente infekzioso mikroskopikoa, zelula bizien barruan soilik ugaldu daitekeena.', syn: ['patogenoa'], ant: [] } },
    { word: 'TEJIDO', display: 'Tejido', category: 'biologia', emoji: '🔬',
      es: { def: 'Conjunto de células similares que realizan una función específica en un organismo.', syn: ['tela', 'estructura'], ant: [] },
      en: { def: 'Group of similar cells performing a specific function in an organism.', syn: ['structure', 'layer'], ant: [] },
      eu: { def: 'Zelula antzekoen multzoa, funtzio zehatz bat betetzen duena.', syn: ['egitura'], ant: [] } },
    { word: 'PROTEINA', display: 'Proteína', category: 'biologia', emoji: '🧬',
      es: { def: 'Macromolécula formada por cadenas de aminoácidos, fundamental para la vida.', syn: ['macromolécula', 'polipéptido'], ant: [] },
      en: { def: 'Macromolecule made of amino acid chains, fundamental to life.', syn: ['macromolecule', 'polypeptide'], ant: [] },
      eu: { def: 'Aminoazidoen kateez osatutako makromolekula, bizitzarako funtsezkoa.', syn: ['makromolekula'], ant: [] } },
    { word: 'VITAMINA', display: 'Vitamina', category: 'biologia', emoji: '💊',
      es: { def: 'Sustancia orgánica esencial para el funcionamiento normal del organismo.', syn: ['nutriente', 'suplemento'], ant: [] },
      en: { def: 'Organic substance essential for the normal functioning of the organism.', syn: ['nutrient', 'supplement'], ant: [] },
      eu: { def: 'Organismoaren funtzionamendu normalerako ezinbesteko substantzia organikoa.', syn: ['elikagaia'], ant: [] } },
    { word: 'FOSIL', display: 'Fósil', category: 'biologia', emoji: '🦕',
      es: { def: 'Resto o huella de un ser vivo del pasado conservado en rocas sedimentarias.', syn: ['resto', 'huella', 'reliquia'], ant: [] },
      en: { def: 'Remains or trace of a past organism preserved in sedimentary rocks.', syn: ['remains', 'trace', 'relic'], ant: [] },
      eu: { def: 'Iraganeko izaki bizidunaren hondarrak edo aztarnak harrietan gordea.', syn: ['hondarra', 'aztarna'], ant: [] } },
    { word: 'EVOLUCION', display: 'Evolución', category: 'biologia', emoji: '🧬',
      es: { def: 'Proceso de cambio gradual de las especies a lo largo del tiempo por selección natural.', syn: ['desarrollo', 'cambio', 'progresión'], ant: ['involución', 'regresión'] },
      en: { def: 'Gradual change of species over time through natural selection.', syn: ['development', 'change', 'progression'], ant: ['involution', 'regression'] },
      eu: { def: 'Espezieen aldaketa prozesu gradualaa, aukeraketa naturalaren bidez.', syn: ['garapena', 'aldaketa'], ant: ['inboluzioa'] } },
    { word: 'ORGANISMO', display: 'Organismo', category: 'biologia', emoji: '🌱',
      es: { def: 'Ser vivo con organización y funciones propias, desde bacterias hasta animales complejos.', syn: ['ser vivo', 'criatura'], ant: [] },
      en: { def: 'Living being with its own organisation and functions, from bacteria to complex animals.', syn: ['living being', 'creature'], ant: [] },
      eu: { def: 'Bere antolaketa eta funtzio propioak dituen izaki bizidunak.', syn: ['izaki bizidunak'], ant: [] } },
    { word: 'CROMOSOMA', display: 'Cromosoma', category: 'biologia', emoji: '🧬',
      es: { def: 'Estructura del núcleo celular que contiene los genes del ADN.', syn: ['gen', 'ADN'], ant: [] },
      en: { def: 'Cell nucleus structure that contains the DNA genes.', syn: ['gene', 'DNA'], ant: [] },
      eu: { def: 'Zelula-nukleoaren egitura, DNA-ren geneak gordetzen dituena.', syn: ['genea'], ant: [] } },
    { word: 'ECOSISTEMA', display: 'Ecosistema', category: 'biologia', emoji: '🌿',
      es: { def: 'Sistema formado por seres vivos y el medio ambiente donde se relacionan.', syn: ['hábitat', 'bioma'], ant: [] },
      en: { def: 'System formed by living beings and the environment where they interact.', syn: ['habitat', 'biome'], ant: [] },
      eu: { def: 'Izaki bizidunek eta haien ingurumenak osatutako sistema.', syn: ['habitata', 'bioma'], ant: [] } },
    { word: 'FOTOSINTESIS', display: 'Fotosíntesis', category: 'biologia', emoji: '🌿',
      es: { def: 'Proceso por el que las plantas convierten luz solar en energía química.', syn: ['síntesis', 'proceso'], ant: [] },
      en: { def: 'Process by which plants convert sunlight into chemical energy.', syn: ['synthesis', 'process'], ant: [] },
      eu: { def: 'Landareek eguzki-argia energia kimiko bihurtzen duten prozesua.', syn: ['prozesua', 'sintesia'], ant: [] } },
    { word: 'MAMIFERO', display: 'Mamífero', category: 'biologia', emoji: '🐾',
      es: { def: 'Animal vertebrado de sangre caliente que amamanta a sus crías.', syn: ['vertebrado', 'animal'], ant: [] },
      en: { def: 'Warm-blooded vertebrate animal that nurses its young with milk.', syn: ['vertebrate', 'animal'], ant: [] },
      eu: { def: 'Odol bero eta ornodun animalia, kumeak esnearekin elikatzen dituena.', syn: ['ornoduna'], ant: [] } },
    { word: 'REPTIL', display: 'Reptil', category: 'biologia', emoji: '🦎',
      es: { def: 'Animal vertebrado de sangre fría, con escamas y que respira con pulmones.', syn: ['lagarto', 'vertebrado'], ant: [] },
      en: { def: 'Cold-blooded vertebrate with scales that breathes with lungs.', syn: ['lizard', 'vertebrate'], ant: [] },
      eu: { def: 'Odol hotz eta ornoduna, ezkatak dituena eta birikiekin arnasten duena.', syn: ['ornoduna'], ant: [] } },
    { word: 'ANFIBIO', display: 'Anfibio', category: 'biologia', emoji: '🐸',
      es: { def: 'Animal vertebrado que puede vivir en el agua y en tierra firme.', syn: ['vertebrado', 'animal'], ant: [] },
      en: { def: 'Vertebrate animal that can live both in water and on land.', syn: ['vertebrate', 'animal'], ant: [] },
      eu: { def: 'Ura eta lurra bietan bizi daitekeen ornodun animalia.', syn: ['ornoduna'], ant: [] } },

    // ── ASTRONOMÍA ───────────────────────────────────────────────────────────
    { word: 'SATURNO', display: 'Saturno', category: 'astronomia', emoji: '🪐',
      es: { def: 'Sexto planeta del sistema solar, famoso por sus espectaculares anillos.', syn: ['planeta', 'gigante gaseoso'], ant: [] },
      en: { def: 'Sixth planet of the solar system, famous for its spectacular rings.', syn: ['planet', 'gas giant'], ant: [] },
      eu: { def: 'Eguzki-sistemako seigarren planeta, bere eraztun ikusgarriengatik famatua.', syn: ['planeta'], ant: [] } },
    { word: 'JUPITER', display: 'Júpiter', category: 'astronomia', emoji: '🪐',
      es: { def: 'Planeta más grande del sistema solar, un gigante gaseoso con la Gran Mancha Roja.', syn: ['planeta', 'gigante'], ant: [] },
      en: { def: 'Largest planet in the solar system, a gas giant with the Great Red Spot.', syn: ['planet', 'giant'], ant: [] },
      eu: { def: 'Eguzki-sistemako planeta handiena, Mancha Gorri Handia duen gas-erraldoia.', syn: ['planeta'], ant: [] } },
    { word: 'GALAXIA', display: 'Galaxia', category: 'astronomia', emoji: '🌌',
      es: { def: 'Sistema de miles de millones de estrellas, gas y polvo unido por gravedad.', syn: ['vía láctea', 'cosmos', 'nebulosa'], ant: [] },
      en: { def: 'System of billions of stars, gas and dust held together by gravity.', syn: ['milky way', 'cosmos'], ant: [] },
      eu: { def: 'Milaka milioi izar, gas eta hauts grabitatearen bidez lotuta osatutako sistema.', syn: ['izar-sistema'], ant: [] } },
    { word: 'NEBULOSA', display: 'Nebulosa', category: 'astronomia', emoji: '✨',
      es: { def: 'Nube de gas y polvo en el espacio interestelar, cuna de nuevas estrellas.', syn: ['nube', 'cúmulo'], ant: [] },
      en: { def: 'Cloud of gas and dust in interstellar space, birthplace of new stars.', syn: ['cloud', 'cluster'], ant: [] },
      eu: { def: 'Izararteko espazioan dagoen gas eta hauts hodeia, izar berrien sehaska.', syn: ['hodeia'], ant: [] } },
    { word: 'COMETA', display: 'Cometa', category: 'astronomia', emoji: '☄️',
      es: { def: 'Cuerpo celeste de hielo y polvo que al acercarse al Sol desarrolla una larga cola brillante.', syn: ['astro', 'cuerpo celeste'], ant: [] },
      en: { def: 'Icy celestial body that develops a bright tail when approaching the Sun.', syn: ['comet', 'celestial body'], ant: [] },
      eu: { def: 'Izotza eta hautsa duen gorputz zeliestea, Eguzkiaren aldean isats distiratsua garatzen duena.', syn: ['gorputz zeliestea'], ant: [] } },
    { word: 'ECLIPSE', display: 'Eclipse', category: 'astronomia', emoji: '🌑',
      es: { def: 'Fenómeno en que un astro oculta a otro. El más conocido: eclipse solar y lunar.', syn: ['oscurecimiento', 'ocultación'], ant: [] },
      en: { def: 'Phenomenon in which one celestial body hides another. Solar and lunar eclipses.', syn: ['obscuration', 'occultation'], ant: [] },
      eu: { def: 'Gorputz zelieste batek beste bat ezkutatzen duen fenomenoa. Eguzki eta ilargi-eklipseak.', syn: ['ezkutamena'], ant: [] } },
    { word: 'SUPERNOVA', display: 'Supernova', category: 'astronomia', emoji: '💥',
      es: { def: 'Explosión que marca el fin de una estrella masiva, liberando enormes cantidades de energía.', syn: ['explosión', 'estallido'], ant: [] },
      en: { def: 'Explosion marking the end of a massive star, releasing enormous amounts of energy.', syn: ['explosion', 'blast'], ant: [] },
      eu: { def: 'Izar masibo baten amaiera markatzen duen eztanda, energia kopuru izugarriak askatzen dituena.', syn: ['eztanda'], ant: [] } },
    { word: 'ORBITA', display: 'Órbita', category: 'astronomia', emoji: '🔄',
      es: { def: 'Trayectoria curva que sigue un objeto celeste alrededor de otro por efecto de la gravedad.', syn: ['trayectoria', 'camino', 'giro'], ant: [] },
      en: { def: 'Curved path followed by a celestial object around another due to gravity.', syn: ['trajectory', 'path', 'revolution'], ant: [] },
      eu: { def: 'Gorputz zelieste batek beste baten inguruan grabitatearen eraginez jarraitutako bide kurbatua.', syn: ['ibilbidea', 'birakia'], ant: [] } },
    { word: 'METEORO', display: 'Meteoro', category: 'astronomia', emoji: '💫',
      es: { def: 'Fragmento de roca o metal que se incendia al entrar en la atmósfera terrestre.', syn: ['estrella fugaz', 'meteorito'], ant: [] },
      en: { def: 'Rock or metal fragment that burns up when entering Earth\'s atmosphere.', syn: ['shooting star', 'meteorite'], ant: [] },
      eu: { def: 'Harri edo metal zatia, Lurraren atmosferara sartzean kiskaldu egiten dena.', syn: ['izarrez iheskorra', 'meteorito'], ant: [] } },
    { word: 'COSMOS', display: 'Cosmos', category: 'astronomia', emoji: '🌌',
      es: { def: 'Totalidad del universo considerada como un sistema ordenado y armonioso.', syn: ['universo', 'espacio', 'infinito'], ant: [] },
      en: { def: 'Totality of the universe considered as an ordered and harmonious system.', syn: ['universe', 'space', 'infinity'], ant: [] },
      eu: { def: 'Sistema ordenatu eta harmonioso gisa hartutako unibertso osotasuna.', syn: ['unibertsoa', 'espazioa'], ant: [] } },
    { word: 'ASTEROIDE', display: 'Asteroide', category: 'astronomia', emoji: '🪨',
      es: { def: 'Cuerpo rocoso que orbita el Sol, más pequeño que un planeta pero mayor que un meteoroide.', syn: ['cuerpo celeste', 'roca'], ant: [] },
      en: { def: 'Rocky body orbiting the Sun, smaller than a planet but larger than a meteoroid.', syn: ['celestial body', 'rock'], ant: [] },
      eu: { def: 'Eguzkiaren inguruan orbitatzen duen gorputz harritsu bat, planetan baino txikiagoa.', syn: ['gorputz zeliestea'], ant: [] } },
    { word: 'AGUJERO', display: 'Agujero', category: 'astronomia', emoji: '⚫',
      es: { def: 'Agujero negro: región del espacio con gravedad tan intensa que nada puede escapar, ni la luz.', syn: ['hoyo', 'singularidad'], ant: [] },
      en: { def: 'Black hole: region of space with gravity so intense that nothing can escape, not even light.', syn: ['hole', 'singularity'], ant: [] },
      eu: { def: 'Zulo beltza: espazioaren eskualdea, grabitazio hain indartsua duena ezerk ezin duela ihes egin.', syn: ['zuloa'], ant: [] } },
    { word: 'PLUTON', display: 'Plutón', category: 'astronomia', emoji: '🪐',
      es: { def: 'Planeta enano del sistema solar, más allá de Neptuno, en el cinturón de Kuiper.', syn: ['planeta enano', 'plutino'], ant: [] },
      en: { def: 'Dwarf planet of the solar system, beyond Neptune, in the Kuiper Belt.', syn: ['dwarf planet'], ant: [] },
      eu: { def: 'Eguzki-sistemako planeta nanoa, Neptuno harago, Kuiper gerriko-gerriko-gerriko-gerrikoan.', syn: ['planeta nanoa'], ant: [] } },
    { word: 'URANO', display: 'Urano', category: 'astronomia', emoji: '🪐',
      es: { def: 'Séptimo planeta del sistema solar, único que gira en posición casi horizontal.', syn: ['planeta', 'gigante helado'], ant: [] },
      en: { def: 'Seventh planet of the solar system, unique for rotating nearly on its side.', syn: ['planet', 'ice giant'], ant: [] },
      eu: { def: 'Eguzki-sistemako zazpigarren planeta, ia horizontalki biratzen duen bakarra.', syn: ['planeta'], ant: [] } },
    { word: 'TELESCOPIO', display: 'Telescopio', category: 'astronomia', emoji: '🔭',
      es: { def: 'Instrumento óptico que amplía objetos lejanos, fundamental para la astronomía.', syn: ['catalejo', 'instrumento'], ant: [] },
      en: { def: 'Optical instrument that magnifies distant objects, fundamental to astronomy.', syn: ['spyglass', 'instrument'], ant: [] },
      eu: { def: 'Urruneko objektuak handiagotzen dituen tresna optikoa, astronomiarako funtsezkoa.', syn: ['tresna optikoa'], ant: [] } },

    // ── HISTORIA ─────────────────────────────────────────────────────────────
    { word: 'FARAON', display: 'Faraón', category: 'historia', emoji: '👑',
      es: { def: 'Monarca del antiguo Egipto, considerado dios en la Tierra y gobernante absoluto.', syn: ['rey', 'monarca', 'soberano'], ant: [] },
      en: { def: 'Monarch of ancient Egypt, considered a god on Earth and absolute ruler.', syn: ['king', 'monarch', 'sovereign'], ant: [] },
      eu: { def: 'Egipto antzinako monarka, Lurreko jainkotzat eta agintari absolututzat hartua.', syn: ['errege', 'monarka'], ant: [] } },
    { word: 'PIRAMIDE', display: 'Pirámide', category: 'historia', emoji: '🔺',
      es: { def: 'Construcción monumental de base cuadrada y caras triangulares, famosas las de Egipto.', syn: ['monumento', 'construcción'], ant: [] },
      en: { def: 'Monumental structure with square base and triangular faces, famous in Egypt.', syn: ['monument', 'structure'], ant: [] },
      eu: { def: 'Oinarri karratu eta albo triangeluarrak dituen eraikuntza monumentala, Egipton famatuak.', syn: ['monumentua'], ant: [] } },
    { word: 'GLADIADOR', display: 'Gladiador', category: 'historia', emoji: '⚔️',
      es: { def: 'Combatiente profesional del Imperio Romano que luchaba en arenas ante el público.', syn: ['luchador', 'combatiente', 'espadachín'], ant: [] },
      en: { def: 'Professional fighter of the Roman Empire who fought in arenas before crowds.', syn: ['fighter', 'combatant', 'swordsman'], ant: [] },
      eu: { def: 'Erromatar Inperioko borrokalari profesionala, arenetan publiko aurrean borrokatzen zena.', syn: ['borrokalaria'], ant: [] } },
    { word: 'CRUZADA', display: 'Cruzada', category: 'historia', emoji: '⚔️',
      es: { def: 'Campaña militar religiosa medieval emprendida por los europeos para recuperar Tierra Santa.', syn: ['campaña', 'expedición', 'guerra'], ant: [] },
      en: { def: 'Medieval religious military campaign by Europeans to reclaim the Holy Land.', syn: ['campaign', 'expedition', 'war'], ant: [] },
      eu: { def: 'Europako erlijio-kanpaina militar ertaroa, Lur Santua berreskuratzeko egina.', syn: ['kanpaina', 'gerratea'], ant: [] } },
    { word: 'DEMOCRACIA', display: 'Democracia', category: 'historia', emoji: '🗳️',
      es: { def: 'Sistema político donde el poder reside en el pueblo, que elige sus gobernantes.', syn: ['república', 'gobierno popular'], ant: ['dictadura', 'tiranía', 'autocracia'] },
      en: { def: 'Political system where power lies with the people, who elect their rulers.', syn: ['republic', 'popular government'], ant: ['dictatorship', 'tyranny', 'autocracy'] },
      eu: { def: 'Sistema politikoa, non boterea herrian bizi den, bere agintariak hautatzen dituena.', syn: ['errepublika'], ant: ['diktadura', 'tirania'] } },
    { word: 'REVOLUCION', display: 'Revolución', category: 'historia', emoji: '🔥',
      es: { def: 'Cambio radical y profundo en las estructuras políticas, sociales o económicas de una sociedad.', syn: ['levantamiento', 'sublevación', 'cambio'], ant: ['estabilidad', 'orden', 'conservadurismo'] },
      en: { def: 'Radical change in political, social or economic structures of society.', syn: ['uprising', 'rebellion', 'change'], ant: ['stability', 'order', 'conservatism'] },
      eu: { def: 'Gizarte baten egitura politiko, sozial edo ekonomikoetan aldaketa erradikal eta sakona.', syn: ['matxinada', 'aldaketa'], ant: ['egonkortasuna'] } },
    { word: 'IMPERIO', display: 'Imperio', category: 'historia', emoji: '🏛️',
      es: { def: 'Estado político gobernado por un emperador que domina vastos territorios.', syn: ['reino', 'dominio', 'potencia'], ant: ['colonia', 'república'] },
      en: { def: 'Political state governed by an emperor that controls vast territories.', syn: ['kingdom', 'dominion', 'power'], ant: ['colony', 'republic'] },
      eu: { def: 'Enperadore batek gobernatutako egoera politikoa, lurralde zabalak menperatzen dituena.', syn: ['erresuma', 'nagusitasuna'], ant: ['kolonia'] } },
    { word: 'FEUDAL', display: 'Feudal', category: 'historia', emoji: '🏰',
      es: { def: 'Sistema político y social de la Edad Media europeo basado en señores, vasallos y siervos.', syn: ['medieval', 'señorial'], ant: ['moderno', 'democrático'] },
      en: { def: 'Medieval European political-social system based on lords, vassals and serfs.', syn: ['medieval', 'manorial'], ant: ['modern', 'democratic'] },
      eu: { def: 'Erdi Aroko sistema politiko eta soziala, jaunak, basailuak eta serboak oinarri.', syn: ['ertaroa'], ant: ['modernoa'] } },
    { word: 'COLONIA', display: 'Colonia', category: 'historia', emoji: '🗺️',
      es: { def: 'Territorio controlado y explotado por otro país más poderoso, dominado política y económicamente.', syn: ['territorio', 'dominio', 'dependencia'], ant: ['independencia', 'soberanía'] },
      en: { def: 'Territory controlled and exploited by a more powerful country.', syn: ['territory', 'dominion', 'dependency'], ant: ['independence', 'sovereignty'] },
      eu: { def: 'Beste herrialde boteretsuago batek kontrolatutako eta ustiatutako lurraldea.', syn: ['lurraldea', 'menpekotasuna'], ant: ['independentzia'] } },
    { word: 'AZTECA', display: 'Azteca', category: 'historia', emoji: '🏛️',
      es: { def: 'Pueblo mesoamericano que fundó el Imperio azteca en México, destruido por los conquistadores.', syn: ['mexica', 'mesoamericano'], ant: [] },
      en: { def: 'Mesoamerican people who founded the Aztec Empire in Mexico, destroyed by conquistadors.', syn: ['mexica', 'mesoamerican'], ant: [] },
      eu: { def: 'Mexikoko Azteka Inperioa sortu zuen mesoamerikar herria, konkistadorek suntsitu zutena.', syn: ['mexica'], ant: [] } },
    { word: 'MAYA', display: 'Maya', category: 'historia', emoji: '🔺',
      es: { def: 'Civilización mesoamericana precolombina con avanzadas matemáticas, astronomía y arquitectura.', syn: ['civilización', 'pueblo'], ant: [] },
      en: { def: 'Pre-Columbian Mesoamerican civilisation with advanced maths, astronomy and architecture.', syn: ['civilisation', 'people'], ant: [] },
      eu: { def: 'Zibilizazio mesoamerikar aurrekolonbiarra, matematika, astronomia eta arkitektura aurreratuekin.', syn: ['zibilizazioa'], ant: [] } },
    { word: 'VIKINGO', display: 'Vikingo', category: 'historia', emoji: '⛵',
      es: { def: 'Navegante y guerrero escandinavo medieval que realizó expediciones de exploración y saqueo.', syn: ['nórdico', 'navegante', 'guerrero'], ant: [] },
      en: { def: 'Medieval Scandinavian sailor and warrior who conducted exploration and raiding expeditions.', syn: ['Norse', 'sailor', 'warrior'], ant: [] },
      eu: { def: 'Eskandinavia Erdi Aroko nabigazaile eta gudaria, espedizio eta sarraskiak egin zituztenak.', syn: ['nordikoa', 'gudaria'], ant: [] } },
    { word: 'CASTILLO', display: 'Castillo', category: 'historia', emoji: '🏰',
      es: { def: 'Edificación medieval fortificada construida para protección y residencia de la nobleza.', syn: ['fortaleza', 'alcázar', 'ciudadela'], ant: [] },
      en: { def: 'Fortified medieval building constructed for protection and noble residence.', syn: ['fortress', 'stronghold', 'citadel'], ant: [] },
      eu: { def: 'Erdi Aroko eraikuntza gotortu gisa babes eta nobleziaren bizileku gisa eraikia.', syn: ['gotorlekua', 'gaztelua'], ant: [] } },
    { word: 'CATEDRAL', display: 'Catedral', category: 'historia', emoji: '⛪',
      es: { def: 'Gran iglesia principal de una diócesis donde reside el obispo, símbolo de poder religioso.', syn: ['iglesia', 'basílica', 'templo'], ant: [] },
      en: { def: 'Main church of a diocese where the bishop resides, symbol of religious power.', syn: ['church', 'basilica', 'temple'], ant: [] },
      eu: { def: 'Apezpiku bizi den elizbarrutiaren eliza nagusia, botere erlijiosoaren sinboloa.', syn: ['eliza', 'basilika'], ant: [] } },
    { word: 'RENAISSANCE', display: 'Renacimiento', category: 'historia', emoji: '🎨',
      es: { def: 'Movimiento cultural europeo de los siglos XV-XVI que recuperó los valores clásicos grecorromanos.', syn: ['resurgimiento', 'renovación'], ant: [] },
      en: { def: 'European cultural movement of the 15th-16th centuries recovering Greco-Roman values.', syn: ['revival', 'renewal'], ant: [] },
      eu: { def: 'XV-XVI. mendeetako kultur mugimendu europar grekoerromatar balioak berreskuratu zituena.', syn: ['berpizkundea', 'berritze'], ant: [] } },

    // ── CULTURA ──────────────────────────────────────────────────────────────
    { word: 'PINTURA', display: 'Pintura', category: 'cultura', emoji: '🎨',
      es: { def: 'Arte de representar imágenes en una superficie usando pigmentos y colores.', syn: ['arte', 'cuadro', 'lienzo'], ant: [] },
      en: { def: 'Art of representing images on a surface using pigments and colours.', syn: ['art', 'canvas', 'artwork'], ant: [] },
      eu: { def: 'Irudiak gainazal batean pigmentu eta koloreen bidez irudikatzeko artea.', syn: ['artea', 'mihisea'], ant: [] } },
    { word: 'ESCULTURA', display: 'Escultura', category: 'cultura', emoji: '🗿',
      es: { def: 'Arte de crear formas tridimensionales tallando piedra, madera, metal u otros materiales.', syn: ['talla', 'estatua', 'figura'], ant: [] },
      en: { def: 'Art of creating three-dimensional forms by carving stone, wood, metal or other materials.', syn: ['carving', 'statue', 'figure'], ant: [] },
      eu: { def: 'Harria, egurra, metala edo beste materialak zizelkatuz hiru dimentsioko formak sortzeko artea.', syn: ['talla', 'estatua'], ant: [] } },
    { word: 'MELODIA', display: 'Melodía', category: 'cultura', emoji: '🎵',
      es: { def: 'Sucesión de notas musicales con sentido, que forman una frase musical reconocible.', syn: ['música', 'canción', 'armonía', 'tema'], ant: [] },
      en: { def: 'Succession of musical notes with meaning, forming a recognisable musical phrase.', syn: ['music', 'tune', 'harmony', 'theme'], ant: [] },
      eu: { def: 'Musika-notatako segida esanguratsuak, musika-esaldi ezagarri bat osatzen dutenak.', syn: ['musika', 'abestia', 'harmonia'], ant: [] } },
    { word: 'NOVELA', display: 'Novela', category: 'cultura', emoji: '📚',
      es: { def: 'Obra literaria extensa en prosa que narra una historia ficticia con personajes y trama.', syn: ['libro', 'obra', 'relato', 'ficción'], ant: [] },
      en: { def: 'Lengthy prose literary work that narrates a fictional story with characters and plot.', syn: ['book', 'work', 'story', 'fiction'], ant: [] },
      eu: { def: 'Pertsonaia eta trama dituen istorio fikzio bat kontatzen duen prosa literario luzea.', syn: ['liburua', 'kontakizuna'], ant: [] } },
    { word: 'POEMA', display: 'Poema', category: 'cultura', emoji: '✍️',
      es: { def: 'Composición literaria en verso con ritmo y estética, que expresa sentimientos o ideas.', syn: ['poesía', 'verso', 'estrofa', 'lírica'], ant: [] },
      en: { def: 'Literary composition in verse with rhythm and aesthetics expressing feelings or ideas.', syn: ['poetry', 'verse', 'stanza', 'lyric'], ant: [] },
      eu: { def: 'Erritmoa eta estetika duten bertsetan sentimenduak edo ideiak adierazten dituen konposizio literarioa.', syn: ['poesia', 'bertso'], ant: [] } },
    { word: 'TEATRO', display: 'Teatro', category: 'cultura', emoji: '🎭',
      es: { def: 'Arte dramático que representa historias con actores en un escenario ante el público.', syn: ['drama', 'obra', 'escenario'], ant: [] },
      en: { def: 'Dramatic art representing stories with actors on a stage before an audience.', syn: ['drama', 'play', 'stage'], ant: [] },
      eu: { def: 'Arte dramatikoa, aktoreek agertoki batean publikoaren aurrean istorioak irudikatzen dituzten.', syn: ['drama', 'agertokia'], ant: [] } },
    { word: 'OPERA', display: 'Ópera', category: 'cultura', emoji: '🎭',
      es: { def: 'Obra teatral cantada con música sinfónica, combina canto, actuación y escenografía.', syn: ['teatro', 'música', 'sinfonía'], ant: [] },
      en: { def: 'Sung theatrical work with symphonic music, combining singing, acting and staging.', syn: ['theatre', 'music', 'symphony'], ant: [] },
      eu: { def: 'Musika sinfonikoarekin kantatutako obra teatrala, abestia, aktuazioa eta eszenografia konbinatzen dituena.', syn: ['antzerkia', 'musika'], ant: [] } },
    { word: 'SINFONIA', display: 'Sinfonía', category: 'cultura', emoji: '🎻',
      es: { def: 'Composición musical extensa para orquesta completa, generalmente en cuatro movimientos.', syn: ['composición', 'orquesta', 'música'], ant: [] },
      en: { def: 'Long musical composition for full orchestra, typically in four movements.', syn: ['composition', 'orchestra', 'music'], ant: [] },
      eu: { def: 'Orkestra osoarentzako musika-konposizio luzea, normalean lau mugimendu dituena.', syn: ['konposizioa', 'orkestra'], ant: [] } },
    { word: 'BALLET', display: 'Ballet', category: 'cultura', emoji: '🩰',
      es: { def: 'Danza clásica académica de origen europeo, caracterizada por movimientos elegantes y precisos.', syn: ['danza', 'baile', 'coreografía'], ant: [] },
      en: { def: 'Classical academic dance of European origin, characterised by elegant, precise movements.', syn: ['dance', 'choreography'], ant: [] },
      eu: { def: 'Europako jatorrizko dantza akademiko klasikoa, mugimendu dotorea eta zehatzengatik ezaugarritua.', syn: ['dantza', 'koreografia'], ant: [] } },
    { word: 'ACUARELA', display: 'Acuarela', category: 'cultura', emoji: '🎨',
      es: { def: 'Técnica pictórica que usa pigmentos diluidos en agua, creando efectos transparentes.', syn: ['pintura', 'técnica'], ant: [] },
      en: { def: 'Pictorial technique using pigments diluted in water, creating transparent effects.', syn: ['painting', 'technique'], ant: [] },
      eu: { def: 'Uretan disolbatutako pigmentuak erabiltzen dituen teknika piktoriala, efektu gardenak sortzen dituena.', syn: ['pintura', 'teknika'], ant: [] } },
    { word: 'GUITARRA', display: 'Guitarra', category: 'cultura', emoji: '🎸',
      es: { def: 'Instrumento de cuerda pulsada con caja de resonancia, muy popular en la música española.', syn: ['instrumento', 'cuerda', 'laúd'], ant: [] },
      en: { def: 'Plucked string instrument with resonance box, very popular in Spanish music.', syn: ['instrument', 'string', 'lute'], ant: [] },
      eu: { def: 'Erresonantzia kaxa duen hari punteatudun instrumentua, musika espainolean oso ezaguna.', syn: ['instrumentua', 'haria'], ant: [] } },
    { word: 'ARMONIA', display: 'Armonía', category: 'cultura', emoji: '🎶',
      es: { def: 'Combinación agradable de sonidos simultáneos, o equilibrio y proporcionalidad entre elementos.', syn: ['acorde', 'equilibrio', 'consonancia'], ant: ['disonancia', 'cacofonía', 'discordancia'] },
      en: { def: 'Pleasant combination of simultaneous sounds, or balance and proportion between elements.', syn: ['chord', 'balance', 'consonance'], ant: ['dissonance', 'cacophony', 'discord'] },
      eu: { def: 'Soinu aldi bereko konbinazio atsegina, edo elementuen arteko oreka eta proportzioa.', syn: ['akordea', 'oreka', 'kontsonantzia'], ant: ['disonantzia'] } },
    { word: 'SONETO', display: 'Soneto', category: 'cultura', emoji: '✍️',
      es: { def: 'Poema de 14 versos dividido en dos cuartetos y dos tercetos, con rima fija.', syn: ['poema', 'estrofa', 'verso'], ant: [] },
      en: { def: 'Poem of 14 lines divided into two quartets and two tercets, with fixed rhyme.', syn: ['poem', 'stanza', 'verse'], ant: [] },
      eu: { def: 'Bi koadruplete eta bi hirukotetako 14 bertsotako poema, erima finkoaz.', syn: ['poema', 'bertsoa'], ant: [] } },
    { word: 'CINE', display: 'Cine', category: 'cultura', emoji: '🎬',
      es: { def: 'Arte de crear y proyectar películas que narran historias mediante imagen y sonido.', syn: ['película', 'film', 'cinematografía'], ant: [] },
      en: { def: 'Art of creating and projecting films that tell stories through image and sound.', syn: ['film', 'movie', 'cinematography'], ant: [] },
      eu: { def: 'Irudi eta soinuaren bidez istorioak kontatzen dituzten filmak sortzeko eta proiektatzeko artea.', syn: ['filma', 'zinema'], ant: [] } },
    { word: 'LITERATURA', display: 'Literatura', category: 'cultura', emoji: '📖',
      es: { def: 'Arte de la expresión escrita que incluye poesía, narrativa, teatro y ensayo.', syn: ['letras', 'escritura', 'arte'], ant: [] },
      en: { def: 'Art of written expression including poetry, narrative, theatre and essay.', syn: ['letters', 'writing', 'art'], ant: [] },
      eu: { def: 'Poesia, narratiba, antzerkia eta saiakera barne hartzen duen adierazpen idatziaren artea.', syn: ['idazkera', 'artea'], ant: [] } },

    // ── VERBOS ───────────────────────────────────────────────────────────────
    { word: 'CORRER', display: 'Correr', category: 'verbos', emoji: '🏃',
      es: { def: 'Moverse rápidamente a pie, dando pasos amplios y elevando ambos pies del suelo.', syn: ['trotar', 'galopar', 'acelerar'], ant: ['caminar', 'detenerse', 'parar'] },
      en: { def: 'To move rapidly on foot, taking wide strides and lifting both feet off the ground.', syn: ['jog', 'sprint', 'dash'], ant: ['walk', 'stop', 'halt'] },
      eu: { def: 'Bizkor mugitzea oinezko, pauso zabalak emanez eta bi oinak lurretik altxatuz.', syn: ['lasterka egin', 'trotatu'], ant: ['ibili', 'gelditu'] } },
    { word: 'NADAR', display: 'Nadar', category: 'verbos', emoji: '🏊',
      es: { def: 'Desplazarse en el agua mediante movimientos coordinados del cuerpo.', syn: ['flotar', 'bracear', 'zambullirse'], ant: ['hundirse', 'ahogarse'] },
      en: { def: 'To move through water using coordinated body movements.', syn: ['float', 'stroke', 'dive'], ant: ['sink', 'drown'] },
      eu: { def: 'Gorputzaren mugimenduen bidez uretan mugitzea.', syn: ['flotatzen', 'murgildu'], ant: ['hondoratu'] } },
    { word: 'CANTAR', display: 'Cantar', category: 'verbos', emoji: '🎤',
      es: { def: 'Emitir sonidos musicales con la voz siguiendo una melodía y ritmo.', syn: ['entonar', 'vocalizar', 'tararear'], ant: ['silenciar', 'callar'] },
      en: { def: 'To produce musical sounds with the voice following a melody and rhythm.', syn: ['hum', 'vocalize', 'chant'], ant: ['silence', 'quiet'] },
      eu: { def: 'Ahots melodia eta erritmoa jarraituz musika-soinuak sortzea.', syn: ['abestu', 'txistukatu'], ant: ['isilarazi'] } },
    { word: 'BAILAR', display: 'Bailar', category: 'verbos', emoji: '💃',
      es: { def: 'Moverse al compás de la música siguiendo un ritmo con el cuerpo.', syn: ['danzar', 'moverse', 'gozar'], ant: ['quietarse', 'pararse'] },
      en: { def: 'To move to the beat of music following a rhythm with the body.', syn: ['dance', 'groove', 'move'], ant: ['stand still', 'stop'] },
      eu: { def: 'Musikaren konpaserako gorputzarekin erritmoa jarraituz mugitzea.', syn: ['dantzatu', 'mugitu'], ant: ['gelditu'] } },
    { word: 'ESCRIBIR', display: 'Escribir', category: 'verbos', emoji: '✍️',
      es: { def: 'Representar ideas, sonidos o palabras mediante signos gráficos en un soporte.', syn: ['redactar', 'anotar', 'transcribir'], ant: ['borrar', 'eliminar'] },
      en: { def: 'To represent ideas, sounds or words using graphic signs on a surface.', syn: ['draft', 'note', 'transcribe'], ant: ['erase', 'delete'] },
      eu: { def: 'Ideiak, soinuak edo hitzak zeinuen bidez euskarri batean irudikatzea.', syn: ['idatzi', 'apuntatu'], ant: ['ezabatu'] } },
    { word: 'COCINAR', display: 'Cocinar', category: 'verbos', emoji: '👨‍🍳',
      es: { def: 'Preparar alimentos aplicando calor u otros procesos para hacerlos comestibles o mejorar su sabor.', syn: ['guisar', 'preparar', 'elaborar'], ant: [] },
      en: { def: 'To prepare food by applying heat or other processes to make it edible or improve its flavour.', syn: ['cook', 'prepare', 'make'], ant: [] },
      eu: { def: 'Elikagaiak beroa edo beste prozesu batzuk aplikatuz prestatzea.', syn: ['kozinatu', 'prestatu'], ant: [] } },
    { word: 'ESTUDIAR', display: 'Estudiar', category: 'verbos', emoji: '📚',
      es: { def: 'Aplicar la mente para aprender y comprender algo, mediante lectura, práctica y reflexión.', syn: ['aprender', 'prepararse', 'formarse'], ant: ['ignorar', 'desatender'] },
      en: { def: 'To apply the mind to learn and understand something through reading, practice and reflection.', syn: ['learn', 'prepare', 'train'], ant: ['ignore', 'neglect'] },
      eu: { def: 'Irakurketa, praktika eta hausnarketen bidez zerbait ikasteko eta ulertzeko adimenari aplikatzea.', syn: ['ikasi', 'prestatu'], ant: ['ezikusi'] } },
    { word: 'PINTAR', display: 'Pintar', category: 'verbos', emoji: '🖌️',
      es: { def: 'Aplicar pintura o pigmentos sobre una superficie para crear imágenes o decorar.', syn: ['dibujar', 'colorear', 'ilustrar'], ant: ['borrar', 'despintar'] },
      en: { def: 'To apply paint or pigments on a surface to create images or decorate.', syn: ['draw', 'colour', 'illustrate'], ant: ['erase', 'unpaint'] },
      eu: { def: 'Gainazal batean pintura edo pigmentuak aplikatzea irudiak sortzeko edo apaintzeko.', syn: ['marraztu', 'koloratu'], ant: ['ezabatu'] } },
    { word: 'CREAR', display: 'Crear', category: 'verbos', emoji: '✨',
      es: { def: 'Hacer algo que no existía antes, usando imaginación, habilidad o trabajo.', syn: ['inventar', 'diseñar', 'originar', 'fabricar'], ant: ['destruir', 'eliminar', 'borrar'] },
      en: { def: 'To make something that didn\'t exist before, using imagination, skill or work.', syn: ['invent', 'design', 'originate', 'make'], ant: ['destroy', 'eliminate', 'erase'] },
      eu: { def: 'Aurretik ez zegoen zerbait egitea, irudimena, trebetasuna edo lana erabiliz.', syn: ['asmatu', 'diseinatu', 'sortu'], ant: ['suntsitu', 'ezabatu'] } },
    { word: 'VOLAR', display: 'Volar', category: 'verbos', emoji: '✈️',
      es: { def: 'Desplazarse por el aire mediante alas, motor u otro mecanismo.', syn: ['surcar', 'planear', 'remontar'], ant: ['aterrizar', 'caer', 'bajar'] },
      en: { def: 'To move through the air using wings, engine or other mechanism.', syn: ['soar', 'glide', 'ascend'], ant: ['land', 'fall', 'descend'] },
      eu: { def: 'Airetik mugitzea hegalak, motorra edo beste mekanismo bat erabiliz.', syn: ['hegan egin', 'planeatzen'], ant: ['lurreratu', 'erori'] } },
    { word: 'PENSAR', display: 'Pensar', category: 'verbos', emoji: '🤔',
      es: { def: 'Ejercer la facultad mental de razonar, reflexionar o imaginar sobre algo.', syn: ['reflexionar', 'meditar', 'considerar'], ant: ['actuar impulsivamente', 'ignorar'] },
      en: { def: 'To exercise the mental faculty of reasoning, reflecting or imagining something.', syn: ['reflect', 'meditate', 'consider'], ant: ['act impulsively', 'ignore'] },
      eu: { def: 'Zerbaitetan arrazoitu, hausnatu edo imajinatzeko gaitasun mentala erabiltzea.', syn: ['hausnartu', 'pentsatu', 'gogoeta egin'], ant: [] } },
    { word: 'AMAR', display: 'Amar', category: 'verbos', emoji: '❤️',
      es: { def: 'Sentir amor, afecto profundo y deseo de bienestar hacia alguien o algo.', syn: ['querer', 'adorar', 'estimar', 'apreciar'], ant: ['odiar', 'detestar', 'aborrecer'] },
      en: { def: 'To feel love, deep affection and wish for wellbeing for someone or something.', syn: ['love', 'adore', 'cherish', 'appreciate'], ant: ['hate', 'detest', 'loathe'] },
      eu: { def: 'Norbaitekiko edo zerbaitekiko maitasuna, afektu sakona eta ongizate-desioa sentitzea.', syn: ['maitatu', 'nahi izan'], ant: ['gorroto', 'mespretxatu'] } },
    { word: 'SONAR', display: 'Soñar', category: 'verbos', emoji: '💭',
      es: { def: 'Tener sueños durante el sueño, o desear y aspirar a algo de manera intensa.', syn: ['imaginar', 'fantasear', 'aspirar', 'desear'], ant: ['despertar', 'resignarse'] },
      en: { def: 'To have dreams while sleeping, or to wish and aspire intensely for something.', syn: ['imagine', 'fantasise', 'aspire', 'wish'], ant: ['wake up', 'resign'] },
      eu: { def: 'Lo egiterakoan ametsak eduki, edo zerbaitetzat intentsitatez nahi eta espiratzea.', syn: ['amestea', 'irudikatu', 'nahi'], ant: ['esnatu', 'etsi'] } },
    { word: 'LLORAR', display: 'Llorar', category: 'verbos', emoji: '😢',
      es: { def: 'Derramar lágrimas, generalmente por tristeza, dolor o emoción intensa.', syn: ['lagrimear', 'lamentarse', 'sollozar'], ant: ['reír', 'alegrarse'] },
      en: { def: 'To shed tears, usually from sadness, pain or intense emotion.', syn: ['weep', 'sob', 'lament'], ant: ['laugh', 'rejoice'] },
      eu: { def: 'Malkoak isurtzea, normalean tristezia, mina edo emozio intentsuagatik.', syn: ['negar egin', 'arranpatu'], ant: ['barre egin'] } },
    { word: 'REIR', display: 'Reír', category: 'verbos', emoji: '😂',
      es: { def: 'Emitir sonidos y gestos propios de la alegría o el humor, mostrando los dientes.', syn: ['carcajear', 'sonreír', 'divertirse'], ant: ['llorar', 'lamentarse'] },
      en: { def: 'To make sounds and gestures of joy or humour, showing teeth.', syn: ['chuckle', 'smile', 'enjoy'], ant: ['cry', 'weep'] },
      eu: { def: 'Alaitasunaren edo umorearen berezko soinuak eta keinuak ateratzea, hortzak erakutsiz.', syn: ['barre egin', 'irribarre egin'], ant: ['negar egin'] } },
    { word: 'TREPAR', display: 'Trepar', category: 'verbos', emoji: '🧗',
      es: { def: 'Subir usando las manos y los pies a una superficie vertical o empinada.', syn: ['escalar', 'subir', 'ascender'], ant: ['bajar', 'descender', 'caer'] },
      en: { def: 'To climb using hands and feet on a vertical or steep surface.', syn: ['climb', 'ascend', 'scale'], ant: ['descend', 'fall', 'drop'] },
      eu: { def: 'Esku eta oinak erabiliz gainazal bertikala edo maldatsua igotzea.', syn: ['eskalar', 'igo'], ant: ['jaitsi', 'erori'] } },
    { word: 'GRITAR', display: 'Gritar', category: 'verbos', emoji: '📢',
      es: { def: 'Emitir la voz con mucha fuerza e intensidad, generalmente por excitación, miedo o enojo.', syn: ['vociferar', 'aullar', 'chillar'], ant: ['susurrar', 'murmurar', 'callar'] },
      en: { def: 'To produce the voice with great force, usually from excitement, fear or anger.', syn: ['shout', 'yell', 'scream'], ant: ['whisper', 'murmur', 'silence'] },
      eu: { def: 'Ahotsa indar handiz ateratzea, normalean zirrara, beldur edo haserreagatik.', syn: ['oihukatu', 'garrasi egin'], ant: ['xuxurlatu', 'ixildu'] } },

    // ── DEPORTES ─────────────────────────────────────────────────────────────
    { word: 'FUTBOL', display: 'Fútbol', category: 'deportes', emoji: '⚽',
      es: { def: 'Deporte de equipo en que dos equipos de once jugadores deben meter el balón en la portería rival.', syn: ['fútbol asociación', 'soccer'], ant: [] },
      en: { def: 'Team sport where two teams of eleven players must get the ball into the opponent\'s goal.', syn: ['soccer', 'association football'], ant: [] },
      eu: { def: 'Talde-kirola, non hamaika jokalariko bi taldek baloiari kontrako atean sartu behar duten.', syn: ['futbol asoziazioa'], ant: [] } },
    { word: 'NATACION', display: 'Natación', category: 'deportes', emoji: '🏊',
      es: { def: 'Deporte que consiste en desplazarse en el agua usando diferentes estilos o técnicas.', syn: ['nado', 'buceo'], ant: [] },
      en: { def: 'Sport that consists of moving through water using different styles or techniques.', syn: ['swimming', 'diving'], ant: [] },
      eu: { def: 'Uretan estilo edo teknika desberdinak erabiliz mugitzean datzan kirola.', syn: ['igerian', 'uretan'], ant: [] } },
    { word: 'ATLETISMO', display: 'Atletismo', category: 'deportes', emoji: '🏃',
      es: { def: 'Conjunto de deportes que incluyen carreras, saltos y lanzamientos.', syn: ['deporte', 'carrera', 'olimpismo'], ant: [] },
      en: { def: 'Set of sports including running, jumping and throwing events.', syn: ['track and field', 'racing'], ant: [] },
      eu: { def: 'Lasterketak, jauzi eta jaurtiketa hartzen dituen kirol multzoa.', syn: ['kirola', 'lasterketa'], ant: [] } },
    { word: 'CICLISMO', display: 'Ciclismo', category: 'deportes', emoji: '🚴',
      es: { def: 'Deporte que consiste en recorrer distancias en bicicleta a la mayor velocidad posible.', syn: ['bicicleta', 'pedaleo'], ant: [] },
      en: { def: 'Sport of covering distances on a bicycle at the greatest possible speed.', syn: ['cycling', 'biking'], ant: [] },
      eu: { def: 'Kirol bat ahalik bizkorren bizikletan distantziak egitean datzan kirola.', syn: ['bizikleta', 'pedalatu'], ant: [] } },
    { word: 'TENIS', display: 'Tenis', category: 'deportes', emoji: '🎾',
      es: { def: 'Deporte de raqueta en que dos o cuatro jugadores golpean una pelota sobre una red.', syn: ['raqueta', 'padel'], ant: [] },
      en: { def: 'Racket sport in which two or four players hit a ball over a net.', syn: ['racket sport', 'padel'], ant: [] },
      eu: { def: 'Erraketa-kirola, bi edo lau jokalarik sareak gainean pilota jotzen duten.', syn: ['erraketak', 'padela'], ant: [] } },
    { word: 'BOXEO', display: 'Boxeo', category: 'deportes', emoji: '🥊',
      es: { def: 'Deporte de combate en que dos contrincantes se golpean con los puños protegidos con guantes.', syn: ['pugilismo', 'combate', 'lucha'], ant: [] },
      en: { def: 'Combat sport where two opponents hit each other with fists protected by gloves.', syn: ['pugilism', 'combat', 'fighting'], ant: [] },
      eu: { def: 'Bi aurkari larruzko eskularruekin elkar jotzen duten borroka-kirola.', syn: ['borroka', 'pugilismoa'], ant: [] } },
    { word: 'VOLEIBOL', display: 'Voleibol', category: 'deportes', emoji: '🏐',
      es: { def: 'Deporte de equipo en que los jugadores golpean un balón sobre una red sin dejarlo caer.', syn: ['vóleibol', 'deporte'], ant: [] },
      en: { def: 'Team sport where players hit a ball over a net without letting it fall.', syn: ['volleyball', 'sport'], ant: [] },
      eu: { def: 'Talde-kirola, jokalarek sare baten gainean baloiari erortzen utzi gabe jotzen duten.', syn: ['boleibola'], ant: [] } },
    { word: 'RUGBY', display: 'Rugby', category: 'deportes', emoji: '🏉',
      es: { def: 'Deporte de equipo en que los jugadores corren con un balón ovalado y pasan a sus compañeros.', syn: ['fútbol americano', 'deporte de contacto'], ant: [] },
      en: { def: 'Team sport where players run with an oval ball and pass to teammates.', syn: ['american football', 'contact sport'], ant: [] },
      eu: { def: 'Talde-kirola, jokalarek pilota obala hartuta lasterka egiten duten.', syn: ['kirol kontaktua'], ant: [] } },
    { word: 'ESGRIMA', display: 'Esgrima', category: 'deportes', emoji: '🤺',
      es: { def: 'Arte marcial y deporte de combate con espadas, floretes o sables, buscando tocar al rival.', syn: ['espadachín', 'duelo'], ant: [] },
      en: { def: 'Martial art and combat sport with swords, foils or sabres, aiming to touch the opponent.', syn: ['swordplay', 'fencing'], ant: [] },
      eu: { def: 'Ezpata, florete edo sablee bidezko borroka kirol eta arte martzial bat.', syn: ['ezpatakada', 'duela'], ant: [] } },
    { word: 'JUDO', display: 'Judo', category: 'deportes', emoji: '🥋',
      es: { def: 'Arte marcial japonés y deporte olímpico que busca derribar al oponente o inmovilizarlo.', syn: ['artes marciales', 'lucha'], ant: [] },
      en: { def: 'Japanese martial art and Olympic sport aiming to throw or immobilise the opponent.', syn: ['martial arts', 'wrestling'], ant: [] },
      eu: { def: 'Japoniako arte martzial eta kirol olinpikoa, aurkaria botatzea edo immobilizatzea bilatzen duena.', syn: ['arte martzialak'], ant: [] } },
    { word: 'ESCALADA', display: 'Escalada', category: 'deportes', emoji: '🧗',
      es: { def: 'Deporte que consiste en subir paredes de roca o superficies artificiales usando pies y manos.', syn: ['alpinismo', 'montañismo'], ant: [] },
      en: { def: 'Sport of climbing rock walls or artificial surfaces using hands and feet.', syn: ['rock climbing', 'mountaineering'], ant: [] },
      eu: { def: 'Harkaitz-hormak edo gainazal artifizialak esku eta oinak erabiliz igotzean datzan kirola.', syn: ['alpinismoa', 'mendizaletasuna'], ant: [] } },
    { word: 'ESQUI', display: 'Esquí', category: 'deportes', emoji: '⛷️',
      es: { def: 'Deporte deslizante de invierno sobre nieve usando tablones especiales atados a los pies.', syn: ['esquiar', 'deporte de nieve'], ant: [] },
      en: { def: 'Winter sliding sport on snow using special boards attached to the feet.', syn: ['skiing', 'winter sport'], ant: [] },
      eu: { def: 'Negualdiko kirol irristakorra elurraren gainean, oinetara lotutako ohol bereziak erabiliz.', syn: ['eskiatu', 'elur kirolak'], ant: [] } },
    { word: 'MARATON', display: 'Maratón', category: 'deportes', emoji: '🏃',
      es: { def: 'Carrera atlética de 42,195 km, una de las pruebas más exigentes de resistencia.', syn: ['carrera', 'resistencia'], ant: [] },
      en: { def: 'Athletic race of 42.195 km, one of the most demanding endurance events.', syn: ['race', 'endurance'], ant: [] },
      eu: { def: '42,195 km-ko atletismo-lasterketa, iraunkortasun probrik eskatuenetako bat.', syn: ['lasterketa'], ant: [] } },
    { word: 'ARBITRO', display: 'Árbitro', category: 'deportes', emoji: '🏅',
      es: { def: 'Persona que dirige y hace cumplir las reglas en un partido o competición deportiva.', syn: ['juez', 'referí'], ant: [] },
      en: { def: 'Person who directs and enforces rules in a match or sporting competition.', syn: ['referee', 'judge', 'umpire'], ant: [] },
      eu: { def: 'Kirol-partida edo txapelketan arauak zuzendu eta betetarazten dituen pertsona.', syn: ['epailea', 'erreferee'], ant: [] } },
    { word: 'PORTERO', display: 'Portero', category: 'deportes', emoji: '🧤',
      es: { def: 'Jugador que defiende la portería e intenta impedir los goles del equipo contrario.', syn: ['guardameta', 'cancerbero'], ant: ['delantero', 'atacante'] },
      en: { def: 'Player who defends the goal and tries to prevent the opposing team from scoring.', syn: ['goalkeeper', 'goalie'], ant: ['striker', 'forward'] },
      eu: { def: 'Ateak defendatzen eta aurkako taldearen golak saihesten saiatzen den jokalaria.', syn: ['atezain', 'portaria'], ant: ['aurrelari'] } },
    { word: 'CAMPEON', display: 'Campeón', category: 'deportes', emoji: '🏆',
      es: { def: 'Deportista o equipo que gana el primer puesto en una competición oficial.', syn: ['ganador', 'vencedor', 'triunfador'], ant: ['perdedor', 'subcampeón'] },
      en: { def: 'Athlete or team that wins first place in an official competition.', syn: ['winner', 'victor', 'titleholder'], ant: ['loser', 'runner-up'] },
      eu: { def: 'Lehiaketa ofizial batean lehen postua lortzen duen kirolarria edo taldea.', syn: ['irabazle', 'txapeldun'], ant: ['galtzaile'] } },

    // ── TECNOLOGÍA ───────────────────────────────────────────────────────────
    { word: 'ORDENADOR', display: 'Ordenador', category: 'tecnologia', emoji: '💻',
      es: { def: 'Máquina electrónica que procesa información según instrucciones programadas.', syn: ['computadora', 'PC', 'computador'], ant: [] },
      en: { def: 'Electronic machine that processes information according to programmed instructions.', syn: ['computer', 'PC', 'processor'], ant: [] },
      eu: { def: 'Programatutako argibideen arabera informazioa prozesatzen duen makina elektronikoa.', syn: ['konputagailua', 'ordenagailua'], ant: [] } },
    { word: 'INTERNET', display: 'Internet', category: 'tecnologia', emoji: '🌐',
      es: { def: 'Red mundial de ordenadores interconectados que permite compartir información globalmente.', syn: ['web', 'red', 'ciberespacio'], ant: [] },
      en: { def: 'Global network of interconnected computers enabling worldwide information sharing.', syn: ['web', 'network', 'cyberspace'], ant: [] },
      eu: { def: 'Ordenagailu interkonektatuen sare globala, informazioa mundu osoan partekatzeko aukera ematen duena.', syn: ['sarea', 'web'], ant: [] } },
    { word: 'ALGORITMO', display: 'Algoritmo', category: 'tecnologia', emoji: '🔢',
      es: { def: 'Conjunto de instrucciones ordenadas que resuelven un problema o realizan una tarea.', syn: ['procedimiento', 'método', 'programa'], ant: [] },
      en: { def: 'Ordered set of instructions that solve a problem or perform a task.', syn: ['procedure', 'method', 'program'], ant: [] },
      eu: { def: 'Arazo bat ebazten edo zeregin bat betetzen duten instrukzio multzo ordenatua.', syn: ['prozedura', 'metodoa'], ant: [] } },
    { word: 'PROGRAMA', display: 'Programa', category: 'tecnologia', emoji: '💾',
      es: { def: 'Conjunto de instrucciones escritas en un lenguaje de programación que ejecuta un ordenador.', syn: ['software', 'aplicación', 'código'], ant: [] },
      en: { def: 'Set of instructions written in a programming language that a computer executes.', syn: ['software', 'application', 'code'], ant: [] },
      eu: { def: 'Ordenagailu batek exekutatzen dituen programazio-lengoaia batean idatzitako instrukzio multzoa.', syn: ['softwarea', 'aplikazioa', 'kodea'], ant: [] } },
    { word: 'SERVIDOR', display: 'Servidor', category: 'tecnologia', emoji: '🖥️',
      es: { def: 'Ordenador potente que almacena datos y los distribuye a otros ordenadores conectados en red.', syn: ['host', 'nodo'], ant: ['cliente'] },
      en: { def: 'Powerful computer that stores data and distributes it to other computers on a network.', syn: ['host', 'node'], ant: ['client'] },
      eu: { def: 'Datuak gordetzen eta sareko beste ordenagailuei banatzen dizkien ordenagailu boteretsu bat.', syn: ['ostalaria', 'nodoa'], ant: ['bezeroa'] } },
    { word: 'PIXEL', display: 'Píxel', category: 'tecnologia', emoji: '🖼️',
      es: { def: 'Unidad mínima de información de una imagen digital, punto de color en una pantalla.', syn: ['punto', 'elemento', 'bit'], ant: [] },
      en: { def: 'Minimum unit of information in a digital image, coloured dot on a screen.', syn: ['point', 'element', 'dot'], ant: [] },
      eu: { def: 'Irudi digital baten gutxieneko informazio-unitatea, pantailako kolore-puntua.', syn: ['puntua', 'elementua'], ant: [] } },
    { word: 'ROBOT', display: 'Robot', category: 'tecnologia', emoji: '🤖',
      es: { def: 'Máquina automática programable que puede realizar tareas propias de los humanos.', syn: ['autómata', 'androide', 'maquina'], ant: [] },
      en: { def: 'Programmable automatic machine that can perform human-like tasks.', syn: ['automaton', 'android', 'machine'], ant: [] },
      eu: { def: 'Giza zereginak egin ditzakeen makina automatiko programagarri bat.', syn: ['automata', 'andoidea'], ant: [] } },
    { word: 'CHIP', display: 'Chip', category: 'tecnologia', emoji: '🔌',
      es: { def: 'Circuito integrado diminuto que contiene millones de transistores y realiza funciones electrónicas.', syn: ['microchip', 'procesador', 'circuito'], ant: [] },
      en: { def: 'Tiny integrated circuit containing millions of transistors that performs electronic functions.', syn: ['microchip', 'processor', 'circuit'], ant: [] },
      eu: { def: 'Milioika transistore dituen zirkuitu integratua, funtzio elektronikoak egiten dituena.', syn: ['mikrotxipa', 'prozesadorea'], ant: [] } },
    { word: 'SATELITE', display: 'Satélite', category: 'tecnologia', emoji: '🛰️',
      es: { def: 'Objeto artificial que orbita la Tierra y sirve para comunicaciones, GPS o ciencia.', syn: ['nave', 'sonda'], ant: [] },
      en: { def: 'Artificial object orbiting Earth used for communications, GPS or science.', syn: ['spacecraft', 'probe'], ant: [] },
      eu: { def: 'Lurraren inguruan orbitatzen duen objektu artifiziala, komunikazio, GPS edo zientziarako.', syn: ['ontzia', 'zunda'], ant: [] } },
    { word: 'CODIGO', display: 'Código', category: 'tecnologia', emoji: '👨‍💻',
      es: { def: 'Conjunto de instrucciones escritas en un lenguaje de programación para crear software.', syn: ['programa', 'fuente', 'script'], ant: [] },
      en: { def: 'Set of instructions written in a programming language to create software.', syn: ['program', 'source', 'script'], ant: [] },
      eu: { def: 'Softwarea sortzeko programazio-lengoaian idatzitako instrukzio multzoa.', syn: ['programa', 'scripta'], ant: [] } },
    { word: 'TECLADO', display: 'Teclado', category: 'tecnologia', emoji: '⌨️',
      es: { def: 'Dispositivo de entrada del ordenador con teclas que representan letras, números y símbolos.', syn: ['periférico', 'entrada'], ant: [] },
      en: { def: 'Computer input device with keys representing letters, numbers and symbols.', syn: ['peripheral', 'input device'], ant: [] },
      eu: { def: 'Letrak, zenbakiak eta sinboloak irudikatzen dituzten teklak dituen ordenagailu-sarrera gailua.', syn: ['periferiala'], ant: [] } },
    { word: 'MONITOR', display: 'Monitor', category: 'tecnologia', emoji: '🖥️',
      es: { def: 'Pantalla electrónica de salida que muestra la información procesada por el ordenador.', syn: ['pantalla', 'display', 'pantalla'], ant: [] },
      en: { def: 'Electronic output screen that displays information processed by the computer.', syn: ['screen', 'display'], ant: [] },
      eu: { def: 'Ordenagailuak prozesatutako informazioa erakusten duen irteera-pantaila elektronikoa.', syn: ['pantaila'], ant: [] } },
    { word: 'BATERIA', display: 'Batería', category: 'tecnologia', emoji: '🔋',
      es: { def: 'Dispositivo que almacena energía química y la convierte en electricidad para alimentar aparatos.', syn: ['pila', 'acumulador'], ant: [] },
      en: { def: 'Device that stores chemical energy and converts it to electricity to power devices.', syn: ['cell', 'accumulator'], ant: [] },
      eu: { def: 'Energia kimikoa gordetzen eta tresnak elikatzeko elektronikatara bihurtzen duen gailua.', syn: ['pila', 'metatzaile'], ant: [] } },
    { word: 'PROCESADOR', display: 'Procesador', category: 'tecnologia', emoji: '⚙️',
      es: { def: 'Componente central del ordenador que ejecuta instrucciones y realiza cálculos.', syn: ['CPU', 'microprocesador', 'chip'], ant: [] },
      en: { def: 'Central component of a computer that executes instructions and performs calculations.', syn: ['CPU', 'microprocessor', 'chip'], ant: [] },
      eu: { def: 'Ordenagailuaren erdiko osagaia, instrukzioak exekutatzen eta kalkuluak egiten dituena.', syn: ['CPU', 'txipa'], ant: [] } },
    { word: 'ANTENA', display: 'Antena', category: 'tecnologia', emoji: '📡',
      es: { def: 'Dispositivo que emite o recibe ondas electromagnéticas para comunicaciones inalámbricas.', syn: ['receptor', 'emisor', 'transmisor'], ant: [] },
      en: { def: 'Device that emits or receives electromagnetic waves for wireless communications.', syn: ['receiver', 'transmitter', 'aerial'], ant: [] },
      eu: { def: 'Komunikazio harietatarako uhin elektromagnetikoak igortzen edo jasotzen dituen gailua.', syn: ['hartzailea', 'igorgailua'], ant: [] } }
];
