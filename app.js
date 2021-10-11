var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const jwt = require("jsonwebtoken");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var batidosRouter = require("./routes/batidos");
var categoriasRouter = require("./routes/categorias");
var productosRouter = require("./routes/productos");

var app = express();

app.set("secretKey", "dev2021");
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Primer nivel de ruteo
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/batidos", batidosRouter);
app.use("/categorias", categoriasRouter);
//app.use("/productos", validateUser, productosRouter);
app.use("/productos", productosRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

function validateUser(req, res, next) {
  jwt.verify(
    req.headers["x-access-token"],
    req.app.get("secretKey"),
    function (err, decoded) {
      if (err) {
        res.json({ message: err.message });
      } else {
        console.log(decoded);
        next();
      }
    }
  );
}
app.validateUser = validateUser;
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render("error");
  res.json({ error: true, message: err.message });
});

module.exports = app;
