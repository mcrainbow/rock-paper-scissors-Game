"use strict";

const images = document.querySelectorAll(".item__img");
const userImg = document.querySelector(".img-left");
const CPUImg = document.querySelector(".img-right");
const gameTitle = document.querySelector(".game__title");
let userChoice = "";
let cpuChoice = 0;

const userImgChange = (imgName) => {
  userImg.src = `./images/${imgName}.png`;
};

const cpuImgChange = (imgName) => {
  CPUImg.src = `./images/${imgName}.png`;
};
const getCPUChoice = () => {
  cpuChoice = Math.floor(Math.random() * (4 - 1) + 1);
  if (cpuChoice === 1) {
    cpuChoice = "rock";
    return cpuChoice;
  } else if (cpuChoice === 2) {
    cpuChoice = "paper";
    return cpuChoice;
  } else {
    cpuChoice = "scissors";
    return cpuChoice;
  }
};

const determiningWinner = (userChoice, cpuChoice) => {
  console.log(userChoice, cpuChoice);
  let result = "";

  if (userChoice === "rock" && cpuChoice === "rock") {
    result = "Game Draw";
  } else if (userChoice === "rock" && cpuChoice === "paper") {
    result = "CPU Won";
  } else if (userChoice === "rock" && cpuChoice === "scissors") {
    result = "User Won";
  } else if (userChoice === "paper" && cpuChoice === "paper") {
    result = "Game Draw";
  } else if (userChoice === "paper" && cpuChoice === "rock") {
    result = "User Won";
  } else if (userChoice === "paper" && cpuChoice === "scissors") {
    result = "CPU Won";
  } else if (userChoice === "scissors" && cpuChoice === "scissors") {
    result = "Game Draw";
  } else if (userChoice === "scissors" && cpuChoice === "rock") {
    result = "CPU Won";
  } else if (userChoice === "scissors" && cpuChoice === "paper") {
    result = "User Won";
  }

  gameTitle.textContent = result;
};

images.forEach((img) => {
  img.addEventListener("click", () => {
    setTimeout(() => {
      userChoice = img.alt.toLowerCase();
      userImgChange(userChoice);
      cpuImgChange(getCPUChoice());
      determiningWinner(userChoice, cpuChoice);
    }, 500);
  });
});
