const stars = document.getElementById("stars");

if (stars) {

    for (let i = 0; i < 120; i++) {

        let star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDelay = Math.random() * 3 + "s";

        stars.appendChild(star);

    }

}

const spotifyBtn = document.getElementById("spotifyBtn");


if (spotifyBtn) {

    spotifyBtn.addEventListener("click", () => {

        window.open(
            "https://open.spotify.com/search/Wine%20Pon%20You%20Doja%20Cat",
            "_blank"
        );

        spotifyBtn.textContent = "🤍 Perfect... now come back.";

        setTimeout(() => {

            window.location.href = "page1.html";

        }, 1200);

    });

}

const continueBtn = document.getElementById("continueBtn");

if (continueBtn) {

    continueBtn.addEventListener("click", () => {

        document.body.classList.add("fade-out");

        setTimeout(() => {

            window.location.href = "page2.html";

        }, 1000);

    });

}