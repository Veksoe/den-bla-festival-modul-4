const events = [
    {
        infoFile: "all_Time_JazzBand.html",
        artist: "All Time Jazzband",
        img: "AllTimeJazzBand-small.jpg",
        altText: "Medlemmerne i All Time Jazzband. der står i et bryggeri med deres instrumenter.",
        date: "Onsdag",
        time: "16:00",
        location: "Jazzscenen",
        description: "Bliv taget med til New Orleans når All Time Jazz Band spiller op med kendte klassikere, og numre man ellers ikke høre så tit.",
        isOutdoor: true,
        hasFood: true,
        isFree: true,
    },
    {
        infoFile: "big_Creek_Slim_Trio.html",
        artist: "Big Creek Slim Trio ",
        img: "BigCreekSlimTrio-small.jpg",
        altText: "Big Creek Slim Trio der står på en scene og giver koncert.",
        date: "Lørdag",
        time: "21:00",
        location: "D`Wine Bar",
        description: "Big Creek Slim blues-mysteriumet fra Ikast, fremfører klassikerne og egne sange, med en performance fuld af personlighed.",
        isOutdoor: false,
        hasFood: true,
        isFree: true,
    },
    {
        infoFile: "Chris_Andersen_duo.html",
        artist: "Chris Anderesen Duo",
        img: "ChrisAndersenDuo-small.jpg",
        altText: "nær billede af Chris Andersen",
        date: "Søndag",
        time: "14:00",
        location: "Salling Rooftop",
        description: "Med sin guitar og sang formidler Chris Andersen muntre toner med akustisk folk, countryblues og ragtime.",
        isOutdoor: true,
        hasFood: true,
        isFree: true,
    },
    {
        infoFile: "chris_andersen.html",
        artist: "Chris Anderesen",
        img: "ChrisAndersen-small.jpg",
        altText: "hris Andersen der sidder med hat på og et blåt jakkesæt.",
        date: "Lørdag",
        time: "11:00",
        location: "KaffeFair",
        description: "Kom til brunch mens Chris Andersen sætter dagen i gang med muntre toner.",
        isOutdoor: false,
        hasFood: true,
        isFree: true,
    },
    {
        infoFile: "creole_Catz.html",
        artist: "Creole Catz",
        img: "CreloCatz-small.jpg",
        altText: "Creole Catz det står på række med instrumenter, med en af medlemmerne der holder sin trompet mod de andre.",
        date: "Fredag",
        time: "19:30",
        location: "Jazzscenen",
        description: "Kom til en herlig jazzoplevelse, med flerstemmig sang og swingende arrangementer, serveret med medrivende og brede jazz- og boogie-repertoire.",
        isOutdoor: true,
        hasFood: true,
        isFree: true,
    },
    {
        infoFile: "heroeya_Musikkorps_parade.html",
        artist: "Herøya Musikkorps - Streetparade",
        img: "HeroeyaMusikkorps-small.png",
        altText: "Herøya Musikkorps det sidder og spiller",
        date: "Lørdag",
        time: "12:00",
        location: "Jazzscenen",
        description: "Hver med når Herøys Musikkorps går parade gennem midtbyen og skaber en festlig optakt.",
        isOutdoor: true,
        hasFood: true,
        isFree: true,
    },
    {
        infoFile: "heroeya_Musikkorps-small.html",
        artist: "Herøya Musikkorps",
        img: "HeroeyaMusikkorps.png",
        altText: "Herøya Musikkorps det sidder og spiller",
        date: "Fredag",
        time: "13:30",
        location: "Jazzscenen",
        description: "Igen i år står Herøya Street Band klar til at sprede glæde på festivallen med sprudlende energi og smuttende rytmer.",
        isOutdoor: true,
        hasFood: true,
        isFree: true,
    },
    {
        infoFile: "HP_Lange_Whats_Cooking.html",
        artist: "HP Lange Whats Cooking",
        img: "HPLange&BigGumbo-small.jpg",
        altText: "Fire mænd der står op af en hvid mur.",
        date: "Torsdag",
        time: "17:00",
        location: "KaffeFair",
        description: "Kom og mød HP Lange og smag hans Gumbo-Gryde, en autentisk southern kulinarisk og musikalsk oplevelse.",
        isOutdoor: false,
        hasFood: true,
        isFree: false,
    },
    {
        infoFile: "hpLangeDuo.html",
        artist: "HP Lange Duo",
        img: "HPLange&NielsBonnefaa-small.jpg ",
        altText: "Billede af HP Lange og Niels Bonnefaas",
        date: "Lørdag",
        time: "14:00",
        location: "Salling Rooftop",
        description: "-	Oplev virtuose guitarspil og rå og følelsesladede violin og banjo spil, når HP Lange og Niels Bonefass skaber en uimodståelig blueoplevelse.",
        isOutdoor: true,
        hasFood: true,
        isFree: true,
    },
    {
        infoFile: "ismo_Haavisto_Combo.html",
        artist: "Ismo Haavisto Combo",
        img: "IsmoHaavistoCombo-small.jpg",
        altText: "Ismo Haavisto Combo der står på en scene og giver koncert.",
        date: "Torsdag",
        time: "21:00",
        location: "D`Wine Bar",
        description: "En professionel bluesmusiker fra Finland, der er kendt som en stor sanger, mundharmonikaspiller, guitarist og sangskriver.",
        isOutdoor: false,
        hasFood: true,
        isFree: true,
    },
    {
        infoFile: "jens_Christian_Kwella.html",
        artist: "Jens Christian Kwella",
        img: "JensChristianKwellaDuo-small.jpg",
        altText: "billede af Jens Christian Kwella i sort og hvid",
        date: "Onsdag",
        time: "16:00",
        location: "Salling Rooftop",
        description: "Kom til en magisk oplevelse, når Jens Kwella og Mads Houe skaber uforglemmelige jazzoplevelser med traditionelle og originale jazznumre.",
        isOutdoor: true,
        hasFood: true,
        isFree: true,
    },
    {
        infoFile: "Kant.html",
        artist: "Kant",
        img: "Kant-small.jpg",
        altText: "billede af kant i studiet",
        date: "Fredag",
        time: "20:00",
        location: "Stargate scenen",
        description: "Rasmus Frandsen og Erik Michaelsen har sammensat et auditivt kunstprojekt, hvor målet er at få lytteren til at føle eller opleve noget.",
        isOutdoor: false,
        hasFood: true,
        isFree: false,
    },
    {
        infoFile: "Limeriver_Jazz_&_Jam_session.html",
        artist: "Limeriver Jazz Og Jazz Session",
        img: "LimeriverJazzBand-small.png",
        altText: "Billede af bandet der er samlet",
        date: "Søndag",
        time: "10:00-14:00",
        location: "Jazzscenen",
        description: "Kom og få rundstykker og kaffe, når et af Aalborgs ældste orkestre slutter festivalen af.",
        isOutdoor: true,
        hasFood: true,
        isFree: true,
    },
    {
        infoFile: "lothar_Og_Nande.html",
        artist: "Tim Lothar og Peter Nande",
        img: "LotherNandeogLinholt-small.jpg",
        altText: "Tim Lother og Peter Nande der står med en plastisk gås. ",
        date: "Fredag",
        time: "18:00",
        location: "Salling Rooftop",
        description: "Bliv en del af koncerten med Tim Lothar og Peter Nande, når de går på scenen med humoristisk historie fortælling, improviseret jamming og mesterlig blues!",
        isOutdoor: true,
        hasFood: true,
        isFree: true,
    },
    {
        infoFile: "raa.html",
        artist: "RAA",
        img: "RaaSallingRooftop-small.jpg",
        altText: "Billede af scenen på Salling Rooftop hvor RAA afholdes.",
        date: "Torsdag",
        time: "16:00",
        location: "Salling Rooftop",
        description: "Musikere er inviteret til at optræde under åben himmel på Salling Rooftop, og give et eksklusivt sneak peek inden de skal ud og give den gas på de store scener.",
        isOutdoor: true,
        hasFood: true,
        isFree: true,
    },
    {
        infoFile: "Shadow_Government.html",
        artist: "Shadow Goverment",
        img: "ShadowGoverment-small.jpg",
        altText: "Shadow Goverment Der står foran en fabrik.",
        date: "Torsdag",
        time: "18:30",
        location: "Stargate scenen",
        description: "Oplev Shadow Governments exceptionelle sammenspil, i hvad der føles som telepatisk sammenspil og overskud i komplicerede musikalske fortællinger.",
        isOutdoor: false,
        hasFood: true,
        isFree: false,
    },
    {
        infoFile: "st_Marie_Skoles_Bigband.html",
        artist: "St. Mariæ Skoles Bigband",
        img: "StMariæSkolesBigBand-small.png",
        altText: "St. Mariæ Skoles Bigband der står med deres instrumenter på en trappe.",
        date: "Torsdag",
        time: "14:00",
        location: "Jazzscenen",
        description: "Hver med når Den Blå Festival bliver skudt i gang af det lokale skoleband.",
        isOutdoor: true,
        hasFood: true,
        isFree: true,
    },
    {
        infoFile: "the_Downshifters.html",
        artist: "The Downshifters",
        img: "the_Downshifters-small.jpg",
        altText: "The Downshifters der sidder og giver koncert.",
        date: "Fredag",
        time: "15:00",
        location: "KaffeFair",
        description: "Hver med når brødrene Bjerre spiller orginale blues- og rootsange.",
        isOutdoor: false,
        hasFood: true,
        isFree: true,
    },
    {
        infoFile: "twang.html",
        artist: "Twang",
        img: "Twang2-small.jpg",
        altText: "De tre medlemmer i Twang der sidder i høballer med instrumenter og en kylling.",
        date: "Fredag",
        time: "21:00",
        location: "D`Wine Bar",
        description: "-	Humoristisk og levende koncert der blander amerikansk folkemusik, jazz og hiphop ind i deres lyd.",
        isOutdoor: false,
        hasFood: true,
        isFree: true,
    },
    {
        infoFile: "Vulkan _Duo-koncert.html",
        artist: "Vulkan duo-koncert",
        img: "Vulkan Duo-small.png",
        altText: "billede af Jens på guitaren",
        date: "Fredag",
        time: "18:30",
        location: "Stargate svenen",
        description: "-	Kom med til en enestående koncertoplevelse, når Jakob Sørensen og Jens Fisker går sammen og inviterer verden ind i deres musik.",
        isOutdoor: false,
        hasFood: true,
        isFree: false,
    },
    {
        infoFile: "zone_Out.html",
        artist: "Zone Out",
        img: "zoneOut-small.jpg",
        altText: "Musiknoder på en blå baggrund.",
        date: "Onsdag",
        time: "21:30",
        location: "Stargate scenen",
        description: "Zone ud til ambiente og repetitive lyde, og mærk sig selv i musikken til sovekoncerten ZONE OUT.",
        isOutdoor: false,
        hasFood: true,
        isFree: false,
    },
]

