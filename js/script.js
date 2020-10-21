// assegno ad ogni variabile il proprio id in html
var nome = document.getElementById('nome');
var km = document.getElementById('km');
var fascia = document.getElementById('fascia');
var genera = document.getElementById('genera');
var annulla = document.getElementById('annulla');
var passeggero = document.getElementById('passeggero');
var offerta = document.getElementById('offerta');
var carrozza = document.getElementById('carrozza');
var codcp = document.getElementById('codecp');
var costobiglietto = document.getElementById('costobiglietto');


genera.addEventListener('click',
 function() {
   passeggero.innerHTML = nome.value;
   // costo biglietto adulto
   var ticket = (km.value * 0.21);
   var sconto = 0;
   if ( fascia.value === "minore18anni" ){
     sconto = ticket * 0.2;
  } else if (fascia.value === "over65anni") {
     // biglietto sconto 40% over 65
     sconto = ticket * 0.4;
  }
   costobiglietto.innerHTML = (ticket - sconto).toFixed(2);
});
