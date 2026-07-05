//  --------- -- task1-----------------
let heading = document.getElementById("main-heading");
console.log(heading.textContent);

let paragraph= document.getElementById("sub-text");
console.log(paragraph.textContent);

let listitems= document.querySelectorAll("#color-list li");

    console.log(listitems.length);

//    ------- task2----------
let paragraph1 = document.getElementById("message");
paragraph1.innerText="Hello from JavaScript!"

let paragraph2 = document.getElementById("info")
paragraph2.innerText="This information has been updated."

//--------- task3---------
let heading1 =document.getElementById("color-box");
heading1.style.color="blue"

let highlightPara = document.getElementById("highlight");
highlightPara.style.backgroundColor="yellow";

let textPara= document.getElementById("text-size");
textPara.style.fontSize="24px";
textPara.style.color="red";