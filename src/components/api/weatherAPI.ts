async function dataAPI() {
  const response = await fetch(
    "http://api.openweathermap.org/data/2.5/forecast?lat=41&lon=69&appid=efa9b2c365ff6d768ba4a6bc188cdff2&units=metric&cnt=5"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const days = [];
      for (let i = 0; i < data.list.length; i++) {
        const eachDay = {
          date: data.list[i].dt_txt.slice(5, 10),
          time: data.list[i].dt_txt.slice(11, 16),
          wind: data.list[i].wind.speed,
          dayTemp: data.list[i].main.temp_max,
          nightTemp: data.list[i].main.temp_min,
          weather: data.list[i].weather[0].main,
        };
        days.push(eachDay);
      }
      return days;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });

  return response;
}
export default dataAPI;
