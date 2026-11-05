
let carrito = [];


const botones = document.querySelectorAll(".agregar");


const contador = document.getElementById("contador");
const lista = document.getElementById("lista-carrito");
const total = document.getElementById("total");
const vaciar = document.getElementById("vaciar-carrito");


botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        
        let producto = boton.dataset.producto;
        let precio = Number(boton.dataset.precio);

        
        carrito.push({
            nombre: producto,
            precio: precio
        });

        
        actualizarCarrito();

    });

});


function actualizarCarrito() {

    
    contador.textContent = carrito.length;

    
    lista.innerHTML = "";

    
    let suma = 0;

    // Recorrer los productos del carrito
    carrito.forEach(function(producto) {

        let elemento = document.createElement("li");

        elemento.textContent =
            producto.nombre + " - $" + producto.precio + " MXN";

        lista.appendChild(elemento);

        suma += producto.precio;

    });

    // Mostrar el total
    total.textContent = suma.toFixed(2);

}

// Vaciar el carrito
vaciar.addEventListener("click", function() {

    carrito = [];

    actualizarCarrito();

});