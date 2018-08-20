const header = document.querySelector(".main-header");
const burger = header.querySelector(".main-header__burger");
const players = document.querySelectorAll(".players__item");

burger.addEventListener("click", function () {
    if (header.classList.contains("main-header--closed")) {
        header.classList.remove("main-header--closed")
    } else {
        header.classList.add("main-header--closed")
    }
});
