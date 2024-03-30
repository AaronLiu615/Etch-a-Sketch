const container = document.querySelector(".container");
const sizing =  document.querySelector("#sizing");
const reset =  document.querySelector("#reset");

function createBoxes(box){
    container.textContent = ''; 
    for(let i = 0; i < box; i++){
        boxContainer = document.createElement("div");
        boxContainer.classList.add("boxContainer")
        for(let i = 0; i < box; i++){
            boxes = document.createElement("div");
            boxes.classList.add("boxes");
            boxes.addEventListener("mouseover", function(e){
                e.target.style.background = "black";
            })
            boxContainer.appendChild(boxes);
        }
        container.appendChild(boxContainer);
    }
}

sizing.addEventListener("click",() => {
    let numOf = 102;
    while (numOf > 101){
        numOf = prompt("What grid size would you like? (max: 100)");
    }
    createBoxes(numOf);
});

reset.addEventListener("click", () =>{
    createBoxes(16);
});


createBoxes(16);
