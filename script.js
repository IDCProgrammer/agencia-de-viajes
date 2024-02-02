import { barcelona, roma, paris, londres } from './ciudades.js'

// obtener elementos del DOM "document object model"

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')
let backgroundElement = document.getElementById('background_img')

enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        // remover activo
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        // agregar la clase "active" al enlace actual

        this.classList.add('active')

        // obtener el contenido correspondiente 

        let contenido = obtenerContenido(this.textContent)

        //  mostrar el contenido en el DOM

        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio

    });
});

// funcion para traer la informacion correcta desde ciudades 

function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'Paris': paris,
        'Londres': londres
    };
    return contenido[enlace];

   
};

