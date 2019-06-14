//FRONTEND

var learnMoreButtons = document.querySelectorAll(".learnMore");
var addToCart = document.getElementsByClassName("cart");

for (var i = 0; i < learnMoreButtons.length; i++) {
    learnMoreButtons[i].addEventListener("click", function () {
        console.log(this);


        // var itemPictures = document.getElementsByClassName("merch");
        // var url = itemPictures[i].getAttribute('src');

        // itemPictures.forEach(function (picture) {
        //     var url = picture.getAttribute('src');
        // });

        var width = 200 + "px";
        var height = 200 + "px";
        window.open(url, 'Image', 'width=width,height=height,resizable=1');
    });
};

// for (var i = 0; i < addToCart.length; i++) {
//     addToCart[i].addEventListener("click", function () {
//         alert("CLONKED");
//     });
// };
