const WeatherAPI = {
  days: [
    { number: 1, day: "Monday", tempH: 23, tempL: 16, rainProb: 20, thumbnail:"/outline-wb_sunny-24px.svg", sunrise: "07:25", sunset:"18:25", windSpeed: 14, windDir:"NNE", uvIndex: 4, cloudCover:40, dewPoint: -6, visibility: 16 },
    { number: 2, day: "Tuesday", tempH: 15, tempL: 6, rainProb: 85 ,thumbnail:"/outline-wb_cloudy-24px.svg", sunrise: "07:10", sunset:"18:10", windSpeed: 10, windDir:"SE", uvIndex: 1, cloudCover:80, dewPoint: 2, visibility: 5},
    { number: 3, day: "Wednesday", tempH: 40, tempL: 20, rainProb: 1,thumbnail:"/outline-wb_sunny-24px.svg", sunrise: "08:25", sunset:"19:25", windSpeed: 2, windDir:"WE", uvIndex: 5, cloudCover:10, dewPoint: 0, visibility: 30 },
    { number: 4, day: "Thursday", tempH: 25, tempL: 2, rainProb: 56 ,thumbnail:"/outline-wb_sunny-24px.svg", sunrise: "07:11", sunset:"18:11", windSpeed: 6, windDir:"NNE", uvIndex: 6, cloudCover:25, dewPoint: -3, visibility: 15},
    { number: 5, day: "Friday", tempH: -8, tempL: 5, rainProb: 90,thumbnail:"/outline-ac_unit-24px.svg", sunrise: "08:11", sunset:"17:11", windSpeed: 15, windDir:"SE", uvIndex: 1, cloudCover:55, dewPoint: -9, visibility: 5}
  ],
  all: function() {
    return this.days;
  },
  get: function(id) {
    const isDay = d => d.number === id;
    return this.days.find(isDay);
  }
};

export default WeatherAPI;
