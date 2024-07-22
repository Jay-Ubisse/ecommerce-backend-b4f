const  express = require('express')
const { readProduct, createProduct,
    updateProduct,
    deleteProduct

    } = require('../controllers/product-controller')
const router =  express.Router()

router.get("/:id",readProduct);

router.post("/", createProduct);

router.put("/:id",updateProduct );

router.delete("/:id",deleteProduct);

module.exports = router;
