/**
    Author: Tim Supan
    Program: The Odin Project - Foundations
    Date: May 8, 2023
 */

function makeGrid(){
    const body = document.querySelector(".mainBody");

    for (let i = 0; i < 16; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < 16; j++){ 
            const column = document.createElement("div");
            column.classList.add("column");

            column.addEventListener("mouseover", () => {
                column.classList.add("hovered");
            });

            /*column.addEventListener("mouseleave", () => {
                window.setTimeout = 10000;
                column.classList.remove("hovered");
            });*/
            
            row.appendChild(column);
            body.appendChild(row);
        }    
    }
}

function setup(){
    const sqCount = prompt("How many squares per side would you like in the grid?");
    console.log(sqCount);
    clearPrev(); //function to clear all previously made nodes
}


