const games = document.querySelector('#games-list');
const shoppingCartContent = document.querySelector('#cart-content tbody');
const clearCartBtn = document.querySelector('#clear-cart');
const totalPrice = document.querySelector('#total-price');
var total = 0;

games.addEventListener('click', buygame);
shoppingCartContent.addEventListener('click', removeGame);
clearCartBtn.addEventListener('click', clearCart);

function buygame(e) {
  if (e.target.classList.contains('add-to-cart')) {
    const game = e.target.parentElement.parentElement;

    getGameInfo(game);
  }
}

function getGameInfo(game) {
  const gameInfo = {
    image: game.querySelector('img').src,
    title: game.querySelector('h4').textContent,
    price: game.querySelector('.price span').textContent,
    id: game.querySelector('a').getAttribute('data-id'),
  };
  addIntoCart(gameInfo);
  AddTotal(gameInfo);
}

function addIntoCart(game) {
  const row = document.createElement('tr');
  row.innerHTML = ` 
    <tr>
    <td>
    <img src="${game.image}" width=100>
    </td>
    <td> ${game.title} </td>
    <td> ${game.price} </td>
    <td> <a href ="#" class="remove" data-id="${game.id}">X</a> </td>

    </tr>

    `;
  shoppingCartContent.appendChild(row);
}
function AddTotal(game) {
  total = total + parseFloat(game.price.slice(1));
  totalPrice.textContent = `Total:${total.toFixed(2)}`;
}

function removeGame(e) {
  if (e.target.classList.contains('remove')) {
    e.target.parentElement.parentElement.remove();
    var remained_total = totalPrice.textContent.slice(6);
    var removed_amount =
      e.target.parentElement.previousElementSibling.textContent.slice(2);
    totalPay = remained_total - removed_amount;
    totalPrice.textContent = `Total:${totalPay.toFixed(2)}`;
  }
}

function clearCart(e) {
  shoppingCartContent.innerHTML = '';
  
}
