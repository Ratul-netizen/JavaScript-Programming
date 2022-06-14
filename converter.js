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

document.body.style.textAlign='center'
const btn = document.querySelector(".btn");
const input = document.querySelector("input");
const conversion = document.querySelector("#conversion");
const span = document.querySelector("span");

btn.addEventListener("click",()=>{
    let hello = conversion.selectedIndex;
    let hello2 = input.value;
    convert(hello,hello2);
})

const convert = (hello,hello2) =>{
    if(hello==0){
        let lb = hello2;
        let kg = parseFloat(lb) * 0.4536;
        span.innerHTML = `${kg}`;        
    }
    else{
        let kg = hello2;
        let lb = parseFloat(kg) * 2.2046;
        span.innerHTML = `${lb}`;        
    }   
}