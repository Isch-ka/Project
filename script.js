// Когда DOM полностью загружен
document.addEventListener('DOMContentLoaded', () => {
  // Обработка кнопки "Узнать смешной факт" на главной странице
  const funnyBtn = document.getElementById('funnyBtn');
  if (funnyBtn) {
    funnyBtn.addEventListener('click', () => {
      // Массив шуток и фактов
      const facts = [
        "Почему программисты любят кофе? Потому что он помогает им оставаться в цикле!",
        "Что делает разработчик, когда он скучает? Он переходит в режим отладки.",
        "Почему тестировщики не любят рыбу? Потому что она всегда плавает в ошибках.",
        "Как программист сверяет часы? Он использует setTimeout!"
      ];

      // Объект с картинками
      const images = {
        coffee: 'images/кофе.png',
        bug: 'images/баг.png',
        code: 'images/код.png'
      };

      // Функция получения случайного элемента массива
      function getRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      }

      // Вызов функции для получения случайной шутки
      const joke = getRandom(facts);
      alert(`Факт: ${joke}`);

      // Выбор случайной картинки
      const imageKeys = Object.keys(images);
      const randomKey = getRandom(imageKeys);
      const imgSrc = images[randomKey];

      // Открываем новое окно с картинкой
      const imgWindow = window.open();
      imgWindow.document.write(`<h3>Посмотрите на это!</h3>`);
      imgWindow.document.write(`<img src="${imgSrc}" alt="IT шутка" style="max-width:100%;height:auto;">`);
    });
  }

  // Обработка кнопки "Добавить свою шутку" на странице шуток
  const addJokeBtn = document.getElementById('addJokeBtn');
  if (addJokeBtn) {
    addJokeBtn.addEventListener('click', () => {
      // Используем prompt для ввода новой шутки
      const newJoke = prompt('Введите свою IT-шутку:');
      if (newJoke && newJoke.trim() !== '') {
        // Находим список шуток
        const jokeList = document.getElementById('jokeList');
        // Создаем новый элемент списка
        const li = document.createElement('li');
        li.textContent = newJoke;
        // Добавляем в список
        jokeList.appendChild(li);
        // Подтверждение
        alert('Ваша шутка добавлена!');
      } else {
        // Отмена или пустой ввод
        alert('Шутка не добавлена.');
      }
    });
  }

  // Для страницы "О нас" можно добавить интерактивность по желанию
});
