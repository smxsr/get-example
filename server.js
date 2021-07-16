const express = require('express');
const app = express();
constport = 3000 ;
 app.get('/' , (req,re) =>{
     res.send('server is');
 });

 app.listen(port , ()=>{
   console.log(`server is running on port ${port}`);
 });