import React from "react";

const TopBar=()=>{
   
    return (<div className="top-bar container-fluid d-flex justify-content-between">
        <div className="col-7 ml-5 "> 
            <p> Free shipping on all orders over 50XFA</p>
        </div>
        <div className="col-5 d-flex justify-content-around">  
            <p className="col-8"> eCommerce@info.com </p>
            <div className="col-4 d-flex justify-content-around "> 
                <div><a href="#" className="p-1 text-white">Login <i className="fa fa-arrow-right"></i></a></div>
                <div><a href="#" className="bg-danger rounded-start  rounded-end p-1 mt-1"><i className='user icon'></i> Register  </a></div>
        </div>
        </div>
    </div>
)}
export default TopBar;