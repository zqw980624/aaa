module.exports = app => {
  const express = require("express")
  const router = express.Router()


  router.get("/:id", async (req, res) => {


    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  router.post("/", async (req, res) => {

    const model = await req.Model.create(req.body)

    res.send(model)

  })
  router.put("/:id", async (req, res) => {

    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)

    res.send(model)

  })
  router.delete("/:id", async (req, res) => {

    const model = await req.Model.findByIdAndDelete(req.params.id, req.body)

    res.send(model)

  })
  router.get("/", async (req, res) => {
    let options = {}
    if(req.Model.modelName ==  "Category" ){
      options = {
        populate:"parent"
      }
    }
    
    const model = await req.Model.find().setOptions(options).limit(10)
    res.send(model)

  })
  app.use("/admin/api/rest/:resource", async (req, res, next) => {
    const modelName = require("inflection").classify(req.params.resource)
    req.Model = require(`../../models/${modelName}`)
    next()
  }, router)
  
  const multer = require("multer")
  const upload = multer({
    dest:__dirname + '../../../uploads'
  })

  app.use("/admin/api/upload",upload.single("file"),async (req,res) => {
     const file = req.file;
     file.url = `http://localhost:3000/uploads/${file.filename}`
     res.send(file)
  })

  app.post("/admin/api/login",async(req,res) => {
    const {name,password} = req.body
    
   
    var assert = require('http-assert')
    
     
    const user = await  require("../../models/Administrator").findOne({name});
    if(!user){
      res.status(500).send({
        message:"111111111"
      })
    }
     
    
     
  })
  app.use(async(err,req,res,next) => {
    return res.status(500).send({
      message:err.message
    })
  })
}