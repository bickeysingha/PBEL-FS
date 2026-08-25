const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const dataFile = path.join(__dirname, "..", "data", "cart.json");

router.get("/", (req, res) => {
    const cart = JSON.parse(fs.readFileSync(dataFile, "utf-8"));
    res.json(cart);
});

router.post("/", (req, res) => {
    const cart = JSON.parse(fs.readFileSync(dataFile, "utf-8"));

    const item = {
        id: Date.now(),
        ...req.body
    };

    cart.push(item);
    fs.writeFileSync(dataFile, JSON.stringify(cart, null, 2));

    res.json({
        message: "Added To Cart",
        item
    });
});

router.delete("/:id", (req, res) => {
    const cart = JSON.parse(fs.readFileSync(dataFile, "utf-8"));
    const newCart = cart.filter(item => String(item.id) !== String(req.params.id));

    fs.writeFileSync(dataFile, JSON.stringify(newCart, null, 2));

    res.json({
        message: "Removed From Cart"
    });
});

module.exports = router;