import React from "react";
import "./App.css";
import "./index.css";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Heros from "./components/heros";
import Shop from "./components/shop";
import ShoesList from "./components/ShoesList";
import Deal from "./components/deal";
import Foot from "./components/foot";
import { useState } from "react";
function App() {
  
  const [cart, setUpdateCart] = useState([]);
  let total=0
  const Facture=(pduit)=>{
    
      total+=pduit.qte*pduit.prix
      return total
    
  }
//   const Facture2=()=>{
//     cart.forEach(pduit=>{
//     total+=pduit.qte*pduit.prix
//     return total
//   })
// }
  const addToCart = (product, ptc) => {
    const prod = cart.filter((item) => item.id === product.id)[0];
    if (!prod) {
      product["qte"] = 1;
      setUpdateCart([...cart, product]);
      
    } else {
      const updateList = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, qte: (item.qte += 1) };
        }
        return item;
      });
      setUpdateCart(updateList);
      ptc=Facture()
    }
  };


  const increment = (product, ptc) => {
    
      const updateList = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, qte: (item.qte += 1) };
        }
        return item;
      });
      setUpdateCart(updateList);
      ptc=Facture()
    } 
    const decrement = (product, ptc) => {
    
      const updateList = cart.map((item, index) => {
        if (item.id === product.id) { 
          item.qte -= 1
        };
        return item;
        })
        const updateList2 = updateList.filter((item) => item.qte !== 0);
        setUpdateCart(updateList2);
        ptc=Facture()
  } 
  return (
    <div>
      <TopBar />
      <NavBar 
        cart={cart}  
        increment={increment}
        decrement={decrement}
        Facture={Facture}
        //Facture2={Facture2}
      />
      <Heros />
      <Shop />
      <ShoesList
        cartCount={cart}
        setUpdateCart={setUpdateCart}
        addToCart={addToCart}
        Facture={Facture}
        
      />
      <Deal />
      <Foot />
    </div>
  );
}

export default App;
