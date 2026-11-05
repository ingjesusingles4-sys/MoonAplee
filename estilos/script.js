// Crear un arreglo para guardar los productos
let carrito = [];

// Seleccionar los botones de agregar
const botones = document.querySelectorAll(".agregar");

// Seleccionar los elementos del carrito
const contador = document.getElementById("contador");
const lista = document.getElementById("lista-carrito");
const total = document.getElementById("total");
const vaciar = document.getElementById("vaciar-carrito");
const pagar = document.getElementById("pagar");
const mensaje = document.getElementById("mensaje-carrito");
const formaPago = document.getElementById("formaPago");

// Agregar productos al carrito
botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        let producto = boton.dataset.producto;
        let precio = Number(boton.dataset.precio);

        carrito.push({
            nombre: producto,
            precio: precio
        });

        actualizarCarrito();

        mensaje.textContent = producto + " se agregó al carrito";
        mensaje.style.display = "block";

    });

});

// Función para mostrar los productos
function actualizarCarrito() {

    contador.textContent = carrito.length;

    lista.innerHTML = "";

    let suma = 0;

    carrito.forEach(function(producto) {

        let elemento = document.createElement("li");

        elemento.textContent =
            producto.nombre + " - $" +
            producto.precio.toFixed(2) + " MXN";

        lista.appendChild(elemento);

        suma += producto.precio;

    });

    total.textContent = suma.toFixed(2);

}

// Vaciar el carrito
vaciar.addEventListener("click", function() {

    carrito = [];

    actualizarCarrito();

    mensaje.textContent = "El carrito está vacío.";

});

// Finalizar compra
pagar.addEventListener("click", function() {

    // Comprobar si hay productos
    if (carrito.length === 0) {

        alert("Tu carrito está vacío. Agrega algún producto.");

        return;
    }

    // Comprobar la forma de pago
    if (formaPago.value === "") {

        alert("Por favor, selecciona una forma de pago.");

        return;
    }

    // Obtener el total
    let totalCompra = total.textContent;

    // Mostrar confirmación
    alert(
        "¡Gracias por comprar en Moon Apple! 🍎\n\n" +
        "Tu pedido ha sido registrado correctamente.\n\n" +
        "Total: $" + totalCompra + " MXN\n" +
        "Forma de pago: " + formaPago.value + "\n\n" +
        "Esta es una compra de demostración, " +
        "no se realizó ningún cobro.\n\n" +
        "¡Esperamos tu próxima visita!"
    );

    // Vaciar el carrito
    carrito = [];

    actualizarCarrito();

    formaPago.value = "";

    mensaje.textContent = "¡Gracias por tu compra!";

});