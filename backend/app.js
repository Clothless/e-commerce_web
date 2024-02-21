const express = require('express');
const dotenv = require('dotenv');

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
app.use("/account", userRoute);

(async function() {
  // Establish connectivity
  const listener = await ngrok.forward({ addr: 8080, authtoken: process.env.AUTH_TOKEN });

  // Output ngrok url to console
  console.log(`Ingress established at: ${listener.url()}`);
})();


// app.listen(port, () => {
//   console.log(`Server runing at http://localhost:${port}`);
// });