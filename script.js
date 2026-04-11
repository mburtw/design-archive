const grid = document.getElementById("grid");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const caption = document.getElementById("caption");
const close = document.getElementById("close");

/* LOAD SAVED IMAGES */
let items = JSON.parse(localStorage.getItem("gallery") || "[]");

function render() {
  grid.innerHTML = "";

  items.forEach(item => {
    const img = document.createElement("img");
    img.src = item.url;

    img.onclick = () => {
      modal.style.display = "flex";
      modalImg.src = item.url;
      caption.innerHTML = item.caption.join("<br>");
    };

    grid.appendChild(img);
  });
}

render();

/* MODAL CLOSE */
close.onclick = () => modal.style.display = "none";
modal.onclick = () => modal.style.display = "none";

/* CLOUDINARY UPLOAD */
const widget = cloudinary.createUploadWidget({
  cloudName: "demo", // 🔴 CHANGE THIS
  uploadPreset: "docs_upload_example" // 🔴 CHANGE THIS
}, (error, result) => {

  if (!error && result.event === "success") {

    const url = result.info.secure_url;

    // Ask for caption
    const line1 = prompt("Caption line 1:");
    const line2 = prompt("Caption line 2:");
    const line3 = prompt("Caption line 3:");

    const newItem = {
      url,
      caption: [line1, line2, line3]
    };

    items.unshift(newItem);

    localStorage.setItem("gallery", JSON.stringify(items));
    render();
  }
});

document.getElementById("upload_widget").onclick = () => {
  widget.open();
};
