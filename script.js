console.log("JavaScript is working!");

// وظيفة نسخ العنوان
function copyAddress() {
  const address = document.getElementById("contract-address").textContent;
  navigator.clipboard.writeText(address)
    .then(() => alert("Address copied!"))
    .catch(() => alert("Failed to copy!"));
}

// تشغيل صوت عند الضغط على زر الشراء
document.addEventListener("DOMContentLoaded", () => {
  const buyButton = document.querySelector(".buy-button");
  const clickSound = document.getElementById("click-sound");

  if (buyButton && clickSound) {
    buyButton.addEventListener("click", () => {
      clickSound.currentTime = 0;
      clickSound.play();
    });
  }

  // دوران العملة حسب تحريك الماوس
  const coin = document.getElementById("coin");

  if (coin) {
    document.addEventListener("mousemove", (e) => {
      const { innerWidth, innerHeight } = window;
      const xRotation = ((e.clientY / innerHeight) - 0.5) * 20;
      const yRotation = ((e.clientX / innerWidth) - 0.5) * 40;

      coin.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    });

    // إعادة العملة لوضعها الطبيعي عند خروج الماوس
    coin.addEventListener("mouseleave", () => {
      coin.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  }
});
