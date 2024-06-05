let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeCounter = 0
let guestCounter = 0

// Home Score

function add1Home() {
    homeCounter += 1
    homeScore.textContent = homeCounter
}

function add2Home() {
    homeCounter += 2
    homeScore.textContent = homeCounter
}

function add3Home() {
    homeCounter += 3
    homeScore.textContent = homeCounter
}

// Guest Score

function add1Guest() {
    guestCounter += 1
    guestScore.textContent = guestCounter
}

function add2Guest() {
    guestCounter += 2
    guestScore.textContent = guestCounter
}

function add3Guest() {
    guestCounter += 3
    guestScore.textContent = guestCounter
}


function newGame() {
    homeCounter = 0
    guestCounter = 0
    homeScore.textContent = homeCounter
    guestScore.textContent = guestCounter
}