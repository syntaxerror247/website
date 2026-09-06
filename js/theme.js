const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.documentElement.dataset.theme = savedTheme;
}


const themeToggle = document.querySelector(".theme-toggle");

if (themeToggle) {
    updateThemeLabel();

    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.dataset.theme || "dark";
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        document.documentElement.dataset.theme = newTheme;

        localStorage.setItem("theme", newTheme);

        updateThemeLabel();
    });

}


function updateThemeLabel() {
    const currentTheme = document.documentElement.dataset.theme || "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
}