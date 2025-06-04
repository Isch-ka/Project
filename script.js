// Объект с шутками по категориям
const jokes = {
 "анекдоты": [
     "— Доктор, у меня проблема: я забываю все, что было вчера. — Ну и что, это серьёзно? — Не знаю, я всё забыл.",
     "Почему программисты любят кофе? Потому что он — Java.",
     "Встречаются два программиста. Один говорит: 'Я — циклический', а второй отвечает: 'Я — бесконечный'."
 ],
 "игры слов": [
     "Я люблю есть батарейки, потому что они заряжают мой день.",
     "Почему книга по математике грустная? Потому что у неё много проблем.",
     "Что делает компьютер в ванной? Водяное охлаждение."
 ],
 "стандартные": [
     "Почему утки не делятся секретами? Потому что у них клюв закрыт.",
     "Что сказали ноль девяти? Впечатляюще!",
     "Почему велосипед не стоит? Потому что у него две шины."
 ]
};

// Функция получения случайной шутки из выбранной категории
function getJokeByCategory(category) {
 if (jokes.hasOwnProperty(category)) {
     const jokesArray = jokes[category];
     const randomIndex = Math.floor(Math.random() * jokesArray.length);
     return jokesArray[randomIndex];
 } else {
     return "Выберите категорию для шутки.";
 }
}

// Обработчик для кнопки "Показать шутку"
document.getElementById('showJokeBtn').addEventListener('click', () => {
 alert("Добро пожаловать! Нажмите 'Получить шутку' для случайной шутки или выберите категорию.");
});

// Обработчик для кнопки "Получить шутку"
document.getElementById('getJokeBtn').addEventListener('click', () => {
 const select = document.getElementById('categorySelect');
 const category = select.value;

 // Проверка выбранной категории
 if (category === "") {
     if (confirm("Вы не выбрали категорию. Хотите услышать случайную шутку?")) {
         const joke = getJokeByCategory('анекдоты'); // по умолчанию анекдоты
         document.getElementById('jokeDisplay').textContent = joke;
     } else {
         alert("Пожалуйста, выберите категорию для получения шутки.");
     }
 } else {
     // Проверка наличия категории в объекте jokes
     let categoryFound = false;
     for (let key in jokes) {
         if (key === category) {
             categoryFound = true;
             break;
         }
     }
     if (categoryFound) {
         const joke = getJokeByCategory(category);
         document.getElementById('jokeDisplay').textContent = joke;
     } else {
         alert("Такой категории нет. Попробуйте выбрать другую.");
     }
 }

 // Показываем количество шуток в выбранной категории
 const jokesCount = jokes[category] ? jokes[category].length : 0;
 alert(`В выбранной категории ${jokesCount} шуток(и).`);
});

// Функция приветствия пользователя
function greetUser() {
 const name = prompt("Введите ваше имя:");
 if (name) {
     alert(`Привет, ${name}! Готов посмеяться?`);
 } else {
     alert("Вы не ввели имя.");
 }
}

// Вызов greetUser при загрузке страницы
window.onload = () => {
 greetUser();
};
