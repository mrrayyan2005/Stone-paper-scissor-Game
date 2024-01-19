let select=document.querySelectorAll(".select");
let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissor=document.querySelector("#scissor");
let foot=document.querySelector(".foot");
let sc1=document.querySelector(".sc1");
let sc2=document.querySelector(".sc2");
let you=0;
let oth=0;
let arr = ["rock", "scissor", "paper"];
let com = (arr) => {
    return Math.floor(Math.random() * arr.length);
}
let choose=(event)=>{
    let final=event.target.getAttribute("id");
    let ans=arr[com(arr)];
    console.log(final,ans);
    game(final,ans);
}
for(let i=0;i<=2;i++){
    select[i].addEventListener("click",choose);
}
let i=0;
function game(final,ans){
    if(final==ans){
        foot.innerText=`It's a draw ${++i}times`;
    }else if(final=="rock" && ans=="paper"){
        foot.innerText="You won,Computer choose paper";
        sc1.innerText=String(++you);
    }else if(final=="rock" && ans=="scissor"){
        foot.innerText="You lost,Computer choose scissor";
        sc2.innerText=String(++oth);
    }
    else if(final=="paper" && ans=="rock"){
        foot.innerText="You won,Computer choose rock";
        sc1.innerText=String(++you);
    }else if(final=="paper" && ans=="scissor"){
        foot.innerText="You lost,Computer choose scissor";
        sc2.innerText=String(++oth);
    }else if(final=="scissor" && ans=="rock"){
        foot.innerText="You lost,Computer choose rock";
        sc2.innerText=String(++oth);
    }
    else if(final=="scissor" && ans=="paper"){
        foot.innerText="You won,Computer choose paper";
        sc1.innerText=String(++you);
    }
    return;
}
