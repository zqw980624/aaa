module.exports = app => {
    const express = require("express")
    // const router = express.Router()
    const Category = require("../../models/Category")
    app.post("/admin/api/categories",async (req,res) => {
      console.log(req.body)
    //   const model =  await  Category.create(req.body)
    //   console.log(model)
    //   res.send(model)

    })
    // router.get("/categories", async (req,res) => {
    //    const model = await Category.find().limit(10)
    //    res.send(model)
    
    // } )
    // app.use(router)
    
}