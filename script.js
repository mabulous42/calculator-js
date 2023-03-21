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
    let answer = document.getElementById('display');
    answer.value = eval(answer.value);
}