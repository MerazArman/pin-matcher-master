// ========================= function  of  pin generate ===============

let formGenerate = document.getElementById('generate-form');
document.getElementById('generate-pin').addEventListener('click', function() {
    let generateFrom = parseInt(formGenerate.value);
    let randomNumber = Math.round(Math.random() * 9000 + 1000);
    formGenerate.value = randomNumber;

})

// =======================function of calculator end number key ===================

const calculateForm = document.getElementById('calculate-form')
const calculateNumber = document.getElementsByClassName('number');
let inputValue = '';
for (item of calculateNumber) {
    item.addEventListener('click', (e) => {
        let numberText = e.target.innerText;
        console.log('click')
        if (numberText == 'C') {
            inputValue = '';
            calculateForm.value = inputValue;
        } else if (numberText == 'DEL') {
            numberText = calculateForm.value.slice(0, -1);
            inputValue = numberText;
            calculateForm.value = inputValue;
        } else {
            inputValue += numberText;
            calculateForm.value = inputValue;
        }
    })

}


// ===================function of submit button and  pin matched=============

let submit = document.getElementById('submit-button').addEventListener('click', function() {
    console.log('yes')

    if (formGenerate.value === calculateForm.value) {
        document.getElementById('pin-match').style.display = "block";
        document.getElementById('pin-not-match').style.display = "none";
    } else if (formGenerate.value != calculateForm.value) {
        document.getElementById('pin-not-match').style.display = "block";
        document.getElementById('pin-match').style.display = "none";
        var tryAgain = document.getElementById('try-again').innerText--;
        if (tryAgain == 1) {
            document.getElementById('submit-button').style.display = "none"
            alert('please waite 30 second');

        }

    }
});