document.getElementById("buscar").addEventListener("input", filtrarYOrdenar);
document.getElementById("filtro-genero").addEventListener("change", filtrarYOrdenar);
document.getElementById("ordenar").addEventListener("change", filtrarYOrdenar);

// Arreglo principal: aquí vive TODA la información del catálogo
let catalogo = [
    {
        id: 1,
        titulo: "Cementerio Maldito",
        genero: "terror",
        tipo: "pelicula",
        anio: 2019,
        valoracion: 5.8,
        descripcion: "Basada en la novela de Stephen King.",
        imagen: "img/cementerio.png",
        favorito: false
    },
    {
        id: 2,
        titulo: "Annabelle",
        genero: "terror",
        tipo: "pelicula",
        anio: 2014,
        valoracion: 5.4,
        descripcion: "Una muñeca poseída aterroriza a una familia.",
        imagen: "img/anabelle.png",
        favorito: false
    },
    {
        id: 3,
        titulo: "El Conjuro",
        genero: "terror",
        tipo: "pelicula",
        anio: 2013,
        valoracion: 7.5,
        descripcion: "Investigadores paranormales ayudan a una familia aterrorizada por una presencia oscura.",
        imagen: "img/El conjuro.png",
        favorito: false
    },
    {
        id: 4,
        titulo: "La Mamá",
        genero: "terror",
        tipo: "pelicula",
        anio: 2013,
        valoracion: 6.2,
        descripcion: "Dos niñas son rescatadas tras vivir solas en el bosque, pero algo las acompañó.",
        imagen: "img/la mama.png",
        favorito: false
    },
    {
        id: 5,
        titulo: "Chucky",
        genero: "terror",
        tipo: "pelicula",
        anio: 1988,
        valoracion: 6.6,
        descripcion: "Un asesino en serie transfiere su alma a un muñeco.",
        imagen: "img/chucky.jpg",
        favorito: false
    },
    {
        id: 6,
        titulo: "Niños",
        genero: "comedia",
        tipo: "pelicula",
        anio: 2010,
        valoracion: 6.0,
        descripcion: "Un grupo de amigos de la infancia se reúne después de muchos años.",
        imagen: "img/niños.jpg",
        favorito: false
    },
    {
        id: 7,
        titulo: "La Esposa de Mentiras",
        genero: "comedia",
        tipo: "pelicula",
        anio: 2011,
        valoracion: 6.4,
        descripcion: "Un cirujano plástico convence a su asistente para que finja ser su exesposa.",
        imagen: "img/esposa.png",
        favorito: false
    },
    {
        id: 8,
        titulo: "Luna de Miel en Familia",
        genero: "comedia",
        tipo: "pelicula",
        anio: 2014,
        valoracion: 6.5,
        descripcion: "Tras una cita a ciegas desastrosa, dos familias terminan compartiendo vacaciones en África.",
        imagen: "img/miel.png",
        favorito: false
    },
    {
        id: 9,
        titulo: "Hechizo de Amor: La Magia Continúa",
        genero: "comedia",
        tipo: "pelicula",
        anio: 1998,
        valoracion: 6.3,
        descripcion: "Dos hermanas brujas intentan romper una maldición familiar.",
        imagen: "img/amor.png",
        favorito: false
    },
    {
        id: 10,
        titulo: "Coyote vs. Acme",
        genero: "comedia",
        tipo: "pelicula",
        anio: 2023,
        valoracion: 7.0,
        descripcion: "Wile E. Coyote demanda a la corporación ACME por productos defectuosos.",
        imagen: "img/coyote.png",
        favorito: false
    },
    {
        id: 11,
        titulo: "Buscando a Nemo",
        genero: "animacion",
        tipo: "pelicula",
        anio: 2003,
        valoracion: 8.1,
        descripcion: "Un pez payaso se embarca en un viaje épico para encontrar a su hijo capturado.",
        imagen: "img/nemo.jpg",
        favorito: false
    },
    {
        id: 12,
        titulo: "Cómo Entrenar a tu Dragón",
        genero: "animacion",
        tipo: "pelicula",
        anio: 2010,
        valoracion: 8.1,
        descripcion: "Un joven vikingo se hace amigo de un dragón al que debía cazar.",
        imagen: "img/dragon.jpg",
        favorito: false
    },
    {
        id: 13,
        titulo: "Frozen",
        genero: "animacion",
        tipo: "pelicula",
        anio: 2013,
        valoracion: 7.4,
        descripcion: "Una princesa con poderes de hielo busca salvar su reino.",
        imagen: "img/frozen.jpg",
        favorito: false
    },
    {
        id: 14,
        titulo: "Up",
        genero: "animacion",
        tipo: "pelicula",
        anio: 2009,
        valoracion: 8.2,
        descripcion: "Un anciano viaja a Sudamérica atando miles de globos a su casa.",
        imagen: "img/up.jpg",
        favorito: false
    },
    {
        id: 15,
        titulo: "Coco",
        genero: "animacion",
        tipo: "pelicula",
        anio: 2017,
        valoracion: 8.4,
        descripcion: "Un niño viaja a la Tierra de los Muertos para descubrir su historia familiar.",
        imagen: "img/coco.jpg",
        favorito: false
    },
    {
        id: 16,
        titulo: "El Hermano de Santa",
        genero: "navidenas",
        tipo: "pelicula",
        anio: 2007,
        valoracion: 5.6,
        descripcion: "El hermano problemático de Santa Claus debe salvar la Navidad.",
        imagen: "img/hermano.jpg",
        favorito: false
    },
    {
        id: 17,
        titulo: "El Grinch",
        genero: "navidenas",
        tipo: "pelicula",
        anio: 2000,
        valoracion: 6.3,
        descripcion: "Una criatura amargada intenta robar la Navidad de Villa Quién.",
        imagen: "img/grinch.jpg",
        favorito: false
    },
    {
        id: 18,
        titulo: "24 Horas para Navidad",
        genero: "navidenas",
        tipo: "pelicula",
        anio: 2018,
        valoracion: 6.0,
        descripcion: "Una carrera contra el tiempo para salvar el espíritu navideño en Nochebuena.",
        imagen: "img/24horas.png",
        favorito: false
    },
    {
        id: 19,
        titulo: "Arturo Christmas",
        genero: "navidenas",
        tipo: "pelicula",
        anio: 2011,
        valoracion: 7.1,
        descripcion: "El hijo menor de Santa realiza una misión urgente para entregar el último regalo.",
        imagen: "img/arturo.jpg",
        favorito: false
    },
    {
        id: 20,
        titulo: "Suéter Feo de Navidad",
        genero: "navidenas",
        tipo: "pelicula",
        anio: 2021,
        valoracion: 5.5,
        descripcion: "Un suéter festivo trae más de una sorpresa durante las fiestas.",
        imagen: "img/elfo.png",
        favorito: false
    },
    {
        id: 21,
        titulo: "Batman",
        genero: "accion",
        tipo: "pelicula",
        anio: 2022,
        valoracion: 7.8,
        descripcion: "El Caballero de la Noche investiga la corrupción en Ciudad Gótica.",
        imagen: "img/batman.jpg",
        favorito: false
    },
    {
        id: 22,
        titulo: "Spider-Man",
        genero: "accion",
        tipo: "pelicula",
        anio: 2002,
        valoracion: 7.4,
        descripcion: "Un joven adquiere superpoderes y debe enfrentar al Duende Verde.",
        imagen: "img/spiderman.jpg",
        favorito: false
    },
    {
        id: 23,
        titulo: "Guardianes de la Galaxia",
        genero: "accion",
        tipo: "pelicula",
        anio: 2014,
        valoracion: 8.0,
        descripcion: "Un grupo de criminales intergalácticos se une para salvar el universo.",
        imagen: "img/guardianes.jpg",
        favorito: false
    },
    {
        id: 24,
        titulo: "Los Vengadores",
        genero: "accion",
        tipo: "pelicula",
        anio: 2012,
        valoracion: 8.0,
        descripcion: "Los héroes más poderosos de la Tierra se unen para detener a Loki.",
        imagen: "img/vengadores.jpg",
        favorito: false
    },
]
let siguienteId = catalogo.length + 1; // lo usaremos cuando agregues nuevas desde el formulario

