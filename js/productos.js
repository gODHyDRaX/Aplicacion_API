export function cargar_productos(data) {
    const productosContainer = document.querySelector(".main");
    if (!productosContainer) {
        console.error("El contenedor de productos no se encontró.");
        return;
    }

    productosContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos productos

    // Asegúrate de que data.products sea un array
    const productos = data.products || [];

    productos.forEach(producto => {
        // Verifica que el precio sea un número y tenga un valor
        const price = producto.price && typeof producto.price === 'number' ? producto.price.toFixed(2) : '0.00';

        let div = document.createElement("div");
        div.classList.add("item");

        div.innerHTML = `
            <div class="caj_img">
                <img src="${producto.thumbnail}" alt="${producto.title}" class="producto-imagen">
            </div>
            <h2 class="title">${producto.title}</h2>
            <span class="desc_item">${producto.description}</span>
            <h2 class="precio">$${price}</h2>
            <h2 class="categoria">${producto.category}</h2>            
        `;

        productosContainer.appendChild(div);
    });
}
