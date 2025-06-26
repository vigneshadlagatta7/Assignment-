document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('#mainNavbar .nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close the navbar toggler on small screens after clicking a link
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarToggler && navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });

    // Add 'scrolled' class to navbar on scroll
    const navbar = document.getElementById('mainNavbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Add class after scrolling 50px
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Optional: Form submission handler (example - you'll need a backend for actual sending)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            alert('Thank you for your message! (This is a demo. Form submission requires a backend.)');

            // You would typically send this data to a server using fetch() or XMLHttpRequest
            // Example:
            /*
            const formData = new FormData(this);
            fetch('your-backend-endpoint.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Message sent successfully!');
                contactForm.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('There was an error sending your message.');
            });
            */

            contactForm.reset(); // Clear the form after submission (for demo)
        });
    }

    // Optional: Animate sections on scroll using Intersection Observer (more advanced, but good for UX)
    const sections = document.querySelectorAll('section');
    const options = {
        root: null, // relative to viewport
        threshold: 0.1, // trigger when 10% of the section is visible
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add an animation class, e.g., using Animate.css if linked
                // For this example, we'll just log
                // console.log(`${entry.target.id} is in view`);
                // You could add a class here like entry.target.classList.add('animate__fadeInUp');
                // if you included animate.css
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

});