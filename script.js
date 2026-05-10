const decrementBtn = document.querySelector(".decrement-btn");
const incrementBtn = document.querySelector(".increment-btn");
const quantityEl = document.querySelector(".current-quantity");

const cartContainer = document.querySelector(".cart-container");
const cartBtn = document.querySelector(".add-cart-button");

let quantity = 0;
let price = 125.00;
let total = 0;

decrementBtn.addEventListener("click", () => {
    console.log("Successfully decremented!");

    if (quantity > 0) {
        quantity--;
        quantityEl.innerText = quantity;

        if (quantity === 0) {
            cartContainer.innerHTML =
            `
                <p class="cart-menu-message">Your cart is empty.</p>
            `;
        }
    }
});

incrementBtn.addEventListener("click", () => {
    console.log("Successfully incremented!");

    if (quantity < 99) {
        quantity++;
        quantityEl.innerText = quantity;
    }
});

cartBtn.addEventListener("click", () => {
    console.log("Successfully clicked cart button!");
    total = price * quantity;

    cartContainer.innerHTML = 
    `
        <div style="width: 100%; display: flex; flex-direction: column; gap: 1.5rem;">
            <section style="display: flex; justify-content: space-between; align-items: center;">
                <div style="width: 50px; height: 50px;">
                    <img style="width: 100%; border-radius: 5px;" src="./images/image-product-1-thumbnail.jpg" alt="" />
                </div>
                <div>
                    <p style="font-weight: normal; color: gray;">Fall Limited Edition Sneakers</p>
                    <div style="display: flex; gap: .5rem;">
                        <p style="font-weight: normal; color: gray;">$125.00 x ${quantity}</p> 
                        <p>$${total}.00</p>
                    </div>
                </div>
                <div style="width: 20px; height: 20px;">
                    <img src="./images/icon-delete.svg" alt="" />
                </div>
            </section>
            <button style="display: flex; justify-content: center; align-items: center; font-size: medium; font-weight: bold; width: 100%; background-color: hsl(26, 100%, 55%); border: none; border-radius: 10px; padding: 1rem;">
                Checkout
            </button>
        </div>
    `;
});