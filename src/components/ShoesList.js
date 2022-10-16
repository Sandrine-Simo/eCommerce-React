import React from "react";
import { data } from "./data"; 
import Shoes from "./shoes";


function ShoesList({cart, setUpdateCart, addToCart}){
    
    const style2={
        marginTop:'2em',
        paddingLeft:'10px',
        border: "1px solid #c3c3c3",
        display: "flex",
        flexWrap: "wrap",
        alignContent:"center"
    }
   
    return(
        <div className="d-flex justify-content-evenly container" style={style2}>
        {data.map((d, index)=> {
            return <Shoes 
            product={d}
            key={index}
            addToCart={addToCart}
            />  
        })
        }
        </div>
    )
}
export default ShoesList;