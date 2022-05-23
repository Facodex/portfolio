window.addEventListener('load', function(){
    var contacto = document.querySelector('#contacto');
    var linkContacto = document.querySelector('#linkContacto');
    var contactoboolean = true;
    linkContacto.addEventListener('click', function(){
        if(contactoboolean == true){
            contacto.style.opacity = "1";
            contactoboolean = false;
        }else{
            contacto.style.opacity = "0";
            contactoboolean = true;
        }
    });

});
