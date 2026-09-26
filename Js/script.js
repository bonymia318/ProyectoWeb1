function filtrarYOrdenar() {
    const textoBusqueda = document.getElementById("buscar").value.trim().toLowerCase();
    const generoSeleccionado = document.getElementById("filtro-genero").value;
    const orden = document.getElementById("ordenar").value;

    // 1. Filtrar por título
    let resultado = catalogo.filter(item => {
        const coincideTitulo = item.titulo.toLowerCase().includes(textoBusqueda);
        const coincideGenero =
            generoSeleccionado === "todos" || item.genero === generoSeleccionado;
        return coincideTitulo && coincideGenero;
    });

    // 2. Ordenar (año / valoración)

    // 3. Mostrar resultados
    renderCatalogo(resultado);
}