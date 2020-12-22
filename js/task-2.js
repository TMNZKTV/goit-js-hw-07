const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// ================ РЕШЕНИЕ ПО МЕТОДУ А. РЕПЕТЫ
const createItem = (ingredient) => {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingredient;
  return itemRef;
};

const ingredientItems = ingredients.map((ingredient) => createItem(ingredient));
// console.log(ingredientItems);

const listRef = document.querySelector('#ingredients');
listRef.append(...ingredientItems);
console.log(listRef);

// Создадим функцию, которая будет создавать элемент li на каждый из итерируемых объектов
// Текстовый контент созданных li равен итерируемому элементу

// Создаем массив, в короый будут записываться все объекты, полученные из первой функции

// Наконец, обращаемся к существующему элементу и распыляем внутрь него полученный массив
// ================

// ================ FOR EACH METHOD
// ================ ОШИБКА: НЕЛЬЗЯ В СЧЕТЧИКЕ ОБРАЩАТЬСЯ К DOM-ДЕРЕВУ!

// ingredients.forEach((ingredient) => {
//   const itemRef = document.createElement('li');
//   itemRef.textContent = ingredient;

//   const itemListRef = document.querySelector('#ingredients');
//   itemListRef.append(itemRef);
// });

// Проходимся по массиву ingredients методом forEach (итерируется каждый ingredient)
// На каждой из итераций в памяти создается элемент 'li', которому задается textContent, равный самому ingredient
// Так же находится элемент по querySelector
// В этот элемент добавляется элемент 'li' посредством метода append
// ================
