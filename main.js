//seleziono la Griglia e al suo interno metto 25 quadrati

for (var i = 0; i < 25; i++) {
    $('#griglia').append('<div class="quadrato"><p></p></div>')
}

$('p').each(function(i){
    var numero_casuale = numero_random(0, 10);

    $(this).html(numero_casuale);
    console.log(numero_casuale);

    if (numero_casuale == 0) {
        $(this).addClass('verde')
    } else if (numero_casuale%2 == 0){
        $(this).addClass('rosso')
    }
})


// faccio una funzione per un numero random
function numero_random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
