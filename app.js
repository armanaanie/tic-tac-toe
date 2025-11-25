let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let clk_count = 0;


let turn0 = true;
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];



const resetGame=()=>{
    turn0=true;
    clk_count = 0;
    enableBoxes();
    msgContainer.classList.add("hide")
}
boxes.forEach((box) =>{
box.addEventListener("click",()=>{
   
    if(turn0){
        box.innerText="0";
        turn0=false;
        box.style.color="rgb(61, 30, 45)"
    }else{
        box.innerText="x";
        turn0=true;
    }box.disabled=true;
    checkWinner();
    clk_count++;
    if(clk_count === 9) {
         msg.innerText = "Draw";
         msgContainer.classList.remove("hide");
    }
}
)
});
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}
const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}
const checkWinner=() =>{
    for (pattern of winPatterns){        
    let pos1Val = boxes[pattern[0]].innerText;let pos2Val = boxes[pattern[1]].innerText;let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
        if (pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
                disableBoxes();
            
        }
    }
}}
  newGamebtn.addEventListener("click",resetGame);

  resetBtn.addEventListener("click",resetGame)
