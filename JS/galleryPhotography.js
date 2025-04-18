const imageFilenames = [
  "../img/art/photography/tiger.jpg",
  "../img/art/photography/cat.jpg",
  "../img/art/photography/NYC_me.jpg",
  "../img/art/photography/horse.jpg",
  "../img/art/photography/NYC_subway.jpg",
  "../img/art/photography/Detroit.jpg",
  "../img/art/photography/drone_shot.jpg",
  "../img/art/photography/bike.jpg",
  "../img/art/photography/biedronka.jpg",
  "../img/art/photography/mountains.jpg",
  "../img/art/photography/gdansk.jpg",
  "../img/art/photography/The_bog.jpg"
];

const gallery = document.getElementById("gallery");

// Modal elements
const modal = document.createElement("div");
modal.id = "image-modal";
modal.className = "modal hidden";

const closeBtn = document.createElement("span");
closeBtn.id = "close-modal";
closeBtn.innerHTML = "&times;";

const modalImg = document.createElement("img");
modalImg.id = "modal-img";
modalImg.alt = "Full-size";

modal.appendChild(closeBtn);
modal.appendChild(modalImg);
document.body.appendChild(modal);

// Add gallery thumbnails
imageFilenames.forEach(src => {
  const div = document.createElement("div");

  div.classList.add("image-wrapper");
  div.style.backgroundImage = `url(${src})`;
  div.style.backgroundPosition = "center";
  div.style.backgroundSize = "cover";
  div.style.backgroundRepeat = "no-repeat";

  div.addEventListener("click", () => {
    modalImg.src = src;
    modal.classList.remove("hidden");
  });

  gallery.appendChild(div);
});

// Close modal on X click
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Optional: click outside image closes modal
modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
