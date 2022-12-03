
import Calculator from './components/Calulator';
import './styles/Style.css';
import React from 'react';

function App() {
 return (
<div className="container">
  <h1 style={{color:"Blue"}}>Temperature Convertor</h1>
  <h2><u style={{color:"red"}}>Note:</u> Please Enter in any one of the  box other will update automatically</h2>
  <Calculator/>
 </div>
 ); 
}

export default App;