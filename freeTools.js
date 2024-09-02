window.addEventListener('scroll', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'inline';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

document.getElementById('scrollToTopBtn').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});