require("dotenv").config();
const cors = require("cors");
const express=require('express')
const router=require('../routes/route')
const db=require('../db/connect-db')
const app=express()

const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  };

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

app.use(cors(corsOptions));
  // to get the json data in express app.
app.use(express.json());

app.use(router)
const Port=8000

db().then(()=>{
    app.listen(Port,()=>{
        console.log(`listening on port ${Port}`)
    })
})
