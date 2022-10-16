import React from "react";
import {AccessAlarm, BorderAllTwoTone} from "@material-ui/icons";

 const Foot=()=>{
   const style2={
      borderRadius:'50%',
      backgroundColor:'#c3c3c3',
      textAlign:'center',
      fontSize:'2em',
      padding: "1em"

  }
   const style={
      height:'25vh'
   }
    return( 
    <nav className="navbar navbar-dark bg-white d-flex justify-content-between " style={style}>
       <h4 className="col-9 ml-5 text-center bg-dark-50"> @TWF- Sandrine SIMO</h4>
       <div className="col-2 d-flex justify-content-around text-dark "> 
        <i className="fab fa-facebook-f bg-dark" style={{fontSize:'1.4em', color:"white", borderRadius:"50%", padding:'0 0.5em', paddingTop:'0.3em'}}></i>
        <i className="fa fa-user" style={{fontSize: "1.2em"}}></i>
        <i className="fa fa-brands fa-play bg-dark text-white " style={{fontSize: "1em", padding:'0.5em', paddingTop:'0.1/em'}}></i>
        
       </div> 
       <p className="col-1"><AccessAlarm/> <BorderAllTwoTone/></p>

    </nav>
    )
 }
 export default Foot;