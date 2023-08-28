//Add Friend And Remove Friend With same Button
let btn = document.querySelector("#add");
let isValue = document.querySelector("h1");

let temp  = 0;
btn.addEventListener("click",
function(){
    if(temp == 0){
        isValue.innerHTML = "Friends";
        isValue.style.color = "Green";
        btn.innerHTML = "Remove Friend";
        temp = 1;
    }else{
        isValue.innerHTML = "Stranger";
        isValue.style.color = "red";
        btn.innerHTML = "Add Friend";
        temp = 0;
    }
    
})

