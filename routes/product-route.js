const  express = require('express')
const {createProduct,
    updateProduct,
    deleteProduct

    } = require('../controllers/product-controller')
const router =  express.Router()


router.post("/", createProduct);

router.put("/:id",updateProduct );

router.delete("/:id",deleteProduct);

module.exports = router;
