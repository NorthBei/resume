window.addEventListener("load",init,false);

function init() {
    var email = document.getElementById("email");
    email.addEventListener("click",function () {
        $("#email_slide_bar").animate({bottom: "0px"});
    },false);

    var close_slide = document.getElementById("close_slide");
    close_slide.addEventListener("click",function () {
        $("#email_slide_bar").animate({bottom: "-40px"});
    },false);
}