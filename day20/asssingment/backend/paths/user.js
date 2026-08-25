const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const dataFile = path.join(__dirname, "..", "data", "user.json");

router.get("/", (req, res) => {
    const users = JSON.parse(fs.readFileSync(dataFile, "utf-8"));
    res.json(users);
});

router.post("/", (req, res) => {
    const users = JSON.parse(fs.readFileSync(dataFile, "utf-8"));

    const newUser = {
        id: Date.now(),
        ...req.body
    };

    users.push(newUser);
    fs.writeFileSync(dataFile, JSON.stringify(users, null, 2));

    res.json({
        message: "Registration Successful",
        user: newUser
    });
});

module.exports = router;