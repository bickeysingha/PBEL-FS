fetchProducts();

function fetchProducts(){

fetch("http://localhost:3000/product")

.then(res=>res.json())

.then(data=>{

display(data);

})

}

function display(data){

let container=document.getElementById("products");

container.innerHTML="";

data.forEach((el)=>{

let div=document.createElement("div");

div.className="card";

div.innerHTML=`

<img src="${el.image}">

<h3>${el.title}</h3>

<p>₹ ${el.price}</p>

<button>Add To Cart</button>

`;

div.querySelector("button").addEventListener("click",()=>{

addToCart(el);

})

container.append(div);

})

}

function addToCart(product){

fetch("http://localhost:3000/cart",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(product)

})

.then(res=>res.json())

.then(()=>{

alert("Added To Cart");

})

}