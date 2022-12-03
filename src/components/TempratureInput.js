import React from "react";
const scaleName = {
    c: 'celcius',
    f: 'fahrenheit',
    k: 'kelvin',
}

const TempratureInput = (props) =>{
  
  const handleChange=(event)=>{
     props.onTemperatureChange(event.target.value);
  }

  const temperature = props.temperature;
  const scale = props.scale;
    return(
       <div className="section">
       <legend>Temperature in {scaleName[scale]}:</legend> 
       <input value={temperature} onChange={handleChange} placeholder={props.placeholder}/>
       <p style={{fontFamily:'sans-serif'}}>Formula to calculate</p>
       <p style={{marginBottom:"8px", marginTop:"8px",fontFamily:'sans-serif'}}>{scale==='c'?"Celcius to fahrenheit :   (celcius * 9/5)+32":scale==='f'?"Fahrenheit to celcius :   (fahrenheit-32)*5/9":"Kelvin to celcius :   (kelvin-273.15)"}</p>
       <p style={{fontFamily:'sans-serif'}}>{scale==='c'?"Celcius to kelvin :  (celcius-273.15)":scale==='f'?'Fahrenheit to kelvin: (fahrenheit-32)*5/9+273.15': 'kelvin to fahrenheit: (kelvin-273.15)*9/5+32'}</p>
       </div>
    );
}

export default TempratureInput; 