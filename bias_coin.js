function msg_float(value) {
    x = value;
}

function bang() {
    flip = Math.random();
    result = flip >= x;
    outlet(0, result);
}