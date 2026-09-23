const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.querySelector(".card");

// ==========================
// NÚT NO CHẠY TRỐN 😂
// ==========================

let noCount = 0;

const noTexts = [
    "Really? 🤨",
    "Think again 😌",
    "Vân ơi 🙂",
    "Nice try 😂",
    "Still trying? 👀",
    "Không cho bấm đâu 😏",
    "Just say YES ❤️"
];

function moveNoButton() {

    noCount++;

    // Đổi chữ trên nút No
    noBtn.textContent =
        noTexts[Math.min(noCount - 1, noTexts.length - 1)];

    // Chuyển nút sang fixed để chạy khắp màn hình
    noBtn.style.position = "fixed";
    noBtn.style.zIndex = "999";

    const padding = 20;

    const maxX =
        window.innerWidth - noBtn.offsetWidth - padding;

    const maxY =
        window.innerHeight - noBtn.offsetHeight - padding;

    const randomX =
        Math.max(
            padding,
            Math.random() * maxX
        );

    const randomY =
        Math.max(
            padding,
            Math.random() * maxY
        );

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    // Sau vài lần thì YES lớn dần 😂
    const yesScale =
        Math.min(1 + noCount * 0.06, 1.35);

    yesBtn.style.transform =
        `scale(${yesScale})`;
}


// PC
noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);


// MOBILE
noBtn.addEventListener(
    "touchstart",
    function (event) {

        event.preventDefault();

        moveNoButton();

    },
    { passive: false }
);

// ==========================
// BẤM YES ❤️
// ==========================

yesBtn.addEventListener("click", function () {

    card.innerHTML = `
        <div class="success">

            <p class="small-title">
                GOOD CHOICE, THÙY VÂN ✨
            </p>

            <h1>
                It's a date! ❤️
            </h1>

            <div class="celebrate">
                🌷✨🥰✨🌷
            </div>

            <p class="success-text">
                Cô gái hoạt náo cứ việc xinh đẹp.
            </p>

            <p class="date-text">
                Còn buổi hẹn để anh no
            </p>

            <div class="date-info">

                <div class="date-item">
                    <span>🗓️ When</span>
                    <strong>Saturday, 7:00 PM</strong>
                </div>

                <div class="date-item">
                    <span>📍 Where</span>
                    <strong>It's a surprise 👀</strong>
                </div>

                <div class="date-item">
                    <span>✨ Dress code</span>
                    <strong>Just be cute.</strong>
                </div>

            </div>

        </div>
    `;

    createHearts();
});
// ==========================
// THẢ TIM ❤️
// ==========================

function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-50px";

        heart.style.fontSize =
            Math.random() * 20 + 15 + "px";

        heart.style.zIndex = "1000";

        heart.style.pointerEvents = "none";

        heart.style.animation =
            `fall ${Math.random() * 2 + 2}s linear forwards`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4500);
    }
}