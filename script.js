
// document selectors
const firstRatio = document.getElementById("firstratio");
const secondRatio = document.getElementById("secondratio");
const lenghtInput = document.getElementById("length_input");
const convert = document.getElementById("submit");
const result = document.getElementById("result");

const showResult = function () {
    // konvertering
    const resultat = Number(lenghtInput.value) * Number(firstRatio.value) / Number(secondRatio.value);
    //displaya 
    if (isNaN(resultat)) { result.innerText = `Fel. Ange siffror i alla rutor.` }
    else {
        result.innerText = `${(resultat).toFixed(3)}cm`
    }

}


convert.addEventListener("click", showResult)

