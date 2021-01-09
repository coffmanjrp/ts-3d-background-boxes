"use strict";
var boxesContainer = document.getElementById('boxes');
var btn = document.getElementById('btn');
function createBoxes() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundPosition = -j * 125 + "px " + -i * 125 + "px";
            boxesContainer.appendChild(box);
        }
    }
}
btn.addEventListener('click', function () { return boxesContainer.classList.toggle('big'); });
boxesContainer.addEventListener('mouseover', function () {
    return boxesContainer.classList.add('big');
});
boxesContainer.addEventListener('mouseout', function () {
    return boxesContainer.classList.remove('big');
});
createBoxes();
