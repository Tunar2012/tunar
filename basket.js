let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
let itemCount = 1
wishlist.forEach(list => {
    let newCard = `  
        
        <div class="product border rounded d-flex my-2 mx-1 align-items-center justify-content-evenly " style="
        width:45%;
        height:400px;">
            <div class="product header w-50 ">
                <img src="${list.img}" alt="" class='w-100'>
            </div>
            <div class="product body my-4 d-flex flex-column w-50">
                <div class="counter d-flex justify-content-evenly align-items-center">
                      <button class="btn btn-dark text-light minusBtns">-</button>
                 <span class='justSpan'>${itemCount}</span>
                    <button class="btn btn-light plusBtns">+</button>
                </div>
<div class="description p-5">
    <h1 class='nam'>${list.nam1}</h1>
    <p>${list.desc1}</p>
    <h1 class='price'>${list.price1}</h1>
</div>
            </div>
        </div>
    `
    document.querySelector('.productCheckOut').innerHTML += newCard
});



document.querySelector('.bot').addEventListener('click', function () {
    window.location.href = 'shoping.html'
})
let plusBtns = document.querySelectorAll('.plusBtns')
plusBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        let span = this.parentElement.querySelector(".justSpan"); // Get the specific count element
        let currentCount = Number(span.textContent); // Get the current count
        currentCount++; // Increment the count
        span.textContent = currentCount; // Update the count in the DOM
        let priceElement = this.parentElement.parentElement.querySelector(".description").querySelector(".price");

        let originalPrice = priceElement.getAttribute("data-original-price");
        if (!originalPrice) {
            originalPrice = priceElement.textContent.trim(); // Use the current content as the original price
            priceElement.setAttribute("data-original-price", originalPrice); // Store the original price
        }

        // Use the original price for calculations
        let updatedPrice = originalPrice * currentCount;

        console.log(updatedPrice);

        // Update the displayed price
        priceElement.innerHTML = updatedPrice;
    });
});
let minusBtns = document.querySelectorAll('.minusBtns')
minusBtns.forEach(minusBtn => {
    minusBtn.addEventListener('click', function () {
        let span = this.parentElement.querySelector('.justSpan')
        let currentCount = Number(span.textContent); // Get the current count
        currentCount--; // Increment the count
        span.textContent = currentCount; // Update the count in the DOM
        span.innerHTML = currentCount;
        let priceElement = this.parentElement.parentElement.querySelector(".description").querySelector(".price");

        let originalPrice = priceElement.getAttribute("data-original-price");
        if (!originalPrice) {
            originalPrice = priceElement.textContent.trim(); // Use the current content as the original price
            priceElement.setAttribute("data-original-price", originalPrice); // Store the original price
        }
        
        // Use the original price for calculations
        let updatedPrice = originalPrice * currentCount;
        
        // Update the displayed price
        priceElement.innerHTML = updatedPrice;
        if (span.textContent == 0) {

            let nameOfComp = this.parentElement.parentElement.querySelector('.description').querySelector('.nam').textContent
            console.log(nameOfComp);
            let local = JSON.parse(localStorage.getItem('wishlist')) || []
            let uptatedArray = local.filter(item => item.nam1 !== nameOfComp)
            localStorage.setItem('wishlist', JSON.stringify(uptatedArray))
            this.parentElement.parentElement.parentElement.remove()
        }


    })
})
let chekcoutBtn = document.querySelector('.btna')
let totalPrice = 0
for (let index = 0; index < wishlist.length; index++) {
    totalPrice += Number(wishlist[index].price1)
}
console.log(totalPrice);
document.querySelector('.quan').innerHTML = 'Quantity of your bag: ' + wishlist.length
document.querySelector('.total').innerHTML = 'Total price: ' + totalPrice



let cardNumberInput = document.getElementById("cardNumberInput");
let cardNumberInput2 = document.getElementById("cardNumberInput2");

cardNumberInput.oninput = function () {
    let value = cardNumberInput.value.replace(/\s+/g, ""); // Remove all existing spaces
    let formattedValue = value.match(/.{1,4}/g)?.join(" ") || ""; // Add spaces every 4 characters
    cardNumberInput.value = formattedValue; // Update the input value
};
cardNumberInput.addEventListener('change', function () {
    if (cardNumberInput.value.length == 19) {
        cardNumberInput.classList.remove('is-invalid')
        cardNumberInput.classList.add('is-valid')
    }
})
cardNumberInput2.addEventListener('change', function () {
    if (cardNumberInput2.value.length == 3) {
        cardNumberInput2.classList.remove('is-invalid')
        cardNumberInput2.classList.add('is-valid')
    }
})

const expiryInput = document.getElementById("expiry");

expiryInput.addEventListener("change", () => {
    console.log("Selected Expiry Date (YYYY-MM):", expiryInput.value);
});
