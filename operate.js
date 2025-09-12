let inputBox = document.getElementById("inputbox") ;
let buttons =document.querySelectorAll("button") ;
let string = ' ' ;

buttons.forEach(element => {
    element.addEventListener("click" , (b) => {
        console.log(b); 

        if(b.target.innerText == '='){
            string =  String(eval(string))
            inputBox.value = string ;
        }

    })
})