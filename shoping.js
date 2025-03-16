// Load stored data from localStorage
let storage = JSON.parse(localStorage.getItem('array')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

document.querySelector('.basketCount').innerHTML = wishlist.length || 0;

// Corrected array with unique keys and proper property names
let array = [
    {
        nam: "Acer",
        price: 3800,
        email: "tunar@gmail.com",
        img: "https://down-id.img.susercontent.com/file/dd39fbfceba8933808316654d98e4aa8",
        description: "This is Acer Aspire 5",
        size: "RAM",
        state: "Intel i7",
        city: "1TB",
        zipcode: "SSD",
        phone: "Windows",
    },
    {
        nam: "ASUS",
        email: "Beli",
        description: "This is ASUS ZenBook",
        img: "https://www.soliton.az/images/articles/2022/09/05/20220905103919322_6.jpg",
        price: 4000,
        size: "RAM",
        city: "512GB",
        state: "SSD",
        zipcode: "Windows",
        phone: "Intel Iris Xe"
    },
    {
        nam: "Honor",
        email: "Beli",
        description: "This is Honor MagicBook Pro",
        img: "https://www.vopmart.com/media/catalog/product/cache/9ad6741ea5482466e4f028d03a07bbb8/m/r/mra-721-w.jpg",
        price: 2800,
        size: "RAM",
        state: "Intel i5",
        city: "512GB",
        state: "SSD",
        zipcode: "Windows",
        phone: "NVIDIA MX250"
    },
    {
        nam: "HP",
        email: "Beli",
        description: "This is HP Pavilion",
        img: "https://m.economictimes.com/thumb/msid-93723806,width-1200,height-1200,resizemode-4,imgsize-13660/thumbnail-.jpg",
        price: 3200,
        size: "RAM",
        state: "Intel i7",
        city: "1TB",
        state: "HDD",
        zipcode: "Windows",
        phone: "NVIDIA GTX 1650"
    },
    {
        nam: "Huawei",
        email: "Beli",
        description: "This is Huawei MateBook X Pro",
        img: "https://www.carrefour.it/on/demandware.static/-/Sites-carrefour-master-catalog-IT/default/dwc57ee073/large/HUAWEIMATEBOOKD15R58256-6901443366736-2.png",
        price: 5200,
        size: "RAM",
        state: "Intel i7",
        city: "512GB",
        state: "SSD",
        zipcode: "Windows",
        phone: "NVIDIA MX250"
    },
    {
        nam: "Lenovo",
        email: "Beli",
        description: "This is Lenovo Legion 5 Laptop",
        img: "https://www.laptop.com.tr/wp-content/uploads/2023/11/lenovo-ideapad-1-15igl7-82v700a8tx-intel-celeron-n4020-4gb-128gb-ssd-15-6-inc-hd-freedos-laptop-1-1.jpg",
        price: 6000,
        size: "RAM",
        state: "AMD Ryzen 7",
        city: "1TB",
        state: "SSD",
        zipcode: "Windows",
        phone: "NVIDIA GeForce RTX 3060"
    },
    {
        nam: "MacBook",
        email: "Beli",
        description: "This is MacBook Pro",
        img: "https://cdn.cimri.io/image/1200x1200/sticker-master-gold-luxury-background-protection-vinly-decal-full-body-skin-logo-cut-compatible-with-apple-macbook-pro-air-11-12-13-15-16-17-21-27-inch-laptop-sticker-macbook-pro-16-2021-a2485_649423989.jpg",
        price: 5000,
        size: "RAM",
        state: "Apple M2",
        city: "512GB",
        state: "SSD",
        zipcode: "macOS",
        phone: "Apple GPU"
    },
    {
        nam: "Samsung",
        email: "Beli",
        description: "This is Samsung Galaxy Book Pro",
        img: "https://www.reliancedigital.in/medias/Samsung-Galaxy-Book3-Pro-NP960XFG-KC1IN-493665119-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MjMyMXxpbWFnZS9qcGVnfGltYWdlcy9oYmYvaGVkLzEwMDI3NDY2NTU1NDIyLmpwZ3w4YzYwMjVmYTI5YThjOTQ4NmM2MDFiOTQzM2Q0MzFiMTU4OWJkNzg2ZjU4ZDk0OWQ3NGJhMzMwY2IzM2Y1ZjNh",
        price: 4500,
        size: "RAM",
        state: "Intel i7",
        city: "1TB",
        state: "SSD",
        zipcode: "Windows",
        phone: "Intel Iris Xe"
    },
];

let list = ["All", "MacBook", "HP", "ASUS", "Lenovo", "Huawei", "Samsung"];
const unitedArrays = [...array, ...storage];



// searchInput funtion to filter the data 

// Adding the search functionality
document.querySelector('#searchInput').addEventListener('input', function(event) {
    let searchQuery = event.target.value.toLowerCase();

    // Filter products based on the search query (case insensitive)
    let filteredProducts = unitedArrays.filter(product => 
        product.nam.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery) ||
        product.email.toLowerCase().includes(searchQuery) // You can add more fields here
    );

    // Render the filtered products
    renderProducts(filteredProducts);
});
// Render product cards efficiently
function renderProducts(products) {
    let htmlContent = "";
    products.forEach(product => {
        htmlContent += `
            <div class="card mx-2" style="width:13rem; margin-bottom: 16px;">
               <img src="${product.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title nam1">${product.nam}</h5>
              <p class="card-text price1">${product.price}</p>
               <h5 class="card-title d-none email1">${product.email}</h5>
            <p class="card-text d-none phone1">${product.phone}</p> 
            <h5 class="card-title d-none state1">${product.state}</h5>
            <p class="card-text d-none city1">${product.city}</p>
            <p class="card-text d-none zipcode1">${product.zipcode}</p>
            <p class="card-text d-none size1">${product.size}</p>
            <p class="card-text d-none desc1">${product.description}</p>
                    <button class="btn btn-primary w-100 addToBasketBtns">Add to Basket</button>
                    <button class="btn btn-danger w-100 my-2 btns" data-bs-toggle="modal" data-bs-target="#exampleModal">View Details</button>
                </div>
            </div>`;
    });
    document.querySelector('.container3').innerHTML = htmlContent;
}

