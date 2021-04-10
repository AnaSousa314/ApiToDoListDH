const express = require('express');
const router = express.Router();

// outra forma

/* 
const {Router} = require('express');
const router = Router();

*/

router.get('/', (req,res)=>{
  res.send('Hello World!');
})

module.exports = router