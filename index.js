const express = require('express');

const app = express();
const cors = require('cors');
const port = process.env.PORT ||5000;
const chefData = require('./Data/chef.json');
app.use(cors());

app.get('/', (req, res) => {
    res.send('server running')
  });

  app.get('/chefData',(req, res)=>{
    res.send(chefData);
  })
  app.listen(port,()=>{
    console.log(`server api is running on port :${port}`);
  })