const inputRef = document.querySelector('#validation-input');

// ================ РЕШЕНИЕ ПОСЛЕ КОММЕНТАРИЕВ МЕНТОРА

inputRef.addEventListener('change', (event) => {
  inputRef.classList.remove('valid', 'invalid');
  if (event.target.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.add('invalid');
  }
});

// Обратимся к форму через селектор
// Повешаем на форму слушателя событий по изменению (change)
// Зададим команду убрать класс 'valid', 'invalid'
// Зададим проверку: если длина введенных символов равна числовому значению атрибута "длина",
// следует добавить класс 'valid'
// В противном случае добавить класс 'invalid'
// ================

// ================ РЕШЕНИЕ #1
// ================ ОШИБКА: ИЗБЫТОЧНАЯ ЛОГИКА
// inputRef.addEventListener('change', (event) => {
//   event.target.value.length === Number(inputRef.dataset.length)
//     ? inputRef.classList.add('valid')
//     : inputRef.classList.add('invalid');

//   if (
//     inputRef.classList.contains('valid') &&
//     event.target.value.length !== Number(inputRef.dataset.length)
//   ) {
//     inputRef.classList.remove('valid');
//     inputRef.classList.add('invalid');
//   } else if (
//     inputRef.classList.contains('invalid') &&
//     event.target.value.length === Number(inputRef.dataset.length)
//   ) {
//     inputRef.classList.remove('invalid');
//     inputRef.classList.add('valid');
//   }
// });

// Обратимся к форму через селектор
// Повешаем на форму слушателя событий по изменению (change)

// В коллбэке говорим, что если длина введеного сообщения в поле равна длине, указанной в атрибуте поля,
// значит поле принимает класс "valid"
// в противном случае - "invalid"

// ПОДСКАЗКА ГАЛИ:
// Указываем дополнительную проверку
// Если есть класс, но условие не совпадает - снимаем имеющийся класс и добавляем противоположный
// ================
