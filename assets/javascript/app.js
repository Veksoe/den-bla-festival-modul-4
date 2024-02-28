const events = [
    {
        infoFile: ".html",
        artist: "band",
        img: "navn",
        date: "dag",
        time: "tidspunkt",
        location: "lokation",
        description: "beskrivelse",
        isOutdoor: true,
        hasFood: true,
        isFree: true,
    },
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
        date: "Søndag",
        time: "14:00",
        location: "SallingRooftop",
        description: "Med sin guitar og sang formidler Chris Andersen muntre toner med akustisk folk, countryblues og ragtime.",
        isOutdoor: true,
        hasFood: true,
        isFree: true,
    },
    {
        infoFile: "chris_andersen.html",
        artist: "Chris Anderesen",
        img: "ChrisAndersen-small.jpg",
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
        date: "Torsdag",
        time: "17:00",
        location: "KaffeFair",
        description: "Kom og mød HP Lange og smag hans Gumbo-Gryde, en autentisk southern kulinarisk og musikalsk oplevelse.",
        isOutdoor: false,
        hasFood: true,
        isFree: false,
    },
]


const eventContainerEl = document.querySelector(".eventContainer");
// let surroundings;
// let food;
// let price;



events.forEach(function (event) {
    if (event.isOutdoor == true) {
        event.isOutdoor = `<i class="fa-solid fa-cloud-sun"></i>`;

    }
    else {
        event.isOutdoor = `<i class="fa-solid fa-utensils"></i>`;
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
});