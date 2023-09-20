import { dataText } from "./data.js";

const data = JSON.parse(dataText)
console.log(data);
const cardsList = document.querySelector(".cards")

data.forEach(item => {
  let card = `
    <li class="cards__item">
      <img class="card__img" src=${item.img}>
      <div class="card__text-container">
        <h3 class="card__title">${item.header}</h3>
        <p class="card__text">${item.desc}</p>
        <p class="card__price">${item.price}</p>
      </div>
    </li>
  `;
  cardsList.innerHTML += card;
});

