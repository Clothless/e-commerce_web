const express = require('express');
const dotenv = require('dotenv');

const productsRoute = require('./src/routes/productsRoute.js');
const userRoute = require('./src/routes/usersRoute.js');
const categoryRoute = require('./src/routes/categoryRoute.js');
const commentRoute = require('./src/routes/commentRoute.js');
const adminRoute = require('./src/routes/adminRoute.js');
const imageRoute = require('./src/routes/imageRoute.js');
const session = require("./src/configs/session.js");
const auth = require('./src/controllers/auth.js');


// const bodyParser = require('body-parser');

// const ngrok = require("@ngrok/ngrok");

const error = require('./src/middlewares/errorHandler.js');
const passport = require('passport');

const app = express();


dotenv.config(
  {
    path: '../.env'
  }
  );
  

const port = process.env.PORT;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);



app.use(session);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", auth.isAuthenticated, async (req, res) => {
  console.log(req.user)
  if (req.session.viewCount) {
    req.session.viewCount++;
  }else{
    req.session.viewCount = 1;
  }
  res.json({ message: "Page views: " + req.session.viewCount });
});

// /* Error handler middleware */
// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   console.error(err.message, err.stack);
//   res.status(statusCode).json({ message: err.message });
//   return;
// });






// Products route
app.use("/products", productsRoute);
app.use("/users", userRoute);
app.use("/categories", categoryRoute);
app.use("/comments", commentRoute);
app.use("/admins", adminRoute); 
app.use("/images", imageRoute);





// this is just to debug, to print some info about the session
app.use( async(req, res, next) => {
  console.log('req.session', req.session);
  console.log('req.user', req.user);
  next();
});



app.use(error);



app.listen(port, () => {
  console.log(`Server runing at http://localhost:${port}`);
});