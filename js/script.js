        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Form submission handling
        document.getElementById('contactForm').addEventListener('submit', function (e) {
            // No necesitas e.preventDefault() aquí, ya que queremos que el formulario se envíe
            // Puedes agregar un mensaje de éxito o redireccionar al usuario después del envío
            document.getElementById('responseMessage').textContent = '¡Gracias por tu mensaje! Me pondré en contacto pronto.';
        });
            // Script para manejar el menú desplegable en móviles
    document.getElementById('menuButton').addEventListener('click', function () {
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }
    });