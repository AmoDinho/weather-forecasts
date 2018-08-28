const WeatherAPI = {
  days: [
    { number: 1, day: "Monday", tempH: 23, tempL: 16, rainProb: 20, thumbnail:"/outline-wb_sunny-24px.svg" },
    { number: 2, day: "Tuesday", tempH: 15, tempL: 6, rainProb: 85 ,thumbnail:"/outline-wb_cloudy-24px.svg"},
    { number: 3, day: "Wednesday", tempH: 40, tempL: 20, rainProb: 1,thumbnail:"/outline-wb_sunny-24px.svg" },
    { number: 4, day: "Thursday", tempH: 25, tempL: 2, rainProb: 56 ,thumbnail:"/outline-wb_sunny-24px.svg"},
    { number: 5, day: "Friday", tempH: -8, tempL: 5, rainProb: 90,thumbnail:"/outline-ac_unit-24px.svg" }
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
