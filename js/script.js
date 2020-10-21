// assegno ad ogni variabile il proprio id in html
var nome = document.getElementById('nome');
var km = document.getElementById('km');
var minorenne = document.getElementById('minorenne');
var adulto = document.getElementById('adulto');
var over = document.getElementById('over');
var genera = document.getElementById('genera');
var annulla = document.getElementById('annulla');
var passeggero = document.getElementById('passeggero');
var offerta = document.getElementById('offerta');
var carrozza = document.getElementById('carrozza');
var codcp = document.getElementById('codecp');
var costobiglietto = document.getElementById('costobiglietto');

// biglietto adulto
costobiglietto = parseInt(km.value * 0.21);

// biglietto sconto 20% minori 18
if ( minorenne === "minore 18 anni" ){
  costobiglietto = costobiglietto - ((costobiglietto / 100)* 20).toFixed(2);
} else if (over === "over 65 anni") {
  // biglietto sconto 40% over 65
  costobiglietto = costobiglietto - ((costobiglietto / 100)* 40).toFixed(2);
}

genera.addEventListener('click',
 function() {
   passeggero.innerHTML = nome.value;
   costobiglietto.innerHTML = (if ( minorenne === "minore 18 anni" ){
     costobiglietto = costobiglietto - ((costobiglietto / 100)* 20).toFixed(2);
   } else if (over === "over 65 anni") {
     // biglietto sconto 40% over 65
     costobiglietto = costobiglietto - ((costobiglietto / 100)* 40).toFixed(2);
   })
});
