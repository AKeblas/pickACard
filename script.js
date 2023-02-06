const main = document.querySelector(".main")
const btn = document.querySelector("button")


let code = ""
function getDeck () {
    fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(res => res.json())
        .then(data => {
            code = data.deck_id
        })
}
getDeck()

btn.onclick =()=>{
    getPlayDeck(code)
}


function getPlayDeck (playId) {
    fetch("https://www.deckofcardsapi.com/api/deck/"+ `${playId}` + "/draw/?count=1")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            main.innerHTML = `
            <div class="d-flex">
            <div class="box">
                <h2>${data.remaining}</h2>
            </div>
            <div class="box">
                <img src="${data.cards[0].image}" alt="">
            </div>

        </div>
            `
        })
}


