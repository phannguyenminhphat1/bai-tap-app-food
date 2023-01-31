const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const rootRoute = require("./routes/rootRoute");
const app = express();

app.use(cors());
app.use(express.json());
app.listen(8080);

app.use("/api", rootRoute);
