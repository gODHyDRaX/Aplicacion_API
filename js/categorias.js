import { cargar_productos } from "./productos.js";
function cargar_categorias() {
    fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then(categorias => {
            imprimir_ctg(categorias);
        });
}

function imprimir_ctg(list_ctg) {
    let categorias = document.querySelector(".categorias");
    if (!categorias) {
        console.error("El contenedor de categorías no se encontró.");
        return;
    }
    const categoriasFiltradas = ["Beauty", "Fragrances", "Furniture", "Groceries"];
    categorias.innerHTML = '';

    categoriasFiltradas.forEach((categoria, index) => {
        let div = document.createElement("div");
        div.classList.add("ctg");
        div.id = `ctg-${index}`;
        div.innerHTML = categoria;
        categorias.appendChild(div);
        div.addEventListener('click', () => {
            obtener_productos(`https://dummyjson.com/products/category/${categoria}`);
        });
    });
}

function obtener_productos(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            cargar_productos(data);
        })
        .catch(error => console.log("Error al obtener productos:", error));
}

async function separar_categorias() {
    try {
        const urls = [
            "https://dummyjson.com/products/category/beauty",
            "https://dummyjson.com/products/category/fragrances",
            "https://dummyjson.com/products/category/furniture",
            "https://dummyjson.com/products/category/groceries"
        ];
        const categoriasData = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));
        const allProductsData = categoriasData.flatMap(cat => cat.products);
        cargar_productos({ products: allProductsData });
    } catch (error) {
        console.log("Error al obtener categorías y productos:", error);
    }
}

cargar_categorias();
separar_categorias();


export { cargar_categorias };
