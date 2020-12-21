const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// ================ РЕШЕНИЕ ПОСЛЕ КОММЕНТАРИЕВ МЕНТОРА
const createItem = (image) => {
  const itemRef = document.createElement('li');
  itemRef.classList.add('gallery__item');
  itemRef.insertAdjacentHTML(
    'afterbegin',
    `<img src=${image.url} alt=${image.alt} class="img">`,
  );
  return itemRef;
};

const listRef = images.map((image) => createItem(image));

const galleryRef = document.querySelector('#gallery');
galleryRef.append(...listRef);

// Как и в задаче #2 внутри цикла нельзя обращаться к ДОМ-дереву
// Вместо этого была создана функция, создающая элемент li и вставляющая внутрь img посредством insertAdjacent
// Затем, создаем массив, который будет хранить в себе все объекты, полученные из первой функции
// Наконец, обращаемся к существующему элементу и распыляем внутрь него имеющийся массив
// ================

// ================ РЕШЕНИЕ ИЗ ОБЩЕГО ЧАТА

// const galleryRef = document.querySelector('#gallery');
// galleryRef.classList.add('gallery');
// const imageGallery = images.map((image) => {
//   const item = document.createElement('li');
//   item.classList.add('gallery__item');
//   item.insertAdjacentHTML(
//     'afterbegin',
//     `<img src = ${image.url} alt = '${image.alt}' class = "img">`,
//   );
//   return item;
// });

// galleryRef.append(...imageGallery);
// ===============

// =============== FOR EACH METHOD
// =============== ОШИБКА: ВНУТРИ ЦИКЛА НЕЛЬЗЯ ОБРАЩАТЬСЯ К DOM-ДЕРЕВУ!

// images.forEach((image) => {
//   const itemRef = document.createElement('li');
//   itemRef.classList.add('gallery__item');
//   itemRef.insertAdjacentHTML(
//     'afterbegin',
//     `<img src = ${image.url} alt = "${image.alt}" class = "img">`,
//   );

//   const galleryRef = document.querySelector('#gallery');
//   galleryRef.classList.add('gallery');
//   galleryRef.append(itemRef);
// });

// Проходимся по массиву images методом forEach (итерируется каждый image)
// На каждой из итераций создается элемент 'li', ему добавляется класс для дальнейшей стилизации
// Внутрь элемента 'li' добавляется элемент 'img' посредством InsertAdjacentHTML
// Внутри метода указываем место - afterbegin, т.е. внутри элемента 'li'
// Далее строчно указываем что должно быть добавлено - тэг 'img' с аттрибутами 'src', 'alt' и 'сlass'

// Так же на каждой из итераций находится элемент в существующем документе посредством querySelector
// Ему задается класс для дальнейшей стилизации
// В найденный элемент добавляется элемент 'li' посредством append-метода
// ===============
