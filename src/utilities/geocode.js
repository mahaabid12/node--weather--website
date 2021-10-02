const request=require('request')

const geocode=(address, callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoibWFoYWFiaWQxMjMiLCJhIjoiY2t0emtpZnR0MGZjaTJ1cGdlOTZxZzk0aiJ9.e8rssDeCJnENyTDmcvt9xw&limit=1'
    request({url, json:true}, (error,{body})=>{
        if(error){
            callback('please check your internet connection',undefined)
        }else if (body.features.length  === 0){
            callback('please verify your location', undefined)
        }else {
            data= {
               latd:body.features[0].center[1],  
               long:body.features[0].center[0], 
               location:body.features[0].place_name
            }
         callback(undefined, data) // data is an object 
        }
    })
}

module.exports=geocode
