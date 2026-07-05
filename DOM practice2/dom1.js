// -----------task1------
let theme=document.getElementById("theme-btn");
theme.addEventListener("click",()=>{
    let body = document.querySelector("body");
    body.classList.toggle("dark-mode");
});

let hover=document.getElementById("hover-box");
hover.addEventListener("mouseenter",()=>{
    hover.classList.add("highlight");
});
hover.addEventListener("mouseleave",()=>{
    hover.classList.remove("highlight");
});

// --------task2---------------
let button = document.getElementById("swap-btn");
let image = document.getElementById("profile-pic");
button.addEventListener("click",()=>{
    image.src="https://via.placeholder.com/150/0000FF/808080?Text=New+Image";
    image.alt="New Profile Imagee";
});

let button1 =document.getElementById("disable-btn");
button1.addEventListener("click",()=>{
    button1.disabled=true;
    button1.innertext="button disabled";
});


// ------------------task3--------

let itemlist = document.getElementById("item-list");
let additem = document.getElementById("add-item-btn");
additem.addEventListener("click",()=>{
    let newItem = document.createElement("li");
    newItem.textContent="New dynamically added item";
    itemlist.appendChild(newItem);
});