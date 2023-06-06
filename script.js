const apiKey="00c3163d1749e0c7a222da6ffdeb5243";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector("#search");
const searchBtn = document.querySelector("#wBtn");
const weatherIcon= document.querySelector("#iconWeathers")



async function checkWeather(city){


  const response= await fetch(apiUrl+city+`&appid=${apiKey}`)

  var data=await response.json();

  console.log(data);
 
  document.querySelector("#cityName").innerHTML=data.name;

  document.querySelector("#temp").innerHTML=Math.round (data.main.temp);

  document.querySelector("#cTemp").innerHTML=Math.round (data.main.temp);
  document.querySelector("#temp_min").innerHTML=Math.round (data.main.temp_min);
  document.querySelector("#temp_max").innerHTML=Math.round (data.main.temp_max);
  document.querySelector("#feels_like").innerHTML=Math.round (data.main.feels_like);

  document.querySelector("#humidity").innerHTML=data.main.humidity +"%";

  document.querySelector("#pressure").innerHTML=data.main.pressure+"mb" ;


  document.querySelector("#sunset").innerHTML=Math.round (data.sys.sunset);
  
  document.querySelector("#sunrise").innerHTML=Math.round (data.sys.sunrise);

  document.querySelector("#speed").innerHTML=data.wind.speed+"km/hr";
  document.querySelector("#wind_dir").innerHTML=data.wind.deg;
  document.querySelector("#gust").innerHTML=data.wind.gust;

  document.querySelector("#timezone").innerHTML=data.timezone; 

  document.querySelector("#country").innerHTML=data.sys.country;
  document.querySelector("#description").innerHTML=data.weather[0].description;
  document.querySelector("#main").innerHTML=data.weather[0].main;
  

 if (data.weather[0].main == "Clouds") {
    iconWeathers.src ="images/clouds.png";
    
 }else if (data.weather[0].main == "Rain") {
    iconWeathers.src ="images/rain.png";
 
 }else if (data.weather[0].main == "Snow") {
    iconWeathers.src ="images/snow.png";
 
 }else if (data.weather[0].main == "Clear") {
    iconWeathers.src ="images/clear.png";
 
 }else if (data.weather[0].main == "Clouds") {
    iconWeathers.src ="images/clouds.png";
 
 }else if (data.weather[0].main == "Mist") {
    iconWeathers.src ="images/mist.png";
 
 }else if (data.weather[0].main == "Drizzle") {
    iconWeathers.src ="images/drizzle.png";
 
 }    
   
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
