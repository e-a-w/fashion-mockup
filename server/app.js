const express = require("express"),
  path = require("path"),
  productRoutes = require("./routes/products"),
  app = express();

// Middleware
app.use(express.json());

// Unauthenticated routes
app.use("/api/products", productRoutes);

// Serve static files
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === "production") {
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

module.exports = app;
