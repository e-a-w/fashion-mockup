const fs = require("fs").promises;

exports.allProducts = async (req, res) => {
  let { limit } = req.query;
  limit = Number(limit);
  delete req.query.limit;
  try {
    let products = await fs.readFile("./server/json/products.json", "utf8");
    products = JSON.parse(products);
    for (const prop in req.query) {
      if (req.query[prop] !== "null") {
        products = products.filter(
          product => req.query[prop] === product[prop]
        );
      }
    }
    products = products.splice(0, limit);
    res.json(products);
  } catch (error) {
    res.send(error.toString());
  }
};
