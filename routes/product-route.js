const  express = require('express')
const { getProduct, getAllProducts, createProduct,
    updateProduct,
    deleteProduct

    } = require('../controllers/product-controller')
const router =  express.Router()

router.use(express.json())

router.get("/", getAllProducts)

router.get("/:id", getProduct);

router.post("/", createProduct);

router.put("/:id",updateProduct );

router.delete("/:id",deleteProduct)

module.exports = router;
