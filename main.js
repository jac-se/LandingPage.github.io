/**
 * Archivo: main.js
 * Propósito: JavaScript vanilla para catálogo de productos JACC Software
 * Incluye: renderizado dinámico, filtros, búsqueda, modal, y validación de formularios
 */

// ========== Datos de productos ==========
const productos = [
    {
        id: 'pdf-obfuscator',
        nombre: 'JACC PDF Obfuscator',
        descripcion: 'Ofusca datos sensibles en documentos PDF de forma sencilla y segura. Protege información confidencial antes de compartir tus documentos.',
        categoria: 'Escritorio',
        precio: 399,
        moneda: 'MXN',
        esGratis: false,
        tieneDemo: true,
        urlCompra: 'https://paypal.com/checkout/jacc-pdf-obfuscator',
        urlDemo: 'https://jacc-software.com/descargas/pdf-obfuscator-demo.zip',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        estado: 'Pro'
    },
    {
        id: 'backup',
        nombre: 'JACC Backup',
        descripcion: 'Programa para hacer respaldos automáticos de tus archivos importantes. Configura una vez y olvídate de perder información.',
        categoria: 'Utilidad',
        precio: 299,
        moneda: 'MXN',
        esGratis: false,
        tieneDemo: true,
        urlCompra: 'https://gumroad.com/l/jacc-backup',
        urlDemo: 'https://jacc-software.com/descargas/backup-demo.zip',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        estado: 'Pro'
    },
    {
        id: 'inventory',
        nombre: 'JACC Inventory',
        descripcion: 'Sistema sencillo de inventario para pequeños negocios. Controla tu stock, ventas y proveedores desde una interfaz intuitiva.',
        categoria: 'Web',
        precio: 499,
        moneda: 'MXN',
        esGratis: false,
        tieneDemo: true,
        urlCompra: 'https://mercadopago.com/checkout/jacc-inventory',
        urlDemo: 'https://demo.jacc-software.com/inventory',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        estado: 'Pro'
    },
    {
        id: 'notes',
        nombre: 'JACC Notes',
        descripcion: 'Aplicación gratuita para tomar notas rápidas con sincronización en la nube. Organiza tus ideas con etiquetas y búsqueda inteligente.',
        categoria: 'Android',
        precio: 0,
        moneda: 'MXN',
        esGratis: true,
        tieneDemo: false,
        urlCompra: null,
        urlDemo: null,
        urlGooglePlay: 'https://play.google.com/store/apps/details?id=cisneros.nota',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        estado: 'Gratis',
        esBeta: false
    },
    {
        id: 'image-optimizer',
        nombre: 'JACC Image Optimizer',
        descripcion: 'Optimiza y comprime imágenes sin perder calidad. Procesa múltiples archivos en lote y ahorra espacio en disco.',
        categoria: 'Escritorio',
        precio: 0,
        moneda: 'MXN',
        esGratis: true,
        tieneDemo: false,
        urlCompra: null,
        urlDemo: 'https://jacc-software.com/descargas/image-optimizer.zip',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        estado: 'Gratis'
    },
    {
        id: 'code-snippets',
        nombre: 'JACC Code Snippets',
        descripcion: 'Gestor de fragmentos de código para desarrolladores. Guarda, organiza y comparte tus snippets favoritos con resaltado de sintaxis.',
        categoria: 'Escritorio',
        precio: 249,
        moneda: 'MXN',
        esGratis: false,
        tieneDemo: true,
        urlCompra: 'https://gumroad.com/l/jacc-code-snippets',
        urlDemo: 'https://jacc-software.com/descargas/code-snippets-demo.zip',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        estado: 'Nuevo'
    },
    {
        id: 'task-manager',
        nombre: 'JACC Task Manager',
        descripcion: 'Administrador de tareas con metodología Kanban. Visualiza tu flujo de trabajo y aumenta tu productividad personal o en equipo.',
        categoria: 'Web',
        precio: 349,
        moneda: 'MXN',
        esGratis: false,
        tieneDemo: true,
        urlCompra: 'https://stripe.com/checkout/jacc-task-manager',
        urlDemo: 'https://demo.jacc-software.com/task-manager',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        estado: 'Pro'
    },
    {
        id: 'task-app',
        nombre: 'JACC Task App',
        descripcion: 'Aplicación Android para gestión de tareas con recordatorios inteligentes. Próximamente disponible en Google Play.',
        categoria: 'Android',
        precio: 0,
        moneda: 'MXN',
        esGratis: true,
        tieneDemo: false,
        urlCompra: null,
        urlDemo: null,
        urlGooglePlay: null,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        estado: 'Próximamente',
        esBeta: true
    },
    {
        id: 'expense-tracker',
        nombre: 'JACC Expense Tracker',
        descripcion: 'Controla tus gastos personales y genera reportes detallados. Versión beta disponible próximamente.',
        categoria: 'Android',
        precio: 0,
        moneda: 'MXN',
        esGratis: true,
        tieneDemo: false,
        urlCompra: null,
        urlDemo: null,
        urlGooglePlay: null,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        estado: 'Próximamente',
        esBeta: true
    }
];