// 2. FUNCIONES DE PINTADO
function renderCatalogo(lista) {
    const contenedor = document.getElementById("lista-peliculas");
    contenedor.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {
        const peli = lista[i];
        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta";
        tarjeta.setAttribute("data-genero", peli.genero);
        tarjeta.setAttribute("data-tipo", peli.tipo);
        tarjeta.innerHTML = `
            <div class="tarjeta-click" onclick="verDetalle(${peli.id})">
                <img src="${peli.imagen}" alt="${peli.titulo}">
                <div class="tarjeta-info">
                    <h3>${peli.titulo}</h3>
                    <p class="genero">${peli.genero}</p>
                </div>
            </div>
            <div class="acciones">
                <button class="btn-icono" title="${peli.favorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}" onclick="toggleFavorito(${peli.id})">${peli.favorito ? "★" : "☆"}</button>
                <button class="btn-eliminar" onclick="eliminarPelicula(${peli.id})">Eliminar</button>
            </div>`;
        contenedor.appendChild(tarjeta);
    }
    actualizarEstadisticas();
}

function renderFavoritos() {
    const contenedor = document.getElementById("lista-favoritos");
    contenedor.innerHTML = "";

    const favoritos = catalogo.filter(function (peli) {
        return peli.favorito === true;
    });

    if (favoritos.length === 0) {
        contenedor.innerHTML = "<p>Aún no tienes favoritos.</p>";
        return;
    }

    for (let i = 0; i < favoritos.length; i++) {
        const peli = favoritos[i];
        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta";
        tarjeta.innerHTML = `
            <div class="tarjeta-click" onclick="verDetalle(${peli.id})">
                <img src="${peli.imagen}" alt="${peli.titulo}">
                <div class="tarjeta-info">
                    <h3>${peli.titulo}</h3>
                    <p class="genero">${peli.genero}</p>
                </div>
            </div>
            <div class="acciones">
                <button class="btn-icono" title="Quitar de favoritos" onclick="toggleFavorito(${peli.id})">★</button>
            </div>`;
        contenedor.appendChild(tarjeta);
    }
}

