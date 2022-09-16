var input = document.getElementById('input').value;
var output = document.getElementById('output');

calc.onclick = function() {
    output.value = Math.pow((input*0.2), 1.12);
}
