var isPretty = true;
var changeFontTitle = "Fonte Suave";

function changeFont(){
    var currentFont = document.getElementById("changeFont").text;
    document.getElementById("changeFont").text = changeFontTitle;
    changeFontTitle = currentFont;

    isPretty=!isPretty;
    document.styleSheets[1].disabled=!isPretty;
}
