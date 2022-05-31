import React, { Fragment, useState } from "react";
import {BsSearch} from 'react-icons/bs';
import "../WeatherForm.css";
const WeatherForm = ({ onChangeCity }) => {
  const [city, setCity] = useState("");

  const hanldeSearch = (e) => {
    const value = e.target.value;
    if (value !== "") {
      setCity(value);
    }
  };
  const handleSubmitSend = (e) => {
    e.preventDefault();
    onChangeCity(city);
  };
  return (
    <Fragment>
      <div className="container-search">
        <form onSubmit={handleSubmitSend}>
          <input className="form-control px-4" type="text" placeholder="Search Country ..." onChange={hanldeSearch} />
          <BsSearch className="container-icon"/>
        </form>
      </div>
    </Fragment>
  );
};

export default WeatherForm;
