const observerOptions = {
    root: null,
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
};

const animateOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
        }
    });
};

const elementsToAnimate = document.querySelectorAll(
    ".vision-section, .overview-company, .core-values"
);

const observer = new IntersectionObserver(animateOnScroll, observerOptions);
elementsToAnimate.forEach((element) => observer.observe(element));