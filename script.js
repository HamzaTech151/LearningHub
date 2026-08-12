/* =========================
   IMAGE SLIDER
   ========================= */

let slideIndex = 0;

const slides = document.getElementById("slides");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {

    if (index > 2) {
        slideIndex = 0;
    }

    if (index < 0) {
        slideIndex = 2;
    }

    slides.style.transform =
        "translateX(-" + (slideIndex * 100) + "%)";

    dots.forEach(function(dot) {

        dot.classList.remove("active");

    });

    dots[slideIndex].classList.add("active");
}


/* Next Slide */

function nextSlide() {

    slideIndex++;

    if (slideIndex > 2) {
        slideIndex = 0;
    }

    showSlide(slideIndex);
}


/* Previous Slide */

function previousSlide() {

    slideIndex--;

    if (slideIndex < 0) {
        slideIndex = 2;
    }

    showSlide(slideIndex);
}


/* Select Slide */

function currentSlide(index) {

    slideIndex = index;

    showSlide(slideIndex);
}


/* Automatic Slider */

setInterval(function() {

    nextSlide();

}, 5000);


/* ==================================================
   SERVICE DETAILS
   ================================================== */

function showDetails(service) {

    const detailsSection =
        document.getElementById("service-details");

    const title =
        document.getElementById("details-title");

    const intro =
        document.getElementById("details-intro");


    /* =====================
       WEB DEVELOPMENT
       ===================== */

    if (service === "web") {

        title.innerText =
            "Web Development";

        intro.innerText =
            "Learn how to create modern, attractive and responsive websites from scratch.";

        document.getElementById("detail-heading-1").innerText =
            "HTML";

        document.getElementById("detail-text-1").innerText =
            "Learn the basic structure of websites using headings, paragraphs, images, links, forms and other HTML elements.";

        document.getElementById("detail-heading-2").innerText =
            "CSS";

        document.getElementById("detail-text-2").innerText =
            "Learn how to style websites using colors, fonts, layouts, spacing, buttons and navigation bars.";

        document.getElementById("detail-heading-3").innerText =
            "JavaScript";

        document.getElementById("detail-text-3").innerText =
            "Learn how to make websites interactive using buttons, events, functions and basic JavaScript.";

        document.getElementById("detail-heading-4").innerText =
            "Responsive Design";

        document.getElementById("detail-text-4").innerText =
            "Learn how to make websites work properly on computers, tablets and mobile phones.";

        setLearningList([

            "HTML fundamentals",

            "CSS styling and layouts",

            "JavaScript basics",

            "Responsive web design",

            "Navigation bars and forms",

            "Building complete websites"

        ]);

    }


    /* =====================
       SEO
       ===================== */

    else if (service === "seo") {

        title.innerText =
            "Search Engine Optimization (SEO)";

        intro.innerText =
            "Learn how to improve website visibility and attract more visitors through search engines.";

        document.getElementById("detail-heading-1").innerText =
            "Keyword Research";

        document.getElementById("detail-text-1").innerText =
            "Learn how to find useful keywords that people search for when looking for products and services.";

        document.getElementById("detail-heading-2").innerText =
            "On-Page SEO";

        document.getElementById("detail-text-2").innerText =
            "Learn how to optimize website content, headings, titles, descriptions and page structure.";

        document.getElementById("detail-heading-3").innerText =
            "Technical SEO";

        document.getElementById("detail-text-3").innerText =
            "Learn basic techniques to improve website performance, mobile usability and search engine accessibility.";

        document.getElementById("detail-heading-4").innerText =
            "SEO Analytics";

        document.getElementById("detail-text-4").innerText =
            "Learn how to monitor website traffic, rankings and SEO performance.";

        setLearningList([

            "Keyword research",

            "On-page SEO",

            "Technical SEO",

            "Website optimization",

            "SEO content basics",

            "SEO performance tracking"

        ]);

    }


    /* =====================
       DIGITAL MARKETING
       ===================== */

    else if (service === "marketing") {

        title.innerText =
            "Digital Marketing";

        intro.innerText =
            "Learn how to promote businesses, products and services using digital platforms.";

        document.getElementById("detail-heading-1").innerText =
            "Social Media Marketing";

        document.getElementById("detail-text-1").innerText =
            "Learn how businesses can use social media platforms to connect with their audience.";

        document.getElementById("detail-heading-2").innerText =
            "Content Marketing";

        document.getElementById("detail-text-2").innerText =
            "Learn how to create useful and engaging content to attract and inform customers.";

        document.getElementById("detail-heading-3").innerText =
            "Online Advertising";

        document.getElementById("detail-text-3").innerText =
            "Learn the basic concepts of online advertising and how businesses promote their products online.";

        document.getElementById("detail-heading-4").innerText =
            "Email Marketing";

        document.getElementById("detail-text-4").innerText =
            "Learn how businesses use email campaigns to communicate with customers and promote offers.";

        setLearningList([

            "Social media marketing",

            "Content marketing",

            "Online advertising",

            "Email marketing",

            "Digital branding",

            "Marketing campaign basics"

        ]);

    }


    /* SHOW DETAILS */

    detailsSection.style.display = "block";


    /* SMOOTH SCROLL */

    detailsSection.scrollIntoView({

        behavior: "smooth"

    });

}


