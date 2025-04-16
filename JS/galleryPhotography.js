const imageFilenames = [
    "../img/art/photography/tiger.jpg",
    "../img/art/photography/biedronka.jpg",
    "../img/art/photography/bike.jpg",
    "../img/art/photography/cat.jpg",
    "../img/art/photography/Detroit.jpg",
    "../img/art/photography/drone_shot.jpg",
    "../img/art/photography/gdansk.jpg",
    "../img/art/photography/horse.jpg",
    "../img/art/photography/mountains.jpg",
    "../img/art/photography/NYC_subway.jpg",
    "../img/art/photography/NYC_me.jpg",
    "../img/art/photography/The_bog.jpg"

  ];

  const gallery = document.getElementById("gallery");

  imageFilenames.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Photo";
    img.style.width = "400px";
    img.style.margin = "10px";
    gallery.appendChild(img);
  });