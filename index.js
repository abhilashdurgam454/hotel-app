const express = require('express');


const app = express();
const port = 3010;

app.get('/',(req,res)=>{
  res.send("server is running at port")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
