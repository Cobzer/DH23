var questions = [
    {
        question: "Vilket av följande är ett programmeringspåk?",
        options: ["CSS", "Javascript", "HTML", "Unity"],
        answer: "Javascript",
    },
    {
        question: "När grundades Dreamhack?",
        options: ["1986", "2010", "2001", "1994"],
        answer: "1994",
    },
    {
        question: "Vad innebär ordet 'if-sats' i python?",
        options: ["If-sats är programmet Python körs i", "Ett kommando utförs bara om ett villkor är uppfyllt.", "Python skapar egna villkor för dig att följa", "Det finns inget som heter så"],
        answer: "Ett kommando utförs bara om ett villkor är uppfyllt.",
    },
    {
        question: "Vad står VPS för?",
        options: ["Variable Printing System", "Video Production Studio", "Virtual Payment Service", "Virtual Private Server"],
        answer: "Virtual Private Server",
    },
    {
        question: "Vad lär Distansakademin ut?",
        options: ["Programering", "Ekonomi", "Onlinekommunikation", "Bild & media"],
        answer: "Programering",
    },
    {
        question: "Vilket av följande programmeringsspråk är interpreted?",
        options: ["Java", "Go", "C#", "Python"],
        answer: "Python",
    },
    {
        question: "Vad heter det programmeringsspråk som används för att skapa appar till iOS-enheter?",
        options: ["Java", "Python", "Swift", "Ruby"],
        answer: "Swift",
    },
    {
        question: "Vilket företag har utvecklat språket C#?",
        options: ["Microsoft", "Google", "Apple", "Meta"],
        answer: "Microsoft",
    },
    {
        question: "Vad står USB för?",
        options: ["Underground Sewer Bypass", "Unlimited Storage Backup", "Universal Serial Bus", "Universal Space Bridge"],
        answer: "Universal Serial Bus",
    },
    {
        question: "Vilket av följande är INTE en primitiv type i TypeScript?",
        options: ["Boolean", "Integer", "String", "Bigint"],
        answer: "Integer",
    },
    {
        question: "Vem skapade programeringspråket Python?",
        options: ["James Gosling", "Tim Bernes-Lee", "Guido van Rossum", "Rasmus Lerdorf"],
        answer: "Guido van Rossum",
    },
    {
        question: "Vad står JVM för?",
        options: ["Java Vise Machine", "Java Visual Machine", "Java Visual Match", "Java Virtual Machine"],
        answer: "Java Virtual Machine",
    },
    {
        question: "Vilket av följande ägs inte utav Microsoft",
        options: ["Github", "TypeScript", "Visual Studio Code", "Python"],
        answer: "Python",
    },
    {
        question: "Vilket av följande språk skapades INTE av Google?",
        options: ["Kotlin", "Carbon", "Dart", "Go"],
        answer: "Kotlin",
    },
    {
        question: "Vilken HTTP statuskod betyder 'OK'",
        options: ["301", "203", "404", "200"],
        answer: "200",
    },
    {
        question: "Vad heter den dator som skickar information om en hemsida till en besökare?",
        options: ["Webbserver", "Webbklient", "Webbmaster", "Webbhost"],
        answer: "Webbserver",
    },
    {
        question: "Vilket programmeringsspråk används främst för att skriva mobilapplikationer för Android?",
        options: ["C#", "Java", "Swift", "Python"],
        answer: "Java",
    },
    {
        question: "Vilka grundade Dreamhack?",
        options: ["Johan Jakobsson & Carl Fransson", "Jonas Hesselman & John Ericsson", "Oscar Kjellberg & Samuel Owen", "Martin Öjes och Kenny Eklund",],
        answer: "Martin Öjes och Kenny Eklund",
    },
    {
        question: "Vilket år började Dreamhack köra sina lanevent på Elmia?",
        options: ["2001", "1996", "2010", "1998"],
        answer: "2001",
    },
    {
        question: "Vad betyder förkortningen API?",
        options: ["Application Performance Interface", "Application Programming Interface", "Applied Programming Interface", "Automated Programming Interface"],
        answer: "Application Programming Interface",
    },
    {
        question: "Vad står URL för?",
        options: ["Uniform Resource Locator", "User-Friendly Resource Link", "Universal Retrieval Locator", "Unified Reference Link"],
        answer: "Uniform Resource Locator",
    },
    {
        question: "Vad heter den delen av en dator som är ansvarig för att utföra instruktioner?",
        options: ["RAM", "HDD", "NIC", "CPU"],
        answer: "CPU",
    },
    {
        question: "Vad är en 'loop' i programmeringstermer?",
        options: ["En struktur som låter dig upprepa en kodsekvens flera gånger", "En annan term för 'if-sats'", "En funktion som ritar en cirkel på skärmen", "En sträng av data"],
        answer: "En struktur som låter dig upprepa en kodsekvens flera gånger",
    },
    {
        question: "Vilket av följande är inte en metod för att skapa en ny tråd i Java?",
        options: ["Extending the Thread clas", "Creating a new instance of the Thread class", "Implementing the Runnable interface", "Using the Executors framework"],
        answer: "Implementing the Runnable interface",
    },
    {
        question: "Vad betyder förkortningen CSS?",
        options: ["Critical System Solutions", "Computer Science Skills", "Cascading Style Sheets", "Creative Source Software"],
        answer: "Cascading Style Sheets",
    },
    {
        question: "Vad betyder förkortningen IDE?",
        options: ["Interoperable Development Environment", "Integrated Development Environment", "Interactive Development Environment", "Intelligent Development Environment"],
        answer: "Integrated Development Environment",
    },
    {
        question: "Vilket av följande verktyg används oftast för att skapa 3D-modeller i spel?",
        options: ["Unity", "Blender", "GameMaker Studio", "RPG Maker"],
        answer: "Unity"
    },
    {
        question: "Vilket programmeringsspråk körs i webbläsaren?",
        options: ["Pyhton", "PHP", "Ruby", "Javascript"],
        answer: "Javascript",
    },
    {
        question: "Vad är en 'variable' i programmering?",
        options: ["En datorkomponent som lagrar data", "En person som programmerar", "En del av koden som inte kommer att köras", "En värde som kan ändras i programmet"],
        answer: "En värde som kan ändras i programmet",
    },
    {
        question: "Vad är en 'syntax' i programmering?",
        options: ["Ett sätt att beskriva data i en databas", "En regeluppsättning som måste följas när man skriver kod", "En fil som innehåller programkod", "En sats som utför en specifik uppgift"],
        answer: "En regeluppsättning som måste följas när man skriver kod",
    },
    {
        question: "Vad är 'debugging' i programmering?",
        options: ["Att hitta och korrigera fel i programkoden", "Att skapa en programvara från grunden", "Att skriva kod med hög hastighet", "Att optimera programkoden för bättre prestanda"],
        answer: "Att hitta och korrigera fel i programkoden",
    },
    {
        question: "Vem grundade Microsoft?",
        options: ["Tim Berners-Lee & Elon Musk", "Steve Jobs & Mark Zuckerberg", "Brendan Eich &  Bill Gates", "Paul Allen & Bill Gates"],
        answer: "Paul Allen & Bill Gates",
    },
    {
        question: "Vem uppfann operativsystemet Linux?",
        options: ["Linus Bendict Richman", "Dennis Ritchie", "Brian Behlendorf", "Linus Benedict Torvalds"],
        answer: "Linus Benedict Torvalds",
    },
    {
        question: "Vilken av följande plattformar ägs inte av Meta?",
        options: ["Facebook", "Amazon", "Instagram", "WhatsApp"],
        answer: "Amazon"
    },
    {
        question: "Vilka grundade musikappen Spotify?",
        options: ["Daniel Ek & Martin Lorentzon", "Markus Persson & Jonas Byman", "Frans Lindqvist & Oscar Andersson", "Axel Ericsson & Sven Wingquist"],
        answer: "Daniel Ek & Martin Lorentzon"
    },
    {
        question: "Vilket språk är programmeringsnöten på Distansakademins tröjor baserade på?",
        options: ["Python", "Javascript", "C#", "Java"],
        answer: "Python"
    },
    {
        question: "Vilket programmeringsspråk är Fortnite byggt av?",
        options: ["C++", "Fortran", "Verse", "COBOL"],
        answer: "C++"
    },
    {

        question: "Hur många gånger per år inträffar Dreamhack i Sverige?",
        options: ["1 gång per år", "2 gånger om året", "3 gånger om året", "4 gånger om året"],
        answer: "2 gånger om året"
    },
    {
        question: "Vem är ledaren över Dreamhacks 1337 giveaway?",
        options: ["Matinbum", "Sampev22", "Bamse", "Freja"],
        answer: "Bamse",
    },
    {
        question: "Vilket land skapades koenigsegg i?",
        options: ["Sverige", "Tyskland", "Italien", "Norge"],
        answer: "Sverige"

    },
    {
        question: "Var kommer pasta ifrån?",
        options: ["Sverige", "Norge", "Italien", "Mexico"],
        answer: "Italien"
    },
    {
        question: "Vilket är det lättaste grundämnet i det periodiska systemet?",
        options: ["Helium", "Kväve", "Väte", "Syre"],
        answer: "Väte"
    },
    {
        question: "I vilken stad grundades Ikea?",
        options: ["Kalmar", "Stockholm", "Växjö", "Älmhult"],
        answer: "Älmhult"
    },
    {
        question: "När öppnade Dreamhack i Jönköping?",
        options: ["1994", "2001", "2013", "1992"],
        answer: "2001"
    },
    {
        question: "Vart grundades dreamhack?",
        options: ["Jönköping", "Stockholm", "Salarna", "Malmö"],
        answer: "Dalarna"
    },

    {
        question: "Ada.95 används oftast inom en viss industri, Vilken?",
        options: ["Militär", "Pappersmassa", "Järnmalm", "Energiutvinning"],
        answer: "Militär"
    },


    {
        question: "Vad säljer Rudbeck tillsammans med en kollega?",
        options: ["Datorer", "Bilar", "Flygplan", "Bananer"],
        answer: "Bilar"
    },

    {
        question: "Vem är huvudkaraktären i Call of Duty War of Warframe?",
        options: ["Ghost", "Soap", "Price", "Bamse"],
        answer: "Ghost"
    },
    {
        question: "Vem var vår förra stadsminister?",
        options: ["Magdalena Andersson", "Stefan Löfven", "Ulf Kristersson", "Donald Trump"],
        answer: "Magdalena Andersson"

    },
    {
        question: "Vilket år kom första pacman-spelet ut?",
        options: ["1980", "1972", "1994", "1981"],
        answer: "1980"
    },
    {
        question: "Vad heter Sverigrs nuvarande kung?",
        options: ["Carl Gustav XVI", "Carl Gustav IV", "Carl Gustav X", "Carl Gustav XII"],
        answer: "Carl Gustav XVI"

    },
    {
        question: "När började Lebron James träna basket",
        options: ["4:an", "5:an", "6:an", "2:an"],
        answer: "5:an"
    },
    {
        question: "Vad är 1x(5)^2",
        options: ["30", "10", "5", "20"],
        answer: "10"
    },
    {
        question: "Vem vann första Fortnite world cup?",
        options: ["Mongrall", "Bugha", "MrBeast", "Clix"],
        answer: "Bugha"

    },

    {
        question: "Vilket lag vann NBA championship 2023?",
        options: ["Lakers", "Warriors", "Raptors", "Nuggets"],
        answer: "Nuggets"
    },
    {
        question: "Vad heter killen med blå kostym i 'Bäst i test' i förnamn?",
        options: ["Roger", "Jerry", "William", "David"],
        answer: "David"
    },
    {
        question: "What is the sound of da police?",
        options: ["Daa-Daa", "Mee-Mee", "Woop-Woop", "Nii-Noo"],
        answer: "Woop-Woop"
    },
    {
        question: "När skapades fortnite?",
        options: ["2017", "2014", "2020", "2018"],
        answer: "2017"
    },
    {
        question: "Vad heter Sveriges största byggnad?",
        options: ["Turning Torso", "Scandic Victoria Tower", "Skrapan", "Citygate"],
        answer: "Turning Torso"
    },
    {
        question: "Vem är sämst på Fortnite?",
        options: ["Matinbum", "Tomu", "Pewdiepie", "L22"],
        answer: "Matinbum"

    },
    {
        question: "Hur många år har Dreamhack varat?",
        options: ["28 år", "27 år", "25", "29 år"],
        answer: "29 år"
    },
    {
        question: "Vilka vann worldcup år 2022?",
        options: ["Argentina", "Brazilien", "Qatar", "Mexico"],
        answer: "Argentina"
    },
    {
        question: "När är Ironman 70.3 Jönköping 2023?",
        options: ["8 juli", "9 juli", "15 juli", "16 juli"],
        answer: "9 juli"
    },

    {
        question: "Vilken är den högsta skicklighetsgruppen i CSGO?",
        options: ["Globala Eliten", "Dreambull", "Guldnova", "Brandon the erotic barber"],
        answer: "Globala Eliten"
    },
    {
        question: "Hur många meter är det från Lund till Jönköping?",
        options: ["282470 meter", "6128272 meter", "783671 meter", "269373 meter"],
        answer: "282470"
    },
    {
        question: "Vilken enhet från polisen är på plats på Dreamhack 2023?",
        options: ["IT-Forensiker", "Cold Case", "Traffikpolisen", "Narkotikaroteln"],
        answer: "IT-Forensiker"
    },
    {
        question: "Hur många invånare räknade man in i Sverige 2021?",
        options: ["10,42milj", "9.83 milj", "3.85milj", "16,58milj"],
        answer: "10,42milj"
    },
    {
        question: "Varför kallas Vasaskeppet för just 'vasaskeppet'?",
        options: ["Den är döpt efter Gustav Vasa", "Det var något dem bara kom på", "För att dem gillade vaser", "Den är döpt efter Vasa Bröd"],
        answer: "Den är döpt efter Gustav Vasa"

    },
    {
        question: "Vad kan man använda Dreamhack Coins?",
        options: ["Dreamhack Wheel", "Köpa saker", "Lösa in mot pengar", "Det är bara prydnader"],
        answer: "Dreamhack Wheel"

    },
    {
        question: "Vad är formeln för relativitetsteorin?",
        options: ["E=Mc^2", "PQ-formeln", "a^2+b^2=c^2", "Relativitetsteorin är en myt"],
        answer: "E=Mc^2"

    },
    {
        question: "Vilket år hade Tillbaka till Vintergatan premiär?",
        options: ["2000", "2001", "2002", "2003"],
        answer: "2003"
    },
    {
        question: "När började andra världskriget?",
        options: ["1992", "1890", "1939", "1767"],
        answer: "1939"
    },
    {
        question: "Vem Startade andra världskriget?",
        options: ["Bamse", "Sten Borgnäs", "Adolf Hitler", "Bob"],
        answer: "Adolf Hitler"
    },
    {
        question: "I vilken stad är dreamhack summer?",
        options: ["Jönköping", "Linköping", "Stockholm", "Göteborg"],
        answer: "Jönköping"
    },
    {
        question: "När började första världskriget?",
        options: ["1920", "1814", "1914", "1820"],
        answer: "1914"
    },
    {
        question: "När startade Dreamhack?",
        options: ["1994", "1997", "1999", "2001"],
        answer: "1994"
    },
    {
        question: "Vem vann VM i fotboll 2018?",
        options: ["Frankrike", "Spainen", "Brasilien", "Tyskland"],
        answer: "Frankrike"

    },
    {
        question: "Vem var den första gästkaraktären i tekken7?",
        options: ["Akuma", "Geese", "Negan", "Noctis"],
        answer: "Akuma"

    },
    {
        question: "Vilket mob kom först i minecraft?",
        options: ["Creeper", "Gris", "Axelotl", "Ender Draken"],
        answer: "Creeper"

    },
    {
        question: "när grundades Nintendo?",
        options: ["1889", "1985", "1978", "1990"],
        answer: "1889"

    },
    {
        question: "Hur många färger har regnbågen?",
        options: ["4", "9", "7", "22"],
        answer: "7"
    },
    {
        question: "När slutade andra världskriget?",
        options: ["1945", "1845", "2015", "1914"],
        answer: "1945"

    },
    {
        question: "är DreamHack roligt?",
        options: ["DH är awesome", "Det är väl ok", "Näh tråkigt", "Det suger"],
        answer: "DH är awesome"
    },
    {
        question: "Hur mycket kostar en LAN PREMIUM Biljett på Dreamhack 2023?",
        options: ["1799kr", "2000kr", "1499kr", "1000kr"],
        answer: "1799kr"

    },
    {
        question: "Hur mycker Dreamhackcoins behöver man för att snurra på hjulet?",
        options: ["5 Coins", "10 Coins", "15 Coins", "20 coins"],
        answer: "10 Coins"
    },
    {
        question: "Vad heter Mario och Luigi i efternamn?",
        options: ["Mario", "Luigi", "Wario", "Bowser"],
        answer: "Mario"
    },
    {
        question: "Vad heter prinsessan i Super Mario",
        options: ["Peach ", "apple", "banana", "pear"],
        answer: "peach"
    },
    {
        question: "Vad heter Sveriges huvudstad?",
        options: ["Köpenhamn", "Stockholm", "Malmö", "Paris"],
        answer: "Stockholm"
    },
    {
        question: "Vad heter prinsessan i Super Mario?",
        options: ["Kiwi", "Banan", "Pear", "Peach"],
        answer: "Peach"
    },
    {
        question: "Vad heter pasta på italienska?",
        options: ["'Pilsta'", "Pasta", "Pizza", "Patiliano"],
        answer: "Pasta"
    },
    {
        question: "Vad heter Super Marios lillebror?",
        options: ["Luigi", "Wario", "Waluigi", "Peach"],
        answer: "Luigi"
    },
    {
        question: "Vad heter Super Marios storebror?",
        options: ["Han har ingen Storebror", "Lugig", "Wario", "Waluigi"],
        answer: "Han har ingen Storebror"

    },
    {
        question: "Vad händer när Mario får en röd svamp?",
        options: ["Han blir liten", "Han blir stor", "inget händer", "Han blir en mjau mjau"],
        answer: "Han blir stor"
    },
    {
        question: "Vilket kodspråk används främst för att skapa Roblox upplevelser?",
        options: ["Rust", "C++", "Lua", "C#"],
        answer: "Lua"
    },
    {
        question: "Vilket företag äger spelet minecraft?",
        options: ["Microsoft", "Activision", "Battlenet", "Apple"],
        answer: "Microsoft"
    },
    {
        question: "Vem grundade Minecraft?",
        options: ["Micheal Jacksson", "Selena Gomez", "Marcus Persson", "Steve Jobs"],
        answer: "Marcus Persson"
    },
    {
        question: "Ca hur många möjliga positioner har en rubiks kub",
        options: ["6e12", "52863431", "4.3e23", "27000"],
        answer: "4.3e23"
    },
    {
        question: "Vad heter Rudbeck i förnamn?",
        options: ["Kalle", "Liam", "Linus", "Luis"],
        Answer: "Linus",
    },
    {
        question: "Vilken text-editor använder Distansakademin för att redigera sitt quiz?",
        options: ["Visual Studios Code", "Unity", "Unreal eninge", "Microsoft Word"],
        answer: "Visual Studios Code"
    },
    {
        question: "Vad är den högsta ranken i Rocket League?",
        options: ["Platinum", "Diamond", "Champion", "Bronze", "Super Sonic Legend"],
        answer: "Super Sonic Legend"
    },
    {
        question: "Vilket vapen startar man med som terrorist i counterstrike?",
        options: ["Usp", "Glock", "P250", "AK-47"],
        answer: "Glock"
    },

    {
        question: "Vid vilken ålder får man ta körkort för epatraktor",
        options: ["14 år", "15 år", "16 år", "17 år"],
        answer: "16 år"
    },
    {
        question: "Vad heter den heliumälskande arbetaren på rymdmacken, som ogärna jobbar på plattformen?",
        options: ["Larry", "Garsson", "Larsson", "Harry"],
        answer: "Garsson"
    },
    {
        question: "Vad heter det första rymdskeppet som ungdommarna hamnar på i serien Tillbaka till Vintergatan?",
        options: ["Bältan", "Hajen", "Fisken", "Ålen"],
        answer: "Bältan"
    },
    {
        question: "Vilken är inte ett programmerings språk?",
        options: ["Javascript", "Python", "C++", "HTML"],
        answer: "HTML"
    },
    {
        question: "Vad heter Darth Vader?",
        options: ["Obi wan", "Anakin", "C3PO", "Dooku"],
        answer: "Anakin"
    },
    {
        question: "Vilken är inte ett land?",
        options: ["Sao tome och principe", "Seychellerna", "Samoa", "Pacific ön"],
        answer: "Pacific ön"
    },
    {
        question: "Vilket är bästa programeringsspråkekt",
        options: ["JS", "Rust", "C++", "Assembly"],
        answer: "C++"
    },
    {
        question: "Smakar choklad bra",
        options: ["Nej", "ja", "Kanske", "Ewwww"],
        answer: "ja"
    },
    {
        question: "vad heter författaren till fox in socks och the cat in the hat?",
        options: ["dr. Seuss", "Astrid Lindgren", "Rick Riodan", "Wille Lerström"],
        Answer: "dr. Seuss"
    },
    {
        question: "Hur mycket hatar jag Assembly",
        options: ["Det är okej", "Gillar inte det", "Hatar det", "Slänger datorn genom ett fönster"],
        Answer: "Slänger datorn genom ett fönster"
    },
    {
        question: "Vad heter världens största hästras?",
        options: ["Shier/Clydedale", "Schettlandsponny", "New Forest", "Svenskt Halvblod"],
        answer: "Shier/Clydedale"
    },
    {
        question: "vem har gjor detta program",
        options: ["Cobzer", "BjörnV", "Anders", "Larzy"],
        answer: "Cobzer"
    },
    {
        question: "Who made Tesla?",
        options: ["Donald Duck", "Bill Gates", "Steve Jobs", "Elon Musk"],
        answer: "Elon Musk"
    },
    {
        question: "När grundades Dreamhack?",
        options: ["1994", "1991", "1894", "2000"],
        answer: "1994"
    },
    {
        question: "Vad heter Ronaldo i Förnamn?",
        options: ["Cristiano ", "Ibrahimović", "Messi", "Lewandowski"],
        answer: "Cristiano"
    }

];

//SKRIV FRÅOR TILL VÅRT FANTASTIKA QUIZ! GENOM ATT LÄSA FÖREGÅENDE KOD KAN DU ENKELT SE
//VAD SOM BEHÖVER GÖRAS! GLÖM INTE PLACERA KOMMATECKEN, MÅSVINGAR OCH HAKPARANTESER PÅ RÄTT STÄLLEN!