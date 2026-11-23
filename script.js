const cartToggle = document.getElementById("cart-toggle");
const cartDrawer = document.getElementById("cart-drawer");
const closeCart = document.getElementById("close-cart");

const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const totalPrice = document.getElementById("total-price");

let cart = [];

const products = [
    { id: 1, name: "گردنبند ظریف", price: 450000 },
    { id: 2, name: "دستبند سنگی", price: 350000 },
    { id: 3, name: "گوشواره مرواریدی", price: 290000 }
];

// باز کردن سبد خرید
cartToggle.addEventListener("click", () => {
    cartDrawer.classList.add("active");
});

// بستن سبد خرید
closeCart.addEventListener("click", () => {
    cartDrawer.classList.remove("active");
});

// اضافه کردن محصول
document.querySelectorAll(".product-card button").forEach((button, index) => {
    button.addEventListener("click", () => {
        const product = products[index];

        cart.push(product);

        updateCart();
    });
});

// به‌روزرسانی سبد خرید
function updateCart() {
    cartCount.textContent = cart.length;

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>سبد خرید شما خالی است.</p>";
    }

    cart.forEach((item, index) => {
        const div = document.createElement("div");

        div.innerHTML = `
            <p>${item.name}</p>
            <span>${item.price.toLocaleString("fa-IR")} تومان</span>
            <button onclick="removeItem(${index})">حذف</button>
            <hr>
        `;

        cartItems.appendChild(div);
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    totalPrice.textContent = total.toLocaleString("fa-IR");
}

// حذف محصول
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}