module.exports = app => {
    const express = require("express")
    const router = express.Router()
    const Category = require("../../models/Category")
    router.post("/categories",async (req,res) => {
      await  Category.create(req.body)


    })
    router.get("/categories", async (req,res) => {
        res.send(Category.find())
    } )
    app.use("/admin/api",router)
}