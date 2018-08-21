const URL = "js/players.json";
const playersList = document.querySelector(".players__list");
const listTemplate = document.querySelector(".players--template");
const playerCard = listTemplate.querySelector(".players__item");
const playerMockUp = listTemplate.querySelector(".players__item--mock-up");
const randomButton = document.querySelector("#random");

window.load = function() {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function () {
        try {
            var massive = JSON.parse(xhr.responseText);
            if (xhr.status === 200) {
                onSuccess(massive);
            }
        } catch (err) {
        }
    });

    xhr.open('GET', URL);
    xhr.send();
};

const onSuccess = function(card) {
    for (var i = 0; i < card.length; i++) {
        if (card[i].mockUp === false) {
            const cardGenerator = playerCard.cloneNode(true);

            cardGenerator.querySelector("h3").textContent = card[i].name;
            cardGenerator.querySelector("img").src = card[i].picture;
            cardGenerator.querySelector("img").srcset = card[i].srcset;

            playersList.appendChild(cardGenerator);
        } else {
            const cardMockUp = playerMockUp.cloneNode(true);
            playersList.appendChild(cardMockUp);
        }
    }
};

window.load();

randomButton.addEventListener("change", function() {
    if(this.checked) {
        // Checkbox is checked..
    } else {
        // Checkbox is not checked..
    }
});