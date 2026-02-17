function setMobileGrid(){
  if(window.innerWidth < 768){
    const grids = document.querySelectorAll(".products, .grid, .items");
    grids.forEach(g=>{
      g.style.display="grid";
      g.style.gridTemplateColumns="1fr 1fr";
      g.style.gap="12px";
    });
  }
}

window.addEventListener("load", setMobileGrid);
window.addEventListener("resize", setMobileGrid);
// PRODUCTS LOAD
if(!localStorage.getItem("products")){
fetch("products.json")
.then(r=>r.json())
.then(data=>{
localStorage.setItem("products",JSON.stringify(data));
});
}

// CART LOAD
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART
function addToCart(id,name,price){
let products = JSON.parse(localStorage.getItem("products")) || [];
let urun = products.find(x=>x.id==id);

if(!urun || urun.stok<=0){
alert("Stok yok");
return;
}

urun.stok--;
localStorage.setItem("products",JSON.stringify(products));

cart.push({id,name,price});
localStorage.setItem("cart",JSON.stringify(cart));

alert("Sepete eklendi");
updateCartCount();
}

// CART COUNT
function updateCartCount(){
let btn=document.querySelector(".cart-btn");
if(btn){
btn.innerText="Sepet ("+cart.length+")";
}
}

// OPEN CART
function openCart(){
location.href="cart.html";
}

// ADMIN STOCK UPDATE
function stokGuncelle(id,stok){
let products = JSON.parse(localStorage.getItem("products")) || [];
let urun = products.find(x=>x.id==id);
if(urun){
urun.stok = Number(stok);
localStorage.setItem("products",JSON.stringify(products));
alert("Stok güncellendi");
}
}

// WHATSAPP
function whatsappOrder(){
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let text="Sipariş:\\n";
cart.forEach(x=>{
text+=x.name+" - "+x.price+" TL\\n";
});
window.open("https://wa.me/905531785602?text="+encodeURIComponent(text));
}