let gameseq=[];
let userseq=[];
let  btns=["red","yellow","green","purple"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

// step 1
document.addEventListener('keypress',function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelUP();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

// step 2
function levelUP(){
    userseq=[];
    level ++;
    h2.innerText="level "+level;

    let randomIdx=Math.floor(Math.random()*3);
    let randomClr=btns[randomIdx];
    let randombtn=document.querySelector("."+randomClr);
    gameseq.push(randomClr);
    console.log(gameseq);
    gameFlash(randombtn);
}

function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUP(),1000);
        }
    }else{
        h2.innerHTML='Game Over! Your score was <b>'+level+'</b><br> Press any key to start';
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    gameFlash(btn);

    userClr=btn.getAttribute("id");
    userseq.push(userClr);

    checkAns(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener('click',btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}