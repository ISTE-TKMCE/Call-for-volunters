const express = require('express');
const morgan = require('morgan');
const volunterRoutes = require('./routes/volunterRoutes');
const caRoutes = require('./routes/caRoutes');

const db = require("./models");

// express app
const app = express();


// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


// routes
app.get('/', (req, res) => {
  res.redirect('/volunteers');
});


// blog routes
app.use('/volunteers', volunterRoutes);
app.use('/ca', caRoutes);


// 404 page
app.use((req, res) => {
  res.send("page not found");
});
const port = process.env.PORT|| 3000;
//database connection
db.sequelize.sync().then(req =>{ 
    app.listen(port , ()=>{
        console.log("server running");
    })
});
