import React, { useState } from "react";
import TempratureInput from "./TempratureInput";

const BoilingVerdict =(props)=>{
   if(props.celcius==='')
     return'';
    else if((props.celcius)>=100)
     return <h2 style={{color:"red"}}>Water will boil at {props.celcius}<sup style={{color:"red"}}>o</sup> celcius.</h2>
   return <h2 style={{color:"green"}}>Water will not boil at {props.celcius}<sup style={{color:"green"}}>o</sup> celcius.</h2>  
}

function fahrenheitToCelcius(fahrenheit){
    return((fahrenheit-32)*5/9)
 }
function fahrenheitToKelvin(fahrenheit){
    return((fahrenheit-32)*5/9+273.15);
 }
 
 function celciusToFahrenheit(celcius){
    return((celcius*9/5)+32)
 }
 
 function celciusToKelvin(celcius){
    return(celcius+273.15);
 }
 function kelvinToFahrenheit(kelvin){
    return((kelvin-273.15)*9/5+32);
 }
 function kelvinToCelcius(kelvin){
    return(kelvin-273.15);
 }
 function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input))
     return '';
    const output = convert(input);
    const rounded = Math.round(output*1000)/1000;
    return rounded.toString();  
 }
const Calculator = ()=>{
    
    const [state,setState] = useState({temperature:'',scale:'c'});
    const handleCelciusChange=(temperature)=>{
        setState({scale:'c',temperature});
    }
    const handlefahrenheitChange=(temperature)=>{
        setState({scale:'f',temperature});
    }
    const handleKelvinChange =(temperature)=>{
        setState({scale:'k',temperature});
    }
    
    const scale = state.scale;
    const temperature = state.temperature;
    const celcius = scale==='c' ?temperature:scale==='f'?tryConvert(temperature, fahrenheitToCelcius):tryConvert(temperature,kelvinToCelcius);
    const fahrenheit = scale==='f'?temperature:scale==='c'?tryConvert(temperature, celciusToFahrenheit):tryConvert(temperature,kelvinToFahrenheit);
    const kelvin = scale==='k'?temperature:scale==='c'?tryConvert(temperature,celciusToKelvin):tryConvert(temperature,fahrenheitToKelvin);

    return(
      <div>
      <div className="content">
      <TempratureInput scale='c' temperature={celcius} onTemperatureChange={handleCelciusChange} placeholder={0}/>
      <TempratureInput scale='f' temperature={fahrenheit} onTemperatureChange={handlefahrenheitChange} placeholder={32}/>
      <TempratureInput scale='k' temperature={kelvin}  onTemperatureChange={handleKelvinChange} placeholder={273.15}/>
      </div>
      <BoilingVerdict celcius={parseFloat(celcius)}/>
      </div> 
    );
}

export default Calculator;