const request = require('request')

const url2 ="https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1IjoibmFuZGluaWpiIiwiYSI6ImNrNnRpaWhkeTA3bXozZXFwejU3czY3MnIifQ.geasm3WRcK6ZmrbPZCgc9w&limit=1"

var latitude = 0
var longitude = 0

request({ url: url2, json: true}, (error, response) => {
    if(error){
        console.log('Unable to connect to location services!')
    }else if(response.body.features.length === 0){
        console.log('Unable to find location. Try another search')
    }else{
        latitude = response.body.features[0].center[1];
        longitude = response.body.features[0].center[0];
        // console.log(data)
        console.log('The latitude is ' + latitude + ' and langitude is ' + longitude)
        
    } 
})

const url = 'https://api.darksky.net/forecast/99af5e7654f4c9066993bb0636d37403/'+ latitude + ',' + longitude

request({ url: url, json: true }, (error, response) => {
    if(error){
        console.log('Unable to connect to weather services!')
    }else if(response.body.error){
        console.log('Unable to find location')
    }else{
        const data = response.body.currently;
        console.log('It is currently ' + data.temperature + ' degrees out. There is a ' + data.precipProbability + '% chance of rain.')
        
    }
});

