
//! To add a new item

let parentList = document.getElementById("taskList"); //? This is letting us know that this is the form field. We want to add new 'inputs' in this field
let addTasks = document.querySelector("#addTasks");
addTasks.addEventListener("click",newLine);

function newLine() {
    let add = document.createElement("input") //? We are creating a new input (also known as the parent Element)
    let addTextList = document.createTextNode(""); //? This is our input field. We are going to make it an array because we are going to have multiple items
    add.appendChild(addTextList);
    document.getElementById("taskList").appendChild(add);
    // addTextList.innerText = ""; //? This is where we will add our text
     
    // for ( i = 0; i < itemsNeeded.length; i++) {
    //     itemsNeeded[i] = addTextList[i];
    // }

}


//!To remove an item from the tasklist
const clear = document.getElementById("resetTasks")
clear.addEventListener("click", reset);
function reset() {
   const parentList = document.getElementById("taskList");
   if (parentList.hasChildNodes()) {
    parentList.removeChild(parentList.lastChild);
   }
};

//! Refreshes page to start over

const restart = document.getElementById("restart");
restart.addEventListener("click", refresh);

function refresh() {
    window.location.reload();
}