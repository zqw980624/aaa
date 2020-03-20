module.exports = app => {
    const express = require("express")
    const router = express.Router()
    const Category = require("../../models/Category")

    router.get("/:id",async (req,res) => {
        const model = await Category.findById(req.params.id)
        res.send(model)
    })

    router.post("/",async (req,res) => {
     
      const model =  await  Category.create(req.body)
     
      res.send(model)

    })
    router.put("/:id",async (req,res) => {
        
        const model =  await  Category.findByIdAndUpdate(req.params.id, req.body)
       
        res.send(model)
  
      })
      router.delete("/:id",async (req,res) => {
     
        const model =  await  Category.findByIdAndDelete(req.params.id, req.body)
       
        res.send(model)
  
      })
    router.get("/", async (req,res) => {
       const model = await Category.find().populate("parent").limit(10)
       res.send(model)
    
    } )
    
    
    app.use("/admin/api/:resource",router)
    
}