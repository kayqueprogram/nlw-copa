function createGame(player1, hour, player2){
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do Brasil">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da Sérvia">
    </li>

    `
}

let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
</div>
`
}

document.querySelector('#app').innerHTML = `
<header>
<img src="./assets/logo.svg" alt="">
</header>
<main id="cards">
    ${createCard('24/11', 'quinta', createGame('brazil', '16:00', 'serbia') + createGame('switzerland', '07:00', 'cameroon') + createGame('portugal', '13:00', 'ghana'))}
    ${createCard('28/11', 'segunda', createGame('switzerland', '13:00', 'brazil') + createGame('cameroon', '07:00', 'serbia') + createGame('south korea', '10:00', 'ghana'))}
    ${createCard('02/12', 'sexta', createGame('south korea', '12:00', 'portugal') + createGame('ghana', '12:00', 'uruguay') + createGame('serbia', '16:00', 'switzerland'))}
</main>
`