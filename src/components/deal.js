import React from "react";

//import {fontAwaresonIcon} from 

function Deal(){
    const myStyle={
        backgroundColor: '#c3c3c3',
        height:'70vh',
        marginTop:'10px'
        //fontSize:'50px'
    };
    const circle={
        backgroundColor:'white',
        borderRadius:"50%",
        padding:"1em 2em",
        color:'black'
    }

    return (
        
        <div className="container-fluid pt-3 d-flex justify-content-between" style={myStyle}>
        <div className="col-1"> </div>
        <div className="col-6 ml-5" style={{margin:"-1em"}}> 
            <img src="images/11.png" alt="image deal"/>
        </div>
        <div className="col-5"> 
        <h1>Deal Of The Week</h1>
        <div className='d-flex justify-content-evenly'>
            <div style={circle}><h1>1</h1> Day</div>
            <div style={circle}><h1>24</h1>Hours</div>
            <div style={circle}><h1>53</h1>Minutes</div>
            <div style={circle}><h1>12</h1>Seconds</div>
        </div>
        <h4 className='text-center p-4'><button  className="bg-danger rounded-start  rounded-end p-2 text-white " style={{border:"none"}} >SHOP NOW <i className="fa fa-arrow-right"></i></button></h4>
        </div>
       
       
        </div>
    
    );
}
export default Deal;