import { dataText } from "./data.js";

const data = JSON.parse(dataText);
const cardsList = document.querySelector(".cards");
const cartContainer = document.querySelector(".cart__list");
const cart = [];

let items = data.reduce((result, item, index) => {
  let el = `
    <li class="card__item" data-item="${index}">
      <div class="card__hover">
        <button class="card__button">Add to card</button>
      </div>
      <img class="card__img" src=${item.img}>
      <div class="card__text-container">
        <h3 class="card__title">${item.header}</h3>
        <p class="card__text">${item.desc}</p>
        <p class="card__price">${item.price}</p>
      </div>
    </li>
  `;
  return result + el;
}, [])

cardsList.innerHTML = items;

// Обработчик клика  по кнопке

cardsList.addEventListener("click", (e) => {
  if(e.target.tagName === "BUTTON") {
    let item = e.target.closest(".card__item");
    let index = item.dataset.item;
    
    let dataItem = data[index];
    cart.push(dataItem);
    renderCart(cart);
  }
})

const renderCart=(cart)=>{
let items = cart.reduce((result, item, index) => {
  let el = `
    <li class="card__item" data-item="${index}">
      <img class="card__img" src=${item.img}>
      <div class="card__text-container">
        <h3 class="card__title">${item.header}</h3>
        <p class="card__price">Price: ${item.price}</p>
        <p class="card__text">Color: ${item.color}</p>
        <p class="card__text">Size: ${item.size}</p>
        <p class="card__text">quantity: ${item.quantity}</p>
      </div>
    </li>
  `;
  return result + el;
}, [])
  
cartContainer.innerHTML = items;
}
