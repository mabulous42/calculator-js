let display = document.getElementById('display');
let input = document.getElementById("input");
function show(num) {    
    if (display.value === '0') {
        display.value = num;
    }
    else {
        display.value += num;
    }
}

function clr(screen) {
    display.value = screen;
}

function cal() {
    display.value = eval(display.value);
    console.log(display.value);
    // document.getElementById('history').value = show(input.value) + " = ";
}

function operator(join) {
    display.value += join;
}

function squareRoot() {
    display.value = Math.sqrt(display.value);
}