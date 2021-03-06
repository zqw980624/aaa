module.exports = app => {
    const express = require("express")
    const router = express.Router({
        mergeParams:true
    })
    // const Category = require(`../../models/${res.params.resourse}`)
    router.post("/",async (req,res) => {
      const Model = require(require(`../../models/${res.params.resourse}`))
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
    router.get("/:id",async (req,res) => {
        const model = await Category.findById(req.params.id)
        res.send(model)
    })
    
    app.use("/admin/api/rest/:resourse",router)
    
}