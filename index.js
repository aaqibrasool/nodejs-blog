const path = require("path")
const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const userRouter = require("./routes/user")

const app = express()

const PORT = 8000

mongoose
  .connect("mongodb://127.0.0.1:27017/blogify")
  .then(() => console.log("mongo connected"))

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => res.render("home"))
app.use("/user", userRouter)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
