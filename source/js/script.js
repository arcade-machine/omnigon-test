const header = document.querySelector(".main-header");
const burger = header.querySelector(".main-header__burger");

// for no-js devices
header.classList.add("main-header--closed");

burger.addEventListener("click", function () {
    if (header.classList.contains("main-header--closed")) {
        header.classList.remove("main-header--closed")
    } else {
        header.classList.add("main-header--closed")
    }
});
