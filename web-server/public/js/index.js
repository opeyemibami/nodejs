console.log('Server side js on')

fetch('http://localhost:3000/weather?address=Nigeria').then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
        }else{
            console.log(data)
        }
    })
})