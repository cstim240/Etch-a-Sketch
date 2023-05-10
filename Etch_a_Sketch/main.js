/**
    Author: Tim Supan
    Program: The Odin Project - Foundations
    Date: May 8, 2023
 */

let currentGridCount = 16;

function makeGrid(){
    const mainDiv = document.querySelector(".mainDiv");

    for (let i = 0; i < currentGridCount; i++){
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < currentGridCount; j++){ 
            const column = document.createElement("div");
            column.classList.add("column");

            hoverEffects(column);

            row.appendChild(column);
            mainDiv.appendChild(row);
        }    
    }
}

function setup(){
    let sqCount;
    while (sqCount <= 0 || sqCount > 100 || isNaN(sqCount)){ //when we parse something like 'b', it returns NaN
        sqCount = parseInt(prompt("How many squares per side would you like in the grid (max: 100)?"));
    }

    console.log(sqCount);
    clearPrev(currentGridCount); //function to clear all previously made nodes
    currentGridCount = sqCount;
    makeGrid();
}

function clearPrev(currentGridCount){
    const mainDiv = document.querySelector(".mainDiv");
    const rows = document.querySelectorAll(".row");
    
    for (let i = 0; i < currentGridCount; i++){
        const row = rows[i];
        const columns = document.querySelectorAll(".column"); //querySelectorAll returns a NodeList, get a specific element with a square bracket

        for (let j = 0; j < currentGridCount; j++){
            const column = columns[j];
            row.removeChild(column);
        }
        mainDiv.removeChild(row);
    }
}

function hoverEffects(column){
    column.addEventListener("mouseover", () => {
        column.classList.add("hovered");
    });

    /*column.addEventListener("mouseleave", () => {
                window.setTimeout = 10000;
                column.classList.remove("hovered");
    });*/

    column.addEventListener("click", () => {
        column.classList.add("hovered");
    });
}

function randomColours(){
    
}

function generateRandomColour(){

}

function clearGrid(){
    clearPrev(currentGridCount);
    makeGrid();
}




