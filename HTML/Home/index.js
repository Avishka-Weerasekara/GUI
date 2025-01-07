const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Add scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#1a1a1a';
    } else {
        navbar.style.background = '#1a1a1a';
    }
});
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('.dropbtn');
    
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdowns.forEach(d => {
            if (d !== dropdown) {
                d.classList.remove('active');
            }
        });
        dropdown.classList.toggle('active');
    });
});

// Update your existing document click listener
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

async function fetchMenuItems(category) {
    try {
        const response = await fetch(`http://localhost:5000/api/menu/${category}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching menu:', error);
        return [];
    }
}

// Make reservation
async function makeReservation(reservationData) {
    try {
        const response = await fetch('http://localhost:5000/api/reservations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reservationData)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error making reservation:', error);
        throw error;
    }
}