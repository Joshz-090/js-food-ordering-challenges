
// Check out this site: [https://joshz-090.github.io/food-order-site-to-practice-js/advance.html]    (https://joshz-090.github.io/food-order-site-to-practice-js/advance.html)  
// First, click the **Add** button and try to complete the challenge using JavaScript.  
// After finishing the first task, scroll down to find the **next challenge** and try that one too!


let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const itemElement = button.closest('.item');
        // 2. Get name and price from HTML use getAttribute()


        const existingItem = cart.find(item => item.name === itemName);
        // 3. Add to cart or increase quantity



        // 4. Call updateCart()
    });
});


function updateCart() {
    const cartItemsElement = document.querySelector('.cart-items');
    cartItemsElement.innerHTML = ''; // clear old cart

    let totalPrice = 0;

    cart.forEach((item, index) => {
        // create class name with cart-item div
        // show item.name, item.quantity, item.price
        // create +, -, 🗑️ buttons

        // update total price
        totalPrice += item.price * item.quantity;
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}
