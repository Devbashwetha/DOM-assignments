// task1
let textinput=document.getElementById("chat-input");
let message=document.getElementById("chat-messages");
textinput.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
    let newMessage=document.createElement("li");
    newMessage.textContent=textinput.value;
    message.appendChild(newMessage);
    textinput.value="";
    }
});

// task2
let alertbutton=document.getElementById("alert-btn");
let alertmessage=document.getElementById("alert-msg");
alertbutton.addEventListener("click",()=>{
    alertmessage.style.display="block";
    setTimeout(()=>{
        alertmessage.style.display="none";
    },3000);
});

let startbutton=document.getElementById("start-btn");
let stopbutton=document.getElementById("stop-btn");
let counterdisplay=document.getElementById("counter-display");
let count=0;
let timerId;
startbutton.addEventListener("click",()=>{
    timerId=setInterval(()=>{
        count++;
        counterdisplay.textContent=count;
    },1000);
});

stopbutton.addEventListener("click",()=>{

    clearInterval(timerId);
    timerId=null;

});

// task3
let nameinput=document.getElementById("name-input");
let savebutton=document.getElementById("save-btn");
let greeting=document.getElementById("greeting-name");

        let savedName=localStorage.getItem("savedName");
if(savedName){
    greeting.textContent=savedName;

}

savebutton.addEventListener("click",()=>{
    let name =nameinput.value;
    if(name){
        localStorage.setItem("savedName",name);
        greeting.textContent=name;
    }
}
);

// task4

let delegationlist=document.getElementById("delegation-list");
delegationlist.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("completed");
    }
}   );


