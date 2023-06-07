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
var Menu = {
  el: {
    menu: $('.menu'),
    menuTop: $('.menu-top'),
    menuClose: $('.menu-close'),
    menuMiddle: $('.menu-middle'),
    menuBottom: $('.menu-bottom'),
    menuText: $('.menu-text')
  },
  
  init: function() {
    Menu.bindUIactions();
  },
  
  bindUIactions: function() {
    Menu.el.menu
        .on(
          'click',
        function(event) {
        Menu.activateMenu(event);
        event.preventDefault();
      }
    );
  },
  
  activateMenu: function() {
    Menu.el.menuTop.toggleClass('menu-top-expand expand');
    Menu.el.menuMiddle.toggleClass('menu-middle-expand expand');
    Menu.el.menuBottom.toggleClass('menu-bottom-expand expand'); 
    Menu.el.menuText.toggleClass('menu-text-expand');
    Menu.el.menuClose.toggleClass('menu-close-visible');
  }
};
  
  //Stop menu item click closing the menu
  $(".menu .menu-global").click(function(e) {
      e.stopPropagation();
});

Menu.init();



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




// Array di esempio contenente gli elementi del carrello
var cartItems = [
  { name: "Prodotto 1", price: 10.99 },
  { name: "Prodotto 2", price: 5.99 },
  { name: "Prodotto 3", price: 7.49 }
];

// Funzione per generare gli elementi del carrello dinamicamente
function generateCartItems() {
  var cartContainer = document.getElementById("cart-items");
  cartContainer.innerHTML = "";

  cartItems.forEach(function(item) {
    var cartItemDiv = document.createElement("div");
    cartItemDiv.className = "cart-item";
    cartItemDiv.innerHTML = item.name + " - $" + item.price.toFixed(2);
    cartContainer.appendChild(cartItemDiv);
  });
}

// Funzione per calcolare e aggiornare il totale del carrello
function updateCartTotal() {
  var total = 0;

  cartItems.forEach(function(item) {
    total += item.price;
  });

  var cartTotalElement = document.getElementById("cart-total");
  cartTotalElement.innerHTML = "$" + total.toFixed(2);
}

// Aggiornare gli elementi del carrello e il totale quando la pagina viene caricata
window.onload = function() {
  generateCartItems();
  updateCartTotal();
};

// Aggiungere un event listener per il click sul pulsante di checkout
var checkoutBtn = document.getElementById("checkout-btn");
checkoutBtn.addEventListener("click", function() {
  alert("Grazie per il tuo acquisto!");
  // Aggiungere qui la logica per l'elaborazione del pagamento, invio dell'ordine, ecc.
});
