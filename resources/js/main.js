// Navigasi antar halaman
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Fungsi untuk menampilkan halaman tertentu
    function showPage(pageId) {
        pages.forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(pageId).classList.add('active');
    }

    // Event listener untuk setiap link navigasi
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);

            // Tutup menu navigasi di perangkat mobile
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Toggle menu navigasi di perangkat mobile
    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Form kontak
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Pesan Anda telah berhasil dikirim!');
            contactForm.reset();
        });
    }
});
