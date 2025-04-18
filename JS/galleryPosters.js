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
    const div = document.createElement("div");
  
    div.classList.add("poster-wrapper");
    div.style.backgroundImage = `url(${src})`;
    div.style.backgroundPosition = "center";
    div.style.backgroundSize = "cover";
    div.style.backgroundRepeat = "no-repeat";
  
    gallery.appendChild(div);
  });