var input = document.getElementById('input').value;
var output = document.getElementById('output').value;
var calc = document.getElementById('calc');

calc.onclick = function() {
    output = Math.pow((input*0.2), 1.12);
}