// ========== Testimonios predeterminados ==========
const testimoniosPredeterminados = [
    {
        nombre: 'Roberto Sánchez',
        puesto: 'Contador Público',
        texto: 'Las herramientas de JACC Software son exactamente lo que necesitaba. Fáciles de usar y muy efectivas para mi trabajo diario.'
    },
    {
        nombre: 'Laura Méndez',
        puesto: 'Administradora',
        texto: 'Excelente relación calidad-precio. El software funciona perfectamente y el soporte es muy profesional.'
    },
    {
        nombre: 'Juan Cantero',
        puesto: 'Diseñador',
        texto: 'Recomiendo ampliamente JACC Software. Son herramientas prácticas que realmente resuelven problemas del día a día.'
    }
];

// ========== Variables globales ==========
let productosFiltrados = [...productos];

// ========== Inicialización ==========
document.addEventListener('DOMContentLoaded', function () {

    // Renderizar productos inicialmente
    renderizarProductos(productos);

    // Configurar filtros y búsqueda
    configurarFiltros();

    // Configurar navegación suave
    configurarNavegacion();

    // Configurar FAQ
    configurarFAQ();

    // Configurar formulario de contacto
    configurarFormularioContacto();

    // Configurar modal de productos
    configurarModal();

    // Configurar modal beta
    configurarModalBeta();

    // Configurar modal de contacto
    configurarModalContacto();

    // Configurar testimonios
    configurarTestimonios();

    // Renderizar testimonios
    renderizarTestimonios();

});

// ========== Renderizar productos ==========
function renderizarProductos(listaProductos) {
    const grid = document.getElementById('productos-grid');
    const noResultados = document.getElementById('no-resultados');

    // Limpiar grid
    grid.innerHTML = '';

    // Verificar si hay productos
    if (listaProductos.length === 0) {
        noResultados.style.display = 'block';
        return;
    }

    noResultados.style.display = 'none';

    // Crear tarjetas de productos
    listaProductos.forEach(producto => {
        const card = crearTarjetaProducto(producto);
        grid.appendChild(card);
    });
}

