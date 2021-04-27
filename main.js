/* Change cover */
function mouseOverImage() {
    document.getElementById('coverChange').src = "images/cube-broken.gif";
}

function mouseOutImage() {
    document.getElementById('coverChange').src = "images/none.gif";
}

/* change header
$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 200) {
            $(".header").addClass("black");
        } else {
           $(".header").removeClass("black");
        }
    });
});
*/