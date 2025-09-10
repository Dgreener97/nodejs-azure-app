const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Default route
app.get("/", (req, res) => {
  res.send("Hello from Node.js on Azure App Service!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