// ========== Crear tarjeta de producto ==========
function crearTarjetaProducto(producto) {
    const card = document.createElement('div');
    card.className = 'producto-card';

    // Determinar badge
    let badgeHTML = '';
    if (producto.estado === 'Gratis') {
        badgeHTML = '<span class="badge badge-gratis">Gratis</span>';
    } else if (producto.estado === 'Pro') {
        badgeHTML = '<span class="badge badge-pro">Pro</span>';
    } else if (producto.estado === 'Nuevo') {
        badgeHTML = '<span class="badge badge-nuevo">Nuevo</span>';
    } else if (producto.estado === 'Próximamente') {
        badgeHTML = '<span class="badge badge-proximamente">Próximamente</span>';
    }

    // Determinar precio
    let precioHTML = '';
    if (producto.esGratis) {
        precioHTML = '<div class="producto-precio producto-precio-gratis">Gratis</div>';
    } else {
        precioHTML = `<div class="producto-precio">$${producto.precio} <span class="producto-precio-moneda">${producto.moneda}</span></div>`;
    }

    // Crear botones
    let botonesHTML = `<button class="btn btn-outline btn-small" onclick="abrirModal('${producto.id}')">Ver detalles</button>`;

    // Apps Android con Google Play
    if (producto.categoria === 'Android' && producto.urlGooglePlay) {
        botonesHTML += `<button class="btn btn-primary btn-small" onclick="abrirGooglePlay('${producto.id}')">Ver en Google Play</button>`;
    }
    // Apps Android próximamente - Registro Beta
    else if (producto.categoria === 'Android' && producto.esBeta) {
        botonesHTML += `<button class="btn btn-secondary btn-small" onclick="abrirModalBeta('${producto.id}')">Registrarme en Beta</button>`;
    }
    // Productos normales
    else if (producto.esGratis) {
        if (producto.urlDemo) {
            botonesHTML += `<button class="btn btn-primary btn-small" onclick="descargarGratis('${producto.id}')">Descargar gratis</button>`;
        }
    } else {
        botonesHTML += `<button class="btn btn-primary btn-small" onclick="comprarProducto('${producto.id}')">Comprar</button>`;
        if (producto.tieneDemo && producto.urlDemo) {
            botonesHTML += `<button class="btn btn-secondary btn-small" onclick="descargarDemo('${producto.id}')">Descargar demo</button>`;
        }
    }

    // Agregar video si existe
    let videoHTML = '';
    if (producto.videoUrl) {
        videoHTML = `
            <div class="producto-video">
                <iframe 
                    src="${producto.videoUrl}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        `;
    }

    card.innerHTML = `
        <div class="producto-header">
            <div class="producto-badges">${badgeHTML}</div>
            <h3 class="producto-nombre">${producto.nombre}</h3>
            <div class="producto-categoria">${producto.categoria}</div>
        </div>
        ${videoHTML}
        <p class="producto-descripcion">${producto.descripcion}</p>
        ${precioHTML}
        <div class="producto-acciones">
            ${botonesHTML}
        </div>
    `;

    return card;
}

// ========== Configurar filtros ==========
function configurarFiltros() {
    const busqueda = document.getElementById('busqueda-producto');
    const filtroCategoria = document.getElementById('filtro-categoria');
    const filtroTipo = document.getElementById('filtro-tipo');

    // Búsqueda por texto
    busqueda.addEventListener('input', function () {
        aplicarFiltros();
    });

    // Filtro por categoría
    filtroCategoria.addEventListener('change', function () {
        aplicarFiltros();
    });

    // Filtro por tipo
    filtroTipo.addEventListener('change', function () {
        aplicarFiltros();
    });
}

// ========== Aplicar filtros ==========
function aplicarFiltros() {
    const busqueda = document.getElementById('busqueda-producto').value.toLowerCase();
    const categoria = document.getElementById('filtro-categoria').value;
    const tipo = document.getElementById('filtro-tipo').value;

    productosFiltrados = productos.filter(producto => {
        // Filtro de búsqueda
        const coincideBusqueda = producto.nombre.toLowerCase().includes(busqueda) ||
            producto.descripcion.toLowerCase().includes(busqueda);

        // Filtro de categoría
        const coincideCategoria = categoria === 'todos' || producto.categoria === categoria;

        // Filtro de tipo
        const coincideTipo = tipo === 'todos' || producto.estado === tipo;

        return coincideBusqueda && coincideCategoria && coincideTipo;
    });

    renderizarProductos(productosFiltrados);
}

