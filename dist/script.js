window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

if (document.cookie) {
    document.querySelector(".intro-background").remove();
    document.querySelector(".waveTop").classList.remove("waveTop");
    document.querySelector(".waveBottom").classList.remove("waveBottom");
    document.querySelector(".title").classList.remove("title");
    document
        .querySelector(".shortcutAnimation")
        .classList.remove("shortcutAnimation");
    document.body.classList.replace("overflow-hidden", "overflow-x-hidden");
}

document.cookie = `visited = true`;

const skillsText = document.getElementById("skills-text");
const projectText = document.getElementById("project-text");
const contactText = document.getElementById("contact-text");
const gamesser = document.getElementById("gamesser");
const keytab = document.getElementById("keytab");
const pigeon = document.getElementById("pigeon");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.target.matches("#skills-text")) {
                if (entry.isIntersecting) {
                    skillsText.classList.add("move-left");
                    observer.unobserve(skillsText);
                    return;
                }
            }
            if (entry.target.matches("#project-text")) {
                if (entry.isIntersecting) {
                    projectText.classList.add("move-down");
                    observer.unobserve(projectText);
                    return;
                }
            }
            if (entry.target.matches("#contact-text")) {
                if (entry.isIntersecting) {
                    contactText.classList.add("move-down");
                    observer.unobserve(contactText);
                    return;
                }
            }
            if (entry.target.matches("#keytab")) {
                if (entry.isIntersecting) {
                    keytab.classList.add("appear");
                    gamesser.classList.add("move-right");
                    pigeon.classList.add("move-left");
                    observer.unobserve(keytab);
                    return;
                }
            }
        });
    },
    {
        rootMargin: "-100px",
    }
);
observer.observe(skillsText);
observer.observe(projectText);
observer.observe(contactText);
observer.observe(keytab);
