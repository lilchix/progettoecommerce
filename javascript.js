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



// MENU ICON ANIMATION  + MENU LI ANIMATION


        $(".burger-icon").click(function(){
          // Icona chiusa o aperta
            if($(this).hasClass('clickmenu')) {
                $(this).removeClass('clickmenu');
                // comparsa link
                $.each($('.menu-item'), function(i, el){
                $(el).css({'opacity':1});

                    setTimeout(function(){
                      $(el).animate({
                     'opacity':0
                        }, 600);
                     },100 + ( i * 100 ));
            })
            }else{       
               // Icona chiusa o aperta
                $(this).addClass('clickmenu')
                // comparsa link
                $.each($('.menu-item'), function(i, el){
                $(el).css({'opacity':1});

                     setTimeout(function(){
                      $(el).animate({
                     'opacity':1.0
                        }, 600);
                     },600 - ( i * 100 ));
            })
            }


            // voci di menu 
            if($('.menu-right').hasClass('menu-right-display')) {
                $('.menu-right').removeClass('menu-right-display')
                $('.menu-right').addClass('menu-right-close');
            }else{
                $('.menu-right').removeClass('menu-right-close');
                $('.menu-right').addClass('menu-right-display');
            }
                


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