// ========== Abrir modal de detalles ==========
function abrirModal(productoId) {
    const producto = productos.find(p => p.id === productoId);
    if (!producto) return;

    const modal = document.getElementById('modal-producto');
    const modalBody = document.getElementById('modal-body');

    // Crear contenido del modal
    let precioHTML = '';
    if (producto.esGratis) {
        precioHTML = '<div class="modal-producto-precio">Gratis</div>';
    } else {
        precioHTML = `<div class="modal-producto-precio">$${producto.precio} ${producto.moneda}</div>`;
    }

    let botonesHTML = '';
    if (producto.esGratis) {
        if (producto.urlDemo) {
            botonesHTML = `<button class="btn btn-primary" onclick="descargarGratis('${producto.id}')">Descargar gratis</button>`;
        }
    } else {
        botonesHTML = `<button class="btn btn-primary" onclick="comprarProducto('${producto.id}')">Comprar ahora</button>`;
        if (producto.tieneDemo && producto.urlDemo) {
            botonesHTML += `<button class="btn btn-secondary" onclick="descargarDemo('${producto.id}')">Descargar demo</button>`;
        }
    }

    modalBody.innerHTML = `
        <h2 class="modal-producto-nombre">${producto.nombre}</h2>
        <span class="modal-producto-categoria">${producto.categoria}</span>
        <p class="modal-producto-descripcion">${producto.descripcion}</p>
        ${precioHTML}
        <div class="modal-acciones">
            ${botonesHTML}
        </div>
    `;

    modal.classList.add('active');
}

// ========== Cerrar modal ==========
function cerrarModal() {
    const modal = document.getElementById('modal-producto');
    modal.classList.remove('active');
}

// ========== Configurar modal de productos ==========
function configurarModal() {
    const modal = document.getElementById('modal-producto');
    const closeBtn = document.getElementById('modal-close');

    // Cerrar con botón X
    if (closeBtn) {
        closeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            cerrarModal();
        });
    }

    // Cerrar al hacer clic fuera del modal
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            cerrarModal();
        }
    });

    // Cerrar con tecla ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            cerrarModal();
        }
    });
}

// ========== Comprar producto ==========
function comprarProducto(productoId) {
    const producto = productos.find(p => p.id === productoId);
    if (!producto || !producto.urlCompra) return;

    // Mostrar mensaje de redirección
    alert('Serás redirigido a una pasarela de pago externa segura (PayPal, MercadoPago, Stripe o Gumroad).\n\nTus datos están protegidos y el proceso es 100% seguro.');

    // Aquí se podría integrar seguimiento de conversión o analítica
    // Ejemplo: gtag('event', 'purchase_intent', { product_id: productoId });

    // Abrir URL de compra en nueva pestaña
    window.open(producto.urlCompra, '_blank');

    // Cerrar modal si está abierto
    cerrarModal();
}

// ========== Descargar versión gratuita ==========
function descargarGratis(productoId) {
    const producto = productos.find(p => p.id === productoId);
    if (!producto || !producto.urlDemo) return;

    // Mostrar mensaje de éxito
    alert(`¡Gracias por descargar ${producto.nombre}!\n\nTu descarga comenzará en un momento.`);

    // Abrir URL de descarga
    window.open(producto.urlDemo, '_blank');

    // Cerrar modal si está abierto
    cerrarModal();
}

// ========== Descargar demo ==========
function descargarDemo(productoId) {
    const producto = productos.find(p => p.id === productoId);
    if (!producto || !producto.urlDemo) return;

    // Mostrar mensaje
    alert(`Descargando versión demo de ${producto.nombre}.\n\nLa versión demo tiene funcionalidades limitadas. Compra la versión Pro para acceso completo.`);

    // Abrir URL de demo
    window.open(producto.urlDemo, '_blank');

    // Cerrar modal si está abierto
    cerrarModal();
}

// ========== Abrir Google Play ==========
function abrirGooglePlay(productoId) {
    const producto = productos.find(p => p.id === productoId);
    if (!producto || !producto.urlGooglePlay) return;

    // Abrir Google Play en nueva pestaña
    window.open(producto.urlGooglePlay, '_blank');

    // Cerrar modal si está abierto
    cerrarModal();
}

// ========== Abrir modal de registro beta ==========
function abrirModalBeta(productoId) {
    const producto = productos.find(p => p.id === productoId);
    if (!producto) return;

    const modal = document.getElementById('modal-beta');
    const productoIdInput = document.getElementById('beta-producto-id');
    const modalBody = document.getElementById('modal-beta-body');

    // Guardar ID del producto
    productoIdInput.value = productoId;

    // Actualizar título del modal
    const titulo = modalBody.querySelector('.modal-producto-nombre');
    if (titulo) {
        titulo.textContent = `Registro Beta - ${producto.nombre}`;
    }

    modal.classList.add('active');
}

