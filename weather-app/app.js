const request = require('postman-request')
const geocode = require('./utils/geocode')

const url = 'http://api.weatherstack.com/current?access_key=5ef9867c49d8698de6b1d140082d360d&query=37.8267,-122.4233&units=f'

// request({url:url, json:true},(error, response)=>{
//     if(error){
//         console.log('Unable to connect to weather service!')
//     }else if(response.body.error){
//         console.log('Unable to find location')
//     }else{
//         const current =  response.body.current 
//         console.log('It is currently ' + current.temperature + ' degree out. it feels like ' + current.feelslike + ' degrees out' )
//     }
// })

// Geocoding
// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieWhlbW15IiwiYSI6ImNraWg2dzJmaDEweGwycXF1bDJ6d2h4ZDMifQ.K8rilIG9gKC_wsp8otVwFg'
// request({url:geocodeUrl,json:true},(error,response)=>{
//     if(error){
//         console.log('Unable to connect to geacoding station!')
//     }
//     else if(response.body.features.length===0){
//         console.log('Unable to geocode the given address, try a specific address')
//     }
//     else{
//         const data = response.body
//         const longitude = data.features[0].center[0]
//         const latitude = data.features[0].center[1]
//         console.log(latitude,longitude)
//     }

// })



geocode('Aguda surulere Lagos',(error,data)=>{
    console.log('Error',error)
    console.log('Data',data)
})