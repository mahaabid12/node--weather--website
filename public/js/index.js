fetch('http://localhost:3000/weather?address=hdghgjhdgsbjhv').then((response)=>{
    response.json().then((data)=>{console.log(data)})
})


const formSelector=document.querySelector('form')
const searchSelector= document.querySelector('input')
const elementOne=document.querySelector(".temperature");
const elementTwo=document.querySelector("location");
console.log(elementOne)


elementOne.textContent="loading message"
elementTwo.textContent=""

formSelector.addEventListener('submit',(e)=>{
    e.preventDefault() 

    const address=searchSelector.value;
    console.log(address)

    const url= 'http://localhost:3000/weather?address='+address
    console.log(url)

    fetch(url).then((response)=>{

        response.json().then((data)=>{
            if(data.error){
                elementOne.textContent=data.error
            }else{
                elementOne.textContent=data.temperature
                elementTwo.textContent=data.location


            }
        
         
          
         
   
          
           
         


    
                           



        }

    )})
})
//padding : the content and the box 
//margin : outside the box and the box 