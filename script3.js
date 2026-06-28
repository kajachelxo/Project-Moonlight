const text = `Hey youu 😝

soo I wanna let u know that ever since I've known u, since we were friends in late 2021 playing video games n shii till we started something in 2022...

I've never looked back.

I've never felt the same as before...🥺

U hold a really special place in my heart that no one has access to except u.

I love u with my soul, mind, spirit and flesh. 🤍`;

const target = document.getElementById("loveLetter");
const galleryBtn = document.getElementById("galleryBtn");

let i = 0;

function typeLetter(){

    if(i < text.length){

        target.textContent += text.charAt(i);

        i++;

        setTimeout(typeLetter,35);

    } else {

        galleryBtn.style.opacity = "1";

    }

}

typeLetter();

galleryBtn.addEventListener("click",()=>{

    document.body.classList.add("fade-out");

    setTimeout(()=>{

        window.location.href="page4.html";

    },800);

});