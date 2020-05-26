const lang = "pt_br";
const appid = "5218b9a0a99e773ba277efe432a23d26";
const units = "metric";
var cidade = "Curitiba";
var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + appid + "&units=" + units + "&lang=" + lang;
// Date Time Setup
const myRequest = new Request(url);

fetch (myRequest)
.then(response => {
  if (response.status === 200){
    return response.json();
  } else {
    throw new Error("Something gone Wrong");
  }
})
.then(response => )


      //const weatherData = JSON.parse(data); // oposite: JSON.stringify(weatherData);
      // console.log(weatherData);
      //const descricao = weatherData.weather[0].description;
      //const umidade = weatherData.main.humidity;
      //const temp = weatherData.main.temp;
      //const min = weatherData.main.temp_min;
      //const max = weatherData.main.temp_max;
      //const wind = weatherData.wind.speed;
      //const winddir = weatherData.wind.deg;
      //const icon = weatherData.weather[0].icon;

      //res.write("<h1>"+cidade+" em "+strData+"</h1><br>");
      //res.write("<li>Temperatura: "+temp+"°C , com mínima de "+min+" e máxima de "+max+"<br>");
      //res.write("<li>Ventos a "+wind+" km/h na direção "+winddir+"<br>");
      //res.write("<li>Umidade relativa: "+umidade+"%<br>");
      //res.write("<li>O tempo está: "+descricao+"<br>");
      //res.send()

      //res.send("<h1>" + cidade + " em " + strData + "</h1><br>" +
        //"<li>Temperatura: " + temp + "°C , com mínima de " + min + " e máxima de " + max + "<br>" +
        //"<li>Ventos a " + wind + " km/h na direção " + winddir + "<br>" +
        //"<li>Umidade relativa: " + umidade + "%<br>" +
        //"<li>O tempo está: " + descricao + "<br>" +
        //"<img src='http://openweathermap.org/img/wn/" + icon + "@2x.png' alt='weather icon'/>"
    //  );
