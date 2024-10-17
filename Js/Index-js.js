
var button1 = document.getElementById("1Button");
var paragraph = document.getElementById("demo1");
var originalText = paragraph.textContent;

button1.addEventListener("click", function () {
    if (paragraph.textContent === originalText) {
        paragraph.textContent =
            "Yes yes this is my first JavaScript program!";
    } else {
        paragraph.textContent = originalText;
    }
});


var button2 = document.getElementById("colorButton");
var originalText = button2.textContent;

button2.addEventListener("click", function () {
    if (button2.textContent === originalText) {
        button2.textContent =
            "Did not I told you that I know some JavaScript?";
    } else {
        button2.textContent = originalText;
    }
});






