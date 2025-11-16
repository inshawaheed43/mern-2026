// Char counter 

let inp = document.querySelector("input")
let spn = document.querySelector("span")
inp.addEventListener("input", function(){
    let baqiChar = 30-inp.value.length
    if(baqiChar<0){
        spn.textContent=baqiChar
        spn.style.color="red"
    }
    else{
        spn.textContent=baqiChar
        spn.style.color="green"
    }
})