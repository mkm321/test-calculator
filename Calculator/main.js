var divident;
var divisor;
var operator;
var resultPerformed;
var sum = 0;
var historyArray = "";
var iterator = 0;

//If we click enter inside input text then event will work
function func(e) {
    if (e.keyCode == 13) {
        document.getElementById("click").click();
    }
}

function f(a) {
    console.log(a);
    a = document.getElementById("input-id").value + a;
    document.getElementById("input-id").value = a;
}

function f1() {
    document.getElementById("input-id").value = "";
    document.getElementById("input-id").placeholder = "Enter number";
    document.getElementById("input-expression").value = "";
    document.getElementById("input-expression").placeholder = "Enter mathematical expression";
}

function submit() {
    var expression = document.getElementById("input-expression").value;
    expression += "";
    historyArray += "Equation = ";
    historyArray += expression.toString();
    historyArray += "<br>";
    iterator++;
    var copy = expression;

    expression = expression.replace(/[0-9]+/g, "#").replace(/[\(|\|\.)]/g, "");
    var numbers = copy.split(/[^0-9\.]+/);
    var operators = expression.split("#").filter(function(n) { return n });
    var result = [];

    for (i = 0; i < numbers.length; i++) {
        result.push(numbers[i]);
        if (i < operators.length) result.push(operators[i]);
    }
    sum = 0;
    console.log(result);
    for (i = 0; i < result.length; i++) {
        if (result[i] == "/") {
            var val1 = parseInt(result[i - 1]);
            var val2 = parseInt(result[i + 1]);
            var res = val1 / val2;
            sum = res;
            result.splice(i - 1, 3, sum.toString());
        }
    }
    console.log(result);
    for (i = 0; i < result.length; i++) {
        if (result[i] == "*") {
            var val1 = parseInt(result[i - 1]);
            var val2 = parseInt(result[i + 1]);
            var res = val1 * val2;
            sum = res;
            result.splice(i - 1, 3, sum.toString());
        }
    }
    console.log(result);
    for (i = 0; i < result.length; i++) {
        if (result[i] == "+") {
            var val1 = parseInt(result[i - 1]);
            var val2 = parseInt(result[i + 1]);
            var res = val1 + val2;
            sum = res;
            result.splice(i - 1, 3, sum.toString());
        }
    }
    console.log(result);
    for (i = 0; i < result.length; i++) {
        if (result[i] == "-") {
            var val1 = parseInt(result[i - 1]);
            var val2 = parseInt(result[i + 1]);
            var res = val1 - val2;
            sum = res;
            result.splice(i - 1, 3, sum.toString());
        }
    }
    historyArray += "Result = ";
    historyArray += sum.toString();
    historyArray += "<br>";
    iterator++;
    console.log(result);
    document.getElementById("input-id").value = sum;

}

function addition() {
    var divident1;
    divident1 = document.getElementById("input-id").value;
    if (divident1 == "") {
        divident = divident;
    } else {
        divident = divident1;
    }
    document.getElementById("input-id").value = "";
    document.getElementById("input-id").placeholder = "Enter another number";
    operator = "+";
}

function subtraction() {
    var divident1;
    divident1 = document.getElementById("input-id").value;
    if (divident1 == "") {
        divident = divident;
    } else {
        divident = divident1;
    }
    document.getElementById("input-id").value = "";
    document.getElementById("input-id").placeholder = "Enter another number";
    operator = "-";
}

function divide() {
    var divident1;
    divident1 = document.getElementById("input-id").value;
    if (divident1 == "") {
        divident = divident;
    } else {
        divident = divident1;
    }
    document.getElementById("input-id").value = "";
    document.getElementById("input-id").placeholder = "Enter another number";
    operator = "/";
}

function multiply() {
    var divident1;
    divident1 = document.getElementById("input-id").value;
    if (divident1 == "") {
        divident = divident;
    } else {
        divident = divident1;
    }
    document.getElementById("input-id").value = "";
    document.getElementById("input-id").placeholder = "Enter another number";
    operator = "*";
}

function result() {
    divisor = document.getElementById("input-id").value;
    var query = divident.toString() + " " + operator.toString() + " " + divisor.toString();
    historyArray += "Equation = ";
    historyArray += query.toString();
    historyArray += "<br>";
    iterator++;
    divisor = parseInt(divisor);
    divident = parseInt(divident);
    if (operator == "+") {
        resultPerformed = divident + divisor;
        document.getElementById("input-id").value = resultPerformed;
    } else if (operator == "-") {
        resultPerformed = divident - divisor;
        document.getElementById("input-id").value = resultPerformed;
    } else if (operator == "/") {
        resultPerformed = divident / divisor;
        document.getElementById("input-id").value = resultPerformed;
    } else {
        resultPerformed = divident * divisor;
        document.getElementById("input-id").value = resultPerformed;
    }
    historyArray += "Result = ";
    historyArray += resultPerformed.toString();
    historyArray += "<br>";
    iterator++;
}

function history() {
    document.getElementById("history").innerHTML = historyArray;
    document.getElementById("history").style.display = "block";
}