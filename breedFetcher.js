const request = require('request');
let breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log('Error:', error);
    console.log('statusCode:', response && response.statusCode);
  }
  const data = JSON.parse(body);
  console.log(data[0].description);
  console.log(typeof body);
});