// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});

// Contact / Order form
document.getElementById('orderForm').addEventListener('submit', e => {
    e.preventDefault();
    alert('Thanks! We received your order. We will contact you via Discord or Email.');
});
