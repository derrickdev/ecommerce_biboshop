const cart_count = document.getElementById("cart_count");
const product_container = document.getElementById("pro-container");
const product_pro = document.getElementById("popular-pro")

let cart = 0;
cart_count.textContent = cart;


function addToCart() {
    cart += 1
    cart_count.textContent = cart
}





const product_list = [
    {
        nom_du_produit: "Clé USB/OTG 4 en 1 - Nouvelle génération",
        prix: 11000,
        image: "img/store/prod1.jpg",
        desc: "Clé USB/OTG 4"
    },
    {
        nom_du_produit: "mandoline 12 en 1 ",
        prix: 11000,
        image: "img/store/produit21.jpg",
        desc: "mandoline 12 en 1"
    },
    {
        nom_du_produit: "cable otg",
        prix: 30090,
        image: "img/store/produit31.jpg",
        desc: "Couche pour enfant reutilisable ecologique"
    },

]
const popular_product_list = [
    {
        nom_du_produit: "cable otg",
        prix: 11000,
        image: "img/store/prod1.jpg",
        desc: "Clé USB/OTG 4"
    },
    {
        nom_du_produit: "Mandoline 12 en 1",
        prix: 10000,
        image: "img/store/produit21.jpg",
        desc: "Mandoline 12 en 1"
    },
    
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
popular_product_list.map(e => product_pro.insertAdjacentHTML("afterbegin", `<div class="pro"><img src=${e.image} alt="">
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

buy.forEach(e => e.addEventListener("click", addToCart));
















