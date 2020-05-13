const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = new express();

// Constantes e Variáveis

const port = 80;
const lang = "pt_br";
const appid = "5218b9a0a99e773ba277efe432a23d26";
const units = "metric";
var cidade = "Curitiba";

// Date Time Setup

var data = new Date();
var strData = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear() + "  -  " + data.getHours() + "h" +
  data.getMinutes() + "m" + data.getSeconds() + "s";

// Setup Geral

app.use(bodyParser.urlencoded({
  extended: true
}));

//
// Raiz
//

app.get("/", (req, res) => {
  console.log("Requisição em /   status:" + res.statusCode); //console.log(response);
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  cidade = req.body.cityName;
  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + appid + "&units=" + units + "&lang=" + lang;
  https.get(url, function(response) {
    response.on("data", function(data) {
      const weatherData = JSON.parse(data); // oposite: JSON.stringify(weatherData);
      // console.log(weatherData);
      const descricao = weatherData.weather[0].description;
      const umidade = weatherData.main.humidity;
      const temp = weatherData.main.temp;
      const min = weatherData.main.temp_min;
      const max = weatherData.main.temp_max;
      const wind = weatherData.wind.speed;
      const winddir = weatherData.wind.deg;
      const icon = weatherData.weather[0].icon;

      //res.write("<h1>"+cidade+" em "+strData+"</h1><br>");
      //res.write("<li>Temperatura: "+temp+"°C , com mínima de "+min+" e máxima de "+max+"<br>");
      //res.write("<li>Ventos a "+wind+" km/h na direção "+winddir+"<br>");
      //res.write("<li>Umidade relativa: "+umidade+"%<br>");
      //res.write("<li>O tempo está: "+descricao+"<br>");
      //res.send()

      res.send("<h1>" + cidade + " em " + strData + "</h1><br>" +
        "<li>Temperatura: " + temp + "°C , com mínima de " + min + " e máxima de " + max + "<br>" +
        "<li>Ventos a " + wind + " km/h na direção " + winddir + "<br>" +
        "<li>Umidade relativa: " + umidade + "%<br>" +
        "<li>O tempo está: " + descricao + "<br>" +
        "<img src='http://openweathermap.org/img/wn/" + icon + "@2x.png' alt='weather icon'/>"
      );

    });

  });
});

//
// Listening
//

app.listen(port, () => {
  console.clear();
  console.log('\n'.repeat('10'));
  console.log("\nServer is started and running on port " + port + " em " + strData + "\n");
});
