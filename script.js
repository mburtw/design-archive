fetch("content.json")

.then(response => response.json())

.then(data => {

const book = document.getElementById("book")

data.items.forEach(item => {

const page = document.createElement("div")
page.className = "page"

page.innerHTML = `
<div class="item">

<p class="number">${item.number}</p>

<a href="${item.link}">
<img src="${item.image}">
</a>

<p class="caption">${item.caption}</p>

</div>
`

book.appendChild(page)

})


$("#book").turn({
width:900,
height:600,
autoCenter:true
})

})