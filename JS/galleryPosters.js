const imageFilenames = [
    "../img/art/posters/poster-camera.png",
    "../img/art/posters/poster-nutella.jpg",
    "../img/art/posters/poster-mountain.jpg",
    "../img/art/posters/poster-mountain-house.jpg",
    "../img/art/posters/poster-skull.jpg",
    "../img/art/posters/poster-sunset.jpg",
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


  imageFilenames.forEach(src => {
    const div = document.createElement("div");
  
    div.classList.add("poster-wrapper");
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
