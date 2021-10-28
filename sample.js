const express = require('express');


const app = express();
const path = require('path');

app.use('/static',express.static(path.join(__dirname+'/public')));
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/dapple.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/cart',function(req,res){
  res.sendFile(path.join(__dirname+'/Pages/cart.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');