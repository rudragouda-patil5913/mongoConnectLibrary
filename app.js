const express = require("express");
const adminRoute = require("./routes/admin")
require("./connect");

const app = express();


app.use(express.json());
app.use("/admin",adminRoute);

app.listen(3000, () => {
  console.log(`Server running`);
});
