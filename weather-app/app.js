const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(!address){
    console.log('Please provide an address')
}else{
    //usig object destructuring to retrieve long lat and loc from data in the callback! awesome js
    geocode(address,(error,{latitude,longitude,location}={})=>{
        if (error){
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error){
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
          })
    })
}


