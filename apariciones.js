//funcion para que vayan apareciendo los elementos

let aparicionElement = document.querySelectorAll('.aparicion');//elementos con la clase animacion

function aparecerElementos(){
    let scrollTop = document.documentElement.scrollTop; //capturando la distancia
    
    for(var i = 0; i < aparicionElement.length; i++){
        let alturaElement = aparicionElement[i].offsetTop; //capturando la distancia
        if(alturaElement - 450 < scrollTop){                //comparando las distancias para ejecutar
            aparicionElement[i].style.opacity = "1";
        }
    }
}

window.addEventListener('scroll', aparecerElementos);

// scroll hacia arriba
$('.scrollUp').click(function(e){ //le doy la (e) para hacer el preventDefault y no ser redirigido
    e.preventDefault 

    $('html, body').animate({
      scrollTop: 0,
    }, 1500 );

    return false;
  });
