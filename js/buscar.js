import { cargar_productos } from "./productos.js";

function buscarProductos() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) {
        console.error("El elemento de entrada con ID 'search-input' no se encontró.");
        return;
    }

    const searchInputValue = searchInput.value.toLowerCase();

    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            const productosFiltrados = data.products.filter(producto =>
                producto.title.toLowerCase().includes(searchInputValue)
            );
            cargar_productos({ products: productosFiltrados });
        })
        .catch(error => console.log("Error al buscar productos:", error));
}

export { buscarProductos };
