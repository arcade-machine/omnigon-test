const players = document.querySelectorAll(".players__item");
const randomButton = document.querySelector("#random");

const getRandom = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

randomButton.addEventListener( 'change', function() {
    if(this.checked) {
        for (var i = 0; i < 12; i++) {
            players[i].setAttribute("order", getRandom(0, i));
        }
    } else {
        for (var i = 0; i < 12; i++) {
            players[i].setAttribute("order", i);
        }
    }
});


