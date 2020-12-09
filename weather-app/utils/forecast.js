const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5ef9867c49d8698de6b1d140082d360d&query='+latitude+','+longitude+'&units=f'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            const current = response.body.current
            callback(undefined, {
                temperature: current.temperature,
                feelslike: current.feelslike,   
                weather_descriptions: current.weather_descriptions  
            })
        }
    })
}

module.exports = forecast