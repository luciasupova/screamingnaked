  function myFunction() {
    var image = document.getElementById("myImg");
    if (image.src.match("sn-cover")) {
        image.src = "images/giphy.gif";
    } else {
        image.src = "images/sn-cover.png";
    }
}

