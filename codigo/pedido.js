  const productoGuardado =
            localStorage.getItem("productoPedido");

        if (!productoGuardado) {
            alert("Primero debes elegir un producto.");
            window.location.href = "VICKY.hatml";
        } else {
            const producto = JSON.parse(productoGuardado);

            document.getElementById("nombreProducto").textContent =
                producto.nombre;

            document.getElementById("descripcionProducto").textContent =
                producto.descripcion;

            document.getElementById("precioProducto").textContent =
                "Bs. " + producto.precio;

            document.getElementById("imagenProducto").src =
                producto.imagen;

            document.getElementById("imagenProducto").alt =
                producto.nombre;
            
            actualizarTotal();
        }

        function actualizarTotal() {
            const producto = JSON.parse(
                localStorage.getItem("productoPedido")
            );

            const cantidad = Number(
                document.getElementById("cantidad").value
            );

            document.getElementById("totalProducto").textContent =
                "Total: Bs. " + (producto.precio * cantidad);
        }

        document.getElementById("cantidad").addEventListener(
            "input",
            actualizarTotal
        );

        document.getElementById("formPedido").addEventListener(
            "submit",
            function(event) {
                event.preventDefault();

                const producto = JSON.parse(
                    localStorage.getItem("productoPedido")
                );

                const nombre = document.getElementById("nombre")
                    .value.trim();

                const cantidad = Number(
                    document.getElementById("cantidad").value
                );

                if (!nombre || !Number.isInteger(cantidad) ||
                    cantidad < 1) {
                    alert("Introduce tu nombre y una cantidad válida.");
                    return;
                }

                const total = producto.precio * cantidad;

                const mensaje =
                    "¡Hola, Pastelería VICKY! \n\n" +
                    "Quiero realizar un pedido.\n\n" +
                    "Nombre: " + nombre + "\n" +
                    "Producto: " + producto.nombre + "\n" +
                    "Cantidad: " + cantidad + "\n" +
                    "Precio unitario: Bs. " + producto.precio + "\n" +
                    "Total: Bs. " + total;

                // Reemplaza el número de ejemplo por tu WhatsApp.
                const miWhatsApp = "59164295859";

                const url = "https://wa.me/" + miWhatsApp +
                    "?text=" + encodeURIComponent(mensaje);

                window.open(url, "_blank");
            }
        );