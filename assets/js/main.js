window.addEventListener('DOMContentLoaded', () =>
{

  const list = document.querySelector('.section__list');
  const text = document.querySelector('.section__text');
  const buttonForText = document.querySelector('.section__button--js');
  const buttonForList = document.querySelector('.section__button--hover');

  // Сделать так, чтобы при нажатии на кнопку менялся цвет и текст элемента <p>

  let changeTextColor = () =>
  {
    text.classList.toggle('section__text--color')
  }

  buttonForText.addEventListener('click', changeTextColor);

  // Сделать так, чтобы при нажатии на кнопку все элементы списка (тэги ul, li) меняли цвет на активный

  let changeListColor = () =>
  {
    if(!list.classList.contains('section__list--active'))
    {
      list.classList.add('section__list--active')
    } else
    {
      list.classList.remove('section__list--active')
    }
  }

  buttonForList.addEventListener('click', changeListColor);

  // Создать страницу, которая спрашивает имя у пользователя и выводит его с помощью функции.
  let userName = prompt('Как Вас зовут?', '');
  alert(`Приятно познакомиться, ${userName}!`);

  // Перепишите код, используя конструкцию switch-case, запрашивая возраст пользователя через диалоговое окно.
  // let age = 101;

  // if(age == 18) {
  //   alert('Вы совершеннолетний, вс можно!');
  // } else if(age == 10) {
  //   alert('Вам надо чить уроки!');
  // } else if(age == 30) {
  //   alert('Мы не знаем, что Вам делать');
  // }

  let userAge = +prompt('Сколько Вам лет?');

  switch(userAge)
  {
    case 30:
      alert('Вы уже достигли зрелости');
      break;
    case 15:
      alert('Вы еще очень молоды')
      break;
    case 45:
      alert('Мудрости уже не занимать');
      break;
  }
})