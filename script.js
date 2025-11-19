const display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else if (display.value === 'Error') {
        display.value = value;
    }
    else {
        display.value += value;
    }
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
    try {
        let result = eval(display.value);
        
        if (!isFinite(result)) {
            throw new Error("INVALID");
        }

        if (Number.isInteger(result)) {
            display.value = result;
        } else {
            display.value = parseFloat(result.toPrecision(6));
        }
    }
    catch (error) {
        display.value = 'Error';
    }
}


