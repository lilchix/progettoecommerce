<!DOCTYPE html>
<html lang="it">
<head>
    <!-- Metatag e collegamenti CSS -->
    <!-- ... (il resto del tuo codice HTML) ... -->
    <!-- Swiper.js -->
    <link
        rel="stylesheet"
        href="https://unpkg.com/swiper/swiper-bundle.min.css"
    />
</head>
<body>
    <!-- ... (il resto del tuo codice HTML) ... -->
    <!-- Inclusione di jQuery -->
    <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha384-KyZXEAg3QhqLMpG8r+KHjsl5v6r+8xn2p3s/R5D5ZKm9T9f1n2O4Rl5Lpbc9j5V"
        crossorigin="anonymous"
    ></script>
    <!-- Inclusione di Swiper.js -->
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <!-- Il tuo codice JavaScript -->
    <script>
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

        /* menu */
     var theToggle = document.getElementById('toggle');
var menu = document.getElementById('menu'); // Assicurati di utilizzare l'ID corretto del tuo menu

theToggle.onclick = function() {
    menu.classList.toggle('fixed-menu'); // Aggiunge o rimuove la classe 'fixed-menu'
    toggleClass(this, 'on');
    return false;
}

       

        // hasClass
        function hasClass(elem, className) {
            return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
        }
       // Funzione per aggiungere una classe
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.classList.add(className);
    }
}

// Funzione per rimuovere una classe
function removeClass(elem, className) {
    elem.classList.remove(className);
}

// Funzione per verificare se un elemento ha una classe
function hasClass(elem, className) {
    return elem.classList.contains(className);
}




        // toggleClass
        function toggleClass(elem, className) {
            var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, " ") + ' ';
            if (hasClass(elem, className)) {
                while (newClass.indexOf(" " + className + " ") >= 0) {
                    newClass = newClass.replace(" " + className + " ", " ");
                }
                elem.className = newClass.replace(/^\s+|\s+$/g, '');
            } else {
                elem.className += ' ' + className;
            }
        }

        theToggle.onclick = function () {
            toggleClass(this, 'on');
            return false;
        }

        /* swiper */
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
        });

        /* jQuery ready compatto */
        $(function () {
            $("h1").click(function () {
                $("#prodotto1").slideDown();
                $("#prodotto2").slideDown("slow");
                $("#prodotto3").slideDown(3000);
            });
        });

        // Prodotti
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
    </script>
</body>
</html>
