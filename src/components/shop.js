import React from "react";

function Shop(){
    const style={
        margin:"5em",
        padding:'10px'
    }
    const style2={
        paddingLeft:'10px',
        width: "100%",
        height: "300px",
        border: "1px solid #c3c3c3",
        display: "flex",
        flexWrap: "wrap",
        alignContent: "center"

    }
    const style3={
        padding:'0.7em',
        borderRadius:'5px',
        backgroundColor:'#c3c3c3',
        width:"20%",
        textAlign:'center'

    }
    const style4={
        padding:'0.7em',
        borderRadius:'5px',
        backgroundColor:'#c3c3c3',
        width:"90%",
        margin: "auto",
        textAlign:'center'

    }
    return (
        <div className="" style={style}> 
         <h1 className="text-dark text-center pb-2" >SHOP</h1>
         <div className="d-flex justify-content-evenly " style={style2}>
            <h3 className="col-2" style={style3}>All </h3>
            <h3 className="col-2" style={style3}>Women's</h3>
            <h3 className="col-2" style={style3}>Men's</h3>
            <h3 className="col-2" style={style3}>All</h3>
            <h3 className="col-offset-2 col-10 mt-5  align-self-center"><input type='search' placeholder="Search Item" style={style4}/></h3>
         </div>
         

         
       </div> 
    )
}
export default Shop