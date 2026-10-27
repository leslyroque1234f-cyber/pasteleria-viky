        function irAlPedido(nombre, descripcion, precio, imagen) {
        const producto = {
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            imagen: imagen
        };

        localStorage.setItem(
            "productoPedido",
            JSON.stringify(producto)
        );

        window.location.href = "pedido.html";
    }