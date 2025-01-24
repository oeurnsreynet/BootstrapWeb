const listItem = [
  {
    id: 1,
    imgSrc: "/img/e1.jpg",
    name: "Clothing",
    detail: "Colorful Pattern Shirts",
    discount: 50,
    firstPrice: 200,
    finalPrice: 100,
    currency: "$",
    disMark: "%",
  },
  {
    id: 2,
    imgSrc: "/img/e2.jpg",
    name: "Shirts",
    detail: "Vintage Floral Oil Shirts",
    discount: 10,
    firstPrice: 230,
    finalPrice: 220,
    currency: "$",
    disMark: "%",
  },
  {
    id: 3,
    imgSrc: "/img/e3.jpg",
    name: "Clothing",
    detail: "Colorful Hawaiian Shirts",
    discount: 70,
    firstPrice: 235,
    finalPrice: 123,
    currency: "$",
    disMark: "%",
  },
  {
    id: 4,
    imgSrc: "/img/e4.jpg",
    name: "Shirt",
    detail: "Flowers Sleeve Lapel Shirt",
    discount: 50,
    firstPrice: 70,
    finalPrice: 35,
    currency: "$",
    disMark: "%",
  },
  {
    id: 5,
    imgSrc: "/img/e5.jpg",
    name: "Clothing",
    detail: "Colorful Pattern Shirts",
    discount: 50,
    firstPrice: 200,
    finalPrice: 100,
    currency: "$",
    disMark: "%",
  },
  {
    id: 6,
    imgSrc: "/img/n6.jpg",
    name: "Clothing",
    detail: "Colorful Pattern Shirts",
    discount: 50,
    firstPrice: 200,
    finalPrice: 100,
    currency: "$",
    disMark: "%",
  },
  {
    id: 7,
    imgSrc: "/img/n7.jpg",
    name: "Clothing",
    detail: "Colorful Pattern Shirts",
    discount: 50,
    firstPrice: 200,
    finalPrice: 100,
    currency: "$",
    disMark: "%",
  },
  {
    id: 8,
    imgSrc: "/img/n8.jpg",
    name: "Clothing",
    detail: "Colorful Pattern Shirts",
    discount: 50,
    firstPrice: 200,
    finalPrice: 100,
    currency: "$",
    disMark: "%",
  },
];

$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(".menu").slideToggle();
  });
});
let carts = document.querySelector(".cart");
let shopping = document.querySelector(".btn-atc");
const btnCloseCart = document.querySelector(".btn-close-cart");
let content = document.querySelector(".pro-container");
let cartItem = document.querySelector(".cart-content");
let count_item = document.querySelector(".count-item");
let total_price = document.querySelector(".total-price");

const category = [
  ...new Set(
    listItem.map((item) => {
      return item;
    })
  ),
];
let b = 0;
content.innerHTML = listItem
  .map((i) => {
    return (
      `
        <div class="pro">
            <img src="${i.imgSrc}" alt="">
            <div class="des">
                <span>${i.name}</span>
                <h5>${i.detail}</h5>
                <div class="star">
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <span>${i.discount + i.disMark}</span>
                </div>
                <div class="prod-price">
                    <span class="reduce">${i.firstPrice + i.currency}</span>
                    <span class="price">${i.finalPrice + i.currency}</span>
                </div>
            </div>` +
      "<button onclick='addtocart(" +
      b++ +
      ")'><i class='fa-solid fa-cart-shopping'></i> Add to cart</button>" +
      `</div>`
    );
  })
  .join("");

var cart = [];

addtocart = (a) => {
  const product = category[a];

  // Check if the product is already in the cart
  const existingItem = cart.find((item) => item.name === product.name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  displaycart();

  // Show the custom alert
  const customAlert = document.getElementById("customAlert");
  customAlert.style.display = "block";
};

// Close the custom alert when the button is clicked
document.getElementById("closeAlert").onclick = function () {
  const customAlert = document.getElementById("customAlert");
  customAlert.style.display = "none";
};

delElement = (index) => {
  cart.splice(index, 1);
  displaycart();
};

displaycart = () => {
  let total = 0;
  count_item.innerHTML = cart.reduce((acc, item) => acc + item.quantity, 0);

  if (cart.length == 0) {
    cartItem.innerHTML = "Your cart is empty";
    total_price.innerHTML = "$" + 0;
  } else {
    cartItem.innerHTML = cart
      .map((item, index) => {
        const itemTotal = item.finalPrice * item.quantity;
        total += itemTotal;
        total_price.innerHTML = "$" + total;
        return `
        <div class="cart-item">
          <div class="row-img">
              <img class="rowimg" src="${item.imgSrc}" alt="">
          </div>
          <p>${item.name}</p>
          <p>$${item.finalPrice}</p>
          <p> QTY: ${item.quantity}</p>
          <button class="btn-remove" onclick="delElement(${index})">
              <i class="fa-solid fa-trash"></i> Remove
          </button>
        </div>
        <hr>`; // Optional: add a horizontal rule between items
      })
      .join("");
  }
};

shopping.addEventListener("click", () => {
  carts.classList.add("active-cart");
});
btnCloseCart.onclick = () => {
  carts.classList.remove("active-cart");
};
