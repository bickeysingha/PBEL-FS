const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const dataFile = path.join(__dirname, "..", "data", "product.json");

router.get("/", (req, res) => {
    const products = JSON.parse(fs.readFileSync(dataFile, "utf-8"));
    res.json(products);
});

router.post("/", (req, res) => {
    const products = JSON.parse(fs.readFileSync(dataFile, "utf-8"));

    const product = {
        id: Date.now(),
        ...req.body
    };

    products.push(product);
    fs.writeFileSync(dataFile, JSON.stringify(products, null, 2));

    res.json({
        message: "Product Added",
        product
    });
});

router.delete("/:id", (req, res) => {
    const products = JSON.parse(fs.readFileSync(dataFile, "utf-8"));
    const newProducts = products.filter(item => String(item.id) !== String(req.params.id));

    fs.writeFileSync(dataFile, JSON.stringify(newProducts, null, 2));

    res.json({
        message: "Product Deleted"
    });
});

module.exports = router;