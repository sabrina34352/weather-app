import React from 'react'
import forecastCSS from '../styles/forecast.module.css'

function ForecastGraphNight() {
  return (
    <>
      <svg className={forecastCSS.graph} id={forecastCSS.graph2}>
        <line x1="10" y1="10" x2="70" y2="70" stroke="white" />
        <line x1="70" y1="70" x2="200" y2="15" stroke="white" />
      </svg>
    </>
  );
}

export default ForecastGraphNight