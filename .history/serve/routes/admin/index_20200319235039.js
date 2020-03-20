module.exports = app => {
  const express = require("express")
  const router = express.Router()
  const Administrator = require("../../models/Administrator");
  const bcrypt = require("bcryptjs")
  //
  // var ok = require('assert')
  router.get("/:id", async (req, res, next) => {
    //  if(!req.headers.authorization){
    //    res.status(401).send({
    //      message:"请先登录"
    //    })
    //  }
    const assert = require("http-assert")
    const token = (req.headers.authorization || " ").split(" ").pop(); //提取请求头中的token pop是将数组最后一个元素取出来
    assert(token, 401, "请提供 jwt token，请先登录");
    const {
      id
    } = jwt.verify(token, app.get("secret")) //通过secret解码token
    assert(id, 401, "请先登录");
    req.user = await AdminUser.findById(id); //根据id找用户，验证是否为伪造的token
    assert(req.user, 401, "用户不存在，请先登录")

    // next()
  }, async (req, res) => {

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
    if (req.Model.modelName == "Category") {
      options = {
        populate: "parent"
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
    dest: __dirname + '../../../uploads'
  })

  app.use("/admin/api/upload", upload.single("file"), async (req, res) => {
    const file = req.file;
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })

  app.post("/admin/api/login", async (req, res, next) => {

    const {
      name,
      password
    } = req.body

    const user = await Administrator.findOne({
      name
    }).select('+password')
    if (!user) {
      res.status(422).send({
        message: "用户不存在"
      })
      return
    }

    const isValidPassword = bcrypt.compareSync(password, user.password)

    if (!isValidPassword) {
      res.status(422).send({
        message: "密码错误"
      })
      return
    }

    if (user && isValidPassword) {
      const token = require("jsonwebtoken").sign({
        id: user._id,
      }, app.get("secret"))
      console.log(token)
      res.send(token)
    }
    next()


  })
  app.use((error, req, res, next) => {
    //发送使用assert语句传入的状态码和错误提示信息
    res.status(error.statusCode).send({
      message: error.message,
    })
  })
}