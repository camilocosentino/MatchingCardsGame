function addEventListener(){
    let div = document.querySelector("div");
    div.addEventListener("click", changeColor);
}

function changeColor(ev){
    let div = ev.path[0];
    console.log(div);
    div.classList.add("change-color");
    div.removeEventListener("click", changeColor)
}
addEventListener();