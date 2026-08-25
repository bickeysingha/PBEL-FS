fetchCart();

function fetchCart(){

fetch("http://localhost:3000/cart")

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

<button>Delete</button>

`;

div.querySelector("button").addEventListener("click",()=>{

deleteCart(el.id);

})

container.append(div);

})

}

function deleteCart(id){

fetch(`http://localhost:3000/cart/${id}`,{

method:"DELETE"

})

.then(res=>res.json())

.then(()=>{

fetchCart();

})

}