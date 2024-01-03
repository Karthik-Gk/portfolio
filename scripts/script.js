document.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#left-pane ul li a');

    function setActiveLink() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');

        sections.forEach((section) => section.classList.remove('active'));
        sections[index].classList.add('active');
    }

    setActiveLink(); // Set active link on load
    window.addEventListener('scroll', setActiveLink);
});
