const router = require("express").Router();
const { allProducts } = require("../controllers/products");

router.get("/", allProducts);

module.exports = router;
