let products = [];

async function fetchData() {
    const loader = document.getElementById("loader");
    loader.innerHTML = "<h2>Loading...</h2>";

    try {
        const res = await fetch("https://fakestoreapi.com/products");
        products = await res.json();

        loader.style.display = "none";

        renderData(products);
    } catch (err) {
        console.log(err);
        loader.innerHTML = "<h2>Failed to load data</h2>";
    }
}

function renderData(data) {

    const parentContainer = document.getElementById("productContainer");
    parentContainer.innerHTML = "";

    data.forEach((el) => {

        const cardDiv = document.createElement("div");

        cardDiv.style.textAlign = "center";
        cardDiv.style.padding = "15px";
        cardDiv.style.boxShadow =
            "#0f62fe 5px 5px, rgba(45,25,155,0.3) 10px 10px, rgba(82,56,155,0.2) 15px 15px, rgba(124,112,181,0.1) 20px 20px, rgba(135,129,205,0.05) 25px 25px";

        const cat = document.createElement("p");
        cat.innerText = el.category;

        const img = document.createElement("img");
        img.src = el.image;
        img.style.width = "150px";
        img.style.height = "150px";

        const title = document.createElement("p");
        title.innerText = el.title;

        const price = document.createElement("h3");
        price.innerText = "$ " + el.price;

        const button = document.createElement("button");
        button.innerText = "Buy Now";
        button.style.padding = "10px";
        button.style.width = "90%";
        button.style.backgroundColor = "#0f62fe";
        button.style.color = "white";
        button.style.border = "none";
        button.style.cursor = "pointer";

        cardDiv.append(cat, img, title, price, button);

        parentContainer.append(cardDiv);
    });

}

function updateProducts() {

    let category = document.getElementById("pet-select").value;
    let sort = document.getElementById("price-select").value;

    let result = [...products];

    // Filter
    if (category !== "") {
        result = result.filter((item) => item.category === category);
    }

    // Sort
    if (sort === "LToH") {
        result.sort((a, b) => a.price - b.price);
    }

    if (sort === "hToL") {
        result.sort((a, b) => b.price - a.price);
    }

    renderData(result);
}

document
    .getElementById("price-select")
    .addEventListener("change", updateProducts);

document
    .getElementById("pet-select")
    .addEventListener("change", updateProducts);

fetchData();