/* =========================
   LEARNING LIST
   ========================= */

function setLearningList(items) {

    const list =
        document.getElementById("learning-list");

    list.innerHTML = "";

    items.forEach(function(item) {

        const li =
            document.createElement("li");

        li.innerText = item;

        list.appendChild(li);

    });

}


/* =========================
   CLOSE DETAILS
   ========================= */

function hideDetails() {

    const detailsSection =
        document.getElementById("service-details");

    detailsSection.style.display = "none";
}


/* =========================
   EXPLORE SERVICES BUTTON
   ========================= */

function goToServices() {

    document
        .getElementById("services")
        .scrollIntoView({

            behavior: "smooth"

        });

}


/* =========================
   SEARCH
   ========================= */

function searchWebsite() {

    const searchInput =
        document.getElementById("searchInput");

    const searchText =
        searchInput.value.toLowerCase().trim();


    if (searchText === "") {

        alert("Please enter something to search.");

        return;

    }


    if (
        searchText.includes("web") ||
        searchText.includes("development") ||
        searchText.includes("html") ||
        searchText.includes("css") ||
        searchText.includes("javascript")
    ) {

        showDetails("web");

    }


    else if (
        searchText.includes("seo") ||
        searchText.includes("search")
    ) {

        showDetails("seo");

    }


    else if (
        searchText.includes("marketing") ||
        searchText.includes("social media")
    ) {

        showDetails("marketing");

    }


    else {

        alert(
            "Sorry, no information found. Try Web Development, SEO or Digital Marketing."
        );

    }

}


/* ==================================================
   CONTACT FORM
   ================================================== */

function submitForm(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you " +
        name +
        "! Your message has been received."
    );

    document
        .getElementById("contactForm")
        .reset();

}


/* ==================================================
   OPTION 7
   ANIMATED STATISTICS / COUNTERS
   ================================================== */

const counters =
    document.querySelectorAll(".counter");

let countersStarted = false;


function startCounters() {

    if (countersStarted) {
        return;
    }

    countersStarted = true;

    counters.forEach(function(counter) {

        const target =
            Number(counter.getAttribute("data-target"));

        let count = 0;

        const increment =
            target / 100;

        const updateCounter = setInterval(function() {

            count += increment;

            if (count >= target) {

                counter.innerText =
                    target + (target === 95 ? "%" : "+");

                clearInterval(updateCounter);

            }

            else {

                counter.innerText =
                    Math.floor(count) +
                    (target === 95 ? "%" : "+");

            }

        }, 20);

    });

}


/* Start counters when user reaches statistics section */

const statsSection =
    document.querySelector(".stats-section");


const statsObserver =
    new IntersectionObserver(function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                startCounters();

            }

        });

    }, {
        threshold: 0.4
    });


if (statsSection) {

    statsObserver.observe(statsSection);

}


/* ==================================================
   OPTION 12
   DARK MODE
   ================================================== */

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

    const button =
        document.getElementById("darkModeButton");


    if (
        document.body.classList.contains("dark-mode")
    ) {

        button.innerText = "☀️";

        localStorage.setItem(
            "learningHubDarkMode",
            "enabled"
        );

    }

    else {

        button.innerText = "🌙";

        localStorage.setItem(
            "learningHubDarkMode",
            "disabled"
        );

    }

}


/* Remember Dark Mode */

window.addEventListener("DOMContentLoaded", function() {

    const darkMode =
        localStorage.getItem("learningHubDarkMode");

    const button =
        document.getElementById("darkModeButton");


    if (darkMode === "enabled") {

        document.body.classList.add("dark-mode");

        button.innerText = "☀️";

    }

});


/* ==================================================
   OPTION 13
   BACK TO TOP BUTTON
   ================================================== */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", function() {

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    }

    else {

        backToTop.style.display = "none";

    }

});


function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}