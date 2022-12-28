//const url = "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid="+apiKey+ "&q="+ query + "&units=" +unit;
const weatherApi ={
    key: "1158a2be61f4180e2fed33b416a877cd",
    baseURL:"https://api.openweathermap.org/data/2.5/forecast?id=524901&"
}

const searchInputBox = document.getElementById("input-box")

// Event listener Function on Keypress

searchInputBox.addEventListener("keypress",function(event){
        if(event.keyCode == 13){
        console.log(searchInputBox.value)
        let city = searchInputBox.value
        getWeatherReport(city)
        }
})

// Get Weather Report 
async function  getWeatherReport(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1158a2be61f4180e2fed33b416a877cd&units=metric`
    const data = await fetch(url)
    const obj = await data.json()
    await showWeatherReport(obj)
}
//getWeatherReport()

//show Weather Report 

async  function showWeatherReport(obj){
    let city = document.getElementById("city")
    city.innerHTML = ` ${obj.name} ,  ${obj.sys.country}`
    let temp = document.getElementById("temp")
    temp.innerHTML = obj.main.temp

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `Min temp: ${Math.round(obj.main.temp_min)} max temp: ${Math.ceil(obj.main.temp_max)}` 
    let weatherType = document.getElementById('weather');
    weatherType.innerHTML = obj.weather[0].main

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerHTML = dateManage(todayDate)
    
     console.log(obj.name)
       
    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('images/clear.jpeg')";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('images/cloud.jpeg')";
        
    } else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('images/cloud.jpeg')";
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('images/rain.jpeg')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('images/snow.jpeg')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('images/thunderstorm.jpeg')";
        
    } 
}
showWeatherReport()
// Date manage
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}