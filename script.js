function append(number) {
    document.getElementById('result').value += number;
}

function operation(op) {
    document.getElementById('result').value += ` ${op} `;
}

function clearresult() {
    document.getElementById('result').value = '';
}

function calculate() {
    try {
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}