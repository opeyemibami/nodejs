const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=5ef9867c49d8698de6b1d140082d360d&query=37.8267,-122.4233'

request({url:url},(error, response)=>{
    const data = JSON.parse(response.body)
    console.log(data.current)
})