function actualizarEstadisticas() {
    const total = catalogo.length;
    const peliculas = catalogo.filter(function (item) { return item.tipo === "pelicula"; }).length;
    const series = catalogo.filter(function (item) { return item.tipo === "serie"; }).length;
    const favoritos = catalogo.filter(function (item) { return item.favorito === true; }).length;

    document.getElementById("total").textContent = total;
    document.getElementById("total-peliculas").textContent = peliculas;
    document.getElementById("total-series").textContent = series;
    document.getElementById("total-favoritos").textContent = favoritos;
}

// 2b. MODAL DE DETALLES
function verDetalle(id) {
    const peli = catalogo.find(function (p) { return p.id === id; });
    if (!peli) return;

    document.getElementById("modal-imagen").src = peli.imagen;
    document.getElementById("modal-imagen").alt = peli.titulo;
    document.getElementById("modal-titulo").textContent = peli.titulo;
    document.getElementById("modal-meta").textContent =
        peli.genero + " · " + peli.anio + " · ⭐ " + peli.valoracion;
    document.getElementById("modal-descripcion").textContent = peli.descripcion;

    document.getElementById("modal-detalle").classList.remove("oculto");
}

function cerrarModal() {
    document.getElementById("modal-detalle").classList.add("oculto");
}

function cerrarModalSiFondo(evento) {
    if (evento.target.id === "modal-detalle") {
        cerrarModal();
    }
}

