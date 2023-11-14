// Global Variables
let bubbleArea = document.querySelector(".bubble-area");
let flag = true;
let count;
let hit_num ;
let scoreBox_value =0;

// defalt call 
create_bubble();
timer();
hitNum();

//create bubbles
function create_bubble() {
  for (let i = 0; i < 183; i++) {
    let rn = `${Math.floor(Math.random() * 10)}`;
    let newBubble = document.createElement("div");
    newBubble.classList.add("bubble");
    newBubble.innerText = rn;
    bubbleArea.appendChild(newBubble);
    
  }
}


//time running function

function timer() {
  let timeBox = document.querySelector(".time-box");
   count = 60;
  let start = setInterval(() => {
    timeBox.innerText = count;

    if (count <= 0) {
      clearInterval(start);
      bubbleArea.innerHTML =`  <div class="time-out">
      <h2>Time Out</h2>
      <p>Score : ${scoreBox_value}</p>
      <button class="restart" onclick="restart_function()">Restart</button>
   </div>`
      flag = false;
 
    }
    count--;
  }, 1000);
}


//hit option

function hitNum() {
    hit_num = Math.floor(Math.random() * 10); //vlaue of hit section
    let hitBox = document.querySelector(".hit-box");
  hitBox.innerText = hit_num;
}


//score++

function scorePlus() {
  let scoreBox = document.querySelector(".score-box");
  scoreBox_value = Number(scoreBox.textContent);
  scoreBox_value += 10;
  scoreBox.textContent = scoreBox_value;
}

//When we click on bubbles  ?
bubbleArea.addEventListener("click", (e) => {

  let bubble_value = Number(e.target.textContent);

  if (bubble_value == hit_num) {
    bubbleArea.innerHTML = "";
    scorePlus();
    create_bubble();
    hitNum();

  }
  else{ 
    if(flag==true) //be use flag because after timeout it will stated applying this on next page
    {
      e.target.style.backgroundColor ="red";
      e.currentTarget.style.backgroundColor = "white"
    }

  
  }

});


// when we click on restat button
function restart_function(){
  location.reload();// it will reload the page 
}

// After Timeout 

// let after_timeOut;
// function After_timeOut()
// { 
//   bubbleArea.style.display = "none"
//    after_timeOut = document.querySelector(".after-timeOut")
//   after_timeOut.style.display = "inline"

//   let Lastscore = document.querySelector(".Lastscore");
// Lastscore.innerText =`Score : ${scoreBox_value}`;
// let restartBtn = document.querySelector(".restart")
// restartBtn.addEventListener("click",
// ()=>{
//   scoreBox_value = 0;
//   create_bubble();
//   hitNum();
//   count = 60;
// })
// }
