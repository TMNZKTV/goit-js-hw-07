const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

rangeRef.addEventListener('input', (event) => {
  textRef.setAttribute('style', `font-size: ${event.target.value}px`);
});

// Обращаемся к инпуту через селектор
// Обращаемся к спану через селектор

// Вешаем на ползунок слушатель события по изменению
// В коллбэке указываем создать атрибут style у спана, и присвоить ему значение, переданное в шаблонное строке
// Не забываем добавить px
