import React from 'react';
import './assign.css';
import tj1 from "./Images/tj1.jpg";
import tj2 from "./Images/tj2.jpg";
import MyAppBar from './assign';
/*import Servicecenter from './Servicecenter';*/
import Footer from './Footer';
const HomePage = () => {
  return (

    <div>
    <MyAppBar/>
    <div className="Boxx">
    <div>
    </div>
    </div>
    <div className="u">
    <h3>Welcome to Home Appliance Service Center</h3></div><br/><br/><br/>
    <div className="uu"><img src={tj1} style={{width:"800px",height:"400px"}}></img>
    </div>
       <Footer/>
    </div>
    
  );
};

export default HomePage;
