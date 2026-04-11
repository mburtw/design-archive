const grid = document.getElementById("grid");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const caption = document.getElementById("caption");
const close = document.getElementById("close");

/* 👉 EDIT THIS LIST ONLY */
const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg"
];

/* Convert filename → caption */
function getCaption(path) {
  const name = path.split("/").pop().split(".")[0];

  // split by dash or underscore
  const parts = name.split(/[-_]/);

  return [
    parts[0] || "",
    parts[1] || "",
    parts[2] || ""
  ];
}

/* Build gallery */
images.forEach(src => {
  const img = document.createElement("img");
  img.src = src;

  const cap = getCaption(src);

  img.onclick = () => {
    modal.style.display = "flex";
    modalImg.src = src;
    caption.innerHTML = cap.join("<br>");
  };

  grid.appendChild(img);
});

/* Close modal */
close.onclick = () => modal.style.display = "none";
modal.onclick = () => modal.style.display = "none";
