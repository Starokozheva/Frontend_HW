const gallery = document.getElementById("gallery");
const thumbnailsContainer = gallery.querySelector(".thumbnails");
const mainImage = gallery.querySelector("#mainImg");

const images = [
    "https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg",
    "https://phonoteka.org/uploads/posts/2021-05/1622404546_17-phonoteka_org-p-peizazh-v-stile-piksel-art-krasivo-26.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg",
    "https://oir.mobi/uploads/posts/2021-06/1622803069_29-oir_mobi-p-peizazh-dlya-nachinayushchikh-priroda-kras-30.jpg",
];

images.forEach((imageUrl, index) => {
  const thumbnail = document.createElement("div");
  thumbnail.classList.add("thumbnail");

  const thumbnailImg = document.createElement("img");
  thumbnailImg.src = imageUrl;
  thumbnailImg.alt = "Thumbnail";
  thumbnailImg.addEventListener("click", () => {
    mainImage.src = imageUrl;
    setActiveThumbnail(thumbnail);
  });

  thumbnail.appendChild(thumbnailImg);
  thumbnailsContainer.appendChild(thumbnail);

  if (index === 0) {
    mainImage.src = imageUrl;
    setActiveThumbnail(thumbnail);
  }
});

function setActiveThumbnail(thumbnail) {
  const allThumbnails = thumbnailsContainer.querySelectorAll(".thumbnail");
  allThumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove("active");
  });
  thumbnail.classList.add("active");
}