document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") cerrarModal();
});

// 3. BUSCAR, FILTRAR Y ORDENAR (una sola versión, no anidada)
function filtrarYOrdenar() {
    const textoBusqueda = document.getElementById("buscar").value.trim().toLowerCase();
    const generoSeleccionado = document.getElementById("filtro-genero").value;
    const orden = document.getElementById("ordenar").value;

    let resultado = catalogo.filter(item => {
        const coincideTitulo = item.titulo.toLowerCase().includes(textoBusqueda);
        const coincideGenero = generoSeleccionado === "todos" || item.genero === generoSeleccionado;
        return coincideTitulo && coincideGenero;
    });

    if (orden === "anio-asc") {
        resultado.sort(function (a, b) { return a.anio - b.anio; });
    } else if (orden === "anio-desc") {
        resultado.sort(function (a, b) { return b.anio - a.anio; });
    } else if (orden === "valoracion-desc") {
        resultado.sort(function (a, b) { return b.valoracion - a.valoracion; });
    } else if (orden === "valoracion-asc") {
        resultado.sort(function (a, b) { return a.valoracion - b.valoracion; });
    }

    renderCatalogo(resultado);
}

// 4. ELIMINAR Y FAVORITOS
function eliminarPelicula(id) {
    const confirmar = confirm("¿Seguro que quieres eliminar esta película?");
    if (!confirmar) return;

    catalogo = catalogo.filter(function (peli) { return peli.id !== id; });

    filtrarYOrdenar();
    renderFavoritos();
    guardarEnLocalStorage();
}

function toggleFavorito(id) {
    for (let i = 0; i < catalogo.length; i++) {
        if (catalogo[i].id === id) {
            catalogo[i].favorito = !catalogo[i].favorito;
        }
    }
    filtrarYOrdenar();
    renderFavoritos();
    guardarEnLocalStorage();
}

// 5. localStorage
function guardarEnLocalStorage() {
    localStorage.setItem("catalogoPeliculas", JSON.stringify(catalogo));
}

function cargarDeLocalStorage() {
    const datosGuardados = localStorage.getItem("catalogoPeliculas");
    if (datosGuardados !== null) {
        catalogo = JSON.parse(datosGuardados);
        siguienteId = catalogo.length + 1;
    }
}

// 6. FORMULARIO PARA AGREGAR
const formAgregar = document.getElementById("form-agregar");

formAgregar.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const titulo = document.getElementById("titulo").value.trim();
    const genero = document.getElementById("genero").value;
    const anio = Number(document.getElementById("anio").value);
    const valoracion = Number(document.getElementById("valoracion").value);
    const tipo = document.getElementById("tipo").value;
    const descripcion = document.getElementById("descripcion").value.trim();
    const imagen = document.getElementById("imagen").value.trim();

    if (titulo === "") {
        alert("El título no puede estar vacío.");
        return;
    }
    if (valoracion < 1 || valoracion > 10) {
        alert("La valoración debe estar entre 1 y 10.");
        return;
    }
    if (anio < 1900 || anio > 2030) {
        alert("El año debe estar entre 1900 y 2030.");
        return;
    }

    const nuevaPelicula = {id: siguienteId,titulo: titulo,genero: genero,tipo: tipo,anio: anio,valoracion: valoracion,
        descripcion: descripcion,imagen: imagen === "" ? "img/default.png" : imagen,favorito: false
    };

    catalogo.push(nuevaPelicula);
    siguienteId++;
    guardarEnLocalStorage();

    formAgregar.reset();
    document.getElementById("buscar").value = "";
    document.getElementById("filtro-genero").value = "todos";
    document.getElementById("ordenar").value = "default";
    renderCatalogo(catalogo);
});


cargarDeLocalStorage();
filtrarYOrdenar();
renderFavoritos();