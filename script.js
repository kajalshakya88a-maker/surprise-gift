/* =================================
   PASSWORD
================================= */

function checkPassword() {

    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    // Yahan apna password change kar sakte ho
    const correctPassword = "2104";

    if (password === correctPassword) {

        sessionStorage.setItem("birthdayUnlocked", "true");

        window.location.href = "birthday.html";

    } else {

        error.innerText = "Oops! Wrong password 😜💕";

    }
}


function handleEnter(event) {

    if (event.key === "Enter") {
        checkPassword();
    }

}


/* =================================
   BIRTHDAY MUSIC
================================= */

let musicPlaying = false;

window.addEventListener("load", function () {

    const music = document.getElementById("bgMusic");

    if (music) {

        music.volume = 0.45;

        music.play()
            .then(() => {
                musicPlaying = true;
            })
            .catch(() => {
                // Browser autoplay block kare to Music button use hoga
            });
    }

});


function toggleMusic() {

    const music = document.getElementById("bgMusic");

    if (!music) return;

    if (music.paused) {

        music.play();
        musicPlaying = true;

    } else {

        music.pause();
        musicPlaying = false;

    }

}


/* =================================
   INFINITE BALLOONS
================================= */

function createBalloon() {

    const container = document.getElementById("balloon-container");

    if (!container) return;

    const balloon = document.createElement("div");

    balloon.classList.add("balloon");

    const colors = [
        "#ff8fba",
        "#ffb6d5",
        "#c9a7ff",
        "#ffd27d",
        "#a8e6cf",
        "#ffaaa5"
    ];

    balloon.style.background =
        colors[Math.floor(Math.random() * colors.length)];

    balloon.style.left =
        Math.random() * 100 + "%";

    const size =
        35 + Math.random() * 25;

    balloon.style.width = size + "px";
    balloon.style.height = size * 1.3 + "px";

    const duration =
        7 + Math.random() * 8;

    balloon.style.animationDuration =
        duration + "s";

    container.appendChild(balloon);

    setTimeout(() => {

        balloon.remove();

    }, duration * 1000);

}


if (document.getElementById("balloon-container")) {

    setInterval(createBalloon, 600);

    // Starting balloons
    for (let i = 0; i < 8; i++) {
        setTimeout(createBalloon, i * 250);
    }

}


/* =================================
   SCROLL REVEAL MESSAGES
================================= */

const revealElements =
    document.querySelectorAll(".reveal");

if (revealElements.length > 0) {

    const observer = new IntersectionObserver(

        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },

        {
            threshold: 0.2
        }

    );

    revealElements.forEach(function(element) {
        observer.observe(element);
    });

}


/* =================================
   MEMORY SLIDESHOW
================================= */

const memoryPhotos = [

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF0lic06BvoHTfVNFVAjffRfOebLbfU6PNhz0ZPge2IA&s",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl_1aqNZa1QLlJvRVZIweP9YRNqwtBE8lxWXQObeOs1g&s=10",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLiDqxlvkcAzRVXAd2vDt5C978wGUxa93ICKZdBJ-VeA&s=10",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2K8jCcSmdRbwXkGObI2sr-BOh6yqhEpg50QsmmLT0MA&s=10",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgS8-XvOoZXoNECfKosi37MkcT7qU6WUUrIwmTmCGJTw&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhEyF6P6TEwU8YXTsKpUUATYDegQQ9HiA89o6O0Mg1sg&s=10"


];

const memoryCaptions = [

    "A cute little memory 💕",

    "A moment worth remembering 🌸",

    "Another beautiful moment ✨",

    "A smile that deserves to stay forever 🥹",

    "Little moments, big memories 💗",

    "And this one is special too 🎀"

];

let currentMemory = 0;


function showMemory(index) {

    const photo =
        document.getElementById("memoryPhoto");

    const number =
        document.getElementById("memoryNumber");

    const caption =
        document.getElementById("memoryCaption");

    if (!photo) return;

    photo.classList.add("changing");

    setTimeout(function() {

        photo.src = memoryPhotos[index];

        number.innerText =
            "Memory " + (index + 1) + " / " + memoryPhotos.length;

        caption.innerText =
            memoryCaptions[index];

        photo.classList.remove("changing");

    }, 400);

}


function nextPhoto() {

    currentMemory++;

    if (currentMemory >= memoryPhotos.length) {
        currentMemory = 0;
    }

    showMemory(currentMemory);

}


function previousPhoto() {

    currentMemory--;

    if (currentMemory < 0) {
        currentMemory = memoryPhotos.length - 1;
    }

    showMemory(currentMemory);

}


/* Auto change every 3 seconds */

if (document.getElementById("memoryPhoto")) {

    setInterval(function() {

        nextPhoto();

    }, 3000);

}


/* =================================
   FINAL GIFT
================================= */

function openGift() {

    const finalMessage =
        document.getElementById("finalMessage");

    const instruction =
        document.getElementById("giftInstruction");

    const gift =
        document.querySelector(".gift");

    if (!finalMessage) return;

    finalMessage.classList.add("show");

    instruction.innerText =
        "Surprise! 🎉❤️";

    gift.style.display = "none";

}