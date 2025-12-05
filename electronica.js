/**
 * Archivo: electronica.js
 * Catálogo de productos electrónicos
 */

// ========== Productos ==========
const productos = [
    {
        id: 'cargador-usb',
        nombre: 'Cargador USB Rápido',
        descripcion: 'Cargador de pared con puerto USB, carga rápida compatible con la mayoría de dispositivos.',
        categoria: 'Carga',
        precio: 89,
        stock: 15,
        imagen: '🔌',
        destacado: false
    },
    {
        id: 'audifonos-bluetooth',
        nombre: 'Audífonos Bluetooth',
        descripcion: 'Audífonos inalámbricos con excelente calidad de sonido y batería de larga duración.',
        categoria: 'Audio',
        precio: 299,
        stock: 8,
        imagen: '🎧',
        destacado: true
    },
    {
        id: 'lampara-led',
        nombre: 'Lámpara LED Recargable',
        descripcion: 'Lámpara LED portátil con batería recargable, ideal para emergencias.',
        categoria: 'Iluminación',
        precio: 149,
        stock: 12,
        imagen: '💡',
        destacado: false
    },
    {
        id: 'cable-usb-c',
        nombre: 'Cable USB-C',
        descripcion: 'Cable USB-C de alta calidad, resistente y con carga rápida.',
        categoria: 'Carga',
        precio: 59,
        stock: 25,
        imagen: '🔗',
        destacado: false
    },
    {
        id: 'desarmador-set',
        nombre: 'Set de Desarmadores',
        descripcion: 'Kit completo de desarmadores de precisión para electrónica y reparaciones.',
        categoria: 'Herramientas',
        precio: 179,
        stock: 10,
        imagen: '🔧',
        destacado: false
    },
    {
        id: 'ventilador-usb',
        nombre: 'Ventilador USB Portátil',
        descripcion: 'Ventilador compacto con conexión USB, perfecto para escritorio.',
        categoria: 'Electrodomésticos',
        precio: 129,
        stock: 7,
        imagen: '🌀',
        destacado: false
    },
    {
        id: 'bocina-bluetooth',
        nombre: 'Bocina Bluetooth',
        descripcion: 'Bocina portátil con sonido potente, resistente al agua.',
        categoria: 'Audio',
        precio: 399,
        stock: 6,
        imagen: '🔊',
        destacado: true
    },
    {
        id: 'minilicuadora',
        nombre: 'Minilicuadora Portátil',
        descripcion: 'Licuadora personal recargable, ideal para smoothies y jugos.',
        categoria: 'Electrodomésticos',
        precio: 349,
        stock: 5,
        imagen: '🥤',
        destacado: false
    },
    {
        id: 'powerbank',
        nombre: 'PowerBank 10000mAh',
        descripcion: 'Batería externa de alta capacidad con carga rápida.',
        categoria: 'Carga',
        precio: 279,
        stock: 10,
        imagen: '🔋',
        destacado: true
    },
    {
        id: 'peluche-led',
        nombre: 'Peluche con Luz LED',
        descripcion: 'Peluche suave con luz LED incorporada, perfecto para niños.',
        categoria: 'Otros',
        precio: 199,
        stock: 8,
        imagen: '🧸',
        destacado: false
    },
    {
        id: 'jarra-electrica',
        nombre: 'Jarra Eléctrica',
        descripcion: 'Hervidor de agua eléctrico de 1.7L, apagado automático.',
        categoria: 'Electrodomésticos',
        precio: 299,
        stock: 4,
        imagen: '☕',
        destacado: false
    },
    {
        id: 'mochila-usb',
        nombre: 'Mochila con Puerto USB',
        descripcion: 'Mochila moderna con puerto USB integrado para cargar dispositivos.',
        categoria: 'Accesorios',
        precio: 449,
        stock: 6,
        imagen: '🎒',
        destacado: false
    },
    {
        id: 'mouse-inalambrico',
        nombre: 'Mouse Inalámbrico',
        descripcion: 'Mouse ergonómico inalámbrico con batería de larga duración.',
        categoria: 'Accesorios',
        precio: 149,
        stock: 15,
        imagen: '🖱️',
        destacado: false
    },
    {
        id: 'lampara-escritorio',
        nombre: 'Lámpara de Escritorio LED',
        descripcion: 'Lámpara LED ajustable con control de intensidad.',
        categoria: 'Iluminación',
        precio: 249,
        stock: 9,
        imagen: '🔦',
        destacado: false
    },
    {
        id: 'audifonos-cable',
        nombre: 'Audífonos con Cable',
        descripcion: 'Audífonos con cable de 3.5mm, sonido claro y cómodos.',
        categoria: 'Audio',
        precio: 99,
        stock: 20,
        imagen: '🎵',
        destacado: false
    }
];

