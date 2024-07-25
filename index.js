const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./connect/database")


const port = process.env.PORT;

connectDB();

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: false}));




app.use("/api/users", require("./routes/user-route"));
// app.use("/api/products", require("./routes/product-route"));
// app.use("/api/orders", require("./routes/order-route"));
// app.use("/api/customer", require("./routes/customer-route"));

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
