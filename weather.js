
const search = async ()=>{
    console.log('insdie search ');
    let cname = country.value
    console.log(cname);

    if(cname){
      const response =   await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cname}&appid=cf2113a8795f1208a4dca036c5c23bc2`)
      console.log(response);
      response.json().then((data)=>{
        console.log(data);
      // weather
       let wea = data.weather[0].main
       console.log(wea);
        background=""
        icon=""
       if(wea=="Clouds"){
          icon="./images/cloudy.png"
          background="./images/sky-mvehfqz6w2ges2dj.jpg"
       }else if(wea=="Clear"){
          icon="./images/sun.png"
          background="./images/clearbg.jpg"
       }else if(wea=="Rain"){
          icon="./images/rain.png"
          background="./images/rainbg.jpg"
       }else if(wea=="Mist"){
          icon="./images/mist.png"
          background="./images/mistbg.jpg"
       }else if(wea=="Drizzle"){
          icon="./images/sunny.png"
          background="./images/dizzlebg.jpg"
       }else if(wea=="Smoke"){
        icon="./images/smoke.png"
        background="./images/smokebg.jpg"
       }else if(wea=="Snow"){
        icon="./images/snow.png"
        background="./images/snowbg.jpg"
       }else if(wea=="Thunderstorm"){
        icon="./images/storm.png"
        background="./images/thunderstorm.jpg"
       }else if(wea=="Haze"){
        icon="./images/haze.png"
        background="./images/hazebg.jpg"
       }else if(wea=="Sunny"){
        icon="./images/sun.png"
          background="./images/clearbg.jpg"
       }
      //  icon=data.weather[0].icon
      //  temperature
       let temperature = data.main.temp
       /* console.log(temperature); */
        degree=0
        if(temperature== data.main.temp){
         degree=Math.floor(temperature-273.15)
         console.log(degree);
        }
      // minimum temperature
        let min =data.main.temp_min
        // console.log(min);
        mindegree=0
        if(min== data.main.temp_min){
         mindegree=Math.floor(min-273.15)
         console.log(mindegree);
        }
      // maximum temperature
       let max = data.main.temp_max
      //  console.log(max);
       maxdegree=0
       if(max== data.main.temp_max){
        maxdegree=Math.floor(max-273.15)
        console.log(maxdegree);
       }
      //  feels like
       let feel = data.main.feels_like
      //  console.log(feel);
       feeldegree=0
       if(feel== data.main.feels_like){
        feeldegree=Math.floor(feel-273.15)
        console.log(feeldegree);
       }
      // country
       let nation = data.sys.country
      console.log(nation);
      // name
      let name = data.name
      console.log(name);
      // humidity
      let humid = data.main.humidity
      console.log(humid);
      // pressure
      let press = data.main.pressure
      console.log(press);
      // wind speed
      let windsp = data.wind.speed
      console.log(windsp);
      // timezone
      let timezone = data.timezone
      console.log(timezone);
      // time stamp
      let timestamp = data.dt
      console.log(timestamp);


      function convertTimeStamp(timestamp, timezone) {
         const date = new Date((timestamp + timezone) * 1000);
     
         const options = {
             weekday: "long",
             day: "numeric",
             month: "long",
             year: "numeric",
             hour: "numeric",
             minute: "numeric",
             hour12: true,
             timeZone: "UTC" 
         };
     
         return date.toLocaleString("en-US", options);
     }
     

     let formattedDate = convertTimeStamp(timestamp, timezone);

      result.innerHTML=`<div class="card mt-2" style=" background-image: url(${background}); background-size: cover; background-repeat: no-repeat; max-height:80%;">
      <div class="icon">
        <img src="${icon}" class="weather-icon
        " alt="...">
        <h2>${wea}</h2>
        <h1>${degree}℃</h1>
        <h6>min:${mindegree}°  &  max:${maxdegree}°</h6> 
        <h5>feels like ${feeldegree}°</h5>

      </div>
     <div class="card-body w-100 p-0 ">
        <h1 class="card-title text-center">${name}</h1>
        <h5 class="card-title text-center">${formattedDate}</h5>
        <div class="row">
          <div class="col-md-1"></div>
         <div class="col-md-5 text-center">
            <div class="mt-1">
              <h5>Country</h5>
               <p><i class="fa-solid fa-globe fa-xl"></i><span> ${nation}</span></p>
            </div>
            <div class="mt-1">
             <h5> Pressure</h5>
              <p><i class="fa-solid fa-gauge-high fa-xl"></i><span> ${press} hpa</span></p>
            </div>
         </div>
         <div class="col-md-5 text-center">
            <div class="mt-1">
              <h5> Humidity</h5>
              <p><i class="fa-solid fa-droplet fa-xl"></i><span> ${humid}%</span></p>
            </div>
            <div class="mt-1">
              <h5>Wind Speed</h5>
              <p> <i class="fa-solid fa-wind fa-xl"></i> <span> ${windsp} kmph</span></p>
            </div>
         </div>
         <div class="col-md-1"></div>
      </div>
     </div>

  </div>`
      })
    }else{
        alert('invaid input')
    }
}

const conames = ["bangalore", "delhi","kochi"];

conames.forEach(coname => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${coname}&appid=cf2113a8795f1208a4dca036c5c23bc2`)
        .then((respo) => {
            respo.json().then((element) => {
                console.log(element);

                const icon = element.weather[0].icon;
                const temperature = Math.floor(element.main.temp - 273.15);
                const cityName = element.name;
                const weath = element.weather[0].main;

                fix1.innerHTML += `<div class="card w-100 mt-4 p-3" style="height:30%;backdrop-filter: blur(5px); background-color: rgba(255, 255, 255, 0.51);>
                                        <div class="text-center text-light">
                                            <img class="text-light" src="https://openweathermap.org/img/wn/${icon}@2x.png">
                                            <h4 class="text-center">${weath}</h4>
                                            <h3 class="text-center">${temperature}℃</h3>
                                            <h4 class="text-center">${cityName}</h4>
                                            
                                        </div>
                                    </div>`;                  
            });
        });
});


const counames = ["pune", "mumbai","chennai"];

counames.forEach(couname => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${couname}&appid=cf2113a8795f1208a4dca036c5c23bc2`)
        .then((respo) => {
            respo.json().then((element) => {
                console.log(element);

                const icon = element.weather[0].icon;
                const temperature = Math.floor(element.main.temp - 273.15);
                const cityName = element.name;
                const weath = element.weather[0].main;

                fix2.innerHTML += `<div class="card w-100 mt-4 p-3" style="height:30%;backdrop-filter: blur(5px); background-color: rgba(255, 255, 255, 0.51);>
                                        <div class="text-center text-light">
                                            <img  src="https://openweathermap.org/img/wn/${icon}@2x.png">
                                            <h4 class="text-center">${weath}</h4>
                                            <h3 class="text-center">${temperature}℃</h3>
                                            <h4 class="text-center">${cityName}</h4>
                                    
                                        </div>
                                    </div>`;                  
            });
        });
});
