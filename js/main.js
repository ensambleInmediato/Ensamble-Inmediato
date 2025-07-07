// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Navegación responsive
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Animación de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// concert-calendar.js
class ConcertCalendar {
    constructor() {
        this.concerts = [];
    }

    addConcert(date, title, location) {
        this.concerts.push({ date, title, location });
        this.renderConcerts();
    }

    renderConcerts() {
        const container = document.querySelector('.concert-list');
        if (!container) return;

        container.innerHTML = this.concerts
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map(concert => `
                <div class="concert-item">
                    <div class="date">${this.formatDate(concert.date)}</div>
                    <div class="details">
                        <h3>${concert.title}</h3>
                        <p>${concert.location}</p>
                    </div>
                    <a href="#" class="btn">Reservar</a>
                </div>
            `).join('');
    }

    formatDate(date) {
        const d = new Date(date);
        return d.toLocaleDateString('es-ES', {
            month: 'short',
            day: 'numeric'
        }).toUpperCase();
    }
}

// Inicializar calendario
const calendar = new ConcertCalendar();

// gallery.js
const gallery = {
    init() {
        this.setupLightbox();
        this.setupFilters();
    },

    setupLightbox() {
        const images = document.querySelectorAll('.gallery-item img');
        images.forEach(img => {
            img.addEventListener('click', () => {
                this.openLightbox(img.src);
            });
        });
    },

    setupFilters() {
        const filters = document.querySelectorAll('.gallery-filter button');
        filters.forEach(filter => {
            filter.addEventListener('click', () => {
                this.filterGallery(filter.dataset.category);
            });
        });
    }
};