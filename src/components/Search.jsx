import React, { useEffect, useState } from "react";
import "../styles.css";

export default function Search(props) {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({
    cityName: "",
    countryName: "",
    temp: 0,
    humidity: 0
  });

  function handleLocation(event) {
    setLocation(event.target.value);
  }

  function handleClick() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "53d05f89e8mshe789a04b6639386p180516jsn3d0816f79641",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
      }
    };

    fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setData({
          cityName: response.location.name,
          countryName: response.location.country,
          temp: response.current.temp_c,
          humidity: response.current.humidity
        });
      })
      .catch((err) => console.error(err));

    // useEffect(()=>console.log(data),[data])
    console.log(data);
    props.extract(data);
  }

  return (
    <>
      <div className="middle">
        <input
          placeholder="location"
          type="text"
          value={location}
          onChange={handleLocation}
        />
        <button onClick={handleClick}>search</button>
      </div>
      <div>
        the city name is: {data.cityName} of {data.country} having temperature:{" "}
        {data.temp}C and the humidity is: {data.humidity}
      </div>
    </>
  );
}
