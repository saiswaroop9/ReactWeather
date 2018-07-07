var axios = require('axios');

const OPEN_WEATHER_MAP_URL='https://api.openweathermap.org/data/2.5/weather?appid=726a71b765edb30f0fb0a1f81a5632f9&units=imperial';


module.exports={
  getTemp: function(location){
    var encodedLocation=encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q={encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      debugger;
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else {
        return res.data.main.temp;//success case
      }
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}
