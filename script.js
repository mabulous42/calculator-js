let display = document.getElementById('display');
let input = document.getElementById("input");
let history = document.getElementById('history');
let output = 0;
function show(num) {
    if (display.value === '0') {
        display.value = num;
        history.value = "Ans= " + eval(output);
    }
    else if (history.value === (output + " = ")) {
        display.value = num;
        history.value = "Ans= " + eval(output);
    }
    else {
        display.value += num;
        history.value = "Ans= " + eval(output);
    }


}

function clr(screen) {
    display.value = screen;
    history.value = "Ans= " + eval(output);
}

function cal() {
    output = display.value;
    display.value = eval(output);
    history.value = output + " = ";

    console.log(display.value === eval(display.value));
    // console.log(history.value === (output + " = "));

}

function operator(join) {
    history.value = "Ans= " + eval(output);
    display.value += join;
}
function operatorMinus(join) {
    if (display.value === '0') {
        display.value = join;
        history.value = "Ans= " + eval(output);
    }
    else {
        history.value = "Ans= " + eval(output);
        display.value += join;
    }

}

function dot(join) {
    history.value = "Ans= " + eval(output);
    display.value += join;
}

function squareRoot() {
    display.value = Math.sqrt(display.value);
}