
let i = 0;
let hamburguesa = document.getElementById('hamburguesa').addEventListener('click',function(){
if (!i) {
  document.getElementsByClassName('listahamburguesa')[0].style.display = 'flex';
  // hamburguesa.innerHTML = 'Esconder menu'
  i = 1;
}
else {
  document.getElementsByClassName('listahamburguesa')[0].style.display = 'none';
  // document.getElementById('button').innerHTML = 'Leer mas';
  i = 0;
}
})
