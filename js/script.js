function accion() {

    console.log("esta funcionando mi boton");

    var ancla = document.getElementsByClassName('nav-enlace');

    for (var i = 0; i < ancla.length; i++) {
        ancla[i].classList.toggle('desaparece');
    }

}

function accion2() {

    console.log("esta funcionando mi movimiento");


}