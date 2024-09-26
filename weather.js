const  apiKey =" 88f049e32c8455e4d8ced05188c44c43";
const apiUrl =" https://api.openweathermap.org/data/2.5/weather?units=metric&q=delhi";
const searchBox = document.querySelectorAll(" .search input");
const searchBtn = document.querySelectorAll(" .search button");
async function checkweather(city){
    const response = await fetch(apiUrl + city + ` &appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
    document.querySelectorAll(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelectorAll(".wind").innerHTML=data.wind.speed+"km/h";
}

   searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
   })


   let mg =90;
   function na (my){
    var page
    let by; 




   }
   

