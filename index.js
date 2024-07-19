const express = require("express");
const dotenv = require("dotenv").config();

const port = process.env.PORT;

const app = express();

app.use("/api/users", require("./routes/user-route"));
app.use("/api/products", require("./routes/product-route"));
app.use("/api/orders", require("./routes/order-route"));
app.use("/api/customer", require("./routes/customer-route"));

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
