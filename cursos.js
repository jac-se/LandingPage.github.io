/**
 * Archivo: cursos.js
 * Catálogo de cursos de programación
 */

// ========== Cursos ==========
const cursos = [
    {
        id: 'curso-basico-programacion',
        nombre: 'Curso Básico de Programación',
        descripcion: 'Aprende los fundamentos de la programación desde cero. Conceptos básicos, variables, estructuras de control y más.',
        plataforma: 'Udemy',
        url: 'https://www.udemy.com/course/tu-curso-basico/',
        icono: '💻',
        gratis: false,
        destacado: true
    },
    {
        id: 'instalacion-ide',
        nombre: 'Instalación de IDE',
        descripcion: 'Guía completa para instalar y configurar tu entorno de desarrollo. Visual Studio Code, IntelliJ IDEA, Eclipse y más.',
        plataforma: 'YouTube',
        url: 'https://www.youtube.com/watch?v=tu-video-ide',
        icono: '⚙️',
        gratis: true,
        destacado: false
    },
    {
        id: 'instalacion-docker',
        nombre: 'Instalación de Docker',
        descripcion: 'Aprende a instalar y configurar Docker en Windows, Linux y Mac. Primeros pasos con contenedores.',
        plataforma: 'YouTube',
        url: 'https://www.youtube.com/watch?v=tu-video-docker',
        icono: '🐳',
        gratis: true,
        destacado: true
    },
    {
        id: 'instalacion-jdk',
        nombre: 'Instalación de JDK',
        descripcion: 'Instalación y configuración del Java Development Kit (JDK). Variables de entorno y primeras pruebas.',
        plataforma: 'YouTube',
        url: 'https://www.youtube.com/watch?v=tu-video-jdk',
        icono: '☕',
        gratis: true,
        destacado: false
    },
    {
        id: 'java-avanzado',
        nombre: 'Java Avanzado',
        descripcion: 'Curso completo de Java avanzado. Programación orientada a objetos, colecciones, streams y más.',
        plataforma: 'Udemy',
        url: 'https://www.udemy.com/course/tu-curso-java/',
        icono: '☕',
        gratis: false,
        destacado: true
    },
    {
        id: 'php-codeigniter',
        nombre: 'PHP con CodeIgniter 4',
        descripcion: 'Desarrollo web con PHP y CodeIgniter 4. MVC, bases de datos, autenticación y despliegue.',
        plataforma: 'Udemy',
        url: 'https://www.udemy.com/course/tu-curso-php/',
        icono: '🐘',
        gratis: false,
        destacado: false
    },
    {
        id: 'git-github',
        nombre: 'Git y GitHub',
        descripcion: 'Control de versiones con Git y GitHub. Comandos básicos, ramas, pull requests y colaboración.',
        plataforma: 'YouTube',
        url: 'https://www.youtube.com/watch?v=tu-video-git',
        icono: '🔀',
        gratis: true,
        destacado: false
    },
    {
        id: 'visual-basic-net',
        nombre: 'Visual Basic .NET',
        descripcion: 'Desarrollo de aplicaciones de escritorio con Visual Basic .NET. Formularios, bases de datos y más.',
        plataforma: 'Udemy',
        url: 'https://www.udemy.com/course/tu-curso-vbnet/',
        icono: '🖥️',
        gratis: false,
        destacado: false
    },
    {
        id: 'bash-scripting',
        nombre: 'Bash Scripting',
        descripcion: 'Automatización con scripts Bash. Comandos de Linux, variables, condicionales y loops.',
        plataforma: 'YouTube',
        url: 'https://www.youtube.com/watch?v=tu-video-bash',
        icono: '🐚',
        gratis: true,
        destacado: false
    },
    {
        id: 'microservicios',
        nombre: 'Arquitectura de Microservicios',
        descripcion: 'Diseño e implementación de microservicios. Docker, Kubernetes, APIs RESTful y comunicación entre servicios.',
        plataforma: 'Udemy',
        url: 'https://www.udemy.com/course/tu-curso-microservicios/',
        icono: '🏗️',
        gratis: false,
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
