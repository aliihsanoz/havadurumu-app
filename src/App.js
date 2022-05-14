import React, {useState} from 'react';
import Weatherresult from './Weatherresult';
import './App.css';

function App() {
  const APP_KEY ="03104125af414b0f95f213434222403";
  // const APP_KEY ="http://api.weatherapi.com/v1/forecast.json?key=&q=London&days=3&aqi=no&alerts=no";
   let cityInput="";
 const [weatherData, setweatherData]=useState([]);
  
 console.log(weatherData.length);

  function cityText (e) {
      // document.querySelector("input").addEventListener("input", (e)=> {
      //   e.preventDefault();
        cityInput=e.target.value;
        console.log(cityInput); 
      // })
  }

  
  var arrFunc = () => {
          console.log('test btn clicked');
  };

 
   async function getData(param) {
     if (param==="") return;
      const data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${param}&days=3&aqi=no&alerts=no`);
      const result=await data.json();
      setweatherData(result.forecast.forecastday)
   }

  // const getData = async param => {
  //   const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${param}&days=3&aqi=no&alerts=no`);
  //  }

 

  return (
    <div>
       <h2 className="site-baslik">
          Hava Durumunu Öğrenme Uygulaması
       </h2>
        <div className="search">
         
          <input type="text" placeholder="İl Adı Yazınız ..." onChange={cityText}/> 
          <button onClick={()=>getData(cityInput)}>Search</button>
        </div>
        <div className="result">
          {(weatherData.length != 0) ?
          (<ul  className="baslik" >
            <li>Tarih</li>
            <li>Durum (ikon / Yazı)</li>
            <li>Sıcaklık (En Düşük) / En Yüksek) </li>
          </ul>) : (
            <div></div>
          )}

          {/* {(typeof weatherData != 'undefined') ?
          (<ul  className="baslik" >
            <li>Tarih</li>
            <li>Durum (ikon / Yazı)</li>
            <li>Sıcaklık (En Düşük) / En Yüksek) </li>
          </ul>) : (
            <div></div>
          )} */}

        </div>
        {weatherData.map(item=>(<Weatherresult key={item.date} date={item.date} mintemp={item.day.mintemp_c} maxtemp={item.day.maxtemp_c} condition={item.day.condition.text} icon={item.day.condition.icon} />))}
    </div>
  );
}

export default App;