const eventContainerEl = document.querySelector(".eventContainer"); /* Fang elementet i HTMLen med classen "eventContainer" og declare den som eventContainerEl */

if (eventContainerEl) { /* hvis der er en evenContainerEl på siden */
    events.forEach(generateCard);  /* loop igennem hvert element i events og kør "generateCard" funktionen for hvert element */
}

function toggleFilter() { /* Funktion der skal bruges til at åbne og lukke vores filtrering boks. */
    const filterContainerEl = document.querySelector(".filterContainer");  /* Fang elementet i HTMLen med classen "eventContainer" og declare den som filterContainerEl */

    if (filterContainerEl.style.display === "none") { /* hvis display på inline-css style er lige med none. */
        filterContainerEl.style.display = "block"; /* sæt display på inline-css style lige med block */
    } else {
        filterContainerEl.style.display = "none"; /* Ellers sæt display på inline-css style lige med none. */
    }
}

function filterEvents() { /* Funktion der skal bruges til at filterer vores events. */
    eventContainerEl.innerHTML = ""; /* Fjern alt i "eventContainerEl" */
    let allowedDates = [] /* Variablen med tomt array */
    let allowedPlaces = [] /* Variablen med tomt array */


    /* Hvis elementet i HTML med id'et "OnsdagFilter" er checked */
    if (document.querySelector("#OnsdagFilter").checked) {
        allowedDates.push(document.querySelector("#OnsdagFilter").value);/*indsæt/push value (onsdag) til arrayet "allowedDates" */
    }

    /* Hvis elementet i HTML med id'et "TorsdagFilter" er checked*/
    if (document.querySelector("#TorsdagFilter").checked) {
        allowedDates.push(document.querySelector("#TorsdagFilter").value);/* indsæt/push value (torsdag) til arrayet "allowedDates" */
    }

    /* Hvis elementet i HTML med id'et "FredagFilter" er checked*/
    if (document.querySelector("#FredagFilter").checked) {
        allowedDates.push(document.querySelector("#FredagFilter").value);/* indsæt/push value (fredag) til arrayet "allowedDates" */
    }

    /* Hvis elementet i HTML med id'et "LørdagFilter" er checked*/
    if (document.querySelector("#LørdagFilter").checked) {
        allowedDates.push(document.querySelector("#LørdagFilter").value);/* indsæt/push value (lørdag) til arrayet "allowedDates" */
    }
    /* Hvis elementet i HTML med id'et "SøndagFilter" er checked*/
    if (document.querySelector("#SøndagFilter").checked) {
        allowedDates.push(document.querySelector("#SøndagFilter").value);/* indsæt/push value (søndag) til arrayet "allowedDates" */
    }

    /* Hvis elementet i HTML med id'et "DWineFilter" er checked*/
    if (document.querySelector("#DWineFilter").checked) {
        allowedPlaces.push(document.querySelector("#DWineFilter").value)/* indsæt/push value (D`Wine Bar) til arrayet "allowedPlaces" */
    }

    /* Hvis elementet i HTML med id'et "SallingFilter" er checked*/
    if (document.querySelector("#SallingFilter").checked) {
        allowedPlaces.push(document.querySelector("#SallingFilter").value)/* indsæt/push value (Salling Rooftop) til arrayet "allowedPlaces" */
    }

    /* Hvis elementet i HTML med id'et "JazzscenenFilter" er checked*/
    if (document.querySelector("#JazzscenenFilter").checked) {
        allowedPlaces.push(document.querySelector("#JazzscenenFilter").value)/* indsæt/push value (Jazzscenen) til arrayet "allowedPlaces" */
    }

    /* Hvis elementet i HTML med id'et "KaffeFairFilter" er checked*/
    if (document.querySelector("#KaffeFairFilter").checked) {
        allowedPlaces.push(document.querySelector("#KaffeFairFilter").value)/* indsæt/push value (KaffeFair) til arrayet "allowedPlaces" */
    }

    /* Hvis elementet i HTML med id'et "StargateFilter" er checked*/
    if (document.querySelector("#StargateFilter").checked) {
        allowedPlaces.push(document.querySelector("#StargateFilter").value)/* indsæt/push value (Stargate scenen) til arrayet "allowedPlaces" */
    }

    events.forEach(event => filterEventsByDaysAndPlace(event, allowedDates, allowedPlaces));
    /* ^ For hvert element i events kør funktionen "filterEventsByDaysAndPlace" med brug af det event den er nået til i listen og elementerne sat i "allowedDates" og "allowedPlaces" arraysene*/
}

function filterEventsByDaysAndPlace(event, allowedDates, allowedPlaces) {
    /* ^Funktion der filtrere events ud fra dag og lokation, med brug af det aktukelle event og elementerne sat i "allowedDates" og "allowedPlaces" arraysene*/

    if ((allowedDates.length === 0 || allowedDates.includes(event.date))
        /* ^ Hvis længden på "allowedDates" arrayet er lige med nul eller "allowedDates" indeholder dagen der matcher det aktuelle events dag  */
        && (allowedPlaces.length === 0 || allowedPlaces.includes(event.location)))
        /* ^ og hvis længden på "allowedPlaces" arrayet er lige med nul eller "allowedPlaces" indeholder stedet der matcher det aktuelle events sted  */
        generateCard(event) /* kør "generateCard funktionen for det aktuelle event*/
}

function generateCard(event) {/* funktion der generere et card til det aktuelle event */
    let outdoorIcon; /* declare variable til outdoor ikonet */
    if (event.isOutdoor === true) { /* hvis isOutdoor i det akutelle event er true */
        outdoorIcon = `<i class="fa-solid fa-cloud-sun"></i>`; /* sæt outdoorIcon lige med icon-teksten  */
    }
    else {
        outdoorIcon = `<i class="fa-solid fa-person-shelter"></i>`;/* ellers sæt outdoorIcon lige med denne icon-tekst */
    }

    let hasFoodIcon; /* declare variable til hasFood ikonet */
    if (event.hasFood === true) { /* hvis hasFood i det aktuelle event er true */
        hasFoodIcon = `<i class="fa-solid fa-utensils"></i>`;  /* sæt hasFoodIcon lige med icon-teksten */
    }
    else {
        hasFoodIcon = `<i class="fa-solid fa-coins"></i>`; /* ellers sæt hasFoodIcon lige med denne icon-tekst */
    }

    let isFreeIcon; /* declare variable til isFree ikonet */
    if (event.isFree === true) { /* hvis isFree i det aktuelle event er true */
        isFreeIcon = "free";/* sæt isFreeIcon lige med "free" */
    }
    else {
        isFreeIcon = `<i class="fa-solid fa-coins"></i>`; /* ellers sæt hasFoodIcon lige med icon-teksten */
    }

    eventContainerEl.innerHTML += /* Tilføj følgende i elementet i HTMLen der er knyttet til eventContainerEl */
        `<a href = "./arrangement-info/${event.infoFile}" class="cardTemplate" > 
        <h2>${event.artist}</h2>
        <div class="basicInfo flex alignCenter">
            <div class="imgContainer"><img src="./assets/img/${event.img}" alt="${event.altText}"></div>
            <div class="cardtopicons">
                <p><i class="fa-solid fa-calendar-days"></i> ${event.date}</p>
                <p><i class="fa-solid fa-clock"></i> ${event.time}</p>
                <p><i class="fa-solid fa-location-dot"></i>${event.location}</p>
            </div>
        </div>

        <p> ${event.description}</p>

        <div class="cardbottomicons flex">
            ${outdoorIcon}
            ${hasFoodIcon}
            ${isFreeIcon}
        </div>
    </a > `
    /* ^ Indsæt de forskellige elementer fra det aktuelle event de forskellige steder de bliver refereret 
        undtagen ved outdoorIcon, hasFoodIcon og isFreeIcon; brug indholdet sat i de respektive variabler. */
}