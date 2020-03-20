const express = require("express")
const app = express();
var createError = require('http-errors')
app.use(require("cors")())
app.use(express.json())
app.use("/uploads", express.static(__dirname + '/uploads'));


require("./plugins/db")(app)
require("./routes/admin")(app)


app.use(function (req, res, next) {
    if (!req.user) return next(createError(401, 'Please login to view this page.'))
    next()
  })

app.listen(3000,() => {
    console.log("http://localhost:3000")
})