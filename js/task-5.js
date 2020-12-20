const inputRef = document.querySelector('#name-input');
console.log(inputRef);

const nameRef = document.querySelector('#name-output');
console.log(nameRef);

inputRef.addEventListener('input', (event) => {
  nameRef.textContent = event.target.value;

  if (event.target.value === '') {
    nameRef.textContent = 'незнакомец';
  }
});

// Обратимся к форме по селектору
// Оратимся к спану с текстом по селектору

// Вешаем на форму слушателя событий, передавая в аргументы 'input' и event как коллбэк

// input = применение изменений в момент наступления этих изменений

// Указываем, что текстовый контент спана равен тому, что записано в поле формы

// Создаем условие, в котором проверяется поле формы.
// Если оно равно пустой строке = текстовый контент спана будет равен "незнакомцу"
