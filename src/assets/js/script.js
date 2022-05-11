// Data
const changeColorModeBtn = document.getElementById('color-mode-btn');
const lengthInput = document.getElementById('length-input');
const selectedLength = document.getElementsByClassName('selected-length');
const measures = document.getElementsByClassName('conversion');

// Convertion Elements
const inFeet = document.getElementById('in-feet');
const inMeters = document.getElementById('in-meters');
const inGallons = document.getElementById('in-gallons');
const inLiters = document.getElementById('in-liters');
const inPounds = document.getElementById('in-pounds');
const inKilos = document.getElementById('in-kilos');

// Event Listeners
changeColorModeBtn.addEventListener('click', changeColorMode);
lengthInput.addEventListener('change', makeConvertions);

// Functions
function changeColorMode() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.toggle('dark-mode');
    const hasDarkMode = body.classList.contains('dark-mode');
    changeColorModeBtn.innerText = hasDarkMode? 'Dark Mode' : 'Light Mode';
}

function makeConvertions(e) {
    if(e.target.value === '' || e.target.value < 0) e.target.value = 0;
    const length = parseFloat(e.target.value);
    for(lengthLbl of selectedLength) {
        lengthLbl.innerText = length;
    }

    for(measure of measures) {
        measure.classList.add('conversion-anim');
        measure.addEventListener('animationend', function() {
            this.classList.remove('conversion-anim');
        });
    }
    
    inFeet.innerText = (length * 3.281).toFixed(3);
    inMeters.innerText = (length / 3.281).toFixed(3); 
    inGallons.innerText = (length / 3.785).toFixed(3);
    inLiters.innerText = (length * 3.785).toFixed(3); 
    inPounds.innerText = (length * 2.205).toFixed(3);
    inKilos.innerText = (length / 2.205).toFixed(3);
}