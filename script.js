//create bubbles
let bubbleArea = document.querySelector(".bubble-area")
for(let i=0;i<183;i++)
{   
    let rn =`${Math.floor(Math.random()*10)}`
    let newBubble = document.createElement("div")
    newBubble.classList.add("bubble")
    newBubble.innerText = rn;
    bubbleArea.appendChild(newBubble);
}


//time running function 

function timer()
{
    let timeBox = document.querySelector(".time-box")
    let count = 60;
     let start = setInterval(()=>{
        timeBox.innerText = count;
         
         if(count<=0)
         {
            clearInterval(start);
            bubbleArea.innerHTML = `<h2>Time Out </h2>`
         }
         count--;
        },1000);
        
}
timer();


//hit option 
let rn = Math.floor(Math.random()*10)
function hitNum()
{   
    let hitBox = document.querySelector(".hit-box")
    hitBox.innerText = rn;
}
hitNum();

//score
function scorePlus()
{
    let scoreBox = document.querySelector("score-box")
    
}
