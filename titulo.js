window.addEventListener('load', ()=>{
    var titulo = document.querySelector('#tituloPrincipal');
    var subtitulo = document.querySelector('#subtituloPrincipal');
    var iconos = document.querySelector('.iconos');


    function getTitulo(){
        var a = setTimeout(function(){
            titulo.innerHTML += "F";
        }, 1000);
        var a = setTimeout(function(){
            titulo.innerHTML += "a";
        }, 1200);
        var a = setTimeout(function(){
            titulo.innerHTML += "c";
        }, 1400);
        var a = setTimeout(function(){
            titulo.innerHTML += "u";
        }, 1700);
        var a = setTimeout(function(){
            titulo.innerHTML += "n";
        }, 2000);
        var a = setTimeout(function(){
            titulo.innerHTML += "d";
        }, 2200);
        var a = setTimeout(function(){
            titulo.innerHTML += "o";
        }, 2500);
        var a = setTimeout(function(){
            titulo.innerHTML += " ";
        }, 2700);
        var a = setTimeout(function(){
            titulo.innerHTML += "B";
        }, 3000);
        var a = setTimeout(function(){
            titulo.innerHTML += "e";
        }, 3300);
        var a = setTimeout(function(){
            titulo.innerHTML += "n";
        }, 3500);
        var a = setTimeout(function(){
            titulo.innerHTML += "i";
        }, 3700);
        var a = setTimeout(function(){
            titulo.innerHTML += "t";
        }, 3900);
        var a = setTimeout(function(){
            titulo.innerHTML += "e";
        }, 4100);
        var a = setTimeout(function(){
            titulo.innerHTML += "z";
        }, 4300);
        //SUBTITULO
        var a = setTimeout(function(){
            subtitulo.style.opacity = '0.2';
        }, 4500);
        var a = setTimeout(function(){
            subtitulo.style.opacity = '0.5';
        }, 4600);
        var a = setTimeout(function(){
            subtitulo.style.opacity = '0.7';
        }, 4700);
        var a = setTimeout(function(){
            subtitulo.style.opacity = '1';
        }, 4800);
        // ICONOS 
        var a = setTimeout(function(){
            iconos.style.opacity = '0.2';
        }, 4900);
        var a = setTimeout(function(){
            iconos.style.opacity = '0.5';
        }, 5000);
        var a = setTimeout(function(){
            iconos.style.opacity = '0.7';
        }, 5100);
        var a = setTimeout(function(){
            iconos.style.opacity = '1';
        }, 5200);


    };

    getTitulo();


});