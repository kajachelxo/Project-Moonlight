const viewer = document.getElementById("photoViewer");
const viewerImage = document.getElementById("viewerImage");

// Open photo
function openPhoto(photo){

    viewer.style.display = "flex";
    viewerImage.src = photo.src;

}

// Close photo
function closePhoto(){

    viewer.style.display = "none";

}

document.querySelectorAll(".flip-photo").forEach(card=>{

    const images = card.dataset.images.split(",");

    const img = card.querySelector("img");

    img.addEventListener("click",()=>{

        openPhoto(img);

    });

    let index = 0;

    function flipPhoto(){

        if(index >= images.length-1){
            return;
        }

        setTimeout(()=>{

            img.style.opacity="0";

            setTimeout(()=>{

                index++;

                img.src = images[index];

                img.style.opacity="1";

                flipPhoto();

            },400);

        },2000);

    }

    img.style.transition="opacity .4s ease";

    flipPhoto();

});
const notesBtn = document.getElementById("notesBtn");

if (notesBtn) {

    notesBtn.addEventListener("click", () => {

        document.body.classList.add("fade-out");

        setTimeout(() => {

            window.location.href = "page5.html";

        }, 800);

    });

}