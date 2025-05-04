(function () {
    const controls = document.querySelectorAll(".control");
    controls.forEach(button => {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = button.dataset.id;
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // On index.html: Toggle sections
                document.querySelector(".active-btn").classList.remove("active-btn");
                this.classList.add("active-btn");
                document.querySelector(".active").classList.remove("active");
                targetSection.classList.add("active");
            } else {
                // On moles_segmentation.html: Redirect to index.html#section
                window.location.href = `index.html#${targetId}`;
            }
        });
    });

    // Theme toggle
    const themeBtn = document.querySelector(".theme-btn");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
        });
    }

    // Apply saved theme and handle hash navigation
    window.addEventListener("load", () => {
        if (localStorage.getItem("theme") === "light") {
            document.body.classList.add("light-mode");
        }

        const hash = window.location.hash.replace("#", "");
        if (hash) {
            const targetSection = document.getElementById(hash);
            if (targetSection) {
                document.querySelector(".active").classList.remove("active");
                targetSection.classList.add("active");
                document.querySelector(".active-btn").classList.remove("active-btn");
                const targetButton = document.querySelector(`.control[data-id="${hash}"]`);
                if (targetButton) {
                    targetButton.classList.add("active-btn");
                }
            }
        }
    });
})();