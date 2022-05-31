import React, { Fragment , useState, useEffect } from "react";
import WeatherForm from "./WeatherForm";
import WeatherInfo from "./WeatherInfo";
import '../WeatherApp.css';
import Loading from "./Loading";

const WeatherApp = () => {
    const [weather, setWeather]= useState(null);

 
    useEffect(() => {
        
            loadInfo();
     
    }, []);
    useEffect(()=>{
        document.title=`Weather | ${weather?.location.name ?? ""}`;
    },[weather])

    const loadInfo= async(city='london')=>{
        try{
            const request= await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
            const  json= await request.json();
            if(request.ok){
                setTimeout(()=>{
                
                    setWeather(json);
                },2000)
            }
    
        }catch(error){
            console.error(error)
           
        }
    }
    const handleChangeCity=(city)=>{
        setWeather(null);
        loadInfo(city)
    }
   
    console.log(weather);
   
  

    return (
       <Fragment>
           <div className="container">
               <div className="container-all">

               <WeatherForm onChangeCity={handleChangeCity}/>
               {weather ? <WeatherInfo weather={weather}  /> : <Loading/>  }
                
               </div>
              
            
           </div>
              
       </Fragment>
    )
};

export default WeatherApp;
