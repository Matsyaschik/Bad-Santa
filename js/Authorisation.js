var login;

function sendForm(e) {
    var nameBox = document.getElementById("nameBox");
    login = nameBox.value;
    if (isValid(login)) {
        alert("Вы ввели недопустимое или уже существующее имя пользователя");
        e.preventDefault();
    }
    else {
        console.log("Авторизация");

        // Auth(login);


        document.location.href = "Games.html";
    }
}

function isValid(string) {
    if (!string | string.length < 2) {
        return true;
    }
    else {
        var re = new RegExp('^[а-яА-Яa-zA-Z_0-9ёЁ]*$');
        if (re.test(string)) {
            return false;
        }
        else {
            return true;
        }
    }
}

var sendButton = document.getElementById("click-button");
sendButton.addEventListener("click", sendForm);


//Авторизация в системе под уникальным именем
const Auth = function() {
    createRequest({ path: `api/v1/auth/${"Fatcher"}`, method: "GET" })
      .then(response => {
        console.log(response);
        // document.querySelector("#user").innerHTML = response
        //   .map(renderUser)
        //   .join("");
        console.log("Результат запроса пользователей", login);
      })
      .catch(err => {
        // document.querySelector("#user").innerHTML =
        //   "Не удалось получить список пользователей";
        console.log("Ошибка ", err);
      });
  };






 
  // → 200 OK










// // 1. Создаём новый объект XMLHttpRequest
// var xhr = new XMLHttpRequest();

// // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
// xhr.open('GET', 'shift19.herokuapp.com', false);



// // 3. Отсылаем запрос
// xhr.send();

// // 4. Если код ответа сервера не 200, то это ошибка
// if (xhr.status != 200) {
//   // обработать ошибку
//   alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
// } else {
//   // вывести результат
//   alert( xhr.responseText ); // responseText -- текст ответа.
// }

























// Пример получения и вывода списка книг
const renderUser = user => `
<div class="user">
    <div class="user_name">${user.name}</div>
    <div class="user_id">${user.id}</div>
</div>
`;

const getAllUser = function() {
createRequest({ path: "api/user", method: "GET" })
.then(response => {
  document.querySelector("#user").innerHTML = response
    .map(renderUser)
    .join("");
  console.log("Результат запроса пользователей", response);
})
.catch(err => {
  document.querySelector("#user").innerHTML =
    "Не удалось получить список пользователей";
  console.log("Ошибка при получении списка пользователей", err);
});
};

getAllUser();




const renderBook = book => `
<div class="book">
    <div class="book_name">${book.name}</div>
    <div class="book_author">${book.author}</div>
</div>
`;

const getAllBooks = function() {
createRequest({ path: "api/books", method: "GET" })
.then(response => {
  document.querySelector("#books").innerHTML = response
    .map(renderBook)
    .join("");
  console.log("Результат запроса книг", response);
})
.catch(err => {
  document.querySelector("#books").innerHTML =
    "Не удалось получить список книг";
  console.log("Ошибка при получении списка книг", err);
});
};

// getAllBooks();

const getOneBookForm = document.querySelector("#get-one-book");
getOneBookForm.addEventListener("submit", event => {
event.preventDefault();

const data = getFieldData(event.target);

toggleClass(".one-book", "loading");

createRequest({ path: `/api/v001/books/${data.bookId}`, method: "GET" })
.then(response => {
  document.querySelector("#one-book").innerHTML = renderBook(response);
  toggleClass(".one-book", "loading");
  console.log("Данные книги получены", response);
})
.catch(() => {
  document.querySelector("#one-book").innerHTML =
    "Книги с таким id не нашлось :(";
  toggleClass(".one-book", "loading");
  console.log("Не нашли книгу с id=", data.bookId);
});
});

const addBookForm = document.querySelector("#add-book");
addBookForm.addEventListener("submit", event => {
event.preventDefault();

const data = getFieldData(event.target);
console.log("main", "data", data);

toggleClass(".add-book", "loading");

createRequest({ path: `/api/v001/books`, method: "POST" }, {}, data)
.then(response => {
  toggleClass(".add-book", "loading");
  console.log("Книга добавлена", response);
})
.catch(() => {
  toggleClass(".add-book", "loading");
  console.log("Не удалось добавить книгу");
});
});

const userSelector = document.querySelector('.select_control-user');
userSelector.addEventListener('change', event => {
userId = event.target.value;
getAllBooks();
});












//Авторизация в системе под уникальным именем






















































