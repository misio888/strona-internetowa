function changeColor() {
    var a = Math.floor((Math.random() * 256));
    var b = Math.floor((Math.random() * 256));
    var c = Math.floor((Math.random() * 256));

    var background = "rgb(" + a + "," + b + "," + c + ")";

    document.getElementById("navbar").style.background = background;
    document.getElementById("footer").style.background = background;
    document.getElementById("main-2").style.background = background;
    document.getElementById("main-3").style.background = background;
}
