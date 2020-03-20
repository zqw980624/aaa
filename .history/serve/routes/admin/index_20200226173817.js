module.exports = app => {
    const express = require("express")
    const router = express.Router()
    const Category = require("../../models/Category")
    router.post("/categories",async (req,res) => {
      const model =  await  Category.create(req.body)
      Console.log(model)
     res.send(model)

    })
    router.get("/categories", async (req,res) => {
       const model = await Category.find().limit(10)
       res.send(model)
    
    } )
    app.use("/admin/api",router)
}