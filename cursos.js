/**
 * Archivo: cursos.js
 * Catálogo de cursos de programación
 */

// ========== Cursos ==========
const cursos = [
    {
        id: 'curso-basico-office',
        nombre: 'Introducción a Microsoft Office: Guía para Principiantes',
        descripcion: 'Introducción a Office 365: Primeros Pasos y Aplicaciones Clave',
        plataforma: 'Udemy',
        url: 'https://www.udemy.com/course/introduccion-a-microsoft-office-guia-para-principiantes/?referralCode=F092D42BCFD0D2AC2C2D',
        icono: '💻',
        gratis: true,
        destacado: true
    }
];

// ========== Variables globales ==========
let cursosFiltrados = [...cursos];

// ========== Inicialización ==========
document.addEventListener('DOMContentLoaded', function () {
    renderizarCursos(cursos);
    configurarFiltros();
});

// ========== Renderizar cursos ==========
function renderizarCursos(listaCursos) {
    const grid = document.getElementById('cursos-grid');
    const noResultados = document.getElementById('no-resultados');

    grid.innerHTML = '';

    if (listaCursos.length === 0) {
        noResultados.style.display = 'block';
        return;
    }

    noResultados.style.display = 'none';

    listaCursos.forEach(curso => {
        const card = crearTarjetaCurso(curso);
        grid.appendChild(card);
    });
}

// ========== Crear tarjeta de curso ==========
function crearTarjetaCurso(curso) {
    const card = document.createElement('div');
    card.className = 'producto-card';

    const plataformaBadge = curso.plataforma === 'Udemy' ?
        '<span class="badge badge-udemy">Udemy</span>' :
        '<span class="badge badge-youtube">YouTube</span>';

    const gratisBadge = curso.gratis ? '<span class="badge badge-gratis">Gratis</span>' : '<span class="badge badge-pago">De pago</span>';
    const destacadoBadge = curso.destacado ? '<span class="badge badge-destacado">Destacado</span>' : '';

    card.innerHTML = `
        <div class="producto-imagen">${curso.icono}</div>
        <div class="producto-info">
            <div class="producto-badges">
                ${plataformaBadge}
                ${gratisBadge}
                ${destacadoBadge}
            </div>
            <h3 class="producto-nombre">${curso.nombre}</h3>
            <p class="producto-descripcion">${curso.descripcion}</p>
            <div class="producto-footer">
                <a href="${curso.url}" target="_blank" class="btn btn-primary btn-small">
                    Ver curso en ${curso.plataforma}
                </a>
            </div>
        </div>
    `;

    return card;
}

// ========== Configurar filtros ==========
function configurarFiltros() {
    const filtroPlataforma = document.getElementById('filtro-categoria');

    filtroPlataforma.addEventListener('change', aplicarFiltros);
}

// ========== Aplicar filtros ==========
function aplicarFiltros() {
    const plataforma = document.getElementById('filtro-categoria').value;

    cursosFiltrados = cursos.filter(curso => {
        const coincidePlataforma = plataforma === 'todos' || curso.plataforma === plataforma;
        return coincidePlataforma;
    });

    renderizarCursos(cursosFiltrados);
}
