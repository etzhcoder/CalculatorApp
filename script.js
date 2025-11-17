const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function allClear() {
    display.value = '0';
}

function backspace() {
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
        display.value = '0';
    }
}

function calculate() {

}


