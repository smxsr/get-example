const express = require('express');
const app = express();
 app.get('/' , (req,re) =>{
     res.send('server is');
 });

 app.listen(3000 , ()=>{
   console.log('server is running');
 });