const express = require("express");
const app = express();
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

require("./models/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/item", require("./routes/items"));

app.listen(process.env.PORT, () => {
  console.log(`Server is running (PORT:${process.env.PORT})`);
});
