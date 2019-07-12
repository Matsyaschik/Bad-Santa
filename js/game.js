// var login;

// function sendForm(e) {
//     var nameBox = document.getElementById("nameBox");
//     login = nameBox.value;
//     if (isValid(login)) {
//         alert("Вы ввели недопустимое или уже существующее имя пользователя");
//         e.preventDefault();
//     }
//     else {
//         console.log("Авторизация");

//         // Auth(login);


//         document.location.href = "Games.html";
//     }
// }

// function isValid(string) {
//     if (!string | string.length < 2) {
//         return true;
//     }
//     else {
//         var re = new RegExp('^[а-яА-Яa-zA-Z_0-9ёЁ]*$');
//         if (re.test(string)) {
//             return false;
//         }
//         else {
//             return true;
//         }
//     }
// }

// var sendButton = document.getElementById("click-button");
// sendButton.addEventListener("click", sendForm);

var response = {
  "allParticipants": [
    {
      "id": "1",
      "name": "Ваня"
    },
    {
      "id": "2",
      "name": "Катя"
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