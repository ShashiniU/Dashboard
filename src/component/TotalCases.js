import React from 'react';
import Title from './Title';
import './style.css'

export default function TotalCases() {
  
  return (
   
      
      <React.Fragment>
      <Title>Total Confirmed Cases</Title>
      <br></br>
      <div  className ="border"> 
     <p className= "subheading">New Cases</p>     
     <h1 className="newcases"><b>246,109</b></h1>
</div>
<br></br>
<div  className ="border"> 
     <p className= "subheading">Deaths</p>     
     <h1 className="deaths"><b>2,769</b></h1>
</div>
<br></br>
<div  className ="border"> 
     <p className= "subheading">Rocovered</p>     
     <h1 className="recovery"><b>212,825</b></h1>
</div>
   </React.Fragment>
      
    
   
  );
}