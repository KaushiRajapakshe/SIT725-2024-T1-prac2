// Second Method
function myFunction() {
    var num1, num2, data;
    num1 = parseFloat(document.getElementById('num1').value);
    num2 = parseFloat(document.getElementById('num2').value);
    data = num1 + num2;
    document.getElementById('data').innerHTML = data;
}