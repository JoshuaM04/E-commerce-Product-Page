const decrementBtn = document.querySelector(".decrement-btn");
const incrementBtn = document.querySelector(".increment-btn");
const quantityEl = document.querySelector(".current-quantity");

const cartBtn = document.querySelector(".add-cart-button");

let quantity = 0;

decrementBtn.addEventListener("click", () => {
    console.log("Successfully decremented!");

    if (!(quantity <= 0)) {
        quantity--;
        quantityEl.innerText = quantity;
    }
});

incrementBtn.addEventListener("click", () => {
    console.log("Successfully incremented!");

    quantity++;

    quantityEl.innerText = quantity;
});

cartBtn.addEventListener("click", () => {
    console.log("Successfully clicked cart button!");
});