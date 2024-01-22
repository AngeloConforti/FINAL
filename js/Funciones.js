
/* PAG REGISTER */

function registrarUsuario() {
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email-reg').value;
    const password = document.getElementById('contraseña-reg').value;

    // Validar que se ingresen todos los datos
    if (!nombre || !email || !password) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Crear un objeto de usuario
    const usuario = {
        nombre: nombre,
        email: email,
        password: password
    };

    // Convertir el objeto a una cadena JSON
    const usuarioJSON = JSON.stringify(usuario);

    // Almacenar los datos en sessionStorage
    sessionStorage.setItem('usuario', usuarioJSON);

    // Mostrar mensaje de éxito
    alert('Registro exitoso. Los datos han sido almacenados en sessionStorage.');
}

function iniciarSesion() {
    // Obtener los valores del formulario
    const email = document.getElementById('email-reg').value;
    const password = document.getElementById('contraseña-reg').value;

    // Validar que se ingresen todos los datos
    if (!email || !password) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Obtener el objeto de usuario almacenado en sessionStorage
    const usuarioJSON = sessionStorage.getItem('usuario');

    // Verificar si el usuario existe en sessionStorage
    if (!usuarioJSON) {
        alert('Usuario no registrado. Regístrese primero.');
        return;
    }

    // Convertir la cadena JSON a un objeto de usuario
    const usuario = JSON.parse(usuarioJSON);

    // Verificar las credenciales del usuario
    if (usuario.email === email && usuario.password === password) {
        // Credenciales válidas
        alert('Inicio de sesión exitoso.');
    } else {
        // Credenciales inválidas
        alert('Correo electrónico o contraseña incorrectos.');
    }
}
/* PAG CORTINAS Y ACCESORIOS */

function comprar() {
    // Obtener el nombre y el precio del producto desde los elementos HTML
    var nombre = document.getElementById('nombreProducto').innerText;
    var precio = parseFloat(document.getElementById('precioProducto').innerText);

    // Verificar si el precio es un número válido
    if (isNaN(precio)) {
        alert('El precio no es válido');
        return;
    }

    // Obtener la lista actual de productos en el carrito desde el Local Storage
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Agregar el nuevo producto al carrito
    var nuevoProducto = {
        nombre: nombre,
        precio: precio,
    };
    carrito.push(nuevoProducto);

    // Almacenar la lista actualizada de productos en el carrito en el Local Storage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert('Producto añadido al carrito');
}

function mostrarProductos() {
    // Obtener la lista de productos desde el Local Storage
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Obtener la referencia de la tabla en el HTML
    var tablaProductos = document.getElementById('tablaProductos');

    // Limpiar la tabla antes de agregar los nuevos productos
    tablaProductos.innerHTML = '';

    // Iterar sobre la lista de productos y agregarlos a la tabla
    carrito.forEach(function (producto) {
        var fila = tablaProductos.insertRow();
        var celdaNombre = fila.insertCell(0);
        var celdaPrecio = fila.insertCell(1);

        celdaNombre.textContent = producto.nombre;
        celdaPrecio.textContent = producto.precio.toFixed(2); // Asegurar que el precio tenga dos decimales

        // Calcular el precio total
        var precioTotal = carrito.reduce(function (total, producto) {
            return total + producto.precio;
        }, 0);

        // Obtener la referencia de la tabla de precio final en el HTML
        var tablaPrecioFinal = document.getElementById('tablaPrecioFinal');

        // Limpiar la tabla antes de agregar el precio final
        tablaPrecioFinal.innerHTML = '';

        // Agregar el precio final a la tabla
        var fila = tablaPrecioFinal.insertRow();
        var celdaPrecioFinal = fila.insertCell(0);
        celdaPrecioFinal.textContent = precioTotal.toFixed(2); // Asegurar que el precio tenga dos decimales

    });
}

function pagoFinal() {
    // Limpiar las tablas
    document.getElementById('tablaProductos').innerHTML = '';
    document.getElementById('tablaPrecioFinal').innerHTML = '';

    // Mostrar alerta de compra exitosa
    alert('Compra exitosa');
}


function borrarLocalStorage() {


    localStorage.clear();
    alert('Local Storage borrado correctamente');
}