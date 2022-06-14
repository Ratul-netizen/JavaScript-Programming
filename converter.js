// function kiloConvert(value) {
//     document.getElementById("Pounds").innerHTML =
//         value * 2.2046;
//     document.getElementById("Ounces").innerHTML =
//         value * 35.274;
//     document.getElementById("Grams").innerHTML =
//         value * 1000;
//     document.getElementById("Stones").innerHTML =
//         value * 0.1574;
// }

document.body.style.textAlign = 'center';
var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;
function myResult(){

  inputTypeValue = inputType.value;
  resultTypeValue = resultType.value;
 
  if(inputTypeValue === "pound" && resultTypeValue === "kilo"){

    result.value = Number(input.value)*0.453;

  }else if(inputTypeValue === "kilo" && resultTypeValue === "pound"){

    result.value = Number(input.value)*2.205;

  }
  
}