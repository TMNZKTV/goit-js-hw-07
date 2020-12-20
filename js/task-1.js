// РЕШЕНИЕ C ПОМОЩЬЮ ГАЛИ:
// Создадим массив и обратимся ко всем элементам li внутри элемента categories
// Выводим в консоле сообщение, используя шаблонную строку

// На массиве используем метод forEach
// Создаем переменную, значение которой - элемент h2 внутри каждой категории и используем textContent
// Создаем переменную, значение которой - все элементы li внутри каждой категории
// Выводим в консоле сообщение, используя шаблонную строку

const categoriesQuantity = document.querySelectorAll('#categories .item');
console.log(`В списке ${categoriesQuantity.length} категории.`);

categoriesQuantity.forEach((category) => {
  const categoriesName = category.querySelector('h2').textContent;
  const elementsQuantity = category.querySelectorAll('li');
  console.log(
    `Категория: ${categoriesName}\nКоличество элементов: ${elementsQuantity.length}`,
  );
});

// ==================== РЕШЕНИЕ АЛЕКСАНДРА

// const itemsRef = [...document.querySelectorAll('li.item')]; // Создаем массив и распыляем в него все объекты li с классом item
// console.log(`В списке ${itemsRef.length} категории`); // Выводим в консоль сообщение, используя шаблонную строку и метод подстановки значения. Т.к. items - массив, то используем свойство length.

// itemsRef
//   .map((item) => {
//     const titleRef = item.querySelector('h2');
//     const listRef = item.querySelectorAll('ul li');
//     return {
//       title: titleRef.textContent,
//       count: listRef.length,
//     };
//   })
//   .forEach((entry) => {
//     console.log(
//       'Категория: ',
//       entry.title,
//       '\r\nКоличество элементов: ',
//       entry.count,
//     );
//   });

// Используем метод map на массиве Items.
// В нем происходит перебор каждого из элементов массива Items, т.е. каждый Item
// Укажем функции создать две переменные - title и list
// Значение title - объекты в item с селектором 'h2'
// Значение list - объекты в item со всеми селекторами 'ul и li'
// Укажем функции вернуть объект, в котором будут 2 свойства - title и count
// Значение свойства title - текстовый контент объекта title, т.е. тэг <h2>
// Значение свойства count - длинна массива list (все объекты с указанными селекторами)

// На получившийся массив данных используем метод forEach, в котором будет перебираться каждая сущность, т.е. entry
// Укажем функции вернуть сообщение, в котором значением поля "Категории" будет entry.title, т.е. значение свойства title,
// а значением в поле "Кол-во элементов" будет entry.count, т.е. значение свойства count
