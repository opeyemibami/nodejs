const express = require('express')
const path = require('path')
const hbs = require('hbs')
const request = require('postman-request')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

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

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Please provide a valid address'
        })
    }

    //usig object destructuring to retrieve long lat and loc from data in the callback! awesome js
    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({
                error: 'error'
            })
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({
                    error: 'error'
                })
            }
            return res.send({
                forcast: forecastData,
                location: location,
                address: req.query.address
            })

        })
    })
})

app.get('/help/*',(req,res)=>{
    res.render('error',{
        context: "Help article page not found",
        title : 'Help page'
    })
})

app.get('*',(req,res)=>{
    res.render('error',{
        context: "Page not found",
        title : 'pages'
    })
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})