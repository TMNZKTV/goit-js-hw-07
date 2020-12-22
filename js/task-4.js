const decreaseBtnRef = counter.firstElementChild;
const increaseBtnRef = counter.lastElementChild;

const valueRef = document.querySelector('#value');
let counterValue = Number(valueRef.textContent);

decreaseBtnRef.addEventListener('click', () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});

increaseBtnRef.addEventListener('click', () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});

// Обратимся к кнопкам плюса и минуса посредством elem.first/lastElementChild

// Обратимся к спану посредством querySelector

// Создадим переменную counterValue, которая будет равна значению, полученному из value.textContent, преобрразованного в число

// Повесив слушателя на кнопку Минус, укажем коллбэк функции следующее:
// 1. Прибавить значение counterValue на 1
// 2. Записать в value.textContent значение counterValue

// Повесив слушателя на кнопку Плюс, укажем коллбэк функции следующее:
// 1. Уменьшить значение counterValue на 1
// 2. Записать в value.textContent значение counterValue
// ================
