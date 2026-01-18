import type { Student } from '../types';

/**
 * Student portfolio data
 * 
 * This is the central data source for all student information.
 * TypeScript provides compile-time type checking to ensure data validity.
 */
export const studentsData: Student[] = [
  {
    "studentID": 1,
    "nfcID": "E00403500EEA6ABE",
    "surname": "Ackerl",
    "name": "Magdalena",
    "major": "MD",
    "aboutMe": "I am a motion designer rooted in graphic design, driven by strong concepts, emotion and visual clarity.  By working project-focused between concept, design and motion, I translate ideas into clean visual systems. Freelancing for 4+ years, currently co-founding Studio Matria.",
    "skills": [
      "Motion Design",
      "Graphic Design",
      "Visual Identity",
      "Animation"
    ],
    "portfolioLink": "www.magdalena-ackerl.com",
    "experiences": [
      {
        "years": "2021- now",
        "company": "Freelance",
        "position": "Graphic and Motion-Design"
      },
      {
        "years": "2021-26",
        "company": "FH JOANNEUM",
        "position": "BA Informationsdesign; \nMA Media Design"
      },
      {
        "years": "2018-2024",
        "company": "5+ Internships: ",
        "position": "Studio Käfig, Porsche Media, Tintifax …"
      },
      {
        "years": "2016-2021 ",
        "company": "HTBLuVA Salzburg ",
        "position": "Grafik- & Kommunikationsdesign"
      }
    ],
    "projects": [
      {
        "title": "Electric Love Festival Visuals\nBonnie Callini",
        "year": "2025",
        "type": [
          "Stage Visuals",
          "Motion Design",
          "Animation"
        ],
        "client": "Bonnie Callini",
        "collaborators": "Tanja Kobler",
        "about": "Stage visuals for a two-hour live DJ set by Bonnie Callini at Electric Love Festival 2025. The visuals combine bold, flashy textures with smooth chrome-like motion, translating Bonnie’s energetic, fiery sound into a vibrant and immersive visual experience."
      },
      {
        "title": "ORF Koralmbahn Opening Light Installation",
        "year": "2025",
        "type": [
          "Motion Design",
          "Animation",
          "Licht-Installation"
        ],
        "client": "ORF Steiermark\nFH Joanneum",
        "collaborators": "Tanja Kobler",
        "about": "For the ceremonial opening of the Koralmbahn, broadcasted live on ORF 2, we designed and developed animations tailored to a light installation in the ORF-studio. The visuals framed interviews and were played live during the broadcast, creating a contemporary and cohesive on-air experience. The project was created in close collaboration with ORF Steiermark and FH JOANNEUM"
      },
      {
        "title": "Mumuth in Motion — Permanent Exhibition Piece",
        "year": "2025",
        "type": [
          "Motion Design",
          "Animation",
          "Explainer",
          "Exhibition"
        ],
        "client": "Mumuth – Kunst Uni Graz",
        "collaborators": "/",
        "about": "Created as part of the permanent exhibition in the foyer of MUMUTH, this video translates archival photos, videos, sketches, and architectural plans — including material by Ben van Berkel — into a clear, coherent motion piece that reflects the building’s aesthetic. \nThe videos shown here are a shortened preview of the original eight-minute film."
      },
      {
        "title": "Motion Graphics: What brings people together?",
        "year": "2024",
        "type": [
          "Motion Design",
          "Animation",
          "Concept"
        ],
        "client": "FH Joanneum",
        "collaborators": "/",
        "about": "What truly connects us?In a divided world, this short video explores the universal threads that connect us — the small, human things: acts of kindness, shared stories, celebrations, art, and sport. Told through minimalistic graphic layouts and expressive motion design, the project reflects on unity— as a mosaic of moments rather than a single answer. Let’s design a world that brings us together"
      },
      {
        "title": "Design and Motion Collection",
        "year": "2024-25",
        "type": [
          "Motion Design",
          "Animation",
          "Artworks"
        ],
        "client": "Various clients (Naturschutzgebiete Hamburg, Linde Verlag, TheFleur)",
        "collaborators": "/",
        "about": "A curated collection of motion design works created between 2024 and 2025. The selection includes collaborations with Studio Käfig in Hamburg, advertising visuals for MeiMarie by Linde Verlag, festival visuals for Generate25, cover art for TheFleur and various academic projects."
      }
    ]
  },
  {
    "studentID": 2,
    "nfcID": "E00403500ECBBD2C",
    "surname": "Adlberger",
    "name": "David",
    "major": "SD",
    "aboutMe": "Sound designer and media artist based in Graz, exploring narrative, technology, and perception. Works span film sound, 3D audio, algorithmic composition, and audiovisual installations. Under the alias “added value,” investigates boundaries of sound, image, and digital identity.",
    "skills": [
      "sound design",
      "experimental tech",
      "mix and master",
      "technical",
      "audiovisual",
      "recording"
    ],
    "portfolioLink": "https://www.linkedin.com/in/david-adlberger/",
    "experiences": [
      {
        "years": "2024 - now",
        "company": "FH Joanneum",
        "position": "MA Sound Design"
      },
      {
        "years": "2024",
        "company": "First Love Movie",
        "position": "On-Set-Recording, Sound Engineer"
      },
      {
        "years": "2024",
        "company": "Media Fabrik",
        "position": "Audio-Editor, Audio Technician"
      },
      {
        "years": "2021-24",
        "company": "University of Applied Sciences St. Pölten",
        "position": "BSc Mediatechnology"
      }
    ],
    "projects": [
      {
        "title": "Magic Camera",
        "year": "2024",
        "type": [
          "sound design"
        ],
        "client": "Redoute in Weimar",
        "collaborators": "Marine Monlouis\nLauriane Mercier\nLuciana Zenteno\nMathilda Maigre\nQuitterie Quipourt\nLucie Jelmoni",
        "about": "This animation, part of Tomorrow is Today Yesterday, created by students from Bauhaus University Weimar, FH Joanneum, and Piktura, explores personal and collective WWII and Holocaust memories. Through film, historical material, and experimental storytelling, it reinterprets history with a unique artistic perspective."
      },
      {
        "title": "Clara Carmina – Flieg",
        "year": "2023",
        "type": [
          "Recording",
          "Mix & Master",
          "Videoproduction"
        ],
        "client": "Uni Project (USTP)",
        "collaborators": "Christoph Buchinger\nJudith Knell\nGesang: Clara Carmina\nPiano: Philipp Woloch\nBass: Peter Rott\nDrums: Philipp Hribernig\nFlügelhorn: Martin Petri\nMusik/Text: Clara Carmina",
        "about": "For the final project in the Microphone Techniques course, two songs by Clara Carmina and her band were recorded at the University of Applied Sciences St. Pölten studio, accompanied by a video capturing the performances."
      },
      {
        "title": "added value",
        "year": "2025",
        "type": [
          "experimental audio",
          "audiovisual",
          "new media art"
        ],
        "client": "",
        "collaborators": "",
        "about": "added value is an ongoing experimental sound project exploring abstract audio and audiovisual art. Works include Matanoia (soundscapes), Lysara (lofi VCV Rack + fractal visuals), Rabbit Hole (contemporary music), Choromorph (double pendulum sonification), and Drone Machine [collab with Lukas Rieder and Benjamin Pohler]  (real-time experimental sound)."
      },
      {
        "title": "self",
        "year": "2025",
        "type": [
          "3D Audio",
          "Audio Drama",
          "Experimental sound design"
        ],
        "client": "Students 3D Audio Production Competition",
        "collaborators": "",
        "about": "SELF is an immersive 3D audio drama exploring identity through the experimental \"Mirror Machine.\" Fragmented memories, childhood moments, parental voices, and inner doubts swirl around the listener, creating a disorienting psychological odyssey where past and present, self and other, collapse. It won the Bronze Award at the Students 3D Audio Production Competition in the Cathegory Audio Drama."
      },
      {
        "title": "Audiovisuelle Karate Performance",
        "year": "2023",
        "type": [
          "Installation",
          "Audiovisual",
          "Projection Mapping"
        ],
        "client": "Uni Project (USTP)",
        "collaborators": "Andrea Bindreiter \nChristoph Buchinger\nJudith Knell",
        "about": "This project creates an interactive projection on a white karate suit, where the Karateka’s movements shape patterns and the Kiai (shout) triggers additional visuals. Using PoseOSC and Max MSP, tracking data controls color and alpha masking, limiting projections to the suit."
      }
    ]
  },
  {
    "studentID": 3,
    "nfcID": "E00403500ECBBE6B",
    "surname": "Aktas",
    "name": "Aylin",
    "major": "CD",
    "aboutMe": "I started as an architect, but was more interested in communicating stories and meaning than counting square meters. Communication design opened new perspectives. I work across disciplines, shaping atmospheres and concept-driven visuals & sometimes make films I never share.",
    "skills": [
      "Spatial Design",
      "Visual Design",
      "Editorial Design",
      "Branding",
      "Art Direction"
    ],
    "portfolioLink": "Instagram:\n@darefolio",
    "experiences": [
      {
        "years": "2024-now",
        "company": "FH Joanneum",
        "position": "Communication Design MA"
      },
      {
        "years": "2020 ",
        "company": "MAGNET World - Istanbul",
        "position": "Graphic Design"
      },
      {
        "years": "2018-2023",
        "company": "Vienna University of Technology",
        "position": "Architecture BA"
      },
      {
        "years": "2018-2020",
        "company": "VGN Medien Holding GmBH",
        "position": "Assistance in Advertising Operations\n2019\nNICEA Group - Istanbul\nArchitecture Internship"
      }
    ],
    "projects": [
      {
        "title": "I AM NOT REALLY INTO POLITICS",
        "year": "2025",
        "type": [
          "Communication Design"
        ],
        "client": "University Project",
        "collaborators": "/",
        "about": "A visual reflection on everyday racism, privilege, and the illusion of neutrality. Handwritten words cover faces, looping the phrase “I’m not really into politics,” exploring how silence protects some while others are forced to navigate a world where their identity is always politicized. Presented as animation and posters, digital and physical."
      },
      {
        "title": "WÜRSTLSCHEICH",
        "year": "2025",
        "type": [
          "Branding & Visual identitiy"
        ],
        "client": "Würstlscheich",
        "collaborators": "/",
        "about": "Würstlscheich evolves into a bold lifestyle brand, blending street-food energy with playful confidence. Organic typography and dynamic illustrations create a standout visual identity across packaging, merch, events, and sports sponsorships."
      },
      {
        "title": "STRA(I)N(G)ER",
        "year": "2024",
        "type": [
          "Editorial Design",
          "Print"
        ],
        "client": "University Project",
        "collaborators": "/",
        "about": "STRA(I)N(G)ER is an A5 zine exploring separation and control through the metaphor of a strainer. Printed on recycled paper, it examines how systems filter, divide, and shape what remains, connecting the object’s design to real-world issues of restriction, exclusion, and societal control."
      },
      {
        "title": "KOSKA",
        "year": "2024",
        "type": [
          "Branding & Visual identitiy"
        ],
        "client": "Koska (University Project)",
        "collaborators": "/",
        "about": "For Koska’s rebrand, I drew on traditional Ottoman tile and carpet motifs, using a modular grid to reflect cultural heritage. A custom font conveys timeless quality, paired with the modern, rounded Chillax typeface to create a contemporary, approachable identity that balances tradition and modernity."
      },
      {
        "title": "UNequal",
        "year": "2025",
        "type": [
          "Poster Design"
        ],
        "client": "Graz Museum",
        "collaborators": "/",
        "about": "Before the law, all are equal. In the UN, some are more equal than others. For the Democracy Exhibition at Graz Museum, I interpreted Article 7 of the Universal Declaration of Human Rights, exposing power imbalances within the UN. Using a vandalism-inspired aesthetic on bathroom tiles, the project resists polished institutional language."
      }
    ]
  },
  {
    "studentID": 4,
    "nfcID": "E00403500ECBBD2D",
    "surname": "Allerstorfer",
    "name": "Selina",
    "major": "ID",
    "aboutMe": "Visual designer and a big craft enthusiast. When I’m not starting a new crochet project, I’m shaping engaging digital interfaces. A bit chaotic, but always focused on turning screen-free inspiration into memorable online experiences that make the web feel more human.",
    "skills": [
      "UX/UI Design",
      "Interaction Design",
      "Graphic Design",
      "Editorial Design",
      "Prototyping",
      "Crafting"
    ],
    "portfolioLink": "selinaallerstorfer.at",
    "experiences": [
      {
        "years": "2024-ongoing",
        "company": "FH Joanneum Interaction Design",
        "position": "Student"
      },
      {
        "years": "2025-ongoing",
        "company": "Freelance",
        "position": "UI Designer"
      },
      {
        "years": "2023-2024",
        "company": "Probots",
        "position": "UX/UI Designerin"
      },
      {
        "years": "2019-2020",
        "company": "Husqvarna Austria GmbH",
        "position": "Print Graphic Designer"
      }
    ],
    "projects": [
      {
        "title": "Aimcademy\nWebsite Re-Design",
        "year": "2025",
        "type": [
          "UI Design",
          "UX Design"
        ],
        "client": "Aimcademy",
        "collaborators": "",
        "about": "I redesigned the Aimcademy website to create an engaging, game-inspired digital experience. The focus was on translating in-game elements into the web while balancing two audiences: attracting investors with a clear, professional narrative and engaging players through immersive visuals, interaction, and a strong sense of play."
      },
      {
        "title": "Bergwerk Architekten\nWebsite Re-Design",
        "year": "2025",
        "type": [
          "UX Design",
          "UI Design",
          "Information Architecture"
        ],
        "client": "Bergwerk Architekten",
        "collaborators": "",
        "about": "I redesigned the Bergwerk Architekten website with a focus on clarity, structure, and a more contemporary look. The goal was to clearly communicate the company’s values and architectural approach through a calm, modern design, improved navigation, and a well-organized content structure that lets the work speak for itself."
      },
      {
        "title": "Quencer",
        "year": "2022",
        "type": [
          "UX Design",
          "UI Design",
          "Game Development",
          "Augmented Reality"
        ],
        "client": "University Project",
        "collaborators": "Maxwell Yoakum",
        "about": "Quencer is an Augmented Reality app that visualizes history and makes it interactive and fun. The goal was to bridge the gap between traditional books and immersive technology, making the past feel like a playground. I was responsible for the UX/UI Design and within this role my focus was on intuitive navigation and a visual-first content structure that allows users to experience history on-site."
      },
      {
        "title": "Call A Stranger",
        "year": "2024",
        "type": [
          "Interactive Installation",
          "Prototyping"
        ],
        "client": "University Project",
        "collaborators": "Vigdis Teigen\nEliska Zemanska\nTarek Marzouki",
        "about": "CALL A STRANGER is an interactive light and sound installation connecting visitors with the unseen voices of Graz. By dialing a old rotary phone, guests listen to stories, advice, and words of kindness recorded by locals across the city. Flowing lights react to every interaction, transforming listening into a shared experience that bridges distance through empathy and the spoken word."
      },
      {
        "title": "Waldspaziergang",
        "year": "2025",
        "type": [
          "Light Installation",
          "Sound Installation",
          "Animation"
        ],
        "client": "Klanglicht Graz",
        "collaborators": "Victoria Bremer\nAlina Huft\nVerena Schneider\nValerie Schwarz\nDésirée Steigerwald",
        "about": "Waldspaziergang was a light and sound installation that gave form to the growing friction between our concrete environments and the organic world. A walk through the forest makes the contrast between the daily rush of our lives and the calm of nature apparent. The conflict and the tension between urbanization and nature that is being portrayed reflects an ongoing struggle for balance."
      }
    ]
  },
  {
    "studentID": 5,
    "nfcID": "E00403500ECBBD2E",
    "surname": "Angelov",
    "name": "Martin",
    "major": "CD",
    "aboutMe": "Animator with a classical education in the fine arts and a focus on narratives and story-telling.",
    "skills": [
      "Storyboarding Animation Motion Design"
    ],
    "portfolioLink": "martin-angelov.com; ig: manav_ski",
    "experiences": [],
    "projects": [
      {
        "title": "No Kings No New Masters",
        "year": "2025",
        "type": [
          "VR/AR Animation"
        ],
        "client": "University Project",
        "collaborators": "n/a",
        "about": "This was part of a bigger project about creating an augmented reality tour of the art museum in Orléans. The theme was to do \"non-destructive vandalism\" of the classical art exhibition. The painting I chose for my project was Guido Reni’s “David With The Head of Goliath\". When pointing a device's camera at the painting (or a copy of it) the animation is triggered and overlayed over it."
      },
      {
        "title": "Mahlzeit",
        "year": "2024",
        "type": [
          "Stop Motion Animation"
        ],
        "client": "University Project",
        "collaborators": "Ngoc-Tran Le",
        "about": "A pixilation animation inspired by Jan Švankmajer’s and Wes Ander-son’s work. A man tries to eat his soup but as luck would have it there’s a bug swimming in it. The film was produced by me and a colleague for a stop-motion seminar. My roles on the set were director of photography, and I worked on the color-correction, editing and animation of the effects."
      },
      {
        "title": "Generate 25",
        "year": "2025",
        "type": [
          "Animation"
        ],
        "client": "University Project",
        "collaborators": "Ngoc-Tran Le, Tobias Schittenkopf, Florian Thausing, Vigdis Teigen",
        "about": "A selection of my animations for a VJ set."
      },
      {
        "title": "Ever Use",
        "year": "2025",
        "type": [
          "Animation"
        ],
        "client": "Greentech Cluster",
        "collaborators": "Ngoc-Tran Le, Christina Lamprecht, Maike Hummen, Elisabeth Seiler",
        "about": "This is an animation project, part of a larger series meant to depict doctoral theses with a focus on sustainable futures. The thesis picked for this project was meant to depict a utopian future in which building materials could be stored for generations and re-used in construction, instead of being treated as disposable."
      },
      {
        "title": "Do Not Go Gentle",
        "year": "2024",
        "type": [
          "Animation"
        ],
        "client": "Graduation Project",
        "collaborators": "n/a",
        "about": "This was my thesis film , accompanying my Bachelor’s thesis on the influence of animation in the depiction of metaphors and metaphoric imagery in poetry, as well as other written works. The film is an adaptation of the Welsh poet’s work “Do Not Go Gentle Into That Good Night”, and draws its visual imagery not only from the work but also from the referenced and alluded work in the poem itself."
      }
    ]
  },
  {
    "studentID": 6,
    "nfcID": "E00403500ECBBE6C",
    "surname": "Archilia",
    "name": "Sopio",
    "major": "MD",
    "aboutMe": "I have many sides and I’m constantly discovering them. Through design, film, and storytelling, I explore ideas, emotions, and systems—always learning, experimenting, and growing with every project.",
    "skills": [
      "Visual Design",
      "Branding",
      "Concept Development",
      "Experimental Design",
      "Analogue & Craft Based Practices",
      "filming & editing"
    ],
    "portfolioLink": "https://www.behance.net/sofoarchilia",
    "experiences": [
      {
        "years": "2024-now",
        "company": "FH Joanneum Communication Design",
        "position": "Master Student"
      },
      {
        "years": "2023- now Catwalk.geo | Tbilisi ( Brand clothing shop online )",
        "company": "owner and founder",
        "position": "Graphic Designer"
      },
      {
        "years": "2019-22",
        "company": "University of Applied Arts Tbiisi",
        "position": "Bachelor in multimedia design"
      }
    ],
    "projects": [
      {
        "title": "Acharuli khachapuri",
        "year": "2024",
        "type": [
          "stop motion"
        ],
        "client": "",
        "collaborators": "",
        "about": "is a handmade stop-motion animation exploring the traditional Georgian dish Acharuli Khachapuri. I crafted and animated every frame and crafted all  items on my own."
      },
      {
        "title": "Having fun with the Collage",
        "year": "2024",
        "type": [
          "collage animation"
        ],
        "client": "",
        "collaborators": "",
        "about": "Playful experimentation with digital collage editing — blending unexpected visuals and textures to create dynamic, expressive compositions."
      },
      {
        "title": "One call away",
        "year": "",
        "type": [
          "AI movie"
        ],
        "client": "",
        "collaborators": "",
        "about": "a short AI-assisted film exploring emotion, timing, and human connection. Using AI-generated visuals alongside traditional storytelling techniques, the film reflects on everyday urgency and quiet moments that lead to unexpected warmth and resolution."
      }
    ]
  },
  {
    "studentID": 7,
    "nfcID": "E00403500ECBBE6D",
    "surname": "Bartl",
    "name": "Fiona",
    "major": "CD",
    "aboutMe": "Curious by nature, I explore visual communication that feels intuitive, aesthetic and human. I like trying things out and moving between disciplines. Digitally, by hand and sometimes with scissors. When I need screen-free time, I am your professional hairdresser.",
    "skills": [
      "Graphic Design",
      "Visual Design",
      "Branding",
      "Concept Development",
      "Experimental Design",
      "cutting/ dyeing hair"
    ],
    "portfolioLink": "https://fionabartl.wixsite.com/portfolio",
    "experiences": [
      {
        "years": "2024-now",
        "company": "FH Joanneum Communication Design",
        "position": "Master Student"
      },
      {
        "years": "2022-now",
        "company": "Digital Marketing Consultant",
        "position": "Via Digital GmbH\nLinkedIn Ads Agency"
      },
      {
        "years": "2020-23",
        "company": "University of Applied Sciences Upper Austria",
        "position": "Bachelor in Global Sales and Marketing"
      }
    ],
    "projects": [
      {
        "title": "Rebranding Glücksperle Graz",
        "year": "2025",
        "type": [
          "Brand Design"
        ],
        "client": "Uni Project",
        "collaborators": "",
        "about": "The rebranding of Glücksperle Graz revitalizes the brand with a new logo, fresh color palette, and a modern visual language. The project focused on bringing clarity, warmth, and character to the identity, transforming it into a contemporary, lively brand while staying true to its core values, craftsmanship, and strong connection to Graz and its audience."
      },
      {
        "title": "Doomscrolling",
        "year": "2024-25",
        "type": [
          "Animated Poster",
          "short video",
          "Animation",
          "Booklet (shooting is still needed)"
        ],
        "client": "FH JOANNEUM",
        "collaborators": "David Adlberger\nJulia Steinle",
        "about": "This animated poster, created in collaboration with a sound designer from FH JOANNEUM, explores the topic of doomscrolling. A constantly moving hand symbolizes restlessness and escape, endlessly running from reality. Through motion and sound, the project encourages viewers to pause, put their phones down, and reconnect with the world outside."
      },
      {
        "title": "Cutlery Letters",
        "year": "2023",
        "type": [
          "Typography"
        ],
        "client": "personal",
        "collaborators": "",
        "about": "This experimental typography project explores playful letterforms created through the use of cutlery. By combining everyday objects with typographic composition, the work turns familiar tools into expressive visual elements. The project focuses on fun, tactility, and visual surprise, showing how typography can be both functional and interactive."
      },
      {
        "title": "The Art of Doing Nothing",
        "year": "2025-26",
        "type": [
          "Poster"
        ],
        "client": "FH Joanneum",
        "collaborators": "",
        "about": "This analog poster explores The Art of Doing Nothing and is inspired by childhood. The white plastic Monobloc chair represents carefree summer days and being present. Using gel printing and playful typography, the poster focuses on texture and imperfection."
      }
    ]
  },
  {
    "studentID": 10,
    "nfcID": "E00403500ECBBD2F",
    "surname": "Blümel",
    "name": "Dominik",
    "major": "MD",
    "aboutMe": "In jeder Freundesgruppe gibt es den Kreativen, den Designer. Schon früh war klar, in meiner bin das definitiv nicht ich. \nIch bin der, der immer redet. „A Gschichtldrucker“ wie man bei mir jetzt sagen würde. Und seit sechs Jahren mache ich mir als Journalist genau das zum Beruf.",
    "skills": [
      "Probleme aufzeigen",
      "Ungehörte hörbar machen",
      "Recherche",
      "Kameraarbeit",
      "Postproduktion"
    ],
    "portfolioLink": "/",
    "experiences": [
      {
        "years": "2020-23",
        "company": "FH Joanneum Graz",
        "position": "Bachelorstudium Journalismus"
      },
      {
        "years": "2022-24",
        "company": "Kronen Zeitung",
        "position": "Sportressort"
      },
      {
        "years": "2023",
        "company": "Dossier",
        "position": "Investigativressort"
      },
      {
        "years": "2025-laufend",
        "company": "Grazer AK",
        "position": "Klubvideograf"
      }
    ],
    "projects": [
      {
        "title": "Der Snus-Schmäh - Das neue Geschäft mit der Sucht",
        "year": "2023",
        "type": [
          "Video-Dokumentation"
        ],
        "client": "Digitalverlag Hashtag Jetzt",
        "collaborators": "Friedrich Hainz\nMarkus Lösel\nSeverin Dringel",
        "about": "In \"Der Snus-Schmäh\" blicken wir über eine halbe Stunde lang hinter die Fassade der größten Tabakkonzerne der Welt und decken auf, mit welchen fragwürdigen Methoden sie die Jugend von heute in die Abhängigkeit bringen."
      },
      {
        "title": "Imagevideo \"JL Athletic Group",
        "year": "2025",
        "type": [
          "Commercial"
        ],
        "client": "JL Athletic Group",
        "collaborators": "/",
        "about": "Als Videograf durfte ich letztes Jahr unter anderem die Firmengründung der \"JL Athletic Group\" betreuen. Dafür habe ich die beiden Fitnesstrainer in insgesamt vier Promo-Videos eingefangen und ihre Leistungen porträtiert."
      },
      {
        "title": "Kein Weg umsonst",
        "year": "2022",
        "type": [
          "Reportage"
        ],
        "client": "Megafon",
        "collaborators": "Markus Lösel",
        "about": "Kein Weg umsonst\" ist eine textgewordene Kriegserklärung an die Wegwerfgesellschaft. Auf insgesamt drei Doppelseiten des Grazer Straßenmagazins widmen wir uns einem der größten Probleme unserer heutigen Gesellschaft und begleiten dafür einen Tag lang den wohl bekanntesten  Dumpsterer der steirischen Hauptstadt."
      },
      {
        "title": "Video-PR Grazer AK",
        "year": "2025",
        "type": [
          "Aftermovies, Commercials, Imagevideos"
        ],
        "client": "Grazer AK",
        "collaborators": "/",
        "about": "Seit mittlerweile einem guten Jahr darf ich den Grazer AK in der Bundesliga als Haus- und Hofvideograf bei Spielen, Events und hinter den Kulissen betreuen. Die gezeigten Videos sind ein Auszug aus meiner Arbeit."
      },
      {
        "title": "Der abhängige Fußball",
        "year": "2023",
        "type": [
          "Recherche"
        ],
        "client": "Dossier",
        "collaborators": "/",
        "about": "Der abhängige Fussball\" ist eine datenbasierte Abrechnung mit dem Sport, den wir alle so lieben. Darin zeige ich auf, wie tief Sportwettenanbieter mittlerweile im Profisport (und unserer Gesellschaft) verankert sind und wie sie mit allen Mitteln versuchen, dass ja niemand daran rüttelt."
      }
    ]
  },
  {
    "studentID": 11,
    "nfcID": "E00403500ECBBE6E",
    "surname": "Bonevie",
    "name": "Noah",
    "major": "MD",
    "aboutMe": "Noah Bonevie is a Director, Photographer, and DJ. \nHis work emerges from a subtle interplay of\n heritage, rhythm, and visual sensibility. He crafts \na visual language that oscillates between stillness\n and motion, leaving room for emotion and \natmosphere. Through this synergy, he develops\nan aesthetic that rearranges familiar motifs, \nimbuing them with a unique narrative depth.",
    "skills": [
      "Photography (Editorial/Sports)",
      "Film (Direction/Camera/Editing)"
    ],
    "portfolioLink": "https://www.studiobonevie.com/",
    "experiences": [
      {
        "years": "2021 - Present ",
        "company": "Freelance ",
        "position": "Photography & Film."
      },
      {
        "years": "2024 ",
        "company": "SteadyMotion Film Production",
        "position": ""
      },
      {
        "years": "2021-24",
        "company": "FH JOANNEUM ",
        "position": "Bachelors Degree - Informationdesign"
      }
    ],
    "projects": [
      {
        "title": "105 Degrees Fashion Lookbook",
        "year": "2026",
        "type": [
          "Lookbook"
        ],
        "client": "105 Degrees",
        "collaborators": "Styling: Lara Cuga\nModels: Sarah Moser / Stela Stanic",
        "about": "Unveiling the definitive visual narrative for the new 105 degrees collection. This moving editorial articulates the season through a kinetic study of silhouette and texture. The lens remains fixed on the garment to highlight sartorial precision and the fluidity of fabric. A pure expression of high fashion construction designed to showcase the collection in motion."
      },
      {
        "title": "The North Face (Spec)",
        "year": "2025",
        "type": [
          "Commercial Video"
        ],
        "client": "The North Face",
        "collaborators": "DoP. Peter Verhounik\nGaffer: Aman Maller\nPAs: Katharina Peterka, Magdalena \nAckerl\nEdit: Maria Shehata, Noah Bonevie\nSound: Gregor Schmitz, Lukas Rieder\nTalents: Katarina Pototschnig, Prince \nNyanney, Martin",
        "about": "For this spec film we decontextualized The North Face by isolating the garments in a sterile studio void. This visual approach emphasizes the architectural silhouettes bridging the wilderness and the metropolis. We highlight technical luxury to prove that performance gear commands the space through design rather than environment."
      },
      {
        "title": "Driven by Dreams SS24 CAMPAIGN",
        "year": "2024",
        "type": [
          "Commercial Video"
        ],
        "client": "Driven by Dreams",
        "collaborators": "Color: Peter Verhounik\nSounddesign: Lukas Hasiba\nMusic: Konrad Maier\nLocation Manager: Jonathan Ngoy\nTalents: Lonie Sambi /// Patrick Ibrahim",
        "about": "Merging the heritage of the fairway with the raw energy of the concrete. This campaign articulates the collision of Golf and Streetwear without compromising the codes of either culture. We reject the dilution of the sport to present a strictly authentic visual narrative. A definitive study where the discipline of the game meets the rule of the street."
      },
      {
        "title": "Air Max SNDR GORE-TEX (Spec)",
        "year": "2024",
        "type": [
          "Commercial Video"
        ],
        "client": "Nike",
        "collaborators": "DoP. : Peter Verhounik \nTalent: Nelson Tom",
        "about": "Navigating the concrete terrain with the Nike SNDR GORETEX. \nWe visualize the ultimate urban armor designed to defy the \nelements without compromising the silhouette. Rain reflects off \nthe technical exterior while the aesthetic remains sharp. \nA seamless fusion of high performance utility and street \ndominance. Move through the metropolis untouchable."
      },
      {
        "title": "SELECTED CURATION",
        "year": "2021-2026",
        "type": [
          "PHOTOGRAPHY"
        ],
        "client": "",
        "collaborators": "",
        "about": "I produce raw photos that strip away the noise to reveal what\nis real. This is a high fashion editorial perspective rooted in culture \nand identity. We paint with light and shadow to immortalize the \nsubject. A distinct visual legacy built on authenticity and deep \nemotion."
      }
    ]
  },
  {
    "studentID": 12,
    "nfcID": "E00403500ECBBD30",
    "surname": "Bremer",
    "name": "Victoria",
    "major": "ID",
    "aboutMe": "I’m up for any creative adventure, hopping from lino-cut fonts to knit-work and my sketchbook - always fueled by the next pastry. Whether it’s science, social topics, or just a cool idea, I love creating a fun and interesting experience!",
    "skills": [
      "Visual Design",
      "Concept Design",
      "Illustration",
      "Prototyping",
      "UX/UI Design"
    ],
    "portfolioLink": "",
    "experiences": [
      {
        "years": "2019-23",
        "company": "Hochschule Darmstadt IMD",
        "position": "Bachelor Student"
      },
      {
        "years": "2022-23",
        "company": "Honda R&D",
        "position": "Intern & Working Student"
      },
      {
        "years": "2024-26",
        "company": "FH Joanneum Interaction Design",
        "position": "Master Student"
      }
    ],
    "projects": [
      {
        "title": "Vindu",
        "year": "2020",
        "type": [
          "Simulation Game"
        ],
        "client": "Uni Project",
        "collaborators": "Marina Hardt-Mitidieri, Lynn Dunkel, Phuong „Kitty“ Quach",
        "about": "Vindu is an interactive simulation game where players navigate a pandemic from another person's perspective. In this click story, users experience a month of crisis where every decision impacts three parameters: money, health, and happiness. The final status is categorized at the end. The simulation aims to show that crises affect everyone differently, fostering empathy for unique struggles."
      },
      {
        "title": "Besides",
        "year": "2022",
        "type": [
          "Ambient intelligent Spaces"
        ],
        "client": "Uni Project",
        "collaborators": "Max Weber, Lynn Dunkel, Ann-Kathrin Thiessen",
        "about": "Besides is an interactive light installation for long-distance couples to perceive a partner's movement despite physical distance. Light projections show movement and behavior via smart slippers with sensors. Speed, position, and stillness are conveyed through dynamic light particles. This allows couples to perceive each other passively, fostering shared rituals and togetherness."
      },
      {
        "title": "The poisonous twin",
        "year": "2024-25",
        "type": [
          "Game"
        ],
        "client": "Uni Project",
        "collaborators": "Selina Allerstorfer, Desireé Steigerwald, Cornelia Wysoudil",
        "about": "The Poisonous Twin is a cute one-player Unity game featuring a haptic interface, NFC tags, and a booklet. Players wander an enchanted forest collecting mushrooms, distinguishing between edible and poisonous types. They must also avoid Ferdinand the truffle pig, who steals their mushrooms. The game concludes by revealing whether the mushroom hunt was successful or deadly!"
      },
      {
        "title": "Firefly",
        "year": "2023",
        "type": [
          "Internet of Things"
        ],
        "client": "Uni Project",
        "collaborators": "Isabel Pfalzgraf, Max Weber",
        "about": "Firefly is an interactive lamp that helps couples consciously create time together. Small, glowing lights representing shared moments move within the device. By placing hands on the display, couples begin their dedicated time. If a smartphone is activated, the light visualizes the interruption. Firefly aims to focus attention on the partner while reflecting on and reducing digital distractions."
      },
      {
        "title": "Wortschatz",
        "year": "2021",
        "type": [
          "Internet of Things"
        ],
        "client": "Uni Project",
        "collaborators": "Anne Kolb, Isabel Pfalzgraf, Sujia Liu",
        "about": "Wortschatz is an interactive vocabulary box that uses technology to bring flashcards to life. Beyond writing, it uses associations and games to make learning magical. Teachers can track progress and adapt lessons accordingly. By focusing on regular repetition, associations, and gamification, the box creates an emotional experience that reinforces the learning effect and aids memory."
      }
    ]
  },
  {
    "studentID": 13,
    "nfcID": "E00403500ECBBE6F",
    "surname": "Dorzhieva",
    "name": "Elina",
    "major": "ID",
    "aboutMe": "I am a Buryat Mongolian interdisciplinary designer exploring how art and technology can create meaningful experiences. Starting in graphic design in Budapest, I moved to interaction design, focusing on concept-driven projects, social topics, cultural heritage, and experimentation.",
    "skills": [
      "Interaction Design",
      "UX/UI Design",
      "Prototyping",
      "Graphic Design",
      "Concept Design",
      "Oil Painting"
    ],
    "portfolioLink": "IG: catchin__feelings    portfolio coming soon..",
    "experiences": [
      {
        "years": "2025-26",
        "company": "Kunsthaus Graz",
        "position": "Interactive Facade Designer"
      },
      {
        "years": "2024-26",
        "company": "FH Joanneum Interaction Design",
        "position": "MA Interaction Design"
      },
      {
        "years": "2023",
        "company": "Technische Hochschule Augsburg",
        "position": "Erasmus Communication Design"
      },
      {
        "years": "2021-24",
        "company": "Budapest Metropolitan University",
        "position": "BA Graphic Design"
      }
    ],
    "projects": [
      {
        "title": "Big Eyes",
        "year": "2025-26",
        "type": [
          "Interactive Installation",
          "Animation"
        ],
        "client": "Kunsthaus Graz",
        "collaborators": "Genovefa Zourkou, Veronika Poštrak",
        "about": "BIG EYES is an interactive installation that turns Kunsthaus Graz into a living creature. Through its large eyes, a friendly “alien” responds to the presence and behavior of visitors. The façade transforms from a passive display into a playful, emotional interface, creating a strong, engaging connection between the building and its audience."
      },
      {
        "title": "Hit That Jackpot",
        "year": "2025",
        "type": [
          "Interactive Installation",
          "Light Game"
        ],
        "client": "FH Joanneum Project",
        "collaborators": "Genovefa Zourkou, Leila Orynbaeva",
        "about": "Hit that Jackpot is a new take on the arcade reaction game “Cyclone” made with LED strips, where players try to press a big red button exactly when the moving light reaches the target."
      },
      {
        "title": "Buryat",
        "year": "2024",
        "type": [
          "Zine"
        ],
        "client": "Bachelor  Project",
        "collaborators": "Solo",
        "about": "BURYAT is a zine addressing the extinction of the Buryat Mongolian language, shaped by Soviet and modern policies that pressured ethnic minorities to assimilate. It explores the language’s history, its transformations, and the resilience of its speakers, using bold, experimental design to reflect the cultural and political struggles it endured."
      },
      {
        "title": "Jibaro",
        "year": "2023",
        "type": [
          "Animated Posters"
        ],
        "client": "Technische Hochschule Augsburg Project",
        "collaborators": "Solo",
        "about": "JIBARO is a series of animated posters created during a course exploring the relationship between body movement and typography. Inspired by the short film of the same name, the posters capture the mood, rhythm, and details of movement, highlighting the beauty and harmony between the human body and typographic form."
      }
    ]
  },
  {
    "studentID": 15,
    "nfcID": "E00403500ECBBD31",
    "surname": "Hohenbrink",
    "name": "Joschua",
    "major": "MD",
    "aboutMe": "Over the past 15 years, Joschua has worked as LOCOBIRD, creating media and sound for diverse projects. Now he returns to his roots, transforming spaces into rituals of light through projections, 3D renderings, and sound, chasing the fleeting shimmer where magic quietly appears.",
    "skills": [
      "Media Art",
      "Sound Design",
      "Motion Design",
      "Amateur Acting",
      "Capturing Nature",
      "Baking Bread"
    ],
    "portfolioLink": "locobird.de",
    "experiences": [
      {
        "years": "2007–2011",
        "company": "Bachelor of Fine Arts – Media Art, AKI ArtEZ, Enschede (NL)",
        "position": ""
      },
      {
        "years": "2011–2015",
        "company": "B-Productive GmbH – Motion Designer/Cutter (Editing, Animation and Sound Design) - Münster, GER",
        "position": ""
      },
      {
        "years": "2016–ongoing",
        "company": "Freelancer as LOCOBIRD – Audio-Visual Media Artist/Designer (Conception, Editing, Motion Design, Sound Design, Cinematographer) - world wide​",
        "position": ""
      },
      {
        "years": "2024 - ongoing ",
        "company": "Master MD Medien Design",
        "position": "FH Joanneum, Graz, AT"
      }
    ],
    "projects": [
      {
        "title": "Looking For Love",
        "year": "2008",
        "type": [
          "Music Video"
        ],
        "client": "Solo Bachelor Project",
        "collaborators": "Performer: Harrie and Lena",
        "about": "One of my first music videos using a green screen and Cinema4D. \nmusic and performance by me."
      },
      {
        "title": "Einmarsch Der Eventualität",
        "year": "2011",
        "type": [
          "Short Movie"
        ],
        "client": "Bachelor Workpiece",
        "collaborators": "Performer: Lena K.",
        "about": "3D Animation in Cinema4D, filming in Green Screen, Sounddesign"
      },
      {
        "title": "Best Of 15 years",
        "year": "2015 - 2024",
        "type": [
          "Showreel"
        ],
        "client": "LOCOBIRD",
        "collaborators": "",
        "about": "a collection of freelance work in the past 15 years"
      },
      {
        "title": "Transition",
        "year": "2024",
        "type": [
          "3D Animation"
        ],
        "client": "Master Solo Projet FH Joanneum",
        "collaborators": "",
        "about": "Telling the story of my personal process and development while transitioning into the next chapter of life."
      },
      {
        "title": "The Dragon's Cave",
        "year": "2025",
        "type": [
          "Hologauze Projection"
        ],
        "client": "KLANGLICHT 2025 Graz",
        "collaborators": "",
        "about": "“The Dragon’s Cave,” tells the story of a dragon resting deep within the Schlossberg. The mountain itself is the dragon. Embedded in the geological and cultural history of the place, he lingers within the layers of time and nature. Through growing plants that form a network of lines and eventually take the shape of a dragon. He reveals a cycle of transformation, life, decay, and rebirth."
      }
    ]
  },
  {
    "studentID": 16,
    "nfcID": "E00403500ECBBE70",
    "surname": "Huft",
    "name": "Alina",
    "major": "CD",
    "aboutMe": "Over time, I found my interest in audiovisual media, motion, and visual storytelling. I’m curious about social topics and enjoy experimenting with ideas, learning through practice, and turning concepts into visual stories that feel honest and relevant. When I’m not designing, I enjoy arts and crafts and traveling.",
    "skills": [
      "Graphic Desing",
      "Motion Design",
      "Editorial Design",
      "Animation"
    ],
    "portfolioLink": "",
    "experiences": [
      {
        "years": "2020 - 2022 ",
        "company": "Trendhouse Internship – Concept creation & Event Planing, Munich, GER",
        "position": ""
      },
      {
        "years": "2020 - 2024 ",
        "company": "Bachelor of Arts – Creative Business & Media Management , NHL Stenden University of Applied Sciences, NL",
        "position": ""
      },
      {
        "years": "2023 - 2024 ",
        "company": "STRIVE Internship – Marketing & Editorial, Hamburg, GER",
        "position": ""
      },
      {
        "years": "2024 - 2026 ",
        "company": "Master Media Design FJ Joanneum, Graz, AT",
        "position": ""
      }
    ],
    "projects": [
      {
        "title": "Klanglicht - Waldspaziergang",
        "year": "2025",
        "type": [
          "Light installation",
          "Animation"
        ],
        "client": "FH Joanneum in Collaboration with Klanglicht Festival Graz",
        "collaborators": "Selina Allerstorfer, Victoria Bremer, Desiree Steigerwald, Verena Schneider, Valerie Schwarz",
        "about": "For the 2025 Klanglicht Festival in Graz, the master’s programme created a light installation made up of different team projects.\nOur team chose to tell the story of a walk through nature that slowly loses its calm. Noise, stress, and traces of human impact start to appear, showing the tension between nature and industry that runs through the entire installation."
      },
      {
        "title": "Green Utopia – Biochar",
        "year": "2025",
        "type": [
          "Animation"
        ],
        "client": "Master Project, GreenTech",
        "collaborators": "Valerie Schwarz, Fiona Bartl, Lina Sandersfeld, Angelo Jantscher",
        "about": "The project was a short animation which was done together with other students as part of the Green Utopia project. We created the animation to visualise how Biochar could be used in a sustainable, circular future, translating scientific research into a clearer and accessible visual story."
      },
      {
        "title": "STRIVE Magazine – Leadership Collection",
        "year": "2023 - 2024",
        "type": [
          "Magazine"
        ],
        "client": "STRIVE Magazine",
        "collaborators": "",
        "about": "This project is a side collection of STRIVE Main Magazine and is dedicated to modern leadership topics. Interviews, experience reports and compact guides deal with contemporary leadership, equality and new working models. Hereby i developed the editorial design for the entire issue and translated the content into a clear, independent magazine format."
      },
      {
        "title": "Oscillate",
        "year": "2024",
        "type": [
          "3D Animation"
        ],
        "client": "FH Joanneum Projekt",
        "collaborators": "",
        "about": "Oscillate is an abstract 3D animation built around repeating movements and subtle visual changes. Elements shift between different states, sometimes controlled, sometimes more organic. The work focuses on motion and how repetition leads to variation."
      },
      {
        "title": "Motion Collection",
        "year": "2024 - 2026",
        "type": [
          "Animation",
          "Projection"
        ],
        "client": "Fh Joanneum\nPrivat",
        "collaborators": "",
        "about": "It’s a collection of motion design works created between 2024 and 2026. The selection includes various academic projects  and privat passion projects."
      }
    ]
  },
  {
    "studentID": 17,
    "nfcID": "E00403500ECBBD32",
    "surname": "Jantscher",
    "name": "Angelo",
    "major": "CD",
    "aboutMe": "My interest in design started early and developed over time. I began my creative journey with photography, taking photos of friends and slowly learning how to work more professionally. Through this process, I became familiar with Adobe programs and improved my technical skills step by step.",
    "skills": [
      "Branding",
      "Illustrations",
      "Photography",
      "3D"
    ],
    "portfolioLink": "https://www.lionardo.online",
    "experiences": [
      {
        "years": "2020 – 2024",
        "company": "University FH Joanneum",
        "position": "Bachelor Information Design"
      },
      {
        "years": "2021 – 2025",
        "company": "Medienfabrik Graz (Graphic designer)",
        "position": ""
      },
      {
        "years": "Since 2024",
        "company": "University FH Joanneum",
        "position": "Master Communication Design"
      },
      {
        "years": "Since 2025",
        "company": "Design Studio Kernform (independent)",
        "position": ""
      }
    ],
    "projects": [
      {
        "title": "Poster Archive",
        "year": "2025",
        "type": [
          "Graphic design"
        ],
        "client": "Free time",
        "collaborators": "-",
        "about": "I like to creater poster in my freetime. They are captured thoughts, moods, and moments. Each poster tells its own story and reflects ideas that don’t need to be loud to make an impact. In the archive, they come together as a visual memory: clear, timeless, and intentionally curated."
      },
      {
        "title": "Atomwerk",
        "year": "2025",
        "type": [
          "Typography"
        ],
        "client": "-",
        "collaborators": "-",
        "about": "This typeface is raw, direct, and uncompromising. Influenced by brutalism, it rejects decoration in favor of clear forms, strong contrast, and an honest presence. It isn’t polite — it’s intentional, bold, and built to occupy space."
      },
      {
        "title": "Project Revelation",
        "year": "2025",
        "type": [
          "Branding"
        ],
        "client": "Project Revelation",
        "collaborators": "-",
        "about": "Empowering youth to connect through film and faith.\nProject Revelation is dedicated to inspiring young individuals through biblical infused short films. By encouraging discussions in youth groups and on social media, we aim to foster a deeper appreciation for the Bible."
      },
      {
        "title": "Overlays",
        "year": "2025",
        "type": [
          "Visual Identity"
        ],
        "client": "FH Joanneum",
        "collaborators": "-",
        "about": "Overlays celebrates the intersections of creativity — where Communication, Media, Sound, and Interaction Design blend and blur into one another. A layered experience of inspiration, colour, and collaboration."
      },
      {
        "title": "Dooks",
        "year": "2025",
        "type": [
          "Branding, Logo Design, Corporate Identity"
        ],
        "client": "-",
        "collaborators": "-",
        "about": "The rebranding of Dooks in Graz introduces a refined visual identity built around a new logo, a reduced color palette, and a clearer design language. Bold typography and carefully chosen colors give the brand a confident, contemporary character while staying true to the coffee shop’s atmosphere."
      }
    ]
  },
  {
    "studentID": 18,
    "nfcID": "E00403500ECBBD33",
    "surname": "Karkheck",
    "name": "Jessica",
    "major": "MD",
    "aboutMe": "I film, photograph, edit, and solve problems on set. An audio-visual all-rounder, experienced in documentaries, sports, live production, education and subcultures. Calm under pressure, big on empathy, and oddly qualified to teach people how to sword fight the historical way.",
    "skills": [
      "Film",
      "Photography",
      "Live Production",
      "Media Technology",
      "Teaching",
      "Historical Fencing"
    ],
    "portfolioLink": "https://jessicakarkheck.myportfolio.com/",
    "experiences": [
      {
        "years": "2020 - now",
        "company": "Freelance",
        "position": "Video, Photography, Liveproduction\nGraz, AT"
      },
      {
        "years": "2017-2019",
        "company": "EPLAN Software & Services",
        "position": "Online Marketing, Media Design, Event Management"
      },
      {
        "years": "2017",
        "company": "Knapp GmbH",
        "position": "Graphic and Media Design"
      }
    ],
    "projects": [
      {
        "title": "Apothesis",
        "year": "2024",
        "type": [
          "Music video"
        ],
        "client": "Crowheart",
        "collaborators": "Edit: Florian Kolaritsch",
        "about": ""
      },
      {
        "title": "Memories",
        "year": "2025",
        "type": [
          "Music Video"
        ],
        "client": "Crowheart",
        "collaborators": "Edit: Florian Kolaritsch",
        "about": "Together with Florian Kolaritsch, I had the honor of once again creating a very emotional music video for the band Crowheart, for which I was responsible for the camera work.\nA music video about aging, transience, holding onto the past, and the unfortunately often resulting loneliness."
      },
      {
        "title": "Der verlorene Haufen",
        "year": "2024",
        "type": [
          "Portrait Photography"
        ],
        "client": "Landsknecht-Group from INDES Graz",
        "collaborators": "",
        "about": ""
      },
      {
        "title": "Faces",
        "year": "2021-25",
        "type": [
          "Portrait Photography"
        ],
        "client": "various",
        "collaborators": "",
        "about": "A curated selection of portrait photographs created between 2020 and 2025. The series combines controlled studio style shoots with portraits taken at live action role play events, where directing or posing is not possible. Capturing authentic expressions while preserving immersion turned these images into a creative challenge."
      },
      {
        "title": "Walk On Ice Graz 99ers",
        "year": "2024",
        "type": [
          "Walk-On-Ice Entrance video"
        ],
        "client": "Moser Medicals Graz 99ers",
        "collaborators": "Patrick Rinner\nGabriel Boll\nFlorian Kolaritsch",
        "about": ""
      }
    ]
  },
  {
    "studentID": 19,
    "nfcID": "E00403500ECBBE72",
    "surname": "Kobler",
    "name": "Tanja",
    "major": "ID",
    "aboutMe": "I’m still debating whether I’m more into design or code – maybe I don’t have to choose. After ~10 years in the industry (employed & freelance), I love building interactive experiences: web, generative design, UI/UX. Co-founding “Studio Matria” now is super special to me.",
    "skills": [
      "Web Development (Frontend)",
      "Creative Coding",
      "UI Design",
      "Graphic Design",
      "Branding"
    ],
    "portfolioLink": "web: www.tanja-kobler.com\ninsta: studio_matria",
    "experiences": [
      {
        "years": "2017 – 2021",
        "company": "GO.WEST Communications",
        "position": "Frontend Developer & UX/UI"
      },
      {
        "years": "2017 – now",
        "company": "Freelance ",
        "position": "UX/UI & Web Dev"
      },
      {
        "years": "2024",
        "company": "Pixelart GmbH",
        "position": "Frontend Web Developer"
      },
      {
        "years": "2021 – 2026",
        "company": "FH Joanneum Graz",
        "position": "BA Informationsdesign\nErasmus: IADE Creative University Lisbon\nMA Interaction Design"
      }
    ],
    "projects": [
      {
        "title": "Stackreps Learning Plattform",
        "year": "2024 – ongoing",
        "type": [
          "Web Development, UX/UI Design, Branding, Grafic Design"
        ],
        "client": "Stackreps GmbH",
        "collaborators": "",
        "about": "As a freelancer, I designed and built the Stackreps learning platform (frontend) and landing page. From UX/UI and responsive web development to branding, visual system, and all supporting graphics."
      },
      {
        "title": "Wedding Photographer Webpage",
        "year": "2023",
        "type": [
          "Web Development, UX/UI Design"
        ],
        "client": "Anna Kafka",
        "collaborators": "",
        "about": "I designed and developed a responsive portfolio website for wedding photographer Anna Kafka, with an image-first layout and a streamlined contact flow to support bookings."
      },
      {
        "title": "Electric Love Festival Visuals\nBonnie Callini",
        "year": "2025",
        "type": [
          "Stage Visuals",
          "Genarative Design",
          "live VJing"
        ],
        "client": "Bonnie Callini",
        "collaborators": "Magdalena Ackerl",
        "about": "Stage visuals for a two-hour live DJ set by Bonnie Callini at Electric Love Festival 2025. The visuals combine bold, flashy textures with smooth chrome-like motion, translating Bonnie’s energetic, fiery sound into a vibrant and immersive visual experience."
      },
      {
        "title": "ORF Koralmbahn Opening Light Installation",
        "year": "2025",
        "type": [
          "Motion Design",
          "Generative Art",
          "Light-Installation"
        ],
        "client": "ORF Steiermark\nFH Joanneum",
        "collaborators": "Magdalena Ackerl",
        "about": "For the ceremonial opening of the Koralmbahn, broadcasted live on ORF 2, we designed and developed animations tailored to a light installation in the ORF-studio. The visuals framed interviews and were played live during the broadcast, creating a contemporary and cohesive on-air experience. The project was created in close collaboration with ORF Steiermark and FH JOANNEUM"
      },
      {
        "title": "Frontend Development for Agency Client Projects",
        "year": "2018 – 2025",
        "type": [
          "Frontend Development"
        ],
        "client": "Pixelart / GO.WEST \n(for various clients)",
        "collaborators": "",
        "about": "As an in-house frontend developer at Pixelart/go.west, I implemented a range of client websites and UI components for brands including Wüstenrot, Salzburg AG and Red Bull Hangar-7. Working within a team, I translated designs into responsive, accessible webpages."
      }
    ]
  },
  {
    "studentID": 20,
    "nfcID": "E00403500ECBBD34",
    "surname": "Mammadov",
    "name": "Seymur",
    "major": "ID",
    "aboutMe": "Part designer, part researcher, part businessman, making the best of this life. I have come a long way, lost a lot, gained lessons, and never gave up. There is still a long road ahead, but it is the kind of journey worth living for.",
    "skills": [
      "UX/UI Design",
      "Product Design",
      "Coding",
      "AR Technology",
      "Interaction Design",
      "Leadership"
    ],
    "portfolioLink": "https://linktr.ee/mseymur",
    "experiences": [
      {
        "years": "2023-Present",
        "company": "Founder & Designer",
        "position": "Nexos Agency"
      },
      {
        "years": "2024-2026",
        "company": "FH JOANNEUM Interaction DesignMaster’s Student",
        "position": ""
      },
      {
        "years": "2019-2024METU Industrial Design",
        "company": "Bachelor’s Student",
        "position": ""
      },
      {
        "years": "2017-2021Web Designer",
        "company": "Freelance",
        "position": ""
      }
    ],
    "projects": [
      {
        "title": "[Sub-Society]",
        "year": "2023-2024",
        "type": [
          "App Development",
          "UI Design",
          "UX Design"
        ],
        "client": "Graduation Project\nFibabanka",
        "collaborators": "",
        "about": "[Sub-Society] is an AI-powered fashion commerce app where users post outfits, level up, and tag shoppable items. Brands can source creators directly from the App. A smart wardrobe works like outfit playlists, while AI curates a store, capsule picks, and an assistant that plans looks and packing from your itinerary and owned items."
      },
      {
        "title": "Get a Room App",
        "year": "2025 - 2026",
        "type": [
          "App Development",
          "UI Design",
          "UX Design"
        ],
        "client": "App Design\nFH Joanneum",
        "collaborators": "Jakob Schnurrer",
        "about": "Get A Room is meant to addresses the shortage of student workspaces at FH Joanneum. By parsing JSON-based schedules into a mobile dashboard, we transformed inaccessible data into an easy to use tool. This app enables students to find free rooms in their building to use as study spaces."
      },
      {
        "title": "GenWave Installation",
        "year": "2025",
        "type": [
          "Interaction Design",
          "Arduino Development",
          "Prototyping"
        ],
        "client": "Fh Joanneum",
        "collaborators": "Jakob Schnurrer\nSopio Archilia",
        "about": "With GenWave we transforms a regular set of stairs into a responsive, living canvas. Using touch-sensitive sensors on the handrails, the installation triggers a generative particle projection. As users interact with specific touch-points, the visuals evolve, from color shifts to complex particle collisions."
      },
      {
        "title": "Barrel Dash",
        "year": "2025",
        "type": [
          "Game"
        ],
        "client": "Unity Class\nFH Joanneum",
        "collaborators": "Seymur Mammadov\nAlice Zanutti \nTarek Marzouki\nFelix Prince",
        "about": "Barrel Dash is a Unity-built, Kinect-powered runner set in a light fairytale world. Players steer a mischievous goblin toward a castle, collecting coins and dodging obstacles using full-body gestures, turning, and leaning instead of tapping."
      },
      {
        "title": "Dino Game",
        "year": "2025",
        "type": [
          "Installation",
          "Game"
        ],
        "client": "BIX\nFH Joanneum",
        "collaborators": "Eliška Zemanská",
        "about": "Dino Game is a site-specific, phone-controlled projection on the Kunsthaus Graz facade. Visitors join a local network, open a webpage, and take turns making the dino jump. No scores or leaderboards, so play stays light and inclusive. Built in Unity, each facade light becomes a pixel, turning browser nostalgia into a shared urban moment that rewards turn-taking over competition."
      }
    ]
  },
  {
    "studentID": 21,
    "nfcID": "E00403500ECBBD34",
    "surname": "Marzouki",
    "name": "Tarek",
    "major": "ID",
    "aboutMe": "Tarek is a multi-disciplinary creative  specializing in product UI UX Design, visual design and commercial photography.\nHe is passionate about work that is characterized by elegance blended with functionality, with an appetite for business nuances, editorial design, and photography.",
    "skills": [
      "UI design",
      "PX design",
      "Design systems",
      "Interaction design",
      "Product strategy",
      "Visual identity"
    ],
    "portfolioLink": "https://tarekmarzouki.com",
    "experiences": [
      {
        "years": "2024 - Present",
        "company": "Product Designer",
        "position": "NINGEN Group"
      },
      {
        "years": "2019 - 2023",
        "company": "UI UX Designer",
        "position": "Vista"
      },
      {
        "years": "2019 - 2019",
        "company": "Digital Designer (Product & Visual)",
        "position": "Dabchy"
      },
      {
        "years": "2018 - 2020",
        "company": "Freelance Apparel Designer",
        "position": "Redbubble"
      }
    ],
    "projects": [
      {
        "title": "Beside You: Organizational Management Software",
        "year": "2024 - ongoing",
        "type": [
          "Product design, SaaS,  product strategy, Branding"
        ],
        "client": "NINGEN",
        "collaborators": "Malek Kharroubi\nHaroun Chebaane\nFiras Zouari\nRamy Ben Maaouria",
        "about": "Beside.you is a Software As A Service solution developed to simplify decision-making and boost efficiency for managers.\nBy solving the biggest business challenges along with intuitive functionalities simplifying Steering, Performance management, and resources Growth, we are shaping a future whereall business tools work seamlessly together, unlocking unmatched operational excellence for organizations everywhere"
      },
      {
        "title": "Trashhand x Oliver Cabell",
        "year": "2023",
        "type": [
          "UI UX Design, e-commerce, Web Design"
        ],
        "client": "Vista",
        "collaborators": "/",
        "about": "A  shoe collab between renowned photographer @trashhand and the well established italian shoe brand Oliver Cabell required various media and web materials, the assignment was to create a product experience that will be available  for a limited time,  should be designed using Oliver Cabell web design system and visual language ; the work produced was UI pages that varied from the marquee to the product page,"
      },
      {
        "title": "BIAT Fintech & Banking:",
        "year": "2021",
        "type": [
          "Product design, UX optimization, user research"
        ],
        "client": "Vista",
        "collaborators": "/",
        "about": "BIAT – an inetrnational bank , has developed all banking activities and constitutes a banking group with its subsidiaries in the fields of insurance, asset management, private equity or stock market intermediation.\nBased on a customer satisfaction survey, the client and the stakeholders envisioned a fresh, modern, and visually appealing new banking app with new differentiating features such as bill payment, payment scheduling and spending tracking,"
      },
      {
        "title": "Dabchy Brand Marketing Social Media Set",
        "year": "2019",
        "type": [
          "Brand marketing design, graphic design, visual language"
        ],
        "client": "Dabchy",
        "collaborators": "Houyem Bourogaa",
        "about": "In a early days of Dabchy as a startup, being the country's first leading social marketplace, brand marketing and positionning were key to pave the way to now what has become a large company in multiple countries with over 2M users,\nThis is one of the visual sets that we created for social media following a specific digital marketing plan at that time, the intent was to promote Dabchy's  new app, social media and blog,"
      },
      {
        "title": "Redbull CarPark Drift Competition",
        "year": "2017",
        "type": [
          "Photography, art direction"
        ],
        "client": "Redbulll and Mafia Street",
        "collaborators": "/",
        "about": "I was commissioned by Mafia Street Cars in collaboration with Redbull to document adn create a lookbook around the car park drift competition that will take place in Carthage over the course of 3 days. The mission was to deliver the wild & intense experience of witnessing the event through creating a set of photographs that portrayed the energy of those 3 days,"
      }
    ]
  },
  {
    "studentID": 22,
    "nfcID": "E00403500ECBBD35",
    "surname": "Müller",
    "name": "Niclas",
    "major": "CD",
    "aboutMe": "Certified media designer from Germany. Part of DAMN Design Studios, active freelancer as plusultra. Working across branding, visual communication, and print, my work translates influences from sports, music, and (pop)culture into versatile, contemporary designs. yooooooo",
    "skills": [
      "Graphic Design",
      "Visual Systems",
      "Editorial Design",
      "Art Direction",
      "Print",
      "Time Management"
    ],
    "portfolioLink": "IG:  @nidusyo\nIG: @damn.studios\nIG: @plusultra.design\n\nplusultra.com.de (coming soon)",
    "experiences": [
      {
        "years": "2024 - Present",
        "company": "",
        "position": "FH Joanneum, Graz\nCommunication Design"
      },
      {
        "years": "2025",
        "company": "",
        "position": "CCS , Detroit\nExchange Semester"
      },
      {
        "years": "2020 - Present",
        "company": "",
        "position": "plusultra.\nFreelance Graphic Designer"
      },
      {
        "years": "2017 - Present",
        "company": "",
        "position": "GOODBOIS, Munich\nVisual Marketing, Graphic Design"
      }
    ],
    "projects": [
      {
        "title": "Shoe Design for New Balance",
        "year": "2025",
        "type": [
          "CMF Design, Graphic Design, Art Direction"
        ],
        "client": "New Balance",
        "collaborators": "Kira Lambert",
        "about": "A sponsored studio project developed during my CCS exchange semester, focusing on a New Balance trail running shoe. Exploring performance and outdoor culture through extensive color, material, and finish research. This included pattern development and color studies, translating trail running aesthetics into a cohesive visual and material concept. In collaboration with a product designer."
      },
      {
        "title": "DAMN - Various Projects",
        "year": "2017-26",
        "type": [
          "Graphic Design,Multimedia, Cultural Design"
        ],
        "client": "DAMN Design Studios",
        "collaborators": "Daniel Müller",
        "about": "Compilation of artworks for DAMN Design Studios. Using multiple types of media for a wide selection of different occasions and purposes, ranging from professional to ironic, these artworks partly draw inspiration from other famous logos and popcultural important designs. They deliberately use similar colors and proportions to leave a memorable visual impact. Considered a tribute and not as a copy."
      },
      {
        "title": "Democracy Poster",
        "year": "2025",
        "type": [
          "Poster Design, Handcraft, Interdisciplinary"
        ],
        "client": "Graz Museum",
        "collaborators": "",
        "about": "Contribution for the exhibition \"Demokratie, heast!\" at Graz Museum in Graz. Poster design for Article 19 of the Universal Declaration of Human Rights: Freedom of Opinion and Expression. The artwork includes an engraving hand-carved into stone and a typographical headline supporting the message of the visual layer. Exhibition still ongoing, go check it out: THE TOPIC IS MORE IMPORTANT THAN EVER!"
      },
      {
        "title": "GOODBOIS Event Poster",
        "year": "2023",
        "type": [
          "Graphic Design, Poster Design, Print Campaign"
        ],
        "client": "GOODBOIS",
        "collaborators": "Herr & Frau Rio, Munich (Print Execution)",
        "about": "Promoting its release event, these artworks were part of an ad campaign for the GOODBOIS EP23 collection. With the poster, an additional social media campaign was launched. Digital media included feed and story posts that picked up the poster's design. Posters were printed with risography and then hung in Munich's area. The overall identity was rounded off with a window wrap at the storefront."
      },
      {
        "title": "DAMN Logo & Corporate Identity",
        "year": "2024",
        "type": [
          "Branding, Logo Design, Corporate Identity"
        ],
        "client": "DAMN Design",
        "collaborators": "",
        "about": "Creation of a visual appearance. Aiming for recognition value and sustainably strengthening the brand profile through a positive external impact. In addition to the main logo and its variations, the corporate identity included a bespoke font, a corporate color palette and instructions for correct use of the assets, which were summarized in a CI Manual. Practical part of my Bachelor Final Project."
      }
    ]
  },
  {
    "studentID": 23,
    "nfcID": "E00403500ECBBD37",
    "surname": "Onyebuchi",
    "name": "Arinze",
    "major": "ID",
    "aboutMe": "Multidisciplinary designer blending UI Design, UX Design, motion design, and no code. I like crafting intuitive interfaces, adding motion that feels right, and turning ideas into usable, living products.",
    "skills": [
      "Motion Design",
      "UI & Visual Design",
      "UX Design",
      "No-Code/Low-Code",
      "UI Prototyping"
    ],
    "portfolioLink": "https://arinze.webflow.io/",
    "experiences": [
      {
        "years": "2019 - 2020",
        "company": "",
        "position": "Kuda\nProduct & Motion Design"
      },
      {
        "years": "2021 - 2023",
        "company": "",
        "position": "Peerstack\nMotion Designer"
      },
      {
        "years": "2023 - Present",
        "company": "",
        "position": "Freelance\nUI and Motion Designer"
      },
      {
        "years": "2024 - 2026",
        "company": "",
        "position": "FH Joanneum Graz\nMA/Interaction Design"
      }
    ],
    "projects": [
      {
        "title": "ThePeer Rebrand: Sizzle Reel and Motion assets",
        "year": "2023",
        "type": [
          "Motion design"
        ],
        "client": "ThePeer",
        "collaborators": "https://genezabrands.com/",
        "about": "A new brand identity for Thepeer, a technologyinfrastructure for businesses to easily integrateand enable them to support fast, direct, andefficient transactions across businesses."
      },
      {
        "title": "RealVision: Sizzle Reel and Motion assets for website",
        "year": "2025",
        "type": [
          "Motion Design"
        ],
        "client": "realvision.com",
        "collaborators": "LateCheckout Agency (Collin Briggs\nJohnson Luong)",
        "about": "A short sizzle reel and website mini-videos to accompany the launch of a new website for RealVision."
      },
      {
        "title": "OduFashion: Website",
        "year": "2022",
        "type": [
          "Low-Code Website",
          "Webflow"
        ],
        "client": "Personal/Concept Project",
        "collaborators": "",
        "about": "The Odufashion website project was a concept design of a luxury fashion brand's website using Webflow."
      },
      {
        "title": "Now News",
        "year": "2022",
        "type": [
          "Mobile Application"
        ],
        "client": "Personal/Concept Project",
        "collaborators": "",
        "about": "A news app that serves as a single central hub for users to discover information and chat with others about relevant topics. Allowing users personalize their content recommendations and participate in secure chat rooms to discuss and share opinions about current events and news topics."
      }
    ]
  },
  {
    "studentID": 24,
    "nfcID": "E00403500ECBBE74",
    "surname": "Orynbayeva",
    "name": "Leila",
    "major": "ID",
    "aboutMe": "Multidisciplinary Designer, I enjoy transforming complex ideas feel simple. To me, design is the perfect fusion of strategy, psychology, and creativity. I'm grateful for the opportunity to transform ideas into reality,  take on big challenges and expanding my skills with every project",
    "skills": [
      "UX Design",
      "Visual desing",
      "Interaction Design",
      "Graphic Design",
      "Concept Design",
      "Low coding"
    ],
    "portfolioLink": "https://leilaorynbay.framer.website/",
    "experiences": [
      {
        "years": "2021 – 2022",
        "company": "Vlife",
        "position": "Product Designer"
      },
      {
        "years": "2022 – 2023",
        "company": "Tech culture",
        "position": "UX/UI & Graphic Designer"
      },
      {
        "years": "2023 – 2024",
        "company": "SMALL & Skif ",
        "position": "Product & Graphic Designer"
      },
      {
        "years": "2024",
        "company": "Rocket Tech",
        "position": "UX/UI Designer"
      }
    ],
    "projects": [
      {
        "title": "Redesign of the SuperApp",
        "year": "2021-2022",
        "type": [
          "UX design, Visual design"
        ],
        "client": "Vlife",
        "collaborators": "",
        "about": "During my Bachelor’s program, I joined a tech startup, where I focused on enhancing the UX and adding features to the main app. As part of the team, I contributed to understanding low adoption rates and redesigned the Main and Payments pages. These updates led to a significant increase in users, improved app ratings, and boosted revenue"
      },
      {
        "title": "Hit That Jackpot",
        "year": "2025",
        "type": [
          "Interactive Installation"
        ],
        "client": "FH Joanneum Project",
        "collaborators": "Genovefa Zourkou, Elina Dorzhieva",
        "about": "Hit that Jackpot is a new take on the arcade reaction game “Cyclone” made with LED strips, where players try to press a big red button exactly when the moving light reaches the target."
      },
      {
        "title": "Redesign of the Aquarium Store",
        "year": "2025",
        "type": [
          "Retail design, SMM"
        ],
        "client": "Hustinx Aquaristiek",
        "collaborators": "Eloisa Velenzini, Diego De Cecco",
        "about": "During the Erasmus Summer Retail Design Program, I collaborated with Politecnico di Milano students to redesign a local aquarium store in Hasselt. We rebranded the space, improved customer experience, and created a new visual identity and social media presence, while exploring retail design through hands-on practice and field visits."
      },
      {
        "title": "Exospine: Designing for Future",
        "year": "2025",
        "type": [
          "Rapid Prototyping",
          "Speculative Design"
        ],
        "client": "Laboratory for Radical Innovations",
        "collaborators": "Sara Waldenberger, Veronika Poštrak\nDorota Bičarova\nStudents from Lahti, Finland",
        "about": "During a 7-week interdisciplinary workshop at CERN in Geneva, I collaborated with students from Finland on a future-focused mission set in 2125. hands-on making, fast idea testing, and constant collaboration, we turned a complex brief into a clear, well-developed concept. This experience became one of the most inspiring and rewarding parts of my FH journey."
      },
      {
        "title": "Drowning Currents",
        "year": "2025",
        "type": [
          "Motion design"
        ],
        "client": "KLANGLICHT 2025 Graz",
        "collaborators": "Alina Volkova, Genovefa Zourkou, Sara Waldenberger, Jessica Karkheck",
        "about": "Drowning Currents is a large light and sound installation for Klanglicht 2025 at Antoniuskirche, Graz. Inspired by the RAUSCH theme, it immerses visitors in swirling light and sound, evoking the sensation of being underwater. The close collaboration with sound and media designers resulted in a powerful and memorable piece. This project remains one of the most meaningful experiences of my studies."
      }
    ]
  },
  {
    "studentID": 25,
    "nfcID": "E00403500ECBBD36",
    "surname": "Peterka",
    "name": "Katharina",
    "major": "MD",
    "aboutMe": "Film enthusiast driven by creativity and a passion for editing. From Austrian TV documentaries to passion projects — I love to cut, shape, and elevate stories that stick.",
    "skills": [
      "Film | Editing"
    ],
    "portfolioLink": "https://katharinapeterka.cargo.site\nIG: @katarismus",
    "experiences": [
      {
        "years": "2021 - 2024",
        "company": "FH Joanneum",
        "position": "Informationsdesign, BA"
      },
      {
        "years": "2024 - 2025",
        "company": "Editorin RANFILM TV & Film Production",
        "position": ""
      },
      {
        "years": "2024-2026",
        "company": "FH JOANNEUM Graz Media Design MA/Master Editing",
        "position": "Züricher Hochschule der Künste"
      },
      {
        "years": "2026",
        "company": "Freelance Editor",
        "position": ""
      }
    ],
    "projects": [
      {
        "title": "TOO TRUE TO BE BEAUTIFUL",
        "year": "2025",
        "type": [
          "Shortmovie 13min"
        ],
        "client": "FH JOANNEUM",
        "collaborators": "Director Noah Bonevie\nAD & Edit Katharina Peterka\nDoP & Colorist Peter Verhounik\nProducer Magdalena Ackerl",
        "about": "A couple in therapy – trapped in a cycle of love, distance and unmet expectations. He longs for closeness, she pulls away. They can‘t let go, yet they’re slowly destroying each other. Then, something shifts. Power dynamics change, roles reverse. But is this a fresh start or just a new way to lose themselves? A story about toxic love, dependency and the price of wanting to be seen."
      },
      {
        "title": "CASTLES & PALACES",
        "year": "2024",
        "type": [
          "Documentary 45min"
        ],
        "client": "Produced for 3sat | ORF",
        "collaborators": "Production by RANFILM",
        "about": "The fourth season of the successful TV documentary series takes us into the fascinating world of castles and palaces in Croatia and Austria. Majestic buildings, hidden stories and impressive landscapes merge into a cinematic journey through the centuries! This episode is dedicated to the hidden treasures between the Danube and the Limestone Alps in Upper Austria."
      },
      {
        "title": "DEAR ME",
        "year": "2024",
        "type": [
          "Shortfilm 2min"
        ],
        "client": "Instant36",
        "collaborators": "Director Noah Bonevie\nAD & Edit Katharina Peterka\nDoP & Colorist Peter Verhounik\nProducer Magdalena Ackerl",
        "about": "In a letter to herself, a young woman reflects on the challenges people face today as they navigate an increasingly fast-paced and disheartening world. She realizes that while she can’t carry the weight of the world alone, turning towards the sun makes the shadows around her seem a little less dark."
      },
      {
        "title": "DOM",
        "year": "2024",
        "type": [
          "DOM – full Projection Mapping 8min",
          "Best of Video 1min"
        ],
        "client": "Bachelor's Thesis",
        "collaborators": "FH JOANNEUM",
        "about": "Immersive data visualization meets feminist perspectives.\nThe bachelor thesis DOM explores the creative power of projection mapping in a geodesic dome. The project combines immersive visu- als with data to visualize feminist aspects in the electronic music in- dustry. The fusion of art, technology and education creates a unique experience that raises awareness and opens up new perspectives."
      },
      {
        "title": "distorted",
        "year": "2025",
        "type": [
          "Video 1min"
        ],
        "client": "International Design Week",
        "collaborators": "Peter Verhounik",
        "about": "distorted\" is an experimental video abstractly exploring inner conflict during moments of stillness when inner thoughts become prominent. Fragmented visuals and distorted perspectives convey internal tensions and the elusive question: \"What do I truly want?\" It represents an emotional state, inviting viewers to feel the unresolved and find clarity through raw, honest visual expression."
      }
    ]
  },
  {
    "studentID": 27,
    "nfcID": "E00403500ECBBE75",
    "surname": "Poštrak",
    "name": "Veronika",
    "major": "ID",
    "aboutMe": "I’m a multidisciplined designer from small-but-mighty Slovenia: shy, selective, and a total perfectionist in work and life. I care deeply about details, clarity, and “wow” moments. When my brain needs a reset, you’ll find me in the gym, or hunting for great food.",
    "skills": [
      "UI/UX Design",
      "Web Design",
      "Visual Design",
      "Interaction Design",
      "Game Design",
      "Sleeping"
    ],
    "portfolioLink": "veronikapostrak.myportfolio.com",
    "experiences": [
      {
        "years": "2025-ongoing",
        "company": "Alice Architecture",
        "position": "Exhibition & Print Designer"
      },
      {
        "years": "2024-ongoing",
        "company": "Social Impact Award",
        "position": "Brand Designer"
      },
      {
        "years": "2023-25",
        "company": "Maribor Student Organization",
        "position": "Graphic Designer"
      },
      {
        "years": "2020-24",
        "company": "Klinka Student & Youth Club",
        "position": "Graphic Designer"
      }
    ],
    "projects": [
      {
        "title": "Olipop Web Vending Machine",
        "year": "2025-26",
        "type": [
          "Web Design",
          "Interaction",
          "Prototyping"
        ],
        "client": "Personal Project",
        "collaborators": "",
        "about": "Imagine shopping on the web via a vending machine. This project started as a playful idea I needed to test, so I prototyped an interactive web vending machine for Olipop - a drink brand whose style I’ve always admired. I explored motion and non-traditional interactions beyond standard buttons to create a fun, engaging experience. Could playful interactions boost engagement for drink brands online?"
      },
      {
        "title": "Undercover Game",
        "year": "2024",
        "type": [
          "Visual Identity",
          "UI/UX Design",
          "Game Design"
        ],
        "client": "Personal Project",
        "collaborators": "",
        "about": "My friends and I loved playing Spyfall with just paper, so I reimagined it as a physical game and rebranded it as Undercover - a game of secrets, strategy, and bluffing. I also designed a mobile app version. Detectives know the location, the spy doesn’t, who will outsmart whom without revealing too much?"
      },
      {
        "title": "Rex Kralj",
        "year": "2025-26",
        "type": [
          "Re-branding",
          "Visual Identity",
          "Web Design"
        ],
        "client": "Personal Project",
        "collaborators": "",
        "about": "Rex Kralj is a Slovenian furniture company, established in 2012 to honor architect Niko Kralj (1920–2013). I loved their style, so I re-imagined their branding and website as a personal project. I created a minimalistic visual identity that elevates their iconic furniture. Because if chairs are \"in\", why not design around them?"
      },
      {
        "title": "Théla",
        "year": "2024",
        "type": [
          "Visual Identity",
          "UI Design",
          "Web Design"
        ],
        "client": "Personal Project",
        "collaborators": "",
        "about": "Théla is a skincare brand I imagined from scratch, inspired by Sri Lankan tea and traditional herbal rituals. I love designing brands I would actually use, so I crafted everything - from copy and packaging to visual identity and website. The design is clean and minimalistic, with educational pages to showcase each product’s story and benefits."
      },
      {
        "title": "Glitched Ideals",
        "year": "2025",
        "type": [
          "Poster Design",
          "Mixed Media"
        ],
        "client": "FH Joanneum",
        "collaborators": "",
        "about": "During the Life’s a Glitch workshop at International Design Week 2025, I created a poster series glitching icons like Marilyn Monroe, Kylie Jenner, and Vermeer’s Girl with a Pearl Earring. Inspired by Glitch Studies Manifesto and Glitch Feminism, I used digital distortion and mixed media to question beauty standards and embrace imperfection."
      }
    ]
  },
  {
    "studentID": 28,
    "nfcID": "E00403500ECBBE76",
    "surname": "Prassé",
    "name": "Florian",
    "major": "ID",
    "aboutMe": "My background in Graphic and Type Design led to a systematic way of thinking and a fascination for coding. I have spent the past years teaching myself how to build for the web and create 3D worlds in Blender as a passion.",
    "skills": [
      "3D Design",
      "Creative Coding",
      "Graphic Design",
      "Interface Design",
      "Type Design",
      "Web Development"
    ],
    "portfolioLink": "florianprassee.at",
    "experiences": [],
    "projects": [
      {
        "title": "Bleepo",
        "year": "2025",
        "type": [
          "CGI, Blender, Sound"
        ],
        "client": "Passion Project",
        "collaborators": "Joshua Hohenbrink",
        "about": "In a post apocalyptic world, Bleepo the robot has come to the conclusion that only sleeping will make him find his peace. This passion project was built in blender and got supported by sound made by Joshua Hohenbrink."
      },
      {
        "title": "Nette Grotesk Typeface",
        "year": "2024",
        "type": [
          "Type Design, Editorial Design"
        ],
        "client": "NDU, Vienna Design Week",
        "collaborators": "Julian Jakob",
        "about": "This Typeface is trying to look nice, but has a rather grim root. The project developed during my bachelors where we had the task to draw and create a Typeface that connects to the book Frankenstein by Mary Shelly. The specimen book found a place at Vienna Design Week and another use case—Tabula by my friend Julian Jakob."
      },
      {
        "title": "helpingheads.at",
        "year": "2025",
        "type": [
          "Web Design, Web Development"
        ],
        "client": "helping heads",
        "collaborators": "",
        "about": "helping heads is a creative association based in St. Pölten. They create art and water installations, light projections and more. I designed and developed their website this year and went with a completly new approach to learn a new development framework."
      },
      {
        "title": "Foosh – Cook Faster With What You Have",
        "year": "2025",
        "type": [
          "App Design, App Development"
        ],
        "client": "START-UP",
        "collaborators": "Felix Prinz, Amelie Strobl",
        "about": "Foosh is a food-focused app concept developed during an FH course, where we created the full branding and app design. It features a digital pantry that lets users scan groceries and receive AI-powered recipe suggestions based on what they already have. The project is now moving toward publication in the DACH region."
      },
      {
        "title": "Tetris",
        "year": "2025",
        "type": [
          "Game Development"
        ],
        "client": "FH Joanneum",
        "collaborators": "Sara Waldenberger, Veronika Poštrak, Felix Prinz, Alice Zanutti",
        "about": "For the GENERATE25 creative event at Helmut List Halle, we reimagined the classic game of Tetris as a unique collaborative experience. We deconstructed the gameplay to require teamwork: one player controlled the movement of the blocks, while the second player managed rotation via a separate button interface. I handled most of the coding and the hardware setup for the event"
      }
    ]
  },
  {
    "studentID": 29,
    "nfcID": "E00403500ECBBD38",
    "surname": "Prinz",
    "name": "Felix",
    "major": "ID",
    "aboutMe": "UI/UX Designer shaping clear journeys across screens and services. I'm curious about how people think and how to improve their experiences. When I log off, I’m probably hiking, exploring new places or experimenting in the kitchen with whatever’s in season.",
    "skills": [
      "UI/UX Design",
      "Interface Design",
      "Branding",
      "Visual Design",
      "Interaction Design",
      "Motion Design"
    ],
    "portfolioLink": "https://felixprinz.framer.website/",
    "experiences": [
      {
        "years": "2024-present",
        "company": "FH Joanneum Interaction Design",
        "position": "Master's Student"
      },
      {
        "years": "2024-present",
        "company": "Ostwerk",
        "position": "UI/UX Consulting & Webdesign"
      },
      {
        "years": "2023",
        "company": "Rail Net Europe",
        "position": "Digital Designer"
      },
      {
        "years": "2021-24",
        "company": "New Design University",
        "position": "Grafik- & Informations Design"
      }
    ],
    "projects": [
      {
        "title": "Uferwirt – A Timeless Approach to Traditional Cuisine",
        "year": "2025",
        "type": [
          "Webdesign",
          "Branding",
          "Motion Design"
        ],
        "client": "UFERWIRT",
        "collaborators": "",
        "about": "For Uferwirt, a traditional restaurant concept, I designed a cohesive visual identity including branding, website, and print materials. The project combines traditional values with a modern design approach, creating a timeless yet contemporary presence across all touchpoints."
      },
      {
        "title": "Climero – Climate Clarity Starts Here.",
        "year": "2025",
        "type": [
          "UI/UX Design",
          "Appdesign",
          "Branding"
        ],
        "client": "FH JOANNEUM",
        "collaborators": "Florian Prassé, Arinze Onyebuchi",
        "about": "This FH course project involved designing a CO₂ tracking app from the ground up. We created the complete brand identity, user flows, wireframes, and interactive UI, supported by user testing. The goal was to make climate impact visible, understandable, and shareable."
      },
      {
        "title": "Foosh – Cook Faster With What You Have",
        "year": "2025-present",
        "type": [
          "Appdesign",
          "Branding",
          "App Development"
        ],
        "client": "START-UP",
        "collaborators": "Florian Prassé,  Amelie Strobl",
        "about": "Foosh is a food-focused app concept developed during an FH course, where we created the full branding and app design. It features a digital pantry that lets users scan groceries and receive AI-powered recipe suggestions based on what they already have. The project is now moving toward publication in the DACH region."
      },
      {
        "title": "Metallzeit – Shaping Systems by Design",
        "year": "2024-2025",
        "type": [
          "UI/UX Design",
          "User Flow",
          "User Testing"
        ],
        "client": "METALLZEIT",
        "collaborators": "OSTWERK",
        "about": "For Metallzeit, a modular product configurator was developed to enable customized metal construction products. The goal was to improve user experience and streamline the quote request process. The foundation was built on target group analysis, competitive research, and wireframing."
      },
      {
        "title": "Videonale – Bonn: Festival for Video and Time-Based Arts",
        "year": "2024",
        "type": [
          "Branding",
          "Editorial Design",
          "Appdesign"
        ],
        "client": "VIDEONALE",
        "collaborators": "Univ.-Prof. Dipl.-Des. (FH) Olivier Arcioli",
        "about": "For the 20th anniversary of Videonale, I developed a new visual identity including logo and branding. The project covered a festival magazine/book, print materials and a companion app used on site in Bonn, creating a cohesive, contemporary experience across physical and digital touchpoints."
      }
    ]
  },
  {
    "studentID": 30,
    "nfcID": "E00403500ECBB00A",
    "surname": "Rieder",
    "name": "Lukas",
    "major": "SD",
    "aboutMe": "Born in Klagenfurt, guitarist since the age of seven. Playing in several bands and part of Flavor Amp since 2020. BA in International Marketing and Sales Management. Sound design student, freelance sound technician and FOH engineer with a strong hands-on mindset.",
    "skills": [
      "Sound Design",
      "Sound Technician",
      "Live-Musician",
      "Event Management",
      "Marketing & Sales"
    ],
    "portfolioLink": "https://instagram.com/lukiriee/",
    "experiences": [
      {
        "years": "2025 - present",
        "company": "Self-employed Sound Technician / Sound Designer",
        "position": ""
      },
      {
        "years": "2021 - 2024",
        "company": "BA in International Marketing & Sales Management",
        "position": ""
      },
      {
        "years": "2023",
        "company": "Internship - Lakeside Music (Recording Studio / Record Label)",
        "position": ""
      },
      {
        "years": "2020–present",
        "company": "Self-employed Musician - Flavor Amp (flavoramp.at)",
        "position": ""
      }
    ],
    "projects": [
      {
        "title": "Pandemonium – Klanglicht Festival",
        "year": "2025",
        "type": [
          "Composition",
          "Surround/Stereo Mix"
        ],
        "client": "FH-Project",
        "collaborators": "Composition: Anna Mauthner\nVisuals: Magdalena Ackerl, Felix Prinz, Tobias Schnittenkopf, Florian Thausing, Tanja Kobler",
        "about": "There are moments when routine becomes a cage we built ourselves. We chase rhythm, control, and comfort, until something inside begins to shift. What follows is both chaos and liberation — the quiet realization that losing balance is also how we grow.\nWe created the soundtrack for a sound installation at the Klanglicht Festival Graz, realized inside a church with challenging acoustics."
      },
      {
        "title": "Standby – Flavor Amp",
        "year": "2025",
        "type": [
          "Recording, Production, Mix"
        ],
        "client": "Personal Project",
        "collaborators": "Songwriting & Performance: Lukas Kotschnig, Alex Glantschnig, Clemens Bärnthaler",
        "about": "Standby was the first production realized in our self-built recording studio. I was responsible for the complete music production, including recording and mixing. The track is part of a rock concept album of my Band FLAVOR AMP about addiction and dependency. The lyric video was created by Jacob Mikula (@meaku.arts)."
      },
      {
        "title": "Bock Auf Rock Festival",
        "year": "2024",
        "type": [
          "Festival & Event Mgmt"
        ],
        "client": "Personal Project",
        "collaborators": "Lukas Kotschnig, Alex Glantschnig, Jacob Mikula",
        "about": "An independently organized open-air rock festival in Klagenfurt, realized with my band on an empty parking lot. The project covered the full production process, including stage setup, band booking, technical planning, permits, and negotiations with local authorities. The festival took place on August 24, featured five acts from Austria and Slovenia. The aftermovie was created by Jacob Mikula."
      },
      {
        "title": "Doll Shop",
        "year": "2024",
        "type": [
          "Sound Design, Mixing"
        ],
        "client": "FH-Project",
        "collaborators": "Voice: Gisela Schmidt\nAnimation: Rosalie Wellerdiek, Anton Seiler, Ocèane Duval, Victor Cazeaux, Elisa Lefebvre, Alexandre Bal",
        "about": "A two-minute animated film about Hedwig Hetemann, owner of the last Jewish-owned doll shop in Weimar, destroyed by SA and SS during the pogrom night of November 9, 1938. Created during a four-day excursion with minimal equipment, featuring a strong local focus, a spontaneous voice-over by a 97-year-old Weimar resident, and on-location sound design."
      },
      {
        "title": "Facettes",
        "year": "2025",
        "type": [
          "Sound Design, Mix"
        ],
        "client": "FH-Project",
        "collaborators": "Peter Verhounik",
        "about": "During Creative Week 2025, Peter spontaneously asked me to create the sound design for his video. I agreed on the spot and had only one afternoon to complete the entire project. Working under this time pressure was challenging but rewarding, and we were very happy with the final result."
      }
    ]
  },
  {
    "studentID": 31,
    "nfcID": "E00403500ECBAED7",
    "surname": "Rohrwild",
    "name": "Karina",
    "major": "CD",
    "aboutMe": "I am just a girl with my head in the clouds. The view from up here helps me see things from a new perspective and turn imagination into visual stories. \n\nI find inspiration in stories, people and art. Beyond creativity and imagination, my greatest drivers are seeking the good in everything and everyone, believing that what we send out into the universe always comes back to us.",
    "skills": [
      "Illustration",
      "Graphic Design",
      "Brand Design",
      "Editorial Design",
      "Writing"
    ],
    "portfolioLink": "https://karinarohrwild.myportfolio.com",
    "experiences": [
      {
        "years": "2018 - 2019 ",
        "company": "Design Akademie DA!",
        "position": ""
      },
      {
        "years": "2019 - 2024 ",
        "company": "BA Mediatechnology and Mediaproduction",
        "position": ""
      },
      {
        "years": "09.2021 - 01.2022 ",
        "company": "Internship Graphic Design, Otto Group",
        "position": ""
      },
      {
        "years": "2024 - ongoing ",
        "company": "MA Communication Design",
        "position": ""
      }
    ],
    "projects": [
      {
        "title": "Rebranding Schubert Cinema Graz",
        "year": "2025",
        "type": [
          "Brand Design"
        ],
        "client": "",
        "collaborators": "",
        "about": "As part of a rebranding project for a university, a local brand from Graz was redesigned. The aim was to modernize the visual identity of the Schubert Cinema while preserving its cultural heritage and classy character as a traditional arthouse cinema. The project focused on developing a clear visual language and a consistent brand strategy that combines the classic cinema atmosphere with contemporary design."
      },
      {
        "title": "Beyond the world",
        "year": "since 2024",
        "type": [
          "Illustration"
        ],
        "client": "",
        "collaborators": "",
        "about": "This project is a collection of illustrations created over several months that reflect my personal illustration style. The works represent a selected selection from a larger collection of illustrations and highlight various themes, moods, and visual approaches that developed during the process."
      },
      {
        "title": "Bookcover Design",
        "year": "2024",
        "type": [
          "Editorial Design"
        ],
        "client": "",
        "collaborators": "",
        "about": "This project comprises three book cover designs for various Agatha Christie novels, which were created as part of the bachelor's thesis “Print finishing techniques for fiction book covers.” The focus of the project was on researching and applying various print finishing techniques and developing appealing book covers to support the narrative atmosphere and visual impact of literary covers."
      },
      {
        "title": "Vertigo",
        "year": "2025",
        "type": [
          "Brand and Visual Design"
        ],
        "client": "",
        "collaborators": "Elisabeth Seiler",
        "about": "Together with a fellow student, I developed the corporate design for Vertigo, a student project that was part of the Klanglicht Festival in Graz in October 2025. The task involved creating a complete visual identity for various media, including print materials, banners, social media posts, stickers, and animations. The visual identity was designed to reflect the concept and atmosphere of the project while seamlessly integrating with the overall framework and aesthetics of the Klanglicht Festival."
      },
      {
        "title": "Gut zu Reisen",
        "year": "2023",
        "type": [
          "Designed and written Book"
        ],
        "client": "",
        "collaborators": "",
        "about": "The 64-page book “Gut zu Reisen” was published as part of the Thalia Young Storyteller Award and is available from the publisher story.one. It can be purchased online in all bookstores. The publication contains two short stories, accompanied by illustrations and a book cover, all of which were designed and written entirely by me."
      }
    ]
  },
  {
    "studentID": 32,
    "nfcID": "E00403500ECBB008",
    "surname": "Sandersfeld",
    "name": "Lina",
    "major": "CD",
    "aboutMe": "Full-time creative, ironic, chaotic, empathic & rational human; part-time a little lost. I think intuitively, overthink selectively, dance & craft through life, am honest, self-aware and somehow professional enough to design things - maybe for you?",
    "skills": [
      "Graphic Design",
      "Illustration",
      "Branding",
      "Crafts",
      "Fast Talking"
    ],
    "portfolioLink": "https://www.instagram.com/linadasistprima/",
    "experiences": [
      {
        "years": "2024-26",
        "company": "FH Joanneum Communication Design",
        "position": "Master Student"
      },
      {
        "years": "2023-present",
        "company": "Graphic Design Freelancer",
        "position": ""
      },
      {
        "years": "2023",
        "company": "Greenpeace Intern",
        "position": "Graphic Design and Digital Campaigning"
      },
      {
        "years": "2020-23",
        "company": "NHL Stenden Creative Business",
        "position": "Bachelor of Arts"
      }
    ],
    "projects": [
      {
        "title": "Club Mate Rebranding",
        "year": "2024",
        "type": [
          "Branding",
          "Typography",
          "Illustration"
        ],
        "client": "Uni Project",
        "collaborators": "",
        "about": "As a loyal Club Mate lover, I chose to give the iconic drink a fresh Rebranding that keeps the indie spirit, the mate history, its cup and added a new illustration and some funky colors. Club Mate if you are seeing this, let me know if you are interested in a collab hehe."
      },
      {
        "title": "UWE:festival",
        "year": "2025",
        "type": [
          "Graphic design, Visual Identity, Editorial"
        ],
        "client": "Theaterakademie München",
        "collaborators": "",
        "about": "The visual marketing and branding concept for the student theater festival UWE:festival in Munich. It is an open, student-run festival that invites experimentation, exchange, and new perspectives in contemporary theater. The project includes a poster, banner, program booklet, and stickers."
      },
      {
        "title": "Producing Problems",
        "year": "2022",
        "type": [
          "Graphic Design, Songcreation, Videoproduction"
        ],
        "client": "Matters by NHL Stenden",
        "collaborators": "Merten Richter, Chiara Petasch, Charly Junker, Lisa Henzler, Louisa Freese",
        "about": "A music video series addressing student life with its Pros and Cons. A Bachelor semester project that taught me a lot about creative direction, video production, camera work, illustration, concepting & branding. Check it out, its worth it :D"
      },
      {
        "title": "Tabula Rasa",
        "year": "2022",
        "type": [
          "Transmedia",
          "Experimental",
          "Audiovisual Installation"
        ],
        "client": "",
        "collaborators": "Bogdan Dumitras\nViviana Pascu",
        "about": "Tabula Rasa is an experimental transmedia project created during a Erasmus semester intending to summarize and grasp the emotion of (voluntarily) being in a new country as a foreigner. The project makes use of different media such as a booklet, videos, a website and an interactive exhibition."
      },
      {
        "title": "mix on the mix",
        "year": "2022-25",
        "type": [
          "Graphic Design",
          "Audiovisuals",
          "Edits"
        ],
        "client": "",
        "collaborators": "",
        "about": "A wild mix of little edits, vids and pics that I did for myself, for friends, some clients -  just to practice or to use a moment of creativity at 2 am."
      }
    ]
  },
  {
    "studentID": 34,
    "nfcID": "E00403500ECBAED8",
    "surname": "Schittenkopf",
    "name": "Tobias",
    "major": "ID",
    "aboutMe": "When I’m not designing, I’m usually outdoors - hiking, climbing  or snowboarding. My hobbies shaped my appreciation for clarity, function, and efficiency which can be found in my passion for graphic and web design. I’m drawn to utilitarian, modern, and clean design systems that prioritize purpose over excess.",
    "skills": [
      "Visual Design",
      "UI Design",
      "Graphic Design",
      "Branding",
      "Art Direction"
    ],
    "portfolioLink": "https://www.tobiasschitte.at/",
    "experiences": [
      {
        "years": "2023-present",
        "company": "Freelance",
        "position": "Visual Designer"
      },
      {
        "years": "2024-26",
        "company": "Fh Joanneum Interaction Design",
        "position": "Master Student"
      },
      {
        "years": "2024",
        "company": "BuildInAmsterdam.",
        "position": "Visual Design Intern"
      },
      {
        "years": "2021-23",
        "company": "allinone-creative",
        "position": "Visual Designer"
      }
    ],
    "projects": [
      {
        "title": "X-Bionic Webstore",
        "year": "2024",
        "type": [
          "UI Design",
          "UX Design",
          "Art Direction"
        ],
        "client": "X-Bionic",
        "collaborators": "",
        "about": "During my internship as a Digital Designer at Build in Amsterdam, I contributed to redefining X-Bionic’s brand identity. My main focus was shaping the art direction and translating the rebrand into the digital experience, working on the website’s visual language, layouts, and overall look and feel, while supporting the broader creative direction."
      },
      {
        "title": "Alpine Webstore",
        "year": "2024",
        "type": [
          "UI Design",
          "UX Design",
          "Art Direction"
        ],
        "client": "Alpine Hearingprotection",
        "collaborators": "",
        "about": "During my internship at Build in Amsterdam, I contributed to the Alpine Hearing Protection webstore across multiple touchpoints. I worked on the website design, supported art direction on the photoshoot, worked photo post-production, and designed icons, packaging assets, and a cohesive newsletter concept."
      },
      {
        "title": "Fuck Fomo",
        "year": "2023",
        "type": [
          "Web Design",
          "Web Development",
          "Graphic Design"
        ],
        "client": "Fh Joanneum",
        "collaborators": "Noah Bonevie\nPeter Verhounik",
        "about": "Fuck Fomo explores how fear of missing out influences online shopping behavior in an ad-saturated digital culture. I designed the layout for our scientific research, created a website to present the findings and video, and designed a poster to promote both the project and film."
      }
    ]
  },
  {
    "studentID": 35,
    "nfcID": "E00403500ECBB009",
    "surname": "Schmitz",
    "name": "Gregor",
    "major": "SD",
    "aboutMe": "Sound designer and musician. Coming from classical music, I discovered a love for electronics and sound synthesis, not limited to specific genres. Always looking for collaboration. Recently I developed a focus on everything related to film and music that plays with space.",
    "skills": [
      "Composing",
      "Arranging",
      "Music Notation",
      "Sound Design",
      "Synthesis",
      "Mixing"
    ],
    "portfolioLink": "gregors404@aol.com",
    "experiences": [
      {
        "years": "2018–2019",
        "company": "Musicology Seminar/Erich-Thienhaus-Institute",
        "position": "Research assistant “Technologies of Singing”"
      },
      {
        "years": "2020–24",
        "company": "Trossingen State University of Music",
        "position": "B.Mus. Musikdesign"
      },
      {
        "years": "2023–24",
        "company": "German Film Orchestra Babelsberg",
        "position": "Studio Internship & Score Editor"
      },
      {
        "years": "2024–present",
        "company": "FH Joanneum/KUG",
        "position": "Master student Sounddesign"
      }
    ],
    "projects": [
      {
        "title": "Klanglicht – Chasing the Rush",
        "year": "2025",
        "type": [
          "Composition;",
          "Surround/Stereo Mix"
        ],
        "client": "Klanglicht;\nFH Joanneum",
        "collaborators": "Visuals:\nDominik Blümel;\nTarek Marzouki;\nJoseph Ioseliani",
        "about": "As part of the \"Vertigo\" Klanglicht-cooperation of FH Joanneum I had the chance to work with three visual artists. We came up with \"Chasing the Rush\", a journey through time and space, reflecting how communities got their transcendence experience. Starting from small fire places, we are waking up, caught in everyday life's hustle, desperately on a hunt for a quick rush."
      },
      {
        "title": "The End – Original Soundtrack",
        "year": "2024",
        "type": [
          "Orchestra Editing"
        ],
        "client": "German Filmorchestra Babelsberg;\nMubi;\nFinal Cut For Real",
        "collaborators": "Joshua Oppenheimer (Director);\nJosh Schmidt (Composer);\nMarius De Vries (Executive Music Producer);\nFalko Duczmal/Felix Trawöger (Recording Engineers);\nAlexander Wohlfeil (Music Editor);\nTilda Swinton/Michael Shannon/George MacKay/et. al. (Performers)",
        "about": "In the end of my internship at Studio Babelsberg, I got the opportunity to work as a music editor (credited) on the full length musical film by Joshua Oppenheimer. The movie is set in a post-apocalyptic world, where the last living family builds their \"perfect\" world inside a bunker. During the editing process, we matched the orchestra to the score and the on-set performances by the actors."
      },
      {
        "title": "Bach in Bitterfeld",
        "year": "2022",
        "type": [
          "Sound Engineering;",
          "Sound Design"
        ],
        "client": "Festival OSTEN;\nKöthener Bachfesttage",
        "collaborators": "Folkert Uhde (Supervision);\nLuka Swoboda (Composer);\nYann Wienand (Violin, Sound Design);\nJason Ullah (Engineering, Sound Design);\nHendrik Benz (Engineering, Programming)",
        "about": "Immersive sound installation and performative concert experience presented as part of the OSTEN Festival in cooperation with the Köthener Bachfesttage. Set inside of an old water reservoir, the project transformed the empty industry space into a dynamic experience combining electronic sounds, the unique acoustic and musical fragments by J.S. Bach."
      },
      {
        "title": "The North Face (Spec)",
        "year": "2025",
        "type": [
          "Music;",
          "Sound Design;",
          "Mixing"
        ],
        "client": "The North Face",
        "collaborators": "Noah Bonevie (Director);\nPeter Verhounik (Camera, Grading);\nAman Maller (Gaffer);\nKatharina Peterka/Magdalena Ackerl (PAs);\nMaria Shehata, Noah Bonevie (Edit);\nLukas Rieder (Sound Design, Mix);\nKatarina Pototschnig, Prince Nyanney, Martin (Talents)",
        "about": "A spec ad for The North Face, created in a film studio using\nreal-life elements. Music incorporates a lot of sound design elements matched to the visual edit, while still functioning as separate electronic piece, setting a contrast to the naturalistic sounds in the additional sound design. The sound reflects the combination of nature and urban style, present in the visual language and the brand."
      },
      {
        "title": "Rule8Granulator",
        "year": "2024",
        "type": [
          "Software Developement"
        ],
        "client": "Solo Bachelor Project",
        "collaborators": "",
        "about": "A short tech-demo, presenting a software-tool, I created as part of my bachelor project. In the thesis I analyzed different paradigms of music theory and how models are influenced by historic and technological development. To explore this in practice, I programmed a tool, that combines algorithmic structures of granular synthesis with a baroque model of harmony, using MAX/MSP and JavaScript."
      }
    ]
  },
  {
    "studentID": 36,
    "nfcID": "E00403500ECBAED6",
    "surname": "Schneider",
    "name": "Verena",
    "major": "SD",
    "aboutMe": "Hi, I’m Verena,  a multidisciplinary creative working across sound, film, photography and handcrafted art forms. Through extensive international travel, I have gathered cultural knowledge, linguistic skills and, most notably, achieved the CMS 24 record for highest beach-day count. My practice focuses on documenting life, movement and surfing through a sonic and visual lens.",
    "skills": [
      "Visual Design",
      "Photography",
      "Sound Design",
      "Content Creation",
      "was mit Sound geht auch"
    ],
    "portfolioLink": "https://verenaschneider.cargo.site",
    "experiences": [
      {
        "years": "2021 - 2024",
        "company": "FH Joanneum",
        "position": "Informationsdesign, BA"
      },
      {
        "years": "2023 – 2024",
        "company": "Surf Photography/ Content Creation Internships",
        "position": "Sri Lanka, Portugal,  Morocco"
      },
      {
        "years": "2024",
        "company": "IADE Lisbon",
        "position": "Creative Technologies, Exchange Semester"
      },
      {
        "years": "2024 – 2026",
        "company": "FH Joanneum & KUG",
        "position": "Sound Design, MA"
      }
    ],
    "projects": [
      {
        "title": "Klanglicht - Waldspaziergang",
        "year": "2025",
        "type": [
          "Composition",
          "Surround/Stereo Mix"
        ],
        "client": "Klanglicht\nFH Joanneum",
        "collaborators": "Selina Allerstorfer, Victoria Bremer, Desiree Steigerwald, Valerie Schwarz, Alina Huft",
        "about": "For the 2025 Klanglicht Festival in Graz, the master’s programme created a light installation made up of different team projects.\nOur team chose to tell the story of a walk through nature that slowly loses its calm. In this case I was doing the Sound Design, Composition, Mixing in the Church to create a Surround Sound Experience."
      },
      {
        "title": "Analog Sound Design",
        "year": "2023/24",
        "type": [
          "Analog Sound Design; Synthesizer"
        ],
        "client": "",
        "collaborators": "",
        "about": "Everything analog fascinates me! For my bachelor thesis I did spent a great time working with an analog synthesizer from Moog and did create several sound pieces with it. The ambient piece for my bachelor thesis especially combines analog sound design with field recordings of rain in Sri Lanka.  Another Project focuses special on creating Sound Design as a story telling tool and using simple analog changes to translate emotions."
      },
      {
        "title": "Photography",
        "year": "2024/26",
        "type": [
          "Surf Skate Travel"
        ],
        "client": "Surf Spirit",
        "collaborators": "Surf Spirit; Manu Galdámez; Jule Weber",
        "about": "Here you see a Collection of Surf Photography I did the last years, shooting in different locations like Sri Lanka, Spain, Portugal and Morocco. Collaborating with other surf photographers and spending hours in the water helped me to develop skills in the surf photography field."
      },
      {
        "title": "Capturing the Sonic Experience of Surfing",
        "year": "2025",
        "type": [
          "Einzelproject"
        ],
        "client": "",
        "collaborators": "",
        "about": "During the last year i developed a surfboard sound recording device, which allowed me to record the sound of surfing."
      },
      {
        "title": "Stage Design; Projection Mapping,",
        "year": "2024",
        "type": [
          "Stage Design, Projection Mapping, TouchDesigner"
        ],
        "client": "Alina Volkova",
        "collaborators": "Alina Volkova",
        "about": "Stage Design, Projection Mappnig for the artist Nina Eba (Alina Volkova). Visuals with live adjustment of the visuals during her performance."
      }
    ]
  },
  {
    "studentID": 37,
    "nfcID": "E00403500ECBB007",
    "surname": "Schnurrer",
    "name": "Jakob",
    "major": "ID",
    "aboutMe": "I am a Junior UX Designer interested in user testing, facilitation and programming. Volunteering is a big part of my life whether at my scout group or local UX community. But I am also a homecook, homelabber, casual knight, artist, and board gamer - a jack of all trades.",
    "skills": [
      "UX Design",
      "UI Design",
      "Sketching",
      "Facilitation",
      "Cooking (fire & stove)",
      "Survival"
    ],
    "portfolioLink": "https://www.linkedin.com/in/schnurrerjakob/",
    "experiences": [
      {
        "years": "2024 - now",
        "company": "FH Joanneum",
        "position": "Interaction Design, MA"
      },
      {
        "years": "2024 - now",
        "company": "Intact",
        "position": "Junior UX Designer"
      },
      {
        "years": "2023",
        "company": "Exchange Semester Belgium ",
        "position": "Karel de Grote Hogeschool"
      },
      {
        "years": "2021 - 2024",
        "company": "FH Joanneum",
        "position": "Informationsdesign, BA"
      }
    ],
    "projects": [
      {
        "title": "Get a Room App",
        "year": "2025 - 2026",
        "type": [
          "App Development",
          "UI Design",
          "UX Design"
        ],
        "client": "App Design\nFH Joanneum",
        "collaborators": "Seymur Mammadov",
        "about": "Get A Room is meant to addresses the shortage of student workspaces at FH Joanneum. By parsing JSON-based schedules into a mobile dashboard, we transformed inaccessible data into an easy to use tool. This app enables students to find free rooms in their building to use as study spaces."
      },
      {
        "title": "Sustainability4u Website",
        "year": "2023",
        "type": [
          "Web Development",
          "Web Design"
        ],
        "client": "Sustainability4u",
        "collaborators": "Julia Vilgratter",
        "about": "Sustainability4U is a website developed to communicate complex environmental data to a broad consumer audience. We translated an exhibition of posters into a website, containing more information, audio guides and study material."
      },
      {
        "title": "GenWave Installation",
        "year": "2025",
        "type": [
          "Interaction Design",
          "Arduino Development",
          "Prototyping"
        ],
        "client": "Fh Joanneum",
        "collaborators": "Seymur Mammadov\nSopio Archilia",
        "about": "With GenWave we transforms a regular set of stairs into a responsive, living canvas. Using touch-sensitive sensors on the handrails, the installation triggers a generative particle projection. As users interact with specific touch-points, the visuals evolve, from color shifts to complex particle collisions."
      },
      {
        "title": "BIXI - Kunsthaus Tamagotchi",
        "year": "2025",
        "type": [
          "Interaction Design",
          "Creative Coding"
        ],
        "client": "FH Joanneum",
        "collaborators": "Dorota Bičárová",
        "about": "With Bixi we turned Kunsthaus Graz into an urban-scale digital companion. The BIX Tamagotchi allowed visitors to interact with an alien character through a website, voting to feed, clean, or pat it. We translated a tiny game retro game into architectural-scale."
      },
      {
        "title": "PsyGuide",
        "year": "2024",
        "type": [
          "UX Design",
          "UI Design",
          "Research"
        ],
        "client": "Bachelors Thesis",
        "collaborators": "",
        "about": "My bachelors project PsyGuide is a website concept, that would provide a credible source for people to get information about digital mental health products. People should be able to get a clear view on what these products can and can not do. It should empower people to make informed decisions on how to better their mental health and combat false information."
      }
    ]
  },
  {
    "studentID": 38,
    "nfcID": "E00403500ECBAED5",
    "surname": "Schwarz",
    "name": "Valerie",
    "major": "MD",
    "aboutMe": "I follow my passions wherever they lead me - often on adventures across the world or down creative rabbit holes. Trusting my instincts also led me into media design, and I haven’t regretted it one bit. So I’ll keep listening to my intuition and see where it takes me next.",
    "skills": [
      "Film",
      "Photography",
      "Motion Design",
      "Graphic Design",
      "Crochet"
    ],
    "portfolioLink": "https://schwarzvalerie.myportfolio.com",
    "experiences": [
      {
        "years": "2024 - now",
        "company": "FH Joanneum",
        "position": "Media Design, MA"
      },
      {
        "years": "2023 - now ",
        "company": "Photo- and Videographer at Moving Stills",
        "position": ""
      },
      {
        "years": "2023",
        "company": "Exchange Semester Canada ",
        "position": "Content Creation for TU Graz"
      },
      {
        "years": "2020 - 2024",
        "company": "TU Graz ",
        "position": "Biomedical Engineering, BSc"
      }
    ],
    "projects": [
      {
        "title": "Engi takes off",
        "year": "2024",
        "type": [
          "Mixed Media Animation"
        ],
        "client": "FH Joanneum",
        "collaborators": "",
        "about": "Mixed media animation using real footage shot on holiday in Iceland and animating on top of it. It’s the story about a little Icelandic elve, Engi, who convinces his best friend, Pablo the Puffing, to fulfil his biggest wish of soaring through the skies. While hesitant at first, Pablo finally agrees and Engi has the time of his life."
      },
      {
        "title": "Photo Collection",
        "year": "2021",
        "type": [
          "Analog and digital photography"
        ],
        "client": "personal project",
        "collaborators": "",
        "about": "This is a collection of my favourite shots throughout the years, some digital, some analog. The photos include landscape and animal pictures taken on holidays as well as some portraits and concert photos."
      },
      {
        "title": "ARnatomy",
        "year": "2023",
        "type": [
          "Mobile Augmented Reality App"
        ],
        "client": "TU Graz - Bachelor Project Biomedical Engineering",
        "collaborators": "",
        "about": "I programmed an augmented reality app for gamified learning about the female reproductive system. There is both a study mode for learning the terms and a game mode for testing the knowledge. There are two playing cards used as image targets for the augmentation, one for the internal anatomical view and one for the external."
      },
      {
        "title": "Blurry Nights",
        "year": "2023",
        "type": [
          "Video"
        ],
        "client": "personal project",
        "collaborators": "",
        "about": "Some impressions of Graz at night, capturing the lights and mood on a dark winter evening."
      },
      {
        "title": "Waldspaziergang",
        "year": "2025",
        "type": [
          "Light and Sound Installation"
        ],
        "client": "Klanglicht Festival Graz, FH Joanneum",
        "collaborators": "Interaction Design: Selina Allerstorfer, Victoria Bremer, Desiree Steigerwald, Sound Design: Verena Schneider, Media Design: Alina Huft, Valerie Schwarz",
        "about": "For the Klanglicht Festival the whole master’s programme developed a light installation where individual teams worked on their own storyline. \nOur team told the story of a calming walk through nature, but the idyllic atmosphere doesn’t last long, as the noise, stress and destruction of today’s society breaks through. Nature and industry are at odds with each other throughout our installation."
      }
    ]
  },
  {
    "studentID": 39,
    "nfcID": "E00403500ECBABCD",
    "surname": "Seiler",
    "name": "Elisabeth",
    "major": "CD",
    "aboutMe": "",
    "skills": [
      "Visual Design",
      "Photography",
      "Content Creation",
      "Brand Design",
      "Sidequests of all kinds"
    ],
    "portfolioLink": "https://elisabeth-seiler.com",
    "experiences": [
      {
        "years": "2025- now",
        "company": "Freelance",
        "position": "Graphic Designer"
      },
      {
        "years": "2023 - now",
        "company": "Siemens AG",
        "position": "Audiovisual Production & Graphic Design"
      },
      {
        "years": "2021-2023",
        "company": "TANlock GmbH",
        "position": "Marketing"
      },
      {
        "years": "2019 - 2024",
        "company": "Technische Hochschule Nürnberg",
        "position": "Tecnical Journalism & PR, BA"
      }
    ],
    "projects": [
      {
        "title": "StyriaKarting",
        "year": "2025",
        "type": [
          "Branding"
        ],
        "client": "FH JOANNEUM/ StyriaKarting",
        "collaborators": "",
        "about": "A comprehensive rebrand for a local karting track, redefining the experience through a modern, performance-driven identity. The concept combines velocity, precision, and elegance, translating the adrenaline of racing into a refined visual system with strong contrasts and dynamic typography."
      },
      {
        "title": "Il Mercato",
        "year": "2024",
        "type": [
          "Branding & Visual identitiy"
        ],
        "client": "FH JOANNEUM/ Il Mercato",
        "collaborators": "",
        "about": "The project updates the look and feel of the  Italian supermarket into a modern lifestyle brand and pasta place by replacing a fragmented identity with a cohesive design system. It aims to attract a younger demographic while preserving authentic \"Italian flair\". The new identity creates a consistent brand experience across digital platforms and physical packaging."
      },
      {
        "title": "Vertigo",
        "year": "2025",
        "type": [
          "Visual Identity"
        ],
        "client": "FH JOANNEUM",
        "collaborators": "Karina Rohrwild",
        "about": "We developed the corporate design for Vertigo, a student project that was part of the Klanglicht Festival in Graz in October 2025. Through creating a visual identity for various media, including print materials, banners, social media posts, stickers, and animations, it reflects the atmosphere of the project while integrating with the overall framework and aesthetics of the Festival."
      },
      {
        "title": "{fit like arni}",
        "year": "2025",
        "type": [
          "Visual Identity"
        ],
        "client": "FH JOANNEUM",
        "collaborators": "",
        "about": "{fit like arni} is a gamification concept using 80s aesthetics, bold typography, high-contrast colours, and iconic “Arni-style” messaging create an ironic, high-energy visual language. The project demonstrates how strong visual storytelling and emotional framing can turn physical activity into an engaging, accessible experience."
      },
      {
        "title": "In Plain Sight",
        "year": "2026",
        "type": [
          "Typographic Exploration"
        ],
        "client": "FH JOANNEUM",
        "collaborators": "",
        "about": "In Plain Sight is a typographic exploration of information design. Over four weeks, the project documents where Helvetica appears in everyday life and translates those observations into illustrated postage stamps for the corresponding brands, constructed exclusively from Helvetica characters."
      }
    ]
  },
  {
    "studentID": 40,
    "nfcID": "E00403500ECBAAD9",
    "surname": "Steigerwald",
    "name": "Desiree",
    "major": "ID",
    "aboutMe": "Hi, my name is Desi. I come from a general academic high school background, discovered my passion for design through Interior and Surface Design, moved into Graphic Design and later into Interaction Design to broaden my perspective. I enjoy continuously learning across design, UX, content creation and photography.",
    "skills": [
      "Graphic Design",
      "Content Creation",
      "Information Design",
      "Interaction Design",
      "Brand Design",
      "Web Design"
    ],
    "portfolioLink": "instagram: steigerwald.design",
    "experiences": [
      {
        "years": "2019 - 2022",
        "company": "New Design University",
        "position": "Grafik und Informationsdesign, BA"
      },
      {
        "years": "2022 ",
        "company": "Cybertime SM GmbH",
        "position": "Grafikassistentin für CI und App-Entwicklung"
      },
      {
        "years": "2023 - today",
        "company": "Montanuniversität Leobben",
        "position": "Grafikdesign, Social Media"
      },
      {
        "years": "2024 - 2026",
        "company": "FH Joanneum",
        "position": "Interaction Design"
      }
    ],
    "projects": [
      {
        "title": "Versetz‘ Berge",
        "year": "Spring 2025 (still ongoing)",
        "type": [
          "Rebranding"
        ],
        "client": "Montanuniversität Leoben",
        "collaborators": "with Werbeagentur Springer & Jacoby Österreich GmbH",
        "about": "As an in-house graphic designer, I contributed to the comprehensive rebranding of Montanuniversität Leoben. Working closely with an external agency, I supported the development and implementation of the updated brand identity, balancing renewal and continuity, and contributed to the visual execution across various communication materials of the campaign, as well as social Media content."
      },
      {
        "title": "Slap the Bug",
        "year": "2025",
        "type": [
          "Game Design with VR Glasses"
        ],
        "client": "personal Project",
        "collaborators": "Elina Dorzhieva\t\nJakob Schnurrer\t\nVeronika Poštrak\t \nCornelia Wysoudil",
        "about": "Using VR glasses, we created a simple augmented reality game in which players use a fly swatter to hit attacking insects. The game can be experienced on site and through a trailer in this protfolio. Despite its simplicity, the game creates a fun, physical, and immersive experience with a strong focus on interaction and enjoyment."
      },
      {
        "title": "Ko:on",
        "year": "2022",
        "type": [
          "Conten Creation and Webdesign"
        ],
        "client": "KO:ON Wien",
        "collaborators": "",
        "about": "As a Graphic Designer and Content Creator at The Office Mentoring, I worked on the client Ko:on. My responsibilities included designing and implementing their website as well as creating visual content and assets for social media communication."
      },
      {
        "title": "Vertigo",
        "year": "2025",
        "type": [
          "Light and Sound Installation"
        ],
        "client": "Klanglicht",
        "collaborators": "Selina Allerstorfer\nVictoria Bremer\nAlina Huft \nValerie Schwarz\nVerena Schneider",
        "about": "As part of the Klanglicht Festival, each team in the master’s programme developed a unique narrative through light. Our project explored a forest walk, highlighting the contrast between daily life stress and the calm of nature. It reflects the ongoing tension between urbanization and natural environments, inviting participants to experience this balance and the subtle conflict between human activity and the tranquility of the forest."
      },
      {
        "title": "Der Ungewöhnliche Blick",
        "year": "2022",
        "type": [
          "Bachelor Projekt"
        ],
        "client": "personal Project",
        "collaborators": "",
        "about": "Der Ungewöhnliche Blick is a physical book object created as my Bachelor project. Through an unconventional format, authentic imagery, and personal stories, it invites readers to experience St. Stephen’s Cathedral from new perspectives. Featuring a sandstone cover and a cross-shaped unfolding structure, the book presents the cathedral beyond its religious context as a multifaceted place."
      }
    ]
  },
  {
    "studentID": 42,
    "nfcID": "E00403500ECBABCC",
    "surname": "Weger",
    "name": "Mila",
    "major": "CD",
    "aboutMe": "Mila Weger is an Austrian graphic designer and photographer. Her minimalist style strives for expressive design concepts, with a focus on typography and branding. After spending time in Los Angeles and Tel Aviv, the designer has returned to Austria. Here, Mila Weger uses her keen sense for material selection and print design to create unprecedented fusions of analog processes in digital environments.",
    "skills": [
      "Type design",
      "Typography",
      "Branding",
      "Photography",
      "Graphic design"
    ],
    "portfolioLink": "https://www.milaweger.com\n@milaweger",
    "experiences": [
      {
        "years": "2019 - Present",
        "company": "",
        "position": "Studio Mila Weger\nFreelance Graphic Designer"
      },
      {
        "years": "2025- Present",
        "company": "",
        "position": "FH;P, Potsdam\nExchange Semester"
      },
      {
        "years": "2024 - Present",
        "company": "",
        "position": "FH Joanneum, Graz\nCommunication Design"
      },
      {
        "years": "2022 - 2023",
        "company": "",
        "position": "Aberjung GmbH – Büro für Gestaltung\nGraphic Design, Photographie"
      }
    ],
    "projects": [
      {
        "title": "Think Responsibly | a declaration of love for Letterpress",
        "year": "2023",
        "type": [
          "Editorial Design"
        ],
        "client": "FH JOANNEUM",
        "collaborators": "Video: Nicolas Platter\nFotografie: Florian Thausing",
        "about": "This book is a declaration of love for letterpress printing, an invitation to awaken your senses and immerse yourself in the world of Gutenberg. A declaration of love that shows why learning analog techniques in combination with digital processes can help you become a better designer."
      },
      {
        "title": "DeSennerin",
        "year": "2023",
        "type": [
          "Editorial Design | Fotografie content"
        ],
        "client": "Personal Project",
        "collaborators": "Text: Carina Kitir",
        "about": "I like to incorporate the impressive simplicity that the mountains and alpine pastures have taught me into my designs and illustrations. Often, it doesn't take many elements to represent things. Much of it takes place in familiar contexts: light and shadow, light and dark, loud and quiet. In the “De Sennerin” project, I summarized my time as a dairymaid in the form of a box. \n\nThis box initially contains four objects that represent an inspiring place that fascinates and captivates me: the mountains.  High above, detached from the hustle and bustle of everyday life, where you literally float above the fast pace of life."
      },
      {
        "title": "Die Wahrheit über Dachau",
        "year": "2024",
        "type": [
          "Editorial Design"
        ],
        "client": "Bernhard Gitschtaler",
        "collaborators": "Text: Bernhard Gitschtaler",
        "about": "How much history can actually fit into one lifetime?\nThe life of Hans Lagger, born in Mauthen in the Gail Valley in 1882,\nis full of significant moments in Austrian history, because\nhe was truly everywhere. The author takes\nreaders on a journey through the biography of a forgotten man,\nto the familiar and unfamiliar scenes of the\nDanube Monarchy, the First World War, the First\nRepublic, the civil war, Austrofascism and\nthe corporative state, National Socialism, and the early years of the\nSecond Republic. A life like an adventure. By\ntracking the stages of the exceptional politician Lagger's life\nin detail, the author allows readers to experience firsthand the painful\ndevelopment and transformation of Austria from the\nmonarchy to the Second Republic and democracy.\ndemocracy."
      },
      {
        "title": "Faltungen – Eine soziale Frage",
        "year": "2025",
        "type": [
          "Photography",
          "Editorial Design"
        ],
        "client": "FH Potsdam & Walter-Gropius-Schule",
        "collaborators": "Walter-Gropius-Schule\nText: Carina Kitir",
        "about": "A project exhibited in collaboration with the Walter Gropius School and the Bauhaus Archive in “the temporary bauhaus-archiv.”\n\nThe architecture of the Walter Gropius School resembles a fold-out building—it is easy to get lost in the long corridors and numerous corners. I incorporated this concept into my object and used the architecture, façade, and the building as a whole as inspiration. The selection of my images and their message were strongly adapted to the presentation format.\n\nIn order to give the photographs sufficient space and expressiveness in this form, I deliberately opted for a lot of white space – which required a bit of courage, as some pages are completely white."
      },
      {
        "title": "Rennerhof",
        "year": "2025",
        "type": [
          "Branding"
        ],
        "client": "Christian Unterweger",
        "collaborators": "",
        "about": ""
      }
    ]
  },
  {
    "studentID": 43,
    "nfcID": "E00403500ECBAAD8",
    "surname": "Verhounik",
    "name": "Peter",
    "major": "MD",
    "aboutMe": "Peter is a cinematographer and colorist who enjoys creating bold commercials and short films. He spends a lot of time behind the computer perfecting images, but feels most inspired when working outdoors and combining filmmaking with his love for nature and skiing.",
    "skills": [
      "Filming",
      "Grading",
      "Skiing",
      "Cooking",
      "Baking"
    ],
    "portfolioLink": "https://bieta.at",
    "experiences": [
      {
        "years": "2023 - present",
        "company": "Freelance DoP & Colorist",
        "position": "Bieta"
      },
      {
        "years": "2024 - present",
        "company": "FH Joanneum Media Design",
        "position": "Master's Student"
      },
      {
        "years": "2018 - present",
        "company": "Skiinstructor - Landeslehrer",
        "position": "Skischule Dienten"
      },
      {
        "years": "2024",
        "company": "Internship",
        "position": "The Marmalade Filmproduktion\nin Hamburg"
      }
    ],
    "projects": [
      {
        "title": "Avantgarde Albumtrailer",
        "year": "2025",
        "type": [
          "Music Video"
        ],
        "client": "Band \"Sequénce",
        "collaborators": "Dir: Sebastian Sammer\nDoP: Peter Verhounik\nPA: Felipe Siebenstern\nVFX: Luca Zaussinger\nSD: Gregor Schmitz\nGRAFIC: Fabian Lesslhumer\nTALENT: Valentina Essl\nH&M: Letizia Promberger",
        "about": "This project presents 10 songs by Sequénce from the album \n\"Avantgarde\". VFX highlight the essence of each track, with \nAI-driven transitions connecting the visuals. Conceived by \nSebastian Sammer, the film was shot with a motorized slider \nand Cooke SP3 lenses. Despite limited time and budget, we \nmade the best out of it."
      },
      {
        "title": "The North Face (Spec)",
        "year": "2025",
        "type": [
          "Commercial Video"
        ],
        "client": "The North Face",
        "collaborators": "Dir: Noah Bonevie\nDoP: Peter Verhounik\nGaffer: Aman Maller\nPAs: Katharina Peterka, Magdalena \nAckerl\nEdit: Maria Shehata, Noah Bonevie\nSound: Gregor Schmitz, Lukas Rieder\nTalents: Katarina Pototschnig, Prince \nNyanney, Martin",
        "about": "A spec ad for The North Face, created in a film studio using \nreal-life elements. Sticks and stones collected from the banks \nof the Mur River form the foundation of a dark, moody visual \njourney. Through lighting and atmosphere, the space transforms \ninto landscapes inspired by mountains and the outdoors."
      },
      {
        "title": "FACETTES",
        "year": "2025",
        "type": [
          "Short Film"
        ],
        "client": "International Design Week",
        "collaborators": "Idea & Camera: Peter Verhounik\nPA: Katharina Peterka\nSound: Lukas Rieder\nTalent: Florian Thausing",
        "about": "FACETTES is a short film about the different personas we adopt in various social groups. Everyone thinks, feels, and behaves differently depending on the people around them. The film explores these shifting facets of identity."
      },
      {
        "title": "Zu schön um wahr zu sein",
        "year": "2024",
        "type": [
          "Short Film"
        ],
        "client": "KUG Graz",
        "collaborators": "Director Noah Bonevie\nAD & Edit Katharina Peterka\nDoP & Colorist Peter Verhounik\nProducer Magdalena Ackerl",
        "about": "A couple in therapy – trapped in a cycle of love, distance and unmet expectations. He longs for closeness, she pulls away. They can‘t let go, yet they’re slowly destroying each other. Then, something shifts. Power dynamics change, roles reverse. But is this a fresh start or just a new way to lose themselves? A story about toxic love, dependency and the price of wanting to be seen."
      },
      {
        "title": "Air Max SNDR GORE-TEX (Spec)",
        "year": "2024",
        "type": [
          "Commercial Video"
        ],
        "client": "Nike",
        "collaborators": "Dir: Noah Bonevie\nDoP. : Peter Verhounik \nTalent: Nelson Tom",
        "about": "Navigating the concrete terrain with the Nike SNDR GORETEX. \nWe visualize the ultimate urban armor designed to defy the \nelements without compromising the silhouette. Rain reflects off \nthe technical exterior while the aesthetic remains sharp. \nA seamless fusion of high performance utility and street \ndominance. Move through the metropolis untouchable."
      }
    ]
  },
  {
    "studentID": 44,
    "nfcID": "E00403500ECBAAD7",
    "surname": "Volkova",
    "name": "Alina",
    "major": "SD",
    "aboutMe": "I’m a musician and sound designer with a background in DJing and television, where I spent years shaping music for different contexts. I’m most driven by composing my own music and exploring how sound can interact with data and visuals, turning information into emotional, immersive installations.",
    "skills": [
      "Music composition",
      "Songwriting",
      "Music mixing",
      "DJing",
      "Vibe coding",
      "Soldering"
    ],
    "portfolioLink": "https://ninaeba.com/portfolio/",
    "experiences": [
      {
        "years": "2024-present",
        "company": "FH Joanneum Sound Design",
        "position": "Master's Student"
      },
      {
        "years": "2020-present",
        "company": "Sound Designer, DJ, sound producer NINA EBA",
        "position": ""
      },
      {
        "years": "2016-21",
        "company": "Music editor at StarlightMedia",
        "position": ""
      },
      {
        "years": "2011-17",
        "company": "Kyiv Nationa Economic University",
        "position": "Bachelor and Master of Economic Theory"
      }
    ],
    "projects": [
      {
        "title": "MORPHO",
        "year": "2024",
        "type": [
          "mini-album on vinyl"
        ],
        "client": "the world",
        "collaborators": "Mixed by Native Outsider\nVinyl mastering by Alexander Pavlenko\nPrinted by INTAKT\nArt by iwhiteplant\nDesign and layout by kpvptt",
        "about": "This is my first solo debut EP, fully written and produced by me. Inspired by the metamorphosis of the blue morpho butterfly, I reflect on my own transformation shaped by three years marked by depression and the outbreak of war. The EP explores self-acceptance, displacement, isolation, and the cyclical nature of life. Supported by three Austrian funding institutions, the project was released on vinyl.  https://ninaeba.com/promomorpho/"
      },
      {
        "title": "Pflegende Eltern:\nLebensgeschichten",
        "year": "2024",
        "type": [
          "Music identity"
        ],
        "client": "FH JOANNEUM, LebensGroẞ",
        "collaborators": "Daniela Berger, Susi Kra, Erika Wilfling-Weberhofer",
        "about": "The podcast places caregiving parents at its center. In personal conversations, they speak about change, fear, and the love that helps them navigate a daily life that is demanding, yet also hopeful and deeply meaningful. These stories offer unique perspectives on life and on the ways people find strength in challenging circumstances. For this project, I created the musical logo, the main theme, and the background music, as well as transitions and loop-based elements designed for flexible and ongoing use across future episodes."
      },
      {
        "title": "DANCE IN ME and DANCE IN ME 2.0",
        "year": "2018-2020",
        "type": [
          "Audio Visual Instalation"
        ],
        "client": "Burning Man Ukraine",
        "collaborators": "20 volunteers",
        "about": "This interactive installation explores dance as a musical interface. In both versions, bodily movement is captured by UltraSonic and Time-of-Flight distance sensors, translated into MIDI, and used to shape sound and visuals in real time via synthesizers, Max/MSP, and Grasshopper. The project evolved from a sound-focused instrument to an audiovisual system and was supported by a Burning Man grant, presented at Kyiv Decompression 2019."
      },
      {
        "title": "KVELOR",
        "year": "2021",
        "type": [
          "Sound Design and Music Editing for advertisement"
        ],
        "client": "Pharmberg",
        "collaborators": "animation by Katya Varapay, music by fzpz",
        "about": "An animated advertisement for sleeping pills with sleepy cats required a cozy soundtrack and sound design."
      },
      {
        "title": "Flower Letter",
        "year": "2024",
        "type": [
          "Sound Design, Folie and Music for Animation"
        ],
        "client": "FH Joanneum, Piktura, Bauhaus-Universität",
        "collaborators": "Sarah Coppin, Enora Laden, Simon Delhaye, Erwan Galtier, Theo Massa, Florian Rommel, Séréna Prince, Jeremy Andriambolisoa",
        "about": "Stop-motion animation created in collaboration by students from FH Joanneum, Piktura, and Bauhaus-Universität.\nThe narrative weaves together three letters written during World War II by three soldiers to their loved ones. The spoken letters are accompanied by stop-motion collages of destroyed urban landscapes from France, Germany, and Ukraine, interwoven with floral imagery. Each flower carries a specific symbolic meaning tied to its respective country, creating a visual dialogue between memory, loss, and cultural identity."
      }
    ]
  },
  {
    "studentID": 45,
    "nfcID": "E00403500ECBABCA",
    "surname": "Waldenberger",
    "name": "Sara",
    "major": "ID",
    "aboutMe": "It took me some time to find my path to digital design. I love creating solutions that genuinely help people in their everyday lives. I hope to reinvent a digital healthcare product, as I believe there's so much untapped potential in that area.",
    "skills": [
      "UI/UX Design",
      "Prototyping",
      "Web Design",
      "Speculative Design",
      "User Testing"
    ],
    "portfolioLink": "",
    "experiences": [
      {
        "years": "2024-present",
        "company": "FH Joanneum Interaction Design",
        "position": "Master's Student"
      },
      {
        "years": "2022-present",
        "company": "Freelance",
        "position": "UX / UI Design, Webdesign"
      },
      {
        "years": "2021",
        "company": "Peakboard",
        "position": "Bachelor's Thesis Intern"
      },
      {
        "years": "2018-21",
        "company": "FH St. Pölten Mediatchnology",
        "position": "Bachelor of Science"
      }
    ],
    "projects": [
      {
        "title": "Peakboard Hub Redesign",
        "year": "2023",
        "type": [
          "UX Design",
          "UI Design"
        ],
        "client": "Peakboard",
        "collaborators": "",
        "about": "One of my biggest projects was collaborating with the German software company Peakboard to redesign the Peakboard Hub. It serves as a central management tool for industrial applications. In addition to creating the entire design library and enhancing my design skills, this project was crucial for my personal development, as I played a key role in driving the redesign forward. I still work on the Peakboard Hub today, testing and creating concepts for new features."
      },
      {
        "title": "Confessionale",
        "year": "2025",
        "type": [
          "Interactive Installation",
          "Tangible Design",
          "Storytelling"
        ],
        "client": "FH Joanneum",
        "collaborators": "Alice Zanutti\nLeila Orynbayeva",
        "about": "We were asked to create an interactive installation for the facade of the Kunsthaus in Graz. The concept featured a phone booth inviting people to talk, sing, or share anything they wanted, with the assurance that their voices would remain unheard. Their speech would influence the lights on the façade in real time.\nThe idea was that speaking in this space feels intimate and vulnerable even though this space is one of the most known in Graz. For our prototype, we placed a microphone in an old phone and created a simple stand to encourage people to share their stories."
      },
      {
        "title": "Designing for Future",
        "year": "2025",
        "type": [
          "Rapid Prototyping",
          "Speculative Design"
        ],
        "client": "Laboratory for Radical Innovations",
        "collaborators": "Veronika Poštrak\nLeila Orynbayeva\nDorota Bičarova\nStudents from Lahti, Finland",
        "about": "The year is 2125, and Earth is no longer habitable. You and your crew must travel to Proxima Centrauri B to see if it can support human life. This was the scenario presented to us on our first day at CERN in Geneva.\nIn interdisciplinary teams we were faced with problems that challenged our imagination, rapid prototyping, and communication skills. The 7-week workshop in collaboration with Finnish students is definitely the highlight of my educational carrier."
      },
      {
        "title": "Industry Applications",
        "year": "2023-24",
        "type": [
          "UX Design",
          "UI Design",
          "Low Code Application"
        ],
        "client": "Peakboard",
        "collaborators": "",
        "about": "Here you can see a few of the industy applications I built for various clients (Rewe, Seca, Rauch, Bonback) and a few internal demo projects. Most of them are functional with different data sources such as SQL, Excel, OPCUA, SAP, etc. and were built in the Peakboard Designer using it's low code functionalities. Some are soley visual guides for the clients. These examples serve individual purposes yet they all are meant to digitize processes in factory settings."
      },
      {
        "title": "Tetris",
        "year": "2025",
        "type": [
          "Game Development, Tangible Design"
        ],
        "client": "FH Joanneum",
        "collaborators": "Florian Prassé, Veronika Poštrak, Felix Prinz, Alice Zanutti",
        "about": "Created for the Generate25 Festival, this project reimagines the classic Tetris game by incorporating pressure reactive mats for piece movement. Players can step on the mats to move Tetris pieces up and down, while a button is used to rotate them. Designed for collaborative play, the controls encourage teamwork, as managing them alone was challenging."
      }
    ]
  },
  {
    "studentID": 46,
    "nfcID": "E00403500ECBAAD6",
    "surname": "Zourkou",
    "name": "Genovefa",
    "major": "ID",
    "aboutMe": "I’m a multidisciplinary designer focused on interaction design, prototyping, and visual communication. I create playful and immersive experiences that blend digital and physical media, inviting participation and curiosity.",
    "skills": [
      "Graphic Design",
      "UX Design",
      "Concept Design",
      "Prototyping",
      "Exhibit Design",
      "Storytelling"
    ],
    "portfolioLink": "https://linktr.ee/vefaz",
    "experiences": [
      {
        "years": "2024 - ongoing",
        "company": "FH Joanneum",
        "position": "Interaction Design, MA"
      },
      {
        "years": "2021-23",
        "company": "DIGIDOT",
        "position": "Graphic Designer"
      },
      {
        "years": "2020-21",
        "company": "A.S.A.T.",
        "position": "Graphic Design Volunteer"
      },
      {
        "years": "2020",
        "company": "Moserlx",
        "position": "Web Design Intern"
      }
    ],
    "projects": [
      {
        "title": "BIG EYES",
        "year": "2026",
        "type": [
          "Interactive Installation",
          "Outdoor Interface"
        ],
        "client": "Kunsthaus Graz",
        "collaborators": "Elina Dorzhieva, Veronika Poštrak",
        "about": "BIG EYES is an interactive installation that transforms the Kunsthaus Graz into a living creature. The creature's large eyes respond gently to the presence of people, expressing a range of emotions through subtle light movements. Rather than simply serving as a display, the façade becomes a playful and emotional interface, a connection between the building and its audience."
      },
      {
        "title": "Hit That Jackpot",
        "year": "2025",
        "type": [
          "Interactive Installation",
          "LED Game"
        ],
        "client": "FH Joanneum Project",
        "collaborators": "Elina Dorzhieva, Leila Orynbayeva",
        "about": "Hit that Jackpot is a new take on the arcade reaction game “Cyclone” made with LED strips, where players try to press a big red button exactly when the moving light reaches the target."
      },
      {
        "title": "Interactive Exhibit on Vlach Heritage",
        "year": "2023",
        "type": [
          "Interaction Design",
          "Exhibition Design",
          "Cultural Heritage"
        ],
        "client": "Bachelor's Thesis",
        "collaborators": "Solo",
        "about": "My thesis project, \"Designing an Interactive Exhibit for the Cultural Heritage of the Vlachs of Veria\", focuses on presenting and preserving their cultural heritage through an interactive experience. Visitors actively engage with stories and elements from Vlach daily life, which encourages awareness, understanding, and participation in the preservation of this local cultural heritage."
      },
      {
        "title": "Cultural Heritage Postcards",
        "year": "2023",
        "type": [
          "Cultural Heritage",
          "Graphic Design",
          "Museum Souvenirs"
        ],
        "client": "Bachelor's Thesis",
        "collaborators": "Solo",
        "about": "This project focuses on the design of a postcard series created as a complementary element to my bachelor’s thesis, \"Designing an Interactive Exhibit for the Cultural Heritage of the Vlachs of Veria\". While the exhibit introduced the stories and history in an interactive way, the postcards were created to let that experience live on after visitors left the space."
      },
      {
        "title": "Fat F*ck!",
        "year": "2024",
        "type": [
          "Props",
          "Sticker Design",
          "Graphic Design"
        ],
        "client": "Stamos",
        "collaborators": "Solo",
        "about": "This is a project about a series of satirical prop stickers for the music video Fat F*ck!, a song about childhood struggles with food. The stickers mimic everyday objects but carry a darkly comedic twist, matching the song’s rebellious and irreverent tone."
      }
    ]
  },
  {
    "studentID": 50,
    "nfcID": "E00403500ECBABC9",
    "surname": "Thausing",
    "name": "Florian",
    "major": "ID",
    "aboutMe": "I have a hard time putting myself into a single box which has me working on projects across many disciplines like photography, graphic design, creative coding, and webdesign and -development. I like to break conventions and keep my design playful without sacrificing quality.",
    "skills": [
      "Web Design",
      "Graphic Design",
      "Photography",
      "Creative Coding",
      "Surviving"
    ],
    "portfolioLink": "",
    "experiences": [
      {
        "years": "2019-2024",
        "company": "Fh Joanneum",
        "position": "Information Design, BA"
      },
      {
        "years": "2024-now",
        "company": "Fh Joanneum",
        "position": "Interaction Design, MA"
      },
      {
        "years": "2024",
        "company": "Rainbow Unicorn, Berlin",
        "position": "Webdesign & -development Intern"
      }
    ],
    "projects": [
      {
        "title": "Claim Your Rights Mini-Zine",
        "year": "2025",
        "type": [
          "Editorial Design"
        ],
        "client": "SUPERRR LAB",
        "collaborators": "",
        "about": "A mini zine about consumer protection and how not to let yourself be pushed around in the digital marketplace. I had the opportunity to distill the insights adn learnings from Superrrlab, a digital fairness non-profit in berlin, into a handy mini zine and give it a playful visual identity."
      },
      {
        "title": "natural light photography",
        "year": "2018-now",
        "type": [
          "Photography"
        ],
        "client": "",
        "collaborators": "",
        "about": "Since 2018, I’ve been photographing characters with a focus on how light shapes presence and how personality shines through. Working primarily with available light instead of studio flashes allows me to read and understand real lighting situations—and to connect more deeply not just with my surroundings, but with the people in front of my lens."
      },
      {
        "title": "Pandemonium",
        "year": "2025",
        "type": [
          "Light Installation"
        ],
        "client": "Fh Joanneum",
        "collaborators": "Magdalena Ackerl, Tanja Kobler, Lukas Rieder, Tobias Schittenkopf, Felix Prinz",
        "about": "During my Masters at Fh Joanneum I had the opportunity to create a light installation with friends for the Light Festival KLANGLICHT. We worked through everything from concept, through prototyping to the final installation and testing. Translating the feeling of escalation and the emotional contrasts that accompany us in our day to day onto nothing but light and sound was a challenging but rewarding progress which turned out to be the most fun project of the semester."
      }
    ]
  },
  {
    "studentID": 52,
    "nfcID": "E00403500ECBAAD5",
    "surname": "Inasaridze",
    "name": "Nika",
    "major": "CD",
    "aboutMe": "I’m a Graphic Designer with 5+ years of experience in visual communication, brand identity, and digital design. I create modern visual systems for digital, social, and print. Having worked with agencies and startups, I focus on storytelling and purposeful design.",
    "skills": [
      "Graphic Design",
      "Brand Design",
      "Typography",
      "Print Design",
      "Illustration",
      "Easel Graphic"
    ],
    "portfolioLink": "https://linktr.ee/iamnickinasaridze",
    "experiences": [],
    "projects": [
      {
        "title": "inandout / Re Design /",
        "year": "2025",
        "type": [
          "Re Design, Viusal identity"
        ],
        "client": "University Assigment",
        "collaborators": "",
        "about": "This project represents the rebranding of a vinyl store in Graz. The brand expresses a love for music and aims to bring music enthusiasts together, while reflecting the city’s character and deep local roots. The identity combines a modern, distinctive approach with retro elements to create a joyful and atmospheric experience."
      },
      {
        "title": "gulsunda / Hotel Branding /",
        "year": "2024",
        "type": [
          "Visual Branding"
        ],
        "client": "University Assigment",
        "collaborators": "",
        "about": "A hotel brand designed to create a comfortable and entertaining space in one of Georgia’s most beautiful regions, Meskheti, in the village of Gulsunda (“what your heart wants”). The brand focuses on caring for its guests while staying diverse, evolving, and innovative, without losing its connection to the past."
      }
    ]
  },
  {
    "studentID": 53,
    "nfcID": "E00403500ECBABC8",
    "surname": "Ioseliani",
    "name": "Ioseb",
    "major": "MD",
    "aboutMe": "Joseph Ioseliani is a visual artist with a background in architecture, working as a concept artist, illustrator, and 3D artist. His work focuses on cinematic atmosphere, structure, and visual storytelling, shaped by architectural thinking and worldbuilding. Alongside his visual practice, he is a flamenco guitarist with over a decade of experience, where rhythm and expression strongly influence his artistic approach.",
    "skills": [
      "concept art",
      "Illustration",
      "Vis dev",
      "3d modeling",
      "architecture",
      "Storyboard art"
    ],
    "portfolioLink": "https://linktr.ee/josephioseliani11",
    "experiences": [
      {
        "years": "2022 - present ",
        "company": " ",
        "position": "Freelance concept artist and Illustrator"
      },
      {
        "years": "2024 - 2025 ",
        "company": "",
        "position": "FH Joanneum\nMedia design, MA"
      },
      {
        "years": "2024 - present ",
        "company": "",
        "position": "Tbilisi state academy of art \nMedia design ,MA"
      },
      {
        "years": "2022 -2024 ",
        "company": "GTU ",
        "position": "ARchitecture and urban planning , MA"
      }
    ],
    "projects": [
      {
        "title": "Breach",
        "year": "2026",
        "type": [
          "concept art"
        ],
        "client": "Freelance project",
        "collaborators": "",
        "about": "Concept art and design for a space Horror game , \nexploring the design \nand architecture of alien hallways"
      },
      {
        "title": "Tower",
        "year": "2025",
        "type": [
          "Illustration"
        ],
        "client": "Personal Project",
        "collaborators": "",
        "about": "A Personal project exploring a Wide valley of towers\n and ancient ruins."
      },
      {
        "title": "INTO THE FATHOM",
        "year": "2023-2024",
        "type": [
          "Concept art"
        ],
        "client": "25 H studios",
        "collaborators": "",
        "about": "concept art and worldbuilding for \nan unreleased space horror game .\n Exploring the ambience of the world ."
      },
      {
        "title": "Mechs and robots",
        "year": "2022-present",
        "type": [
          "Concept art / illustration"
        ],
        "client": "personal project",
        "collaborators": "",
        "about": "Personal artworks Exploring various mech / robot designs\n and exploring worldbuilding"
      },
      {
        "title": "Sketches",
        "year": "2022- present",
        "type": [
          "sketches"
        ],
        "client": "personal Project",
        "collaborators": "",
        "about": "Personal sketches done in free time"
      }
    ]
  },
  {
    "studentID": 54,
    "nfcID": "E00403500ECBAAD4",
    "surname": "Jakubiak",
    "name": "Franciszek Maria",
    "major": "SD",
    "aboutMe": "I’m a cinema and music  lover who’s making his dream come true. Always excited to learn. Studying Sound Engineering since 2021. Threw out that time I was a part of many projects. Recorded sound on film sets. Mixed and mastered short movies. Mostly as  school projects, but was also a part of some smaller artistic movies. Recorded, mixed and mastered many songs. I appreciate classical music as well as folk music RnB, Jazz, Rock or Rap. Apart from all of that I love art, reading books, skateboarding, travelling, and cooking.",
    "skills": [
      "Mixing and Mastering songs/movies/podcasts Dante 2nD level Q-Sys 1st Level"
    ],
    "portfolioLink": "https://filmpolski.pl/fp/index.php?osoba=11215076     https://www.instagram.com/franek_jakubiak/  https://www.youtube.com/watch?v=nF9LHysYmGM",
    "experiences": [],
    "projects": [
      {
        "title": "Sound for Spy Fox animation as a school project",
        "year": "2025",
        "type": [
          "REcording/Mixing/Mastering"
        ],
        "client": "",
        "collaborators": "",
        "about": "It was my school project for an animation"
      },
      {
        "title": "Mr. Soundengineer",
        "year": "2024",
        "type": [],
        "client": "",
        "collaborators": "",
        "about": ""
      },
      {
        "title": "Igrce Nisko Slonko",
        "year": "2023",
        "type": [],
        "client": "Igrce",
        "collaborators": "Filip Roszkowski Zuzanna Wawro",
        "about": "Folk music recording mixing and mastering"
      },
      {
        "title": "W Swietle Gwiazdy",
        "year": "2024",
        "type": [
          "Recording/Mixing/Mastering"
        ],
        "client": "Stacja Folk",
        "collaborators": "",
        "about": ""
      },
      {
        "title": "Memories Fly Away",
        "year": "2025",
        "type": [
          "Recording/Mixing"
        ],
        "client": "Garage Folks",
        "collaborators": "",
        "about": ""
      }
    ]
  },
  {
    "studentID": 57,
    "nfcID": "E00403500ECBABC7",
    "surname": "Zivkovic",
    "name": "Tereza",
    "major": "CD",
    "aboutMe": "I’m a multidisciplinary designer and photographer exploring design, art, and storytelling. My work blends play, immersion, and activism, tackling political issues and championing human rights. Proud Leo.",
    "skills": [
      "Concept development",
      "Visual storytelling",
      "Graphic design",
      "Typography",
      "Illustration",
      "Poster design"
    ],
    "portfolioLink": "https://www.instagram.com/terenaut",
    "experiences": [
      {
        "years": "2024 - present",
        "company": "Faculty of Fine Arts, Cetinje",
        "position": "Graphic Design / Master Studies"
      },
      {
        "years": "2025-present",
        "company": "Faculty of Fine Arts, Cetinje",
        "position": "Teaching assitent Internship"
      },
      {
        "years": "2025-present",
        "company": "FH Joanneum Communication Design",
        "position": "Student Exchange"
      },
      {
        "years": "2024",
        "company": "Faculty of Graphic Arts, Gdansk",
        "position": "Student Exchange"
      }
    ],
    "projects": [
      {
        "title": "Femicide Posters (Femicid posteri)",
        "year": "2023",
        "type": [
          "Posters"
        ],
        "client": "Faculty of Fine Arts, Cetinje",
        "collaborators": "/",
        "about": "This series of three posters addresses femicide through visual narratives of women’s struggle, resistance, and systemic violence. Using stark imagery and symbolic language, the posters confront the persistence of gender-based oppression and the silence surrounding it. Conceived as both artistic and political statements, the series amplifies women’s voices and demands accountability. The work was recognized at the Youth Poster Biennale in Novi Sad, highlighting its relevance within contemporary social and design discourse."
      },
      {
        "title": "This is not a font (Ovo nije font)",
        "year": "",
        "type": [
          "Publications"
        ],
        "client": "Faculty of Fine Arts, Cetinje",
        "collaborators": "",
        "about": "Ovo nije font is a diploma project presented as a publication composed of three books that document a process rather than a finished typeface. The font functions as an illustrative contribution. The first book traces its origin through work developed in Poland, inspired by a Radiohead album cover. The second is a type specimen, presenting the font’s formal characteristics. The third book expands the font through illustrations, showing it in an unconventional, expressive context beyond traditional typographic use."
      },
      {
        "title": "Between the room and light (Između sobe i svijetla)",
        "year": "2024",
        "type": [
          "Photography"
        ],
        "client": "Faculty of Fine Arts, Cetinje",
        "collaborators": "/",
        "about": "Three photographs depict moments from the lives of queer people in Yugoslavia, captured within the privacy of home. Each scene reveals intimacy, identity, and struggle. A resting figure sheds the burden of gender performance; another finds refuge in literature and introspection; the last fades through partial presence. Together, they reflect the constant tension between visibility and concealment."
      },
      {
        "title": "Materica (Womb)",
        "year": "2024",
        "type": [
          "Sculpture"
        ],
        "client": "Faculty of Fine Arts, Cetinje",
        "collaborators": "/",
        "about": "This composition merges Dorothea Lange’s Migrant Mother (1936), a symbol of the Great Depression, with contemporary elements. The nursing mother embodies care, sacrifice, and survival amid social injustice. Dark and blue graphic forms add weight and sanctity, while pregnancy tests as a cross introduce modern debates on choice, responsibility, and inequality, questioning how much society has truly changed."
      },
      {
        "title": "After Life",
        "year": "2023",
        "type": [
          "illustrated comic book"
        ],
        "client": "Faculdade de belas-artes da universidade de lisboa",
        "collaborators": "/",
        "about": "This black-and-white comic explores the afterlife as a quiet, introspective space shaped by memory and transition. Through fragmented scenes and shifting forms, the narrative follows a spirit learning to let go of the physical world. Absence, silence, and contrast become visual metaphors for grief, acceptance, and release. Rather than offering closure, the comic reflects on moving on as a slow, uncertain process—one where identity dissolves and transforms, allowing the spirit to exist beyond time, body, and pain."
      }
    ]
  }
]