// ========== Cerrar modal beta ==========
function cerrarModalBeta() {
    const modal = document.getElementById('modal-beta');
    modal.classList.remove('active');
}

// ========== Configurar modal beta ==========
function configurarModalBeta() {
    const modal = document.getElementById('modal-beta');
    const closeBtn = document.getElementById('modal-beta-close');
    const form = document.getElementById('form-beta');

    // Cerrar con botón X
    if (closeBtn) {
        closeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            cerrarModalBeta();
        });
    }

    // Cerrar al hacer clic fuera
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            cerrarModalBeta();
        }
    });

    // Cerrar con ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            cerrarModalBeta();
        }
    });

    // Enviar registro beta
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const productoId = document.getElementById('beta-producto-id').value;
            const nombre = document.getElementById('beta-nombre').value.trim();
            const emailGoogle = document.getElementById('beta-email-google').value.trim();
            const emailPersonal = document.getElementById('beta-email-personal').value.trim();

            if (nombre && emailGoogle && emailPersonal) {
                registrarBeta({
                    productoId,
                    nombre,
                    emailGoogle,
                    emailPersonal,
                    fecha: new Date().toISOString()
                });
                form.reset();
                cerrarModalBeta();
                alert('¡Gracias por registrarte! Te notificaremos cuando la versión beta esté disponible.');
            }
        });
    }
}

// ========== Registrar en beta ==========
function registrarBeta(registro) {
    // Obtener registros guardados
    let registros = localStorage.getItem('registros-beta');
    registros = registros ? JSON.parse(registros) : [];

    // Agregar nuevo registro
    registros.push(registro);

    // Guardar en localStorage
    localStorage.setItem('registros-beta', JSON.stringify(registros));

    console.log('Registro beta guardado:', registro);
}

// ========== Configurar modal de contacto ==========
function configurarModalContacto() {
    const modal = document.getElementById('modal-contacto');
    const closeBtn = document.getElementById('modal-contacto-close');
    const tarjetasContacto = document.querySelectorAll('.servicio-card-contacto');

    // Agregar event listeners a las tarjetas de servicios
    tarjetasContacto.forEach(tarjeta => {
        tarjeta.addEventListener('click', function () {
            const servicio = this.getAttribute('data-servicio');
            abrirModalContacto(servicio);
        });
    });

    // Cerrar con botón X
    if (closeBtn) {
        closeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            cerrarModalContacto();
        });
    }

    // Cerrar al hacer clic fuera
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            cerrarModalContacto();
        }
    });

    // Cerrar con ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            cerrarModalContacto();
        }
    });
}

