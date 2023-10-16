let settings = document.querySelector(".settingsSec");
let display = document.querySelector(".display");
let compemmoji = document.querySelector(".compemoji");

document
  .querySelector(".rock")
  .addEventListener("click", () => playGame("rock"));
document
  .querySelector(".paper")
  .addEventListener("click", () => playGame("paper"));
document
  .querySelector(".scissors")
  .addEventListener("click", () => playGame("scissors"));

function playGame(userInp) {
  let random = parseInt(Math.random() * 3);
  let outcomes = ["rock", "paper", "scissors"];
  let emoji = ["✊", "👋", "✌️"];
  let compInput = outcomes[random];
  let compEmoji = emoji[random];
  compemmoji.innerHTML = compEmoji;
  if (compInput == userInp) {
    display.innerHTML = `DRAW computer choose ${compInput}`;
  } else if (
    (compInput == "rock" && userInp == "paper") ||
    (compInput == "scissors" && userInp == "rock") ||
    (compInput == "paper" && userInp == "scissors")
  ) {
    display.innerHTML = `You win computer choose ${compInput}`;
  } else {
    display.innerHTML = `Comp win computer choose ${compInput}`;
  }
  display.style.fontSize = "3rem";
  settings.style.display = "none";
}
