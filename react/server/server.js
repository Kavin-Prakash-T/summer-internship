const express = require("express")
const app = express()

const path=require("path")
const fs=require("fs")



const cors = require("cors")
app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello, World!")
})

app.use(express.json())

app.post("/contact", (req, res) => {
  const formData = req.body

  const filePath=path.join(__dirname, "data/users.json")

 const fileData=fs.readFileSync(filePath, "utf8")
 const data=JSON.parse(fileData)

 const newData = [...data, formData]
 fs.writeFileSync(filePath, JSON.stringify(newData))

  res.status(200).send("Message received")
})

app.listen(8000, () => {
  console.log("Server is running on port 8000")
})