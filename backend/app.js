const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const port = process.env.PORT || 4000;

app.use(cors({ origin: ["http://localhost:5173", "http://localhost:5174"] }));

app.get("/api/users", (req, res) => {
  res.json({
    success: true,
    message: "data fetched successfully",
    data: [
      { id: 1, name: "John Doe", age: 30, city: "New York" },
      { id: 2, name: "Jane Smith", age: 25, city: "Los Angeles" },
      { id: 3, name: "Mike Johnson", age: 35, city: "Chicago" },
      { id: 4, name: "Emily Davis", age: 28, city: "Houston" },
    ],
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
