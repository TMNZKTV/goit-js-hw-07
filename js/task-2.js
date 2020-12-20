const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// ============ FOR EACH METHOD

ingredients.forEach((ingredient) => {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingredient;

  const itemListRef = document.querySelector('#ingredients');
  itemListRef.append(itemRef);
});

// Проходимся по массиву ingredients методом forEach (итерируется каждый ingredient)
// На каждой из итераций в памяти создается элемент 'li', которому задается textContent, равный самому ingredient
// Так же находится элемент по querySelector
// В этот элемент добавляется элемент 'li' посредством метода append

// ================ МЕТОД РЕПЕТЫ
// const createItem = (ingredient) => {
//   const itemRef = document.createElement('li');
//   itemRef.textContent = ingredient;
//   return itemRef;
// };

// const ingredientItems = ingredients.map((ingredient) => createItem(ingredient));
// // console.log(ingredientItems);

// const listRef = document.querySelector('#ingredients');
// listRef.append(...ingredientItems);
// console.log(listRef);
