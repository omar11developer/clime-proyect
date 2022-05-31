import React, { Fragment, useState, useEffect } from "react";
import "../WeatherInfo.css";
import {BsChevronDown, BsChevronUp} from 'react-icons/bs'



const WeatherInfo = ({ weather}) => {
  const [moreinfo, setMoreinfo]= useState(false);
  const info = document.getElementById('info')


  
function btnSeeMore(){
  return (<p className="nav-link mb-0" 
  onClick={()=>{const info = document.getElementById('info'); info.style.height="220px"; info.style.opacity='100';setMoreinfo(false)} 
} >See More <BsChevronDown/></p>
    
  );
}
function btnSeeLess(){
  return <p className="nav-link mb-0" onClick={()=>{const info = document.getElementById('info'); info.style.height="0px"; info.style.opacity='0'; setMoreinfo(true)}} >See less <BsChevronUp/></p>
}

  return (
    <Fragment>
      
      <div className="card mt-1 card-cpintainer  mb-5">
        <div className="container-main p-2">
          <div className="container-main_header">
            <div className="header-country">
                <h1>{weather?.location.name}</h1>
                <span>{weather?.location.country}</span>
            </div>
            <div className="header-icon">
              <img
              src={`http:${weather?.current.condition.icon}`}
              alt={weather?.current.condition.text}
              
              />
            </div>
            <div className="header-grado">
                <span>{weather?.current.condition.text}</span>
                <h3>{weather?.current.temp_c} °C</h3>
            </div>
          </div>
        </div>
        <div className="container-info-more">
            {(moreinfo)?btnSeeMore():btnSeeLess()}
            
            <div className="info" id="info">
              <div className="info-country">
                <p>Country: <span>{weather?.location.country}</span> </p>
                <p>Lat: <span>{weather?.location.lat}</span> </p>
                <p>Lon: <span>{weather?.location.lon}</span> </p>
                <p>Continent: <span>{weather?.location.tz_id}</span> </p>
              </div>
              <div className="info-clime ">
              <p>Humidity: <span>{weather?.current.humidity}</span> </p>
                <p>Precip: <span>{weather?.current.precip_in} in</span> </p>
                <p>Pressure: <span>{weather?.current.pressure_in} in</span> </p>
                <p>Wind: <span>{weather?.current.wind_mph} mph</span> </p>
              </div>
            </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WeatherInfo;
