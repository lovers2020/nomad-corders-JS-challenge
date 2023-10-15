const images = ["bg1.png", "bg-2.png", "bg-3.png", "bg-4.png"];
const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `image/${chosenImages}`;

document.body.appendChild(bgImage).classList.add("bgImg");
