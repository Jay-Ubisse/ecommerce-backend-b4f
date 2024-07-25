const express = require('express');
const router = express.Router();

// Define your user routes here
router.get('/', (req, res) => {
    res.send('Order route');
});

module.exports = router;
