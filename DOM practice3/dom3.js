// task1

let form=document.getElementById("user-form");
let displayName=document.getElementById("display-name");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let username =document.getElementById("username-input").value;
displayName.textContent= username;
})

// TASK2

let buttons= document.querySelectorAll(".delete-btn");
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        let listItem=button.target.parentElement;
        listItem.remove();
    });
})

// task3

let container=document.getElementById("container-box");
console.log(container.children.length);
let button =document.getElementById("color-parent-btn");
button.addEventListener("click",(e)=>{
    e.target.parentElement.style.backgroundColor="lightblue";
});
    


