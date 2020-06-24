let images = document.querySelectorAll(".reviews-img-wrapper img")
let imgIndex = 0
let rightArrow = document.querySelector(".reviews-slider-right")
rightArrow.onclick = function () {
    if (imgIndex < images.length - 1) imgIndex = imgIndex + 1
    toggleImages()
}
let leftArrow = document.querySelector(".reviews-slider-left")
leftArrow.onclick = function () {
    if (imgIndex > 0)imgIndex = imgIndex - 1
    toggleImages()
}

function toggleImages() {
    for (let i = 0; i < images.length; i++) {
        let img = images[i]
        if (i === imgIndex) {
            img.classList.remove("hidden")
        } else {
            img.classList.add("hidden")
        }
    }
}
let burger = document.querySelector(".header-burger-btn")
burger.onclick = function () {
let burgerMenu = document.querySelector(".burger-menu")
    burgerMenu.classList.toggle("burger-menu-hidden")
}