// ========== Variables globales ==========
let productosFiltrados = [...productos];

// ========== Inicialización ==========
document.addEventListener('DOMContentLoaded', function () {
    renderizarProductos(productos);
    configurarFiltros();
    configurarModal();
});

// ========== Renderizar productos ==========
function renderizarProductos(listaProductos) {
    const grid = document.getElementById('productos-grid');
    const noResultados = document.getElementById('no-resultados');

    grid.innerHTML = '';

    if (listaProductos.length === 0) {
        noResultados.style.display = 'block';
        return;
    }

    noResultados.style.display = 'none';

    listaProductos.forEach(producto => {
        const card = crearTarjetaProducto(producto);
        grid.appendChild(card);
    });
}

// ========== Crear tarjeta de producto ==========
function crearTarjetaProducto(producto) {
    const card = document.createElement('div');
    card.className = 'producto-card';

    const stockClass = producto.stock > 10 ? 'stock-alto' : producto.stock > 5 ? 'stock-medio' : 'stock-bajo';
    const destacadoBadge = producto.destacado ? '<span class="badge badge-destacado">Destacado</span>' : '';

    card.innerHTML = `
        <div class="producto-imagen">${producto.imagen}</div>
        <div class="producto-info">
            <div class="producto-badges">
                ${destacadoBadge}
                <span class="badge badge-stock ${stockClass}">${producto.stock} disponibles</span>
            </div>
            <h3 class="producto-nombre">${producto.nombre}</h3>
            <p class="producto-descripcion">${producto.descripcion}</p>
            <div class="producto-footer">
                <div class="producto-precio">$${producto.precio} <span class="moneda">MXN</span></div>
                <button class="btn btn-primary btn-small" onclick="abrirModal('${producto.id}')">Ver detalles</button>
            </div>
        </div>
    `;

    return card;
}

// ========== Configurar filtros ==========
function configurarFiltros() {
    const busqueda = document.getElementById('busqueda-producto');
    const filtroCategoria = document.getElementById('filtro-categoria');

    busqueda.addEventListener('input', aplicarFiltros);
    filtroCategoria.addEventListener('change', aplicarFiltros);
}

// ========== Aplicar filtros ==========
function aplicarFiltros() {
    const busqueda = document.getElementById('busqueda-producto').value.toLowerCase();
    const categoria = document.getElementById('filtro-categoria').value;

    productosFiltrados = productos.filter(producto => {
        const coincideBusqueda = producto.nombre.toLowerCase().includes(busqueda) ||
            producto.descripcion.toLowerCase().includes(busqueda);
        const coincideCategoria = categoria === 'todos' || producto.categoria === categoria;

        return coincideBusqueda && coincideCategoria;
    });

    renderizarProductos(productosFiltrados);
}

// ========== Abrir modal ==========
function abrirModal(productoId) {
    const producto = productos.find(p => p.id === productoId);
    if (!producto) return;

    const modal = document.getElementById('modal-producto');
    const modalBody = document.getElementById('modal-body');

    const stockClass = producto.stock > 10 ? 'stock-alto' : producto.stock > 5 ? 'stock-medio' : 'stock-bajo';

    modalBody.innerHTML = `
        <div class="modal-producto-imagen">${producto.imagen}</div>
        <h2 class="modal-producto-nombre">${producto.nombre}</h2>
        <span class="modal-producto-categoria">${producto.categoria}</span>
        <p class="modal-producto-descripcion">${producto.descripcion}</p>
        <div class="modal-producto-stock ${stockClass}">
            Stock disponible: ${producto.stock} unidades
        </div>
        <div class="modal-producto-precio">$${producto.precio} <span class="moneda">MXN</span></div>
        <div class="modal-acciones">
            <a href="mailto:jesus.cisneros@outlook.com?subject=Consulta sobre ${producto.nombre}&body=Hola, estoy interesado en el producto: ${producto.nombre} ($${producto.precio} MXN)" 
               class="btn btn-primary">
                Consultar por Email
            </a>
            <button class="btn btn-outline" onclick="cerrarModal()">Cerrar</button>
        </div>
    `;

    modal.classList.add('active');
}

// ========== Cerrar modal ==========
function cerrarModal() {
    const modal = document.getElementById('modal-producto');
    modal.classList.remove('active');
}

// ========== Configurar modal ==========
function configurarModal() {
    const modal = document.getElementById('modal-producto');
    const closeBtn = document.getElementById('modal-close');

    if (closeBtn) {
        closeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            cerrarModal();
        });
    }

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            cerrarModal();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            cerrarModal();
        }
    });
}
