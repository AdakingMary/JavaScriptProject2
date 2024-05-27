const CART__CONTAINER = document.getElementById("cart__container");
const CART_TOTAL = document.getElementById("cart__total");
const CHECKOUT_BTN = document.getElementById("checkout__btn");

// products array
let PRODUCTS = [
  {
    productId: 1223,
    productImage:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg",
    productTitle: "Casio watch",
    productQuantity: 1,
    productPrice: 20000,
  },

  {
    productId: 1456,
    productImage:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg",
    productTitle: "Casio watch",
    productQuantity: 1,
    productPrice: 50000,
  },

  {
    productId: 1998,
    productImage:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg",
    productTitle: "Casio watch",
    productQuantity: 1,
    productPrice: 70000,
  },
];

// A function to display cart product
const displayCartProducts = (productToDisplay) => {
  let result = [];

  for (let i = 0; i < productToDisplay.length; i++) {
    result.push(`<div class="flex gap-6 border p-3 rounded-md shadow-md">
        <img
          src=${productToDisplay[i].productImage}
          alt="Product image"
          class="W-[200px] h-[200px]"
        />

        <div>
          <h3 class="font-bold">${productToDisplay[i].productTitle} title</h3>
          <p class="text-green-400">N${productToDisplay[i].productPrice}</p>
          <button
                    onclick="deleteItemFromCart(${productToDisplay[i].productId})"
          class="bg-red-600 text-white rounded-lg p-1 text-xs">
            Delete
          </button>
        </div>

        <div class="flex gap-2 items-center">
          <button
          onclick="increaseQuantity(${productToDisplay[i].productId})"
            class="font-semibold text-white bg-green-500 p-[0.2px] rounded-md"
          
          >
            +
          </button>
          <p class="text-gray-400">${productToDisplay[i].productQuantity}</p>
          <button
          onclick="decreaseQuantity(${productToDisplay[i].productId})"
            class="font-semibold text-white bg-red-500 p-[0.2px] rounded-md"
          >
            -
          </button>
        </div>
      </div>`);
  }

  CART__CONTAINER.innerHTML = result.join("");
};

window.addEventListener("DOMContentLoaded", () => {
  displayCartProducts(PRODUCTS);
  calculateCartTotal(PRODUCTS);
});

// A function to increase the quantity of a cart item
function increaseQuantity(productId) {
  PRODUCTS.forEach((item) => {
    if (item.productId === productId) {
      item.productQuantity = item.productQuantity + 1;
    }
  });

  displayCartProducts(PRODUCTS);
  calculateCartTotal(PRODUCTS);
}

// A function to increase the quantity of a cart item
function decreaseQuantity(productId) {
  PRODUCTS.forEach((item) => {
    if (item.productId === productId && item.productQuantity >= 2) {
      item.productQuantity = item.productQuantity - 1;
    }
  });

  displayCartProducts(PRODUCTS);
  calculateCartTotal(PRODUCTS);
}

// A function to calculate the total cost of items

function calculateCartTotal(productToCalculate) {
  let total = 0;
  productToCalculate.forEach((item) => {
    total = total + item.productQuantity * item.productPrice;
  });

  CART_TOTAL.textContent = total;
}

// A function to delete item from our cart
function deleteItemFromCart(productId) {
  let result = [];

  for (let i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].productId !== productId) {
      result.push(PRODUCTS[i]);
    }
  }

  PRODUCTS = result;
  displayCartProducts(PRODUCTS);
  calculateCartTotal(PRODUCTS);
}

function processOrder() {
  console.log(PRODUCTS);
  alert("order successful. Thank you!");
}

CHECKOUT_BTN.addEventListener("click", processOrder);
