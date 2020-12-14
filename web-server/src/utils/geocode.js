const request = require('postman-request')

const geocode = (address, callback) => {
    const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?access_token=pk.eyJ1IjoieWhlbW15IiwiYSI6ImNraWg2dzJmaDEweGwycXF1bDJ6d2h4ZDMifQ.K8rilIG9gKC_wsp8otVwFg'
    request({ url: geocodeUrl, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to geacoding station!', undefined)
        }
        else if (response.body.features.length === 0) {
            callback('Unable to geocode the given address, try another search', undefined)
        }
        else {
            callback(
                undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode