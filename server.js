import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.render()
})
app.listen(3000,()=>(console.log("listening")))