import React from "react";

function Panier(props){
    const {image, desc, prix, qte, setQte}=props;
    <div className="d-flex ">
                  <div className='col1 '>
                     <div style={{width:"60%", height:"15vh"}}><img src={`${image}`} alt="image" width="100%"/></div> 
                  </div>
                  <div className='col2'>
                     <div>Titre: {desc}</div>
                     <div>PU: {prix}</div>
                     <div>Quantité: <button type="button" className="btn btn-warning" onClick={()=>setQte(qte + 1)}>+</button>{qte}<button type="button" className="btn btn-warning" onClick={()=>setQte(qte - 1)}>-</button>
                     </div>
                  </div>
                  <hr/>
              </div>
}
export default Panier;