// ========== Abrir modal de contacto ==========
function abrirModalContacto(servicio) {
    const modal = document.getElementById('modal-contacto');
    const titulo = document.getElementById('modal-contacto-titulo');
    const btnWhatsapp = document.getElementById('btn-whatsapp');
    const btnEmail = document.getElementById('btn-email');

    // Actualizar título
    titulo.textContent = `Contacto - ${servicio}`;

    // Generar mensaje de WhatsApp personalizado
    const mensaje = `Hola, estoy interesado en el servicio de *${servicio}*. Me gustaría obtener más información.`;
    const whatsappUrl = `https://wa.me/525513880510?text=${encodeURIComponent(mensaje)}`;
    btnWhatsapp.href = whatsappUrl;

    // Actualizar subject del email
    const emailSubject = `Consulta sobre ${servicio}`;
    const emailBody = `Hola,\n\nEstoy interesado en el servicio de ${servicio}. Me gustaría obtener más información.\n\nGracias.`;
    btnEmail.href = `mailto:jesus.cisneros@outlook.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    modal.classList.add('active');
}

// ========== Cerrar modal de contacto ==========
function cerrarModalContacto() {
    const modal = document.getElementById('modal-contacto');
    modal.classList.remove('active');
}

// ========== Configurar testimonios ==========
function configurarTestimonios() {
    const btnAgregar = document.getElementById('btn-agregar-testimonio');
    const modalTestimonio = document.getElementById('modal-testimonio');
    const closeBtn = document.getElementById('modal-testimonio-close');
    const form = document.getElementById('form-testimonio');

    // Abrir modal de testimonio
    if (btnAgregar) {
        btnAgregar.addEventListener('click', function () {
            modalTestimonio.classList.add('active');
        });
    }

    // Cerrar modal de testimonio
    if (closeBtn) {
        closeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            cerrarModalTestimonio();
        });
    }

    // Cerrar al hacer clic fuera
    modalTestimonio.addEventListener('click', function (e) {
        if (e.target === modalTestimonio) {
            cerrarModalTestimonio();
        }
    });

    // Cerrar con ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modalTestimonio.classList.contains('active')) {
            cerrarModalTestimonio();
        }
    });

    // Enviar testimonio
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const nombre = document.getElementById('testimonio-nombre').value.trim();
            const puesto = document.getElementById('testimonio-puesto').value.trim();
            const texto = document.getElementById('testimonio-texto').value.trim();

            if (nombre && puesto && texto) {
                agregarTestimonio({ nombre, puesto, texto });
                form.reset();
                cerrarModalTestimonio();
                alert('¡Gracias por compartir tu testimonio!');
            }
        });
    }
}

// ========== Cerrar modal de testimonio ==========
function cerrarModalTestimonio() {
    const modal = document.getElementById('modal-testimonio');
    modal.classList.remove('active');
}

// ========== Agregar testimonio ==========
function agregarTestimonio(testimonio) {
    // Obtener testimonios guardados
    let testimonios = obtenerTestimonios();

    // Agregar nuevo testimonio
    testimonios.push(testimonio);

    // Guardar en localStorage
    localStorage.setItem('testimonios', JSON.stringify(testimonios));

    // Renderizar de nuevo
    renderizarTestimonios();
}

// ========== Obtener testimonios ==========
function obtenerTestimonios() {
    const guardados = localStorage.getItem('testimonios');
    if (guardados) {
        return JSON.parse(guardados);
    }
    return [];
}

// ========== Renderizar testimonios ==========
function renderizarTestimonios() {
    const grid = document.querySelector('.testimonios-grid');
    if (!grid) return;

    // Limpiar grid
    grid.innerHTML = '';

    // Combinar testimonios predeterminados con los guardados
    const testimoniosUsuarios = obtenerTestimonios();
    const todosTestimonios = [...testimoniosPredeterminados, ...testimoniosUsuarios];

    // Crear tarjetas
    todosTestimonios.forEach(testimonio => {
        const card = document.createElement('div');
        card.className = 'testimonio-card';

        card.innerHTML = `
            <p class="testimonio-texto">
                "${testimonio.texto}"
            </p>
            <div class="testimonio-autor">
                <strong>${testimonio.nombre}</strong>
                <span>${testimonio.puesto}</span>
            </div>
        `;

        grid.appendChild(card);
    });
}

// ========== Navegación suave ==========
function configurarNavegacion() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll suave para el botón del hero
    const heroBtn = document.querySelector('.hero .btn-primary');
    if (heroBtn) {
        heroBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector('#productos');
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// ========== Configurar FAQ ==========
function configurarFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function () {
            // Cerrar otros items (opcional)
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle del item actual
            item.classList.toggle('active');
        });
    });
}

// ========== Configurar formulario de contacto ==========
function configurarFormularioContacto() {
    const form = document.getElementById('contacto-form');
    if (!form) return;

    const nombre = document.getElementById('contacto-nombre');
    const email = document.getElementById('contacto-email');
    const mensaje = document.getElementById('contacto-mensaje');
    const successDiv = document.getElementById('contacto-success');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validar campos
        if (nombre.value.trim() === '' || email.value.trim() === '' || mensaje.value.trim() === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        // Mostrar mensaje de éxito
        form.style.display = 'none';
        successDiv.style.display = 'block';

        // Aquí se podría integrar con un backend para enviar el email
        // Ejemplo: fetch('/api/contacto', { method: 'POST', body: JSON.stringify({ nombre, email, mensaje }) })

        console.log('Formulario de contacto enviado:', {
            nombre: nombre.value,
            email: email.value,
            mensaje: mensaje.value
        });
    });
}

// ========== Efecto de scroll en header ==========
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
});
