/**
 * Google Analytics 4 y Cookie Consent
 */

// ========== Configuración de Google Analytics ==========
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // REEMPLAZAR con tu Measurement ID real

// ========== Inicializar Google Analytics ==========
function initGoogleAnalytics() {
    // Verificar si el usuario ya dio consentimiento
    const cookieConsent = localStorage.getItem('cookieConsent');

    if (cookieConsent === 'accepted') {
        loadGoogleAnalytics();
    } else if (cookieConsent === null) {
        // Mostrar banner de cookies si no ha respondido
        showCookieBanner();
    }
}

// ========== Cargar Google Analytics ==========
function loadGoogleAnalytics() {
    // Crear script tag para gtag.js
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Inicializar gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
        'anonymize_ip': true, // Anonimizar IP para cumplir con GDPR/LFPDPPP
        'cookie_flags': 'SameSite=None;Secure'
    });

    window.gtag = gtag;

    console.log('Google Analytics cargado');
}

// ========== Mostrar banner de cookies ==========
function showCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.style.display = 'block';
    }
}

// ========== Ocultar banner de cookies ==========
function hideCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.style.display = 'none';
    }
}

// ========== Aceptar cookies ==========
function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    hideCookieBanner();
    loadGoogleAnalytics();
}

// ========== Rechazar cookies ==========
function rejectCookies() {
    localStorage.setItem('cookieConsent', 'rejected');
    hideCookieBanner();
}

// ========== Configurar banner de cookies ==========
function setupCookieBanner() {
    const acceptBtn = document.getElementById('cookie-accept');
    const rejectBtn = document.getElementById('cookie-reject');

    if (acceptBtn) {
        acceptBtn.addEventListener('click', acceptCookies);
    }

    if (rejectBtn) {
        rejectBtn.addEventListener('click', rejectCookies);
    }
}

// ========== Rastrear evento personalizado ==========
function trackEvent(eventName, eventParams = {}) {
    if (window.gtag && localStorage.getItem('cookieConsent') === 'accepted') {
        gtag('event', eventName, eventParams);
    }
}

// ========== Exportar funciones ==========
window.analytics = {
    init: initGoogleAnalytics,
    trackEvent: trackEvent,
    acceptCookies: acceptCookies,
    rejectCookies: rejectCookies
};

// ========== Inicializar al cargar ==========
document.addEventListener('DOMContentLoaded', function () {
    setupCookieBanner();
    initGoogleAnalytics();
});
