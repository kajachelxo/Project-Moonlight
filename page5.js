const petals = document.getElementById("petals");

setInterval(() => {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "%";

    petal.style.animationDuration =
        (5 + Math.random() * 4) + "s";

    petals.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    },9000);

},350);