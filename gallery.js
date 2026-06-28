// ===== PHOTO VIEWER =====

const viewer = document.getElementById("photoViewer");
const viewerImage = document.getElementById("viewerImage");

function openPhoto(photo) {

    viewer.style.display = "flex";
    viewerImage.src = photo.src;

}

function closePhoto() {

    viewer.style.display = "none";

}


// ===== FLIPPING POLAROIDS =====

document.querySelectorAll(".flip-photo").forEach(card => {

    const images = card.dataset.images.split(",");
    const img = card.querySelector("img");

    let index = 0;

    img.addEventListener("click", () => {

        openPhoto(img);

    });

    function flipPhoto() {

        setTimeout(() => {

            img.style.opacity = "0";

            setTimeout(() => {

                index++;

                if (index >= images.length) {

                    index = 0;

                }

                img.src = images[index];
                img.style.opacity = "1";

                flipPhoto();

            }, 400);

        }, 2000);

    }

    flipPhoto();

});


// ===== PETALS =====

const petals = document.getElementById("petals");

if (petals) {

    setInterval(() => {

        const petal = document.createElement("div");

        petal.className = "petal";
        petal.innerHTML = "🌸";

        petal.style.left = Math.random() * 100 + "%";
        petal.style.animationDuration = (4 + Math.random() * 4) + "s";

        petals.appendChild(petal);

        setTimeout(() => {

            petal.remove();

        }, 8000);

    }, 350);

}


// ===== NEXT PAGE BUTTON =====

const notesBtn = document.getElementById("notesBtn");

if (notesBtn) {

    notesBtn.addEventListener("click", () => {

        document.body.classList.add("fade-out");

        setTimeout(() => {

            window.location.href = "page5.html";

        }, 800);

    });

}