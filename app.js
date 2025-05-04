(function () {
    const controls = document.querySelectorAll(".control");
    controls.forEach(button => {
        button.addEventListener("click", function(e) {
            const targetId = button.dataset.id;
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                e.preventDefault();
                document.querySelector(".active-btn").classList.remove("active-btn");
                this.classList.add("active-btn");
                document.querySelector(".active").classList.remove("active");
                targetSection.classList.add("active");
            }
        });
    });

    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });

    window.addEventListener("load", () => {
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