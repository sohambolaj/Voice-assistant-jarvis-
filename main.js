document.addEventListener("DOMContentLoaded", function () {
  const micBtn = document.getElementById("micbtn");
  const jarvisHood = document.getElementById("jarvisHood");
  const siriOverlay = document.getElementById("siriOverlay");
  const closeBtn = document.getElementById("closeSiri");

  const siriWave = new SiriWave({
    container: document.getElementById("siri-container"),
    width: 400,
    height: 100,
    style: "ios9",
    speed: 0.12,
    amplitude: 1,
    frequency: 6,
    autostart: true,
  });

  micBtn.addEventListener("click", () => {
    jarvisHood.style.display = "none";
    siriOverlay.style.display = "flex";
    siriWave.start();
  });

  closeBtn.addEventListener("click", () => {
    siriOverlay.style.display = "none";
    jarvisHood.style.display = "flex";
    siriWave.stop();
  });
});

