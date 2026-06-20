// Preloader
const preloader = document.getElementById('preloader');
const loaderBar = document.getElementById('loader-bar');
const loaderText = document.getElementById('loader-text');

if (preloader) {
    const texts = ["Awakening your senses...", "Grinding fresh beans...", "Brewing perfection...", "Almost there..."];
    let textIndex = 0;
    let progress = 0;

    loaderText.textContent = texts[textIndex];

    const interval = setInterval(() => {
        progress += 1;
        loaderBar.style.width = progress + '%';

        if (progress > 25 && textIndex === 0) {
            textIndex++;
            loaderText.textContent = texts[textIndex];
        }
        if (progress > 50 && textIndex === 1) {
            textIndex++;
            loaderText.textContent = texts[textIndex];
        }
        if (progress > 75 && textIndex === 2) {
            textIndex++;
            loaderText.textContent = texts[textIndex];
        }
        if (progress >= 100) {Optimizing tool selection
            clearInterval(interval);
            setTimeout(() => {
                preloader.classList.add('hide');
            }, 300);
        }
    }, 20);
}


document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        // Here you would also save the preference to localStorage
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const q = item.querySelector('.faq-q');
        q.addEventListener('click', () => {
            // Close other active items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-a').style.display = 'none';
                }
            });

            item.classList.toggle('active');
            const a = item.querySelector('.faq-a');
            if (item.classList.contains('active')) {
                a.style.display = 'block';
            } else {
                a.style.display = 'none';
            }
        });
    });

    // Animation on scroll
    const animatedElements = document.querySelectorAll('.animate-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));
});

// Note: The Three.js and GSAP parts for the hero animation are complex
// and would require significant setup. They are omitted here for brevity,
// but in a real project, you would include those libraries and the
// corresponding animation code.
