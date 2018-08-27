const WeatherAPI = {
  days: [
    { number: 1, day: "Monday", tempH: 23, tempL: 16, rainProb: 20 },
    { number: 2, day: "Tuesday", tempH: 15, tempL: 6, rainProb: 85 },
    { number: 3, day: "Wednesday", tempH: 40, tempL: 20, rainProb: 1 },
    { number: 4, day: "Thursday", tempH: 25, tempL: 2, rainProb: 56 },
    { number: 5, day: "Friday", tempH: 52, tempL: 32, rainProb: 0 }
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
