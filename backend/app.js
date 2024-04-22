const express = require('express');
const dotenv = require('dotenv');

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const productsRoute = require('./src/routes/productsRoute.js');
const userRoute = require('./src/routes/usersRoute.js');
const categoryRoute = require('./src/routes/categoryRoute.js');
const commentRoute = require('./src/routes/commentRoute.js');
const adminRoute = require('./src/routes/adminRoute.js');
const imageRoute = require('./src/routes/imageRoute.js');
const session = require("./src/configs/session.js");
const auth = require('./src/controllers/auth.js');
const authenticated = require('./src/middlewares/authRoute.js');
const subCategory = require('./src/routes/sub_categoryRoute.js');
const moderatorRoute = require('./src/routes/moderatorRoute.js');


// const bodyParser = require('body-parser');

// const ngrok = require("@ngrok/ngrok");

const error = require('./src/middlewares/errorHandler.js');
const passport = require('passport');
const apiKey = require('./src/middlewares/apiKey.js');
const cors = require('cors')
const app = express();


dotenv.config(
  {
    path: '../.env'
  }
  );
  

const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "E-Commerce API",
        version: "0.1.0",
        description:
          "This is a CRUD API application for the E-Commerce application. It is a RESTful API and follows the REST architecture.",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "I&I",
          url: "https://example.com",
          email: "info@email.com",
        },
      },
    },
    apis: ["./src/docs/*.js"],
  };

const port = process.env.PORT;
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);



app.use(session);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", async (req, res) => {
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






const specs = swaggerJsdoc(options);
app.use(
  "/api/v1/docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

// Products route
app.use("/products", productsRoute);
app.use("/users", userRoute);
app.use("/categories", categoryRoute);
app.use("/sub_categories", subCategory);
app.use("/comments", commentRoute);
app.use("/admins", adminRoute); 
app.use("/moderators", moderatorRoute);
app.use("/images", imageRoute);
app.use("/auth", authenticated);





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