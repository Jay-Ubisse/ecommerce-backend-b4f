const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./connect/database');

const port = process.env.PORT || 3000;

connectDB();

const app = express();

app.use(express.json());

/*app.use('/api/users', require('./routes/user-route'));
app.use('/api/products', require('./routes/product-route'));
app.use('/api/orders', require('./routes/order-route'));*/
app.use('/api/customers', require('./routes/customer-route'));

app.use((req, res, next) => {
    res.status(404).send('Rota não encontrada');
});

app.listen(port, () => console.log(`Aplicação rodando em http://localhost:${port}`));
