/**
 * TypeMaster - Corpus of typing texts
 * Level 1: home row only (language-agnostic)
 * Levels 2-10: localised texts for es-ES, en-US, eu-ES
 */

const TYPING_TEXTS = {
    1: { // Home row Spanish QWERTY ES: a s d f g h j k l ñ + space
        all: [
            'asdf jklñ asdf jklñ asdf',
            'fdsa ñlkj fdsa ñlkj fdsa',
            'aaa sss ddd fff ggg hhh jjj kkk lll ñññ',
            'asdfghjklñ asdfghjklñ',
            'fg hj fg hj fghj fghj asdf klñ',
            'sal flan gala hall flask',
            'dañas faja jala llañas gaña',
            'asdf ghjk lñ asdf ghjk lñ',
            'ñoño daña gañan jala halag'
        ]
    },
    2: {
        'es-ES': [
            'la casa es grande y bonita',
            'el sol brilla en el cielo',
            'mi gato duerme en el sofa',
            'hay un perro en el parque',
            'el mar es azul y profundo',
            'leo libros todos los dias',
            'tengo dos hermanos y una hermana',
            'el nino juega con su pelota roja'
        ],
        'en-US': [
            'the cat sat on the mat',
            'my dog runs fast in the park',
            'the sun is bright today',
            'I like to read books every day',
            'there is a bird in the tree',
            'she plays with her red ball',
            'the sky is blue and clear',
            'we go to school in the morning'
        ],
        'eu-ES': [
            'etxea handia da eta ederra',
            'katu bat etxean dago lo',
            'eguzkia distiratsua da gaur',
            'nire txakurra azkar korrika egiten du',
            'liburu bat irakurtzen dut egunero',
            'ura garbia eta freskoa da',
            'sagarra goxoa da eta osasuntsua',
            'haurra parkean jolasten ari da'
        ]
    },
    3: {
        'es-ES': [
            'el perro corre por el jardin verde.',
            'la mariposa vuela sobre las flores del campo.',
            'leo un libro muy interesante esta tarde.',
            'tengo un perro que se llama roco.',
            'me gusta jugar al futbol con mis amigos.',
            'el cocinero prepara una sopa muy rica.',
            'los pajaros cantan cuando sale el sol.',
            'mañana vamos de excursion al bosque cercano.',
            'el tren llega puntual a la estacion central.',
            'mi abuela hace el mejor pastel del mundo.'
        ],
        'en-US': [
            'the dog runs quickly through the green garden.',
            'the butterfly flies above the colorful flowers.',
            'I read a very interesting book this afternoon.',
            'I have a dog whose name is Rocky.',
            'I love playing football with my best friends.',
            'the cook prepares a very delicious soup.',
            'the birds sing when the sun rises.',
            'tomorrow we go on a trip to the forest.',
            'the train arrives on time at the central station.',
            'my grandmother makes the best cake in the world.'
        ],
        'eu-ES': [
            'txakurrak azkar korrika egiten du lorategian.',
            'tximeleta loreen gainetik hegan egiten du.',
            'liburu interesgarri bat irakurtzen dut arratsaldean.',
            'roko izena duen txakur bat daukat.',
            'futbola jolasten gustatzen zait lagun artean.',
            'sukaldariak zopa goxo bat prestatzen du.',
            'txoriak eguzkia ateratzen denean abesten dute.',
            'bihar basora joango gara txango bat egitera.'
        ]
    },
    4: { // Introduces capital letters
        'es-ES': [
            'España es un país muy bonito de Europa.',
            'Hola, me llamo María y tengo diez años.',
            'El río Nilo es el más largo del mundo.',
            'Los lunes voy al colegio con mi mochila.',
            'Madrid es la capital de España desde 1561.',
            'El Mediterráneo baña las costas de España.',
            'Mi cumpleaños es el quince de Agosto.',
            'La Torre Eiffel está en París, Francia.',
            'Colón llegó a América en mil cuatrocientos noventa y dos.',
            'El Monte Everest es la montaña más alta del mundo.'
        ],
        'en-US': [
            'Spain is a beautiful country in Europe.',
            'Hello, my name is Maria and I am ten years old.',
            'The Nile River is the longest in the world.',
            'On Mondays I go to school with my backpack.',
            'London is the capital city of England.',
            'The Pacific Ocean is the largest ocean on Earth.',
            'My birthday is on the fifteenth of August.',
            'The Eiffel Tower is in Paris, France.',
            'Columbus arrived in America in fourteen ninety-two.',
            'Mount Everest is the highest mountain in the world.'
        ],
        'eu-ES': [
            'Espainia Europako herrialde polita da.',
            'Kaixo, nire izena Miren da eta hamar urte ditut.',
            'Nilo ibaia munduko luzeena da.',
            'Astelehen guztietan eskolara joaten naiz motxilarekin.',
            'Bilbo Euskal Herriko hiri handiena da.',
            'Atlantiko ozeanoa Euskal Herriaren ondoan dago.',
            'Nire urtebetetzea Abuztuko hamabostean da.',
            'Eiffel dorrea Parisen dago, Frantzian.',
            'Everest mendia munduko altuena da.',
            'Donostia itsasoko hiri ederra da.'
        ]
    },
    5: { // Numbers and basic punctuation
        'es-ES': [
            'Hay 7 días en una semana y 12 meses en un año.',
            'La suma de 5 + 3 = 8, y 10 - 4 = 6.',
            '¿Cuántos años tienes? Tengo 10 años.',
            'El examen empieza a las 9:30 de la mañana.',
            'Necesito 3 huevos, 2 tazas de harina y 1 vaso de leche.',
            'El tren de las 8:15 llega a las 10:45.',
            'Mi número de teléfono es el 654-321-098.',
            'En el año 2024 hay 366 días (es año bisiesto).',
            'El precio es 12,50 euros; con descuento, 9,99 euros.',
            'Capítulo 3, página 47: los dinosaurios vivieron hace 65 millones de años.'
        ],
        'en-US': [
            'There are 7 days in a week and 12 months in a year.',
            'The sum of 5 + 3 = 8, and 10 - 4 = 6.',
            'How old are you? I am 10 years old.',
            'The exam starts at 9:30 in the morning.',
            'I need 3 eggs, 2 cups of flour, and 1 glass of milk.',
            'The 8:15 train arrives at 10:45.',
            'My phone number is 654-321-098.',
            'In 2024 there are 366 days (it is a leap year).',
            'The price is $12.50; with a discount, $9.99.',
            'Chapter 3, page 47: dinosaurs lived 65 million years ago.'
        ],
        'eu-ES': [
            'Astean 7 egun daude eta urtean 12 hilabete.',
            '5 gehi 3 berdin 8 da, eta 10 ken 4 berdin 6.',
            'Zenbat urte dituzu? Hamar urte ditut.',
            'Azterketa 9:30ean hasten da goizean.',
            '3 arrautza, 2 irin kopa eta 1 esne edalontzi behar ditut.',
            '8:15eko trena 10:45ean iristen da.',
            'Nire telefono zenbakia 654-321-098 da.',
            '2024. urtean 366 egun daude (urte bisestoa da).',
            'Prezioa 12,50 euro da; deskontuarekin, 9,99 euro.',
            '3. kapitulua, 47. orrialdea: dinosauruak duela 65 milioi urte bizi ziren.'
        ]
    },
    6: { // Spanish accents: á é í ó ú ñ ü
        'es-ES': [
            'El niño come jamón y melón de postre.',
            'Mañana iremos a la montaña a hacer senderismo.',
            'La música clásica me pone de muy buen humor.',
            'Mi mamá prepara paella valenciana los domingos.',
            'El árbol creció muy rápido después de la lluvia.',
            '¡Qué día más bonito! ¿Salimos al parque a jugar?',
            'El camión azul pasó por el túnel a gran velocidad.',
            'Según el médico, debo beber más agua y dormir más horas.',
            'El colibrí es un pájaro pequeño que vuela muy rápido.',
            'La educación es el arma más poderosa para cambiar el mundo.'
        ],
        'en-US': [ // More complex punctuation for EN at this level
            '"What time is it?" she asked with a smile.',
            'I have three hobbies: reading, coding, and swimming.',
            'The movie starts at 7:30 p.m.! Don\'t be late.',
            '"To be or not to be, that is the question." - Shakespeare',
            'She said, "I love learning new things every day!"',
            'The recipe calls for: flour, sugar, eggs, and butter.',
            'First prize: a gold medal; second: silver; third: bronze.',
            'My favorite fruits are mangoes, strawberries, and peaches.',
            'He ran 5 km in 23:45 — a new personal record!',
            '"Knowledge is power," said Sir Francis Bacon in 1597.'
        ],
        'eu-ES': [
            'Mutikoak xingola jan eta meloia hartu zuen postre gisa.',
            'Bihar mendira joango gara ibilaldi bat egitera.',
            'Musika klasikoa oso gustuko dut; lasaitzen nau.',
            'Amak igandero babarrun zopa prestatzen du.',
            'Zuhaitza azkar hazi zen euria egin ondoren.',
            'Zer egun polita! Parkera joango gara jolastera?',
            'Kamioi urdina tunelean barrena abiadura bizian igaro zen.',
            'Medikuaren arabera, ur gehiago edan eta lo gehiago egin behar dut.',
            'Kolibria txori txiki bat da, oso azkar hegan egiten duena.',
            'Hezkuntza mundua aldatzeko armarik indartsuena da.'
        ]
    },
    7: { // Full sentences, all characters
        'es-ES': [
            'La tecnología digital transforma el mundo a una velocidad impresionante.',
            '¡Hola! ¿Cómo estás hoy? Espero que muy bien, gracias.',
            'Aprender a teclear rápido es una habilidad fundamental en el siglo XXI.',
            'El fútbol es el deporte más popular de España y de todo el mundo.',
            'Los científicos trabajan incansablemente para curar enfermedades graves.',
            'La Constitución española fue aprobada el 6 de diciembre de 1978.',
            '"El que no arriesga, no gana." Así reza el refrán popular.',
            'Recuerda siempre: los errores son oportunidades para aprender y mejorar.',
            'Las energías renovables (solar, eólica, hidráulica) son el futuro.',
            'La Tierra tarda 365 días y 6 horas en dar la vuelta al Sol.'
        ],
        'en-US': [
            'Digital technology transforms the world at an impressive speed.',
            'Hello! How are you today? I hope you are doing very well!',
            'Learning to type fast is a fundamental skill in the 21st century.',
            'Football (soccer) is the most popular sport in the world.',
            'Scientists work tirelessly to find cures for serious diseases.',
            'The United States Constitution was signed on September 17, 1787.',
            '"He who does not risk, does not win." — an old proverb.',
            'Always remember: mistakes are opportunities to learn and improve.',
            'Renewable energies (solar, wind, and water) are the future.',
            'Earth takes 365 days and 6 hours to orbit around the Sun.'
        ],
        'eu-ES': [
            'Teknologia digitalak mundua abiadura harrigarrian eraldatzen du.',
            'Kaixo! Nola zaude gaur? Espero nago ondo zaudela!',
            'Idazketa azkarra ikastea XXI. mendeko oinarrizko trebetasuna da.',
            'Futbola munduko kirol ezagunena da.',
            'Zientzialariek nekagabe lan egiten dute gaixotasun larriak sendatzeko.',
            'Euskal Autonomia Estatutua 1979ko abenduaren 18an onartu zen.',
            '"Arriskatu ezean, ez da irabazten." — esaera zaharra.',
            'Gogoan izan: akatsak ikasteko aukerak dira.',
            'Energia berriztagarriak (eguzkia, haizea, ura) etorkizuna dira.',
            'Lurrak 365 egun eta 6 ordu behar ditu Eguzkiaren inguruan biratzeko.'
        ]
    },
    8: { // Short paragraphs - speed practice
        'es-ES': [
            'El sol es la estrella más cercana a la Tierra. Se encuentra a unos 150 millones de kilómetros de distancia. Sin el sol, no habría vida en nuestro planeta azul.',
            'La lectura es uno de los mejores hábitos que puedes cultivar. Los libros nos transportan a mundos desconocidos y nos hacen aprender cosas nuevas cada día. ¡Lee 20 minutos al día y verás los resultados!',
            'El agua cubre más del 70% de la superficie de la Tierra. Sin embargo, solo el 3% es agua dulce, y la mayoría está atrapada en los glaciares. Cuidar el agua es responsabilidad de todos.',
            'Los dinosaurios dominaron la Tierra durante 165 millones de años. Se extinguieron hace unos 66 millones de años, probablemente por el impacto de un meteorito gigante en el actual México.',
            'Internet ha cambiado la forma en que vivimos, trabajamos y nos comunicamos. Hoy podemos hablar con personas al otro lado del planeta en tiempo real. Es, sin duda, una de las mayores invenciones humanas.'
        ],
        'en-US': [
            'The sun is the closest star to Earth. It is about 150 million kilometers away. Without the sun, there would be no life on our blue planet.',
            'Reading is one of the best habits you can develop. Books take us to unknown worlds and help us learn new things every day. Read 20 minutes a day and you will see the results!',
            'Water covers more than 70% of Earth\'s surface. However, only 3% is fresh water, and most of it is trapped in glaciers. Taking care of water is everyone\'s responsibility.',
            'Dinosaurs dominated the Earth for 165 million years. They went extinct about 66 million years ago, probably due to the impact of a giant meteorite in present-day Mexico.',
            'The Internet has changed the way we live, work, and communicate. Today we can talk to people on the other side of the planet in real time. It is, without doubt, one of the greatest human inventions.'
        ],
        'eu-ES': [
            'Eguzkia Lurretik gertuena dagoen izarra da. 150 milioi kilometrora dago gutxi gorabehera. Eguzkia gabe, ez legoke bizitzarik gure planeta urdinean.',
            'Irakurketa lantzen ditzakezun ohiturarik onenetako bat da. Liburuek mundu ezezagunetan barrena eramaten gaituzte eta gauza berriak ikasten laguntzen digute. Irakurri 20 minutu egunero eta emaitzak ikusiko dituzu!',
            'Urak Lurraren azaleraren % 70 baino gehiago estaltzen du. Hala ere, % 3 soilik da ur geza, eta gehiena glaziarretan dago harrapatuta. Uraren zaintza denon erantzukizuna da.',
            'Dinosauruak 165 milioi urtez nagusitu ziren Lurrean. Duela 66 milioi urte inguru desagertu ziren, seguruenik gaur egungo Mexikon erori zen meteorito erraldoi baten inpaktuagatik.',
            'Internetek bizi, lan eta komunikatzeko modua aldatu du. Gaur egun, denbora errealean hitz egin dezakegu planetaren beste aldean dauden pertsonekin. Zalantzarik gabe, gizakiaren asmakizun handienetako bat da.'
        ]
    },
    9: { // Medium paragraphs
        'es-ES': [
            'España es un país situado en el suroeste de Europa. Tiene una población de casi 47 millones de personas y su capital es Madrid. El idioma oficial es el español, aunque en algunas comunidades también se hablan el catalán, el euskera y el gallego. España es famosa por su gastronomía, su arquitectura y sus playas.',
            'El sistema solar está formado por el Sol y todos los cuerpos celestes que orbitan a su alrededor. Hay ocho planetas: Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno. La Tierra es el único planeta conocido que alberga vida. ¡Y nosotros somos sus afortunados habitantes!',
            'La inteligencia artificial está cambiando el mundo a gran velocidad. Los ordenadores ya pueden reconocer imágenes, traducir idiomas y escribir textos. Aunque esto abre muchas posibilidades, también plantea desafíos éticos importantes. El futuro pertenece a quienes sepan usar esta tecnología de forma responsable.'
        ],
        'en-US': [
            'Spain is a country located in the southwest of Europe. It has a population of almost 47 million people and its capital is Madrid. The official language is Spanish, although in some regions Catalan, Basque, and Galician are also spoken. Spain is famous for its gastronomy, architecture, and beaches.',
            'The solar system consists of the Sun and all the celestial bodies that orbit around it. There are eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. Earth is the only known planet that harbors life. And we are its lucky inhabitants!',
            'Artificial intelligence is changing the world at great speed. Computers can now recognize images, translate languages, and write texts. While this opens up many possibilities, it also raises important ethical challenges. The future belongs to those who know how to use this technology responsibly.'
        ],
        'eu-ES': [
            'Espainia Europako hego-mendebaldean kokatutako herrialdea da. Ia 47 milioi biztanle ditu eta hiriburua Madril da. Hizkuntza ofiziala gaztelania da, nahiz eta zenbait erkidegok katalana, euskara eta galiziera ere hitz egiten dituzten. Espainia gastronomia, arkitektura eta hondartzagatik da ezaguna.',
            'Eguzki-sistema Eguzkiaz eta haren inguruan orbitatzen duten gorputz zelestialekin dago osatua. Zortzi planeta daude: Merkurio, Artizarra, Lurra, Marte, Jupiter, Saturno, Urano eta Neptuno. Lurra bizitzea duen planeta ezagun bakarra da. Eta gu gara haren biztanle zoriontsuak!',
            'Adimen artifizialak mundua abiadura handian aldatzen ari da. Ordenagailuek dagoeneko irudiak ezagutu, hizkuntzak itzuli eta testuak idatz ditzakete. Honek aukera ugari irekitzen dituen arren, erronka etiko garrantzitsuak ere planteatzen ditu. Etorkizuna teknologia hau arduratsuki erabiltzea dakienena da.'
        ]
    },
    10: { // Long paragraphs - advanced
        'es-ES': [
            '"El único modo de hacer un gran trabajo es amar lo que haces." Esta frase, atribuida a Steve Jobs, resume perfectamente la importancia de la pasión en cualquier actividad. Cuando disfrutas de lo que haces, el esfuerzo no parece esfuerzo, y los resultados suelen ser extraordinarios. No te conformes con hacer algo bien; aspira siempre a la excelencia.',
            'La mecanografía es una habilidad que, una vez adquirida, no se olvida jamás. Al principio puede parecer difícil memorizar la posición de todas las teclas, pero con práctica constante, los dedos aprenden a moverse solos. Hoy en día, saber escribir rápido y con precisión es una ventaja competitiva enorme en el mundo laboral y académico.',
            'El cerebro humano es el órgano más complejo del universo conocido. Contiene aproximadamente 86.000 millones de neuronas, cada una conectada a miles de otras. Estas conexiones forman redes que nos permiten pensar, sentir, recordar y crear. Lo fascinante es que el cerebro nunca deja de aprender: se puede moldear a cualquier edad con la práctica y el esfuerzo adecuados.'
        ],
        'en-US': [
            '"The only way to do great work is to love what you do." This quote, attributed to Steve Jobs, perfectly summarizes the importance of passion in any activity. When you enjoy what you do, effort does not feel like effort, and the results are usually extraordinary. Do not settle for doing something well; always aspire to excellence.',
            'Touch typing is a skill that, once acquired, is never forgotten. At first it may seem difficult to memorize the position of all the keys, but with consistent practice, your fingers learn to move on their own. Today, knowing how to type quickly and accurately is a huge competitive advantage in the professional and academic world.',
            'The human brain is the most complex organ in the known universe. It contains approximately 86 billion neurons, each connected to thousands of others. These connections form networks that allow us to think, feel, remember, and create. The fascinating thing is that the brain never stops learning: it can be shaped at any age with the right practice and effort.'
        ],
        'eu-ES': [
            '"Lan handia egiteko modu bakarra da maite duzuna egitea." Steve Jobsi egozten zaion esaldi honek ezin hobeto laburbiltzen du pasioarekiko garrantzia. Gustuko duzuna egiten duzunean, ahalegina ez da ahalegina ematen, eta emaitzak izugarriak izaten dira. Ez konformatu zerbait ongi egitearekin; beti aspira bikaintasunera.',
            'Mekanografia inoiz ahazten ez den trebetasuna da, behin ikasita. Hasieran zaila dirudi tekla guztien posizioa buruz ikastea, baina etengabeko praktikarekin, hatzak berez mugitzen ikasten dute. Gaur egun, azkar eta zehaztasunez idazten jakitea abantaila lehiakor izugarria da lan eta ikaskuntza munduan.',
            'Giza garuna unibertso ezaguneko organorik konplexuena da. Gutxi gorabehera 86.000 milioi neurona ditu, bakoitza beste milarekin konektatua. Konexio hauek sare bat osatzen dute, pentsatzeko, sentitzeko, gogoratzeko eta sortzeko aukera ematen diguna. Gauza liluragarria da garuna ez dela inoiz ikastea gelditzen: edozein adinetan moldatu daiteke praktika eta ahalegin egokiarekin.'
        ]
    }
};
