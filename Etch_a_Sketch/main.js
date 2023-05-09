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

            row.appendChild(column);
            body.appendChild(row);
        }    
    }
}