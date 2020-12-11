const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

// Setup path for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')
console.log(partialsPath)

// Setup handlebar engine and view location 
app.set('view engine', 'hbs') 
app.set('views',viewPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath)) 

// Rendering a dynamic page using hbs 
app.get('',(req,res)=>{
    
    res.render('index',{
        name: 'Yhemmy',
        title : 'Home page'
    })
})

app.get('/about',(req,res)=>{
    
    res.render('about',{
        context: 'Oppor on About page',
        title : 'About page'
    })
})
app.get('/help',(req,res)=>{
    
    res.render('help',{
        message: 'What do you need help with?',
        title : 'Help page'
    })
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})