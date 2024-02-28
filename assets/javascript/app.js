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

const eventContainerEl = document.querySelector(".eventContainer");

if (eventContainerEl) {
    events.forEach(generateCard);
}

function toggleFilter() {
    const container = document.querySelector(".filterContainer");

    if (container.style.display === "none") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
}

function filterEvents() {
    eventContainerEl.innerHTML = "";
    let allowedDates = []
    let allowedPlaces = []

    const onsdagsFilter = document.querySelector("#OnsdagFilter");

    if (onsdagsFilter.checked)
        allowedDates.push(onsdagsFilter.value);
    if (document.querySelector("#TorsdagFilter").checked)
        allowedDates.push(document.querySelector("#TorsdagFilter").value);



    if (document.querySelector("#DWineFilter").checked) {
        allowedPlaces.push(document.querySelector("#DWineFilter").value)
    }


    if (allowedDates.length === 0 && allowedPlaces.length === 0) {
        events.forEach(generateCard);
        return;
    }


    const filteredEvents = events.filter(ev => allowedDates.includes(ev.date) || allowedPlaces.includes(ev.location));
    filteredEvents.forEach(generateCard);
}

function generateCard(event) {
    if (event.isOutdoor == true) {
        event.isOutdoor = `<i class="fa-solid fa-cloud-sun"></i>`;

    }
    else {
        event.isOutdoor = `<i class="fa-solid fa-person-shelter"></i>`;
    }

    if (event.hasFood == true) {
        event.hasFood = `<i class="fa-solid fa-utensils"></i>`;

    }
    else {
        event.hasFood = `<i class="fa-solid fa-coins"></i>`;
    }
    if (event.isFree == true) {
        event.isFree = "free";

    }
    else {
        event.isFree = `<i class="fa-solid fa-coins"></i>`;
    }
    eventContainerEl.innerHTML +=
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
            ${event.isOutdoor}
            ${event.hasFood}
            ${event.isFree}
        </div>
    </a > `
}