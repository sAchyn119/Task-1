document.addEventListener('DOMContentLoaded', () => {
    // 1. Toggle Mobile Menu
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });

        // Close menu when a nav link is clicked (for smoother mobile navigation)
        const navLinks = navList.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) { // Only for mobile view
                    navList.classList.remove('active');
                }
            });
        });
    }

    // 2. Dynamic Content Change
    const changeContentBtn = document.getElementById('changeContentBtn');
    const dynamicContent = document.getElementById('dynamicContent');
    let contentToggle = true;

    if (changeContentBtn && dynamicContent) {
        changeContentBtn.addEventListener('click', () => {
            if (contentToggle) {
                dynamicContent.textContent = "We are constantly innovating and striving for excellence in all our endeavors. Our commitment is to our users and their satisfaction. This is the new dynamic content!";
                changeContentBtn.textContent = "Revert Content";
            } else {
                dynamicContent.textContent = "We are a passionate team dedicated to creating high-quality web experiences. Our mission is to provide valuable information and engaging content to our users. This text can change dynamically!";
                changeContentBtn.textContent = "Learn More";
            }
            contentToggle = !contentToggle; // Toggle the state
        });
    }

    // 3. Simple Form Validation
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            formMessage.classList.remove('success', 'error', 'hidden'); // Reset classes

            if (name === '' || email === '' || message === '') {
                formMessage.textContent = 'Please fill in all fields.';
                formMessage.classList.add('error');
            } else if (!isValidEmail(email)) {
                formMessage.textContent = 'Please enter a valid email address.';
                formMessage.classList.add('error');
            } else {
                formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                formMessage.classList.add('success');
                contactForm.reset(); // Clear the form
            }
            formMessage.classList.remove('hidden'); // Show message
        });
    }

    function isValidEmail(email) {
        // Simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});