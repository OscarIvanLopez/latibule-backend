const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./database/config");
require("dotenv").config();
const app = express();

dbConnection();

//static routes
app.use(express.static("public"));

//Reading and parce of body
app.use(express.json());

//ROUTES
//* auth // authentication path
app.use("/api/auth", require("./routes/auth"));

//END ROUTES
console.log(process.env.PORT);
// Listening port request
app.listen(process.env.PORT, () => {
    console.log(`Server runing at the PORT: ${process.env.PORT}`);
});
