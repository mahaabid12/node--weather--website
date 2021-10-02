const request=require('request')


const weather=(latd,long,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=1a4e2b05da8bf44d6873a37429595e3a&query="+latd+','+long+'&units=m'
    request({url, json:true}, (error,{body})=>{
        if(error){
                  callback('ERROR',undefined)
               }else if(body.error){
                     callback(body.error.info,undefined)
             }else {callback(undefined,body.current.temperature) }

    })

}

module.exports=weather