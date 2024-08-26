
function cargar_header() {
    let header = document.querySelector(".header")
    header.innerHTML = `
    <div class="dhr"><div class="img_logo">
        <img src="https://github.com/gODHyDRaX/img_tienda_api/blob/main/Logo%20de%20tienda%20virtual.png?raw=true" alt="">
        </div>
        <div class="categorias"></div>
            <input type="text" id="search-input" class="buscar" placeholder="Buscar">
    </div>
    
`
}
export { cargar_header }