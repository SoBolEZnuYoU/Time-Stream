const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const routes = require("./routes");

const port = 3001;
const app = express();

app.use(cookieParser());
app.use(express.json());

app.use("/api", routes);

mongoose
    .connect(
        "mongodb://Semen:mongopass@localhost:27017/Time-Stream?authSource=admin"
    )
    .then(() => {
        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    });
