const envelope = document.querySelector(".envelope");

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {
        window.location.href = "page3.html";
    }, 1800);

});