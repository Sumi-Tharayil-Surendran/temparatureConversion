// let inputTemp = parseFloat(document.getElementById("inputTemp").value)
// let temptype =document.getElementById("tempType").value
let result =document.getElementById("result")

let convert = document.getElementById("convert")

function convertTemperature(){
let inputTemp = parseFloat(document.getElementById("inputTemp").value)
let temptype =document.getElementById("tempType").value
    if(temptype==="celcius"){
        let converT =(inputTemp*5/9)*32;
        result.innerHTML = inputTemp + "C="+converT.toFixed(2)+"F";
    }else{
        let converT = (inputTemp-32)*5/9;
        result.innerHTML = inputTemp+ "F="+converT.toFixed(2)+"C"
    }
}


    


convert.addEventListener("click",convertTemperature)