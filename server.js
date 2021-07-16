const express = require('express');
const app = express();
 app.get('/' , (req,re) =>{
     res.send('server is');
 });

 app.listen(port , ()=>{
   console.log(`server is running on port ${port}`);
 });