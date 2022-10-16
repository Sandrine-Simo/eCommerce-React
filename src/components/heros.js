import React from "react";

//import {fontAwaresonIcon} from 
function Heros(){
    const myStyle={
        backgroundImage: "url('images/hero.webp')",
        height:'70vh',
        marginTop:'-10px',
        //fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        
        <div className="container-fluid pt-3 d-flex justify-content-between" style={myStyle}>
        <div className="col-1"> </div>
        <div className="col-4 ml-5" style={{fontSize:'2em', weight:'3em'}}> 
            <p> Spring / Summer Colection 2022</p>
            <h1>Get up to 45% Off New Arrivals</h1>
            <div><button  className="bg-danger rounded-start  rounded-end p-2 text-white " style={{border:"none"}} >SHOP NOW <i className="fa fa-arrow-right"></i></button></div>
            

        </div>
        <div className="col-7"> </div>
       
        
        </div>
    
    );
}
export default Heros;