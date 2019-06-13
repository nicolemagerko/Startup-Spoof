//FRONTEND

var merch = document.querySelectorAll(".merch");

for (var i = 0; i < merch.length; i++) {
    merch[i].addEventListener("click", function () {
        this.classList.add("fade");
    });
};