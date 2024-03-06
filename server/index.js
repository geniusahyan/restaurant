import express from 'express';

const app = express();
const port = ;

app.get('/', (req,res)=>{
    res.send("<h2>this is something</h2>");
    const id =  req.params.id;
    console.log(id);
})
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})