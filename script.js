document.querySelector(".playBtn").addEventListener("click", function () {
  


document.querySelector("#bestof").style.display = 'none' ; 

document.querySelector(".label").style.display = 'none' ; 

document.querySelector(".display").innerHTML = 'Choose ROCK, PAPER or SCISSORS' ; 


  let settings = document.querySelector(".settingsSec");
  let display = document.querySelector(".display");
  let compemmoji = document.querySelector(".compemoji");
  var gametrails = 0;

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

    document.querySelector(".playBtn").disabled = true
    
    let random = parseInt(Math.random() * 3);
    let outcomes = ["rock", "paper", "scissors"];
    let emoji = ["✊", "👋", "✌️"];
    let compInput = outcomes[random];
    let compEmoji = emoji[random];
    let trails = parseInt(document.querySelector("#bestof").value);
if(trails == 0 || trails == NaN ){

  display.innerHTML = `best of 0 is not vaild`
  document.querySelector(".playBtn").disabled = true

}
    else if (gametrails < trails) {
      document.querySelector(".playBtn").disabled = false
      gametrails++;
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
      settings.style.display = "";
    } else {
      console.log("no");
    }
  }
});








document.querySelector(".resetBtn").addEventListener("click", function () {

  document.querySelector(".playBtn").disabled = false
  document.querySelector("#bestof").value = 0;
  document.querySelector("#bestof").style.display = '' ; 

  document.querySelector(".label").style.display = '' ; 
  
  document.querySelector(".display").innerHTML = 'START' ; 
  






})