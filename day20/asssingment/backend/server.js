const express = require("express");
const cors = require("cors");

const userRouter = require("./paths/user");
const productRouter = require("./paths/product");
const cartRouter = require("./paths/cart");
const logger = require("./dalla/logger");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);

app.get("/", (req, res) => {
    res.send("Shopping API Running...");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});