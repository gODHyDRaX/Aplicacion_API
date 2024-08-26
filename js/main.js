import { cargar_header } from "./header.js";
import { cargar_ftr } from "./footer.js";
import { cargar_categorias } from "./categorias.js";
import { buscarProductos } from "./buscar.js";

document.addEventListener('DOMContentLoaded', () => {
    let root = document.querySelector(".root");
    root.innerHTML = `
        <header class="header"></header>
        <div class="main"></div>
        <footer class="footer"></footer>
    `;
    cargar_header();
    cargar_ftr();
    cargar_categorias();

    // Usa un timeout para asegurar que el encabezado se haya cargado
    setTimeout(() => {
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', buscarProductos);
        } else {
            console.error("El elemento de entrada con ID 'search-input' no se encontró.");
        }
    }, 100); // Ajusta el tiempo según sea necesario
});
