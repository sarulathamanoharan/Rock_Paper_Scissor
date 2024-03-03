let SCORE = 0;
let BOTSCORE = 0;
//picking the hand
const userHand = function (hand) {
  //hiding the  current page
  let main = document.querySelector(".main");
  main.style.display = "none";

  //displays next page while picking the hand
  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  //user picked one
  //one way using if else method
  if (hand == "rock") {
    document.getElementById("userpicked").src = "/assets/Rock.png";
  } else if (hand == "paper") {
    document.getElementById("userpicked").src = "/assets/Paper.png";
  } else if (hand == "scissor") {
    document.getElementById("userpicked").src = "/assets/Scissors.png";
  }
  //another way using dictionary method
  // document.getElementById("userpicked").src = handOptions(hand);

  let computerHand = botHand();
  results(hand, computerHand);
};

//Bot picked one
const botHand = () => {
  let computer = ["rock", "paper", "scissor"];
  // console.log(computer[1]);

  // The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1(0 to 0.9)
  // The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number. If 5.95 = 5,5=5,5.05=5
  let computerHand = computer[Math.floor(Math.random() * 3)];

  // showing computer picked one
  //one way using if else method
  if (computerHand == "rock") {
    document.getElementById("botpicked").src = "/assets/Rock.png";
  } else if (computerHand == "paper") {
    document.getElementById("botpicked").src = "/assets/Paper.png";
  } else if (computerHand == "scissor") {
    document.getElementById("botpicked").src = "/assets/Scissors.png";
  }
  //another way using dictionary method
  // document.getElementById("botpicked").src = handOptions(computerHand);

  return computerHand;
};

//showing result
const results = (user, bot) => {
  if (user == "paper" && bot == "scissor") {
    setDecision("YOU LOSE!");
    setBotScore(BOTSCORE + 1);
    loseAudio();
  }
  if (user == "paper" && bot == "rock") {
    setDecision("YOU WIN!");
    setMyScore(SCORE + 1);
    showAnimation();
    winAudio();
  }
  if (user == "paper" && bot == "paper") {
    setDecision("It's a tie!");
    tieAudio();
  }
  if (user == "rock" && bot == "scissor") {
    setDecision("YOU WIN!");
    setMyScore(SCORE + 1);
    showAnimation();
    winAudio();
  }
  if (user == "rock" && bot == "paper") {
    setDecision("YOU LOSE!");
    setBotScore(BOTSCORE + 1);
    loseAudio();
  }
  if (user == "rock" && bot == "rock") {
    setDecision("It's a tie!");
    tieAudio();
  }
  if (user == "scissor" && bot == "scissor") {
    setDecision("It's a tie!");
    tieAudio();
  }
  if (user == "scissor" && bot == "rock") {
    setDecision("YOU LOSE!");
    setBotScore(BOTSCORE + 1);
    loseAudio();
  }
  if (user == "scissor" && bot == "paper") {
    setDecision("YOU WIN!");
    setMyScore(SCORE + 1);
    showAnimation();
    winAudio();
  }
};
//playagain button function
const restart = () => {
  //displays next page while picking the hand
  let main = document.querySelector(".main");
  main.style.display = "flex";

  //hiding the  current page
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let canvas = document.querySelector(".confetti");
  canvas.style.display = "none";
};

//showing the decision based on results
const setDecision = (decision) => {
  // console.log(decision);
  document.querySelector(".announcement h1").innerText = decision;
};

//getting my score
const setMyScore = (score) => {
  // console.log(score);
  SCORE = score;
  document.querySelector(".score h1").innerText = score;
};

//getting bot score
const setBotScore = (botscore) => {
  BOTSCORE = botscore;
  document.querySelector(".botscore h1").innerText = botscore;
};

//rules button
function togglePopup() {
  document.getElementById("model").classList.toggle("active");
}

//Winning Confetti
const showAnimation = () => {
  let canvas = document.querySelector(".confetti");
  canvas.style.display = "block";
};

// Audio
const audio = new Audio();
audio.src = "/assets/audio/single-classic-click.wav";

//button audio
const pressbutton = () => {
  const audio = new Audio();
  audio.src = "/assets/audio/Mario.mp3";
  audio.play();
};

//result audio
const winAudio = () => {
  const audio = new Audio();
  audio.src = "/assets/audio/Game-Win.mp3";
  audio.play();
};
const tieAudio = () => {
  const audio = new Audio();
  audio.src = "/assets/audio/Game-Tie.mp3";
  audio.play();
};
const loseAudio = () => {
  const audio = new Audio();
  audio.src = "/assets/audio/Game-Over.mp3";
  audio.play();
};

//creating dictionary

// const handOptions = {
//   rock: "/assets/Rock.png",
//   paper: "/assets/Paper.png",
//   scissor: "/assets/Scissors.png",
// };
