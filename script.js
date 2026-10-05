/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.querySelector(".cursor");
const cursorRing = document.querySelector(".cursor-ring");

if (cursor && cursorRing) {

    document.addEventListener("mousemove", (event) => {

        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;

        cursorRing.style.left = `${event.clientX}px`;
        cursorRing.style.top = `${event.clientY}px`;

    });

}


/* =========================
   CURSOR HOVER
========================= */

const interactiveElements = document.querySelectorAll(
    "a, button, .project-card, .skill-card, .certificate-card, .service-card"
);

interactiveElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {
        document.body.classList.add("cursor-hover");
    });

    element.addEventListener("mouseleave", () => {
        document.body.classList.remove("cursor-hover");
    });

});


/* =========================
   MOBILE MENU
========================= */

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });


    document.querySelectorAll(".mobile-menu a").forEach((link) => {

        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });

    });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* =========================
   CERTIFICATE IMAGE CHECK
========================= */

document
    .querySelectorAll(".certificate-image img")
    .forEach((image) => {

        image.addEventListener("error", () => {

            image.style.opacity = "0.15";

            console.warn(
                `Certificate image not found: ${image.src}`
            );

        });

    });


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5, 7, 10, 0.9)";

    } else {

        navbar.style.background =
            "rgba(5, 7, 10, 0.65)";

    }

});


/* =========================
   ACTIVE NAV LINK
========================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                const activeLink =
                    document.querySelector(
                        `.nav-links a[href="#${entry.target.id}"]`
                    );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            }

        });

    },
    {
        rootMargin: "-35% 0px -55% 0px"
    }
);


sections.forEach((section) => {
    sectionObserver.observe(section);
});


/* =========================
   IMAGE PARALLAX
========================= */

const heroBackground =
    document.querySelector(".hero-background");

window.addEventListener("scroll", () => {

    if (!heroBackground) return;

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        heroBackground.style.transform =
            `scale(1.04) translateY(${scrollPosition * 0.12}px)`;

    }

});


/* =========================
   CURRENT YEAR
========================= */

const yearElement =
    document.querySelector(".footer-bottom span");

if (yearElement) {

    yearElement.textContent =
        `© ${new Date().getFullYear()} Rohit Solanke`;

}