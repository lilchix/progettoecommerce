function aggiungiAlCarrello() {
  var carrello = document.getElementById("carrello");
  var numero = parseInt(carrello.innerHTML);
  numero++;
  carrello.innerHTML = numero;
}
function rimuoviDalCarrello() {
  var carrello = document.getElementById("carrello");
  var numero = parseInt(carrello.innerHTML);
  numero--;
  carrello.innerHTML = numero;
}
function svuotaCarrello() {
  var carrello = document.getElementById("carrello");
  carrello.innerHTML = 0;
}


/*menu*/
"use strict"; 

const body = document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");

function clickItem(item, index) {

    menu.style.removeProperty("--timeOut");
    
    if (activeItem == item) return;
    
    if (activeItem) {
        activeItem.classList.remove("active");
    }

    
    item.classList.add("active");
    body.style.backgroundColor = bgColorsBody[index];
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);
    
    
}

function offsetMenuBorder(element, menuBorder) {

    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;

}

offsetMenuBorder(activeItem, menuBorder);

menuItems.forEach((item, index) => {

    item.addEventListener("click", () => clickItem(item, index));
    
})

window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--timeOut", "none");
});



/*swiper*/
var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },)

/*jQuery ready compatto*/
    $(function
    ()
    {
    $("h1").click(function
    ()
    {
    $("#prodotto1").slideDown();
    $("#prodotto2").slideDown("slow");
    $("#prodotto3").slideDown(3000);
    });
    });


                                               // prodotti
var quantity1Input = document.getElementById("quantity1");
var quantity2Input = document.getElementById("quantity2");
var quantity3Input = document.getElementById("quantity3");
var totalCost1Output = document.getElementById("totalCost1");
var totalCost2Output = document.getElementById("totalCost2");
var totalCost3Output = document.getElementById("totalCost3");
var subTotalOutput = document.getElementById("subTotal");
var shippingCostOutput = document.getElementById("shippingCost");
var grandTotalOutput = document.getElementById("grandTotal");

quantity1Input.addEventListener("input", updateCosts);
quantity2Input.addEventListener("input", updateCosts);
quantity3Input.addEventListener("input", updateCosts);

function updateCosts() {
  var quantity1 = parseInt(quantity1Input.value);
  var quantity2 = parseInt(quantity2Input.value);
  var quantity3 = parseInt(quantity3Input.value);
  
  var cost1 = 20;
  var cost2 = 13;
  var cost3 = 15;
  
  var totalCost1 = quantity1 * cost1;
  var totalCost2 = quantity2 * cost2;
  var totalCost3 = quantity3 * cost3;
  
  totalCost1Output.textContent = "€" + totalCost1;
  totalCost2Output.textContent = "€" + totalCost2;
  totalCost3Output.textContent = "€" + totalCost3;
  
  var subTotal = totalCost1 + totalCost2 + totalCost3;
  var shippingCost = 8;
  var grandTotal = subTotal + shippingCost;
  
  subTotalOutput.textContent = "€" + subTotal;
  shippingCostOutput.textContent = "€" + shippingCost;
  grandTotalOutput.textContent = "€" + grandTotal;
}
