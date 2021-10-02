
const path=require('path')
const express= require('express')
const hbs=require('hbs')
const geocode=require('./utilities/geocode.js')
const weather=require('./utilities/weather.js')






const app=express()

//define paths for express config 
const publicDirectoryPath=path.join(__dirname,'../public') // the web server will detect this directory 
const viewPath=path.join(__dirname,'../templates/views')
const partialPath= path.join(__dirname,'../templates/partials')



//setup static directory to serve 
app.use(express.static(publicDirectoryPath))




//setup handlebars and views 
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)



//route ,function (request,response)

app.get('',(req,res)=>{
    res.render('index', {
        title:'weather app', 
        description:'my first weather app', 
        name:'maha abid'
    })                // render one of our handlbars templates 
})


app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About', 
        name: 'maha abid '
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'help',
        error:"couldn't fetch data", 
        name:'maha abid'
    })
})


app.get('/weather',(req,res)=>{
 if (!req.query.address){
     return(res.send({
         error:"error message"
     }))
 }
 geocode(req.query.address,(err,{latd,long,location}={})=>{
     if(err){
         return res.send({
             err,
         })
        }
     weather(latd,long,(error,dataWeather)=>{
         if(error){
           return res.send({
                error
             })
            }
             
         res.send({
                       temperature:dataWeather,
                       location
                   }  
             )}
         
     )
        
     
   

 })
})
 



app.get('/help/*',(req,res)=>{
    res.render('404page',{
        title:'error page',
        errorMessage:"couldn't find this article in help ", 
        name:'Maha Abid'
    })
})


app.get('*',(req,res)=>{
    res.render('404page',{
        title:'error page',
        errorMessage:"404page",
        name:'Maha Abid'
    })
}
)
 


app.listen(3000, ()=>{
    console.log('server is up on port 3000')
})