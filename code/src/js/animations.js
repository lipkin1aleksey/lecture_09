const WOW = require('wowjs');

new WOW.WOW().init();

let images = document.querySelectorAll(".gallery-content__box > img");
images.forEach = Array.prototype.forEach;

images.forEach(function(item, index) {
    item.addEventListener("click", changeMainPhoto);
})

function changeMainPhoto() {
    let imageSrc = this.getAttribute("src"),
        container = document.querySelector(".gallery-content__main-photo"),
        newImage = document.createElement('img');

        newImage.setAttribute("src", imageSrc);
        newImage.className = "floatImage";

        container.append(newImage);
}