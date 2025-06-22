const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const app = express()

app.use(express.json())
app.use(express.static("dist"))
app.use(cors({ origin: "https://practice4-sof0.onrender.com" }))
app.use("/api/user", require("./routes/user.routes"))

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("db connected");
    app.listen(process.env.PORT, console.log("server running"));

})