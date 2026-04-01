const wheel = document.getElementById("wheel")

let wheelItems=[]

function generateWheel(){

wheel.innerHTML=""

for(let i=0;i<10;i++){

const item = items[Math.floor(Math.random()*items.length)]

const el = document.createElement("a")

el.className="wheel-item"

el.href=item.link

el.innerHTML=`<img src="${item.img}">`

const angle = (i/10)*360

el.style.transform =
`rotate(${angle}deg) translate(260px) rotate(-${angle}deg)`

wheel.appendChild(el)

}

wheelItems=document.querySelectorAll(".wheel-item")

}

generateWheel()
const wheel = document.getElementById("wheel")

let wheelItems=[]

function generateWheel(){

wheel.innerHTML=""

for(let i=0;i<10;i++){

const item = items[Math.floor(Math.random()*items.length)]

const el = document.createElement("a")

el.className="wheel-item"

el.href=item.link

el.innerHTML=`<img src="${item.img}">`

const angle = (i/10)*360

el.style.transform =
`rotate(${angle}deg) translate(260px) rotate(-${angle}deg)`

wheel.appendChild(el)

}

wheelItems=document.querySelectorAll(".wheel-item")

}

generateWheel()setInterval(()=>{

generateWheel()

},15000)document.querySelector(".selection-area")
.addEventListener("mousemove", e=>{

const rect = wheel.getBoundingClientRect()

const cx = rect.left + rect.width/2
const cy = rect.top + rect.height/2

const angle = Math.atan2(
e.clientY-cy,
e.clientX-cx
)

let index = Math.round(
((angle+Math.PI)/(2*Math.PI))*wheelItems.length
)

wheelItems.forEach(i=>i.classList.remove("active"))

if(wheelItems[index])
wheelItems[index].classList.add("active")

})
