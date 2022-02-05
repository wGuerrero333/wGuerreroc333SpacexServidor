

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// define a simple route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome servidor simple.' });
  });
  

app.get('/back',(req,res)=>{
    res.send('Backend ok')
})

app.listen(port,()=>{
    console.log(`Listened by: ${port} `);
})
