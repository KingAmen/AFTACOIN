document.addEventListener('DOMContentLoaded', () => {
    // Highlight the active page link in the navigation
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';

    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });

    // Handle Contact Form submission (without server-side logic)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }

    // Handle Subscribe Form submission
    const subscribeForm = document.getElementById('subscribeForm');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('subscribeEmail').value;
            if (email) {
                alert(`Thank you for subscribing with ${email}!`);
                subscribeForm.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    // Pie Chart Animation Logic
    const pieChartContainer = document.querySelector('.pie-chart-container');
    if (pieChartContainer) {
        const segments = [
            { label: 'Community & Adoption', percentage: 50, color: 'var(--color-community)' },
            { label: 'Founders & Team', percentage: 15, color: 'var(--color-founders)' },
            { label: 'Ecosystem Growth', percentage: 20, color: 'var(--color-ecosystem)' },
            { label: 'Reserve & Treasury', percentage: 10, color: 'var(--color-reserve)' },
            { label: 'Charity & Unity Fund', percentage: 5, color: 'var(--color-charity)' }
        ];

        let gradientString = 'conic-gradient(';
        let currentPercentage = 0;

        segments.forEach((segment, index) => {
            if (index > 0) {
                gradientString += ', ';
            }
            gradientString += `${segment.color} ${currentPercentage}% ${currentPercentage + segment.percentage}%`;
            currentPercentage += segment.percentage;
        });
        gradientString += ')';

        const pieChartDiv = document.createElement('div');
        pieChartDiv.className = 'pie-chart';
        pieChartDiv.style.background = gradientString;
        pieChartContainer.innerHTML = '';
        pieChartContainer.appendChild(pieChartDiv);
    }
    
    // Hero Slideshow Logic
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlides() {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Increment index and loop back to the start if necessary
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        // Show the current slide
        slides[slideIndex - 1].classList.add('active');
    }

    // Show the first slide immediately on load
    if (slides.length > 0) {
        slides[0].classList.add('active');
        // Start the slideshow, changing every 5 seconds
        setInterval(showSlides, 5000);
    }
});