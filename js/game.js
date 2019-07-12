// var login;

function sendForm(e) {
    fakeWork();
};

var sendButton = document.getElementById("join");
sendButton.addEventListener("click", sendForm);

var response = {
  "allParticipants": [
    {
      "id": "1",
      "name": "Персифаль"
    },
    {
      "id": "2",
      "name": "Артемида"
    },
    {
      "id": "3",
      "name": "Оля"
    },
    {
      "id": "4",
      "name": "Ольга"
    },
    {
      "id": "5",
      "name": "Маша"
    },
    {
      "id": "6",
      "name": "Кирилл"
    },
    {
      "id": "7",
      "name": "Кот"
    },
    {
      "id": "8",
      "name": "Антон"
    },
    {
      "id": "9",
      "name": "Женя"
    },
    {
      "id": "10",
      "name": "Евгения"
    },
  ]
};

const renderPlayer = player => `
<div>
        <h3 class="player">${player.name}</h3>
</div>
`;

function getAllPlayer() {
  document.getElementById("gameList").innerHTML = response.allParticipants
  .map(renderPlayer)
  .join("");
};

getAllPlayer();

function startGame() {
  document.getElementById("giftDescription").innerHTML = `${response.allParticipants[3].name} желает получить: Что-нибудь красивое, возможно розовенькое, а главное чтобы было новогоднее. Можно реальный кекс )))))`;
};
var fakePlayer = [{"name" : "Виталя"}]

startGame();
// fakeWork();

function fakeWork() {
  document.getElementById("join").hidden = true;
  document.getElementById("gameList").innerHTML += (fakePlayer.map(renderPlayer).join(""));
  document.getElementById("giftSpace").hidden = false;
}