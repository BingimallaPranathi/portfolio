document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Smooth scrolling
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Reveal animations on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll("section").forEach(section => {
        observer.observe(section);
    });

    // Skill Progress Bars Fix
    const skills = [
        { element: '.html .progress', value: 80 },
        { element: '.javascript .progress', value: 60 },
        { element: '.python .progress', value: 85 },
        { element: '.c .progress', value: 80 },
        { element: '.database .progress', value: 80 },
        { element: '.ml .progress', value: 70 },
        { element: '.php .progress', value: 65 }
    ];

    skills.forEach(skill => {
        const progressBar = document.querySelector(skill.element);
        if (progressBar) {  // Check if the element exists
            progressBar.style.width = `${skill.value}%`;

            const percentageText = progressBar.querySelector('.percentage');
            if (percentageText) {
                percentageText.textContent = `${skill.value}%`;
            }
        } else {
            console.error("Progress bar not found for:", skill.element);
        }
    });
});
