var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://astrology-horoscope.p.rapidapi.com/zodiac_compatibility/result/',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'x-rapidapi-key': 'ee1b70dac9msh8c1c0c9c0b4e809p1c6ad6jsna9fdc2621afe',
    'x-rapidapi-host': 'astrology-horoscope.p.rapidapi.com'
  },
  data: {
    mystic_dob: '1987-05-21',
    mystic_dob2: '1989-09-27',
    mystic_name: 'jhon',
    mystic_name2: 'alice'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});