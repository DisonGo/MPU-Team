function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandCSSColor() {
    return "rgb(" + Math.floor(getRandom(0, 255)) + "," +Math.floor(getRandom(0, 255)) + "," +Math.floor(getRandom(0, 255)) + ")"
}
function log(any){
    console.log(any);
}