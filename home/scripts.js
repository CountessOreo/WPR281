document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    // Scroll event for highlighting active section
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    let activeLink = document.querySelector(`header nav a[href*=${id}]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                });
            }
        });
    };

    // Toggle navbar visibility
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // Hide navbar on click outside
    document.addEventListener('click', event => {
        if (!menuIcon.contains(event.target) && !navbar.contains(event.target)) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        }
    });

    // Flip certification cards
    document.querySelectorAll('.certification-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    // Toggle projects based on difficulty level
    function toggleProjects(level) {
        var levels = ['beginner', 'intermediate', 'advanced'];

        levels.forEach(function(lvl) {
            var projectList = document.getElementById(lvl);
            if (projectList) {
                projectList.classList.remove('hidden');
            }
        });

        if (level !== 'all') {
            levels.forEach(function(lvl) {
                var projectList = document.getElementById(lvl);
                if (projectList && lvl !== level) {
                    projectList.classList.add('hidden');
                }
            });
        }
    }
});
