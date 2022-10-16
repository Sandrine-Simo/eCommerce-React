import React from "react";

const NavBar = (props) => {
   const { cart, increment, decrement, Facture}=props
  const style2 = {
    borderRadius: "50%",
    backgroundColor: "#c3c3c3",
    textAlign: "center",
    fontSize: "2em",
    padding: "1em",
  };
  const style = {
    height: "25vh",
  };
  return (
    <nav
      className="navbar navbar-dark bg-white d-flex justify-content-between "
      style={style}
    >
      <h1 className="col-4 ml-5 text-center">
        {" "}
        OUR<span className="text-danger"> Shop</span>
      </h1>
      <div className="col-5 d-flex justify-content-around text-dark ">
        <h6>
          <a href="#" className="text-dark">
            Home{" "}
          </a>
        </h6>
        <h6>
          <a href="#" className="text-dark">
            Promotion{" "}
          </a>
        </h6>
        <h6>
          <a href="#" className="text-dark">
            Contact{" "}
          </a>
        </h6>
      </div>
      <div className="d-flex ">
        <h6 className="col-3 text-center ">
          <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#Modal1">
            <i className="fa fa-shopping-cart" style={{ fontSize: "1.2em" }}></i>
          </button>
        </h6>
        <div style={{ color: "red", marginTop: "-1em", marginLeft: "0.5em" }}>{cart.length}</div>
      </div>

      <div className="modal fade" id="Modal1" tabIndex="-1" role="dialog" aria-labelledby="Modal1"       aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ModalLabel">
                Votre Panier:
              </h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              
              {cart.map((item, index)=>{
               return (
                  
               <div className="d-flex " key={item.id}>
                
                  <div className='col1 '>
                     <div style={{width:"60%", height:"15vh"}}><img src={`${item.image}`} alt="image" width="100%"/></div> 
                     
                  </div>
                  <div className='col2'>
                     <div>Titre: {item.desc}</div>
                     <div>PU: {item.prix}</div>
                    <div>Quantité: <button type="button" className="btn btn-warning" onClick={() => increment(item)}>+</button>{item.qte}<button type="button" className="btn btn-warning" onClick={() => decrement(item)}>-</button> 
                    
                    </div>
                    
                  
                  <div style={{color:"blue", fontWeight: "bold"}}> TOTAL: { Facture(item)} </div>
                  <br/> 
                  <hr/> 
                  </div>
                  
              </div>
              
              )}
           
              )}
              
             
               
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-warning">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
