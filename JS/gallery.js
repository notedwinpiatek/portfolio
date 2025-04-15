const imageFilenames = [
    "../img/art/posters/poster-camera.png",
    "../img/art/posters/poster-nutella.jpg",
    "../img/art/posters/poster-mountain.jpg",
    "../img/art/posters/poster-mountain-house.jpg",
    "../img/art/posters/poster-skull.jpg",
    "../img/art/posters/poster-sunset.jpg",
  ];

  const gallery = document.getElementById("gallery");

  imageFilenames.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Poster";
    img.style.width = "400px";
    img.style.margin = "10px";
    gallery.appendChild(img);
  });