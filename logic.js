const API_KEY=`05fa65e9fb44d765c208857b24716ab8`

const form=document.querySelector("form")
const search=document.querySelector("#search")
const weather=document.querySelector("#weather")



// const API=`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`

// const IMAGE_URL=Avatar image


const getWeather=async(city)=>{
   
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response =await fetch(url);
    const data=await response.json();
     return showWeather(data);  
}


const showWeather=(data)=>{
    console.log(data);
    if(data.cod==404){
        weather.innerHTML=`<h2>City not found</h2>`
    }
    weather.innerHTML=`
    <div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
<div>
<h2>${data.main.temp} ℃</h2>
<h4>${data.weather[0].main}</h4>
</div>`
  
}
















form.addEventListener('submit',function(event){
    getWeather(search.value);
    event.preventDefault();
})