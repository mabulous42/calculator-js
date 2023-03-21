function show(num) {
    let display = document.getElementById('display');
    if (display.value === '0') {
        display.value = num;
    } else {
        display.value += num;
    }    
}

function clr(screen) {
    let clear = document.getElementById('display');
    clear.value = screen;
}

function cal() {
    let display = document.getElementById('display');
    if (display) {
        display.value = eval(display.value);
    }
    console.log(display.value);
    // document.getElementById('history').value = answer.value + " = ";
}