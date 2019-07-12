var response =
  [
    {
      "finished": true,
      "started": true,
      "title": "СГУПС"
    },
    {
      "finished": false,
      "started": true,
      "title": "RPO"
    },
    {
      "finished": false,
      "started": false,
      "title": "Новый год"
    },
  ]

const renderGame = game => {
  let element = "";
  if (game.started == true) {
    if (game.finished == true)
      element = 
        `<div class="game">
          <h3 class="end">${game.title}</h3>
          <h3 class="looker" href="Games.html"/">посмотреть</h3>
        </div>`;
    else element = `
      <div class="game">
        <h3 class="start">${game.title}</h3>
        <h3 class="looker" href="Games.html"/">посмотреть</h3>
      </div>`;
  }
  else {element = `
    <div class="game">
      <h3>${game.title}</h3>
      <h3 class="looker" href="Games.html"/">посмотреть</h3>
    </div>`};

return element;
};



// const renderGame = game => `
//   <div class="game">
//     <h3>${game.title}</h3>
//     <h3 class="looker" href="../Games.html"/">посмотреть</h3>
//   </div>`;

const renderEndedGame = game => `
  <div class="game">
    <h3 class="end">${game.title}</h3>
    <h3 class="looker" href="../Games.html">посмотреть</h3>
  </div>`;

const renderStartedGame = game => `
  <div class="game">
    <h3 class="start">${game.title}</h3>
    <h3 class="looker" href="../Games.html">посмотреть</h3>
  </div>`;

function getAllGames() {
  document.getElementById("gameList").innerHTML += response.map(renderGame).join("");

  // response.forEach(element => {
  //   if (element.started == true) {
  //     if (element.finished == true)
  //       document.getElementById("gameList").innerHTML += response.map(renderEndedGame).join("");
  //     else document.getElementById("gameList").innerHTML += response.map(renderStartedGame).join("");
  //   }
  //   else document.getElementById("gameList").innerHTML += response.map(renderGame).join("");
  // });
};

getAllGames();

function sendForm(e) {
  document.location.href = "Game.html";
  // fakeWork();
};

var sendButton = document.getElementsByClassName("looker");
// sendButton.forEach(element => {
//   element.addEventListener("click", sendForm);
// });

for (var i = 0; i < sendButton.length; i++)
{
  sendButton[i].addEventListener("click", sendForm);
}