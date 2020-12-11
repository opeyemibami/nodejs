const express = require('express')
const path = require('path')

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')
app.set('view engine', 'hbs') 
app.use(express.static(publicDirectoryPath)) //using static files 

// Rendering a dynamic page using hbs 
app.get('',(req,res)=>{
    
    res.render('index.hbs',{
        name: 'Yhemmy'
    })
})

app.get('/about',(req,res)=>{
    
    res.render('about.hbs',{
        context: 'About page'
    })
})
app.get('/help',(req,res)=>{
    
    res.render('help.hbs',{
        message: 'What do you need help with?'
    })
})


app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})