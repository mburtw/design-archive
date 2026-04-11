const grid = document.getElementById("grid");

/* Load saved */
let items = JSON.parse(localStorage.getItem("gallery") || "[]");

function render() {
  grid.innerHTML = "";
  items.forEach(item => {
    const img = document.createElement("img");
    img.src = item.url;

    img.onclick = () => openModal(item);

    grid.appendChild(img);
  });
}

render();

/* Drag & Drop */
document.body.addEventListener("dragover", e => e.preventDefault());

document.body.addEventListener("drop", e => {
  e.preventDefault();

  const file = e.dataTransfer.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    const url = event.target.result;

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
  };

  reader.readAsDataURL(file);
});idget").onclick = () => {
  widget.open();
};
