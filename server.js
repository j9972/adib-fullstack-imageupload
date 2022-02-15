const express = require("express");
const cors = require("cors");

const app = express();
const db = require("./models");

const corOption = {
  origin: "https://localhost:8081",
};

// middleware

app.use(cors(corOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// true => qs 모듈을 사용, 객체형태로 전달된 데이터 내에서 또다른 중첩객체 허용  <->  false => query-string 모듈을 사용  =>  body-parser 보다는 express 권장
// 결론적으로 데이터 parsing을 위함

//routers
const router = require("./routes/productRouter.js");
app.use("/api/products", router);

// testing api
app.get("/", (req, res) => {
  res.json({ msg: "hello api" });
});

//port
const PORT = process.env.PORT || 8080;

// server
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
  });
});