renderProducts(unitedArrays);

// Render categories list
let categoryHtml = list.map(item => `<li class="list-group-item">${item}</li>`).join('');
document.querySelector(".list-group").innerHTML = categoryHtml;

// Filter event listener
let categoryItems = document.querySelectorAll('.list-group-item');
categoryItems.forEach(item => {
    item.addEventListener('click', function () {
        categoryItems.forEach(i => i.classList.remove("active"));
        this.classList.add("active");

        let selectedCategory = this.textContent.trim()
        let filteredProducts = selectedCategory === 'All' ? unitedArrays : unitedArrays.filter(p => p.nam === selectedCategory);
        renderProducts(filteredProducts);
    });
});

// Event delegation for dynamically created elements
document.querySelector('.container3').addEventListener('click', function (event) {
    let target = event.target;


    if (target.classList.contains('btns')) {
        let card = target.closest('.card-body');
        let nam1 = card.querySelector('.nam1').textContent
        let price1 = card.querySelector('.price1').textContent
        let email1 = card.querySelector('.email1').textContent
        let size1 = card.querySelector('.size1').textContent
        let city1 = card.querySelector('.city1').textContent
        let state1 = card.querySelector('.state1').textContent
        let zipcode1 = card.querySelector('.zipcode1').textContent
        let desc1 = card.querySelector('.desc1').textContent
        let phone1 = card.querySelector('.phone1').textContent
        let img1 = target.closest('.card').querySelector('.card-img-top').src;

        document.querySelector('#exampleModalLabel').innerHTML = nam1
        document.querySelector('.modal-body').innerHTML = `
            <div class="modal-view d-flex justify-content-center">
            <img class="w-75" src="${img1}" alt="">
            </div>
          <div class="line d-flex justify-content-between">
            <p>Name:</p>
  ${nam1}
          </div>
          <div class="line d-flex justify-content-between">
            <p>Price:</p>
              ${price1}
          </div>
          <div class="line d-flex justify-content-between">
            <p>City:</p>
              ${city1}
          </div>
          <div class="line d-flex justify-content-between">
            <p>State:</p>
  ${state1}
          </div>
          <div class="line d-flex justify-content-between">
            <p>Zipcode:</p>
              ${zipcode1}
          </div>
          <div class="line d-flex justify-content-between">
            <p>Size:</p>
              ${size1}
          </div>
          <div class="line d-flex justify-content-between">
            <p>Email:</p>
  ${email1}
          </div>
          <div class="line d-flex justify-content-between">
            <p>Description:</p>
            ${desc1}
          </div>
            <div class="line d-flex justify-content-between">
            <p>Phone:</p>
            ${phone1}
          </div>
            </div>
        `;
    }

    if (target.classList.contains('addToBasketBtns')) {
        let card = target.closest('.card-body');
        let nam1 = card.querySelector('.nam1').textContent
        let price1 = card.querySelector('.price1').textContent
        let email1 = card.querySelector('.email1').textContent
        let size1 = card.querySelector('.size1').textContent
        let city1 = card.querySelector('.city1').textContent
        let state1 = card.querySelector('.state1').textContent
        let zipcode1 = card.querySelector('.zipcode1').textContent
        let desc1 = card.querySelector('.desc1').textContent
        let phone1 = card.querySelector('.phone1').textContent
        let img = target.closest('.card').querySelector('.card-img-top').src;
        console.log(desc1);
        

        let item = { nam1, price1, img, email1, size1, city1, state1, desc1, zipcode1, phone1 };
        wishlist.push(item);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        document.querySelector('.basketCount').innerHTML = wishlist.length;
        alert(`${nam1} added to basket.`);
    }
});
document.querySelector('.bot').addEventListener('click', function () {
    window.location.href = 'basket.html'
})
