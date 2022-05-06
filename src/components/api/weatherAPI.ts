type apiData = {
  dt: number;
  main: {
    temp_max: number;
    temp_min: number;
  };
  dt_txt: string;
  weather: { main: string };

  wind: { speed: number };
};

async function dataAPI() {
  const response = await fetch(
    "http://api.openweathermap.org/data/2.5/forecast?lat=41&lon=69&appid=efa9b2c365ff6d768ba4a6bc188cdff2&units=metric&cnt=5"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const days = [];

      data.list.map((day: apiData) => {
        days.push({
          date: day.dt_txt.slice(5, 10),
          time: day.dt_txt.slice(11, 16),
          wind: day.wind.speed,
          dayTemp: day.main.temp_max,
          nightTemp: day.main.temp_min,
          weather: day.weather[0].main,
        });
      });

      return days;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });

  return response;
}
export default dataAPI;
