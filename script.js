const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const cart_count = document.getElementById("cart_count");
const product_container = document.getElementById("pro-container")

let cart = 0;
cart_count.textContent = cart;


function addToCart() {
    cart += 1
    cart_count.textContent = cart
}

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}


if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

/*Single page product*/
// $('#lightSlider').lightSlider({
//     gallery: true,
//     item: 1,
//     loop: true,
//     slideMargin: 0,
//     thumbItem: 6
// });
/*changement de prix*/
// const keyCapacitySelect = document.getElementById('key-capacity');
// const keyPriceDiv = document.getElementById('key-price');
// const keyPrices = {
//     '8': '10 000 F CFA',
//     '32GB': '$10.00',
//     '64GB': '$20.00',
//     '128GB': '$30.00'
// };

// keyCapacitySelect.addEventListener('change', () => {
//     const selectedCapacity = keyCapacitySelect.value;
//     const selectedPrice = keyPrices[selectedCapacity];
//     keyPriceDiv.textContent = selectedPrice;
// });


const product_list = [
    {
        nom_du_produit: "cable otg",
        prix: 11000,
        image: "img/store/prod1.jpg",
        desc: "Clé USB/OTG 4"
    },
    {
        nom_du_produit: "cable otg",
        prix: 11000,
        image: "img/store/prod1.jpg",
        desc: "Clé USB/OTG 4 en 1 - Nouvelle génération"
    },
    {
        nom_du_produit: "cable otg",
        prix: 30090,
        image: "img/store/prod1.jpg",
        desc: "Clé USB/OTG 4 en 1 - Nouvelle génération"
    },
    {
        nom_du_produit: "cable otg",
        prix: 11000,
        image: "img/store/prod1.jpg",
        desc: "Clé USB/OTG 4 en 1 - Nouvelle génération"
    }
]

product_list.map(e => product_container.insertAdjacentHTML("afterbegin", `<div class="pro"><img src=${e.image} alt="">
<div class="des">
    <!-- <span>Adidas</span> -->
    <h5>${e.desc}</h5>
    <div class="star">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </div>
    <h4>${e.prix}FCFA</h4>

</div>
<span id="cart"> <i class="fa fa-shopping-cart cart"></i></span>
</div>`))

const buy = document.querySelectorAll("#cart");

buy.forEach(e => e.addEventListener("click", addToCart))