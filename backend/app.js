const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const ngrok = require("@ngrok/ngrok");

dotenv.config(
  {
    path: '../.env'
  }
  );
  
  const app = express();
  const port = process.env.PORT;
  const productsRoute = require('./src/routes/productsRoute.js');
  const userRoute = require('./src/routes/usersRoute.js');
  const categoryRoute = require('./src/routes/categoryRoute.js');
  const commentRoute = require('./src/routes/commentRoute.js');
  const adminRoute = require('./src/routes/adminRoute.js');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});


// Products route
app.use("/products", productsRoute);
app.use("/users", userRoute);
app.use("/categories", categoryRoute);
app.use("/comments", commentRoute);
app.use("/admins", adminRoute);



app.listen(port, () => {
  console.log(`Server runing at http://localhost:${port}`);
});