import React, {useState} from "react";


function Fonctions(){
    let [cartCount, setCartCount]=useState(5);
let [qte, setQte]=useState(1);
let [counter, setCounter]=useState(0);
const monsteraPrice = 8
const [cart, updateCart] = useState([])


const increment=(product)=>{
    let list=cart.map((item)=>{
      if(item.id===product.id)
        return {...item, qte:item.qte +=1}
    })
    updateCart([...list])
  }
  
  const addToCart=(product)=>{
      let prod=cart.filter((item)=>{return product.id===item.id})[0]
      if(!prod){
        product.qte=1
        updateCart([...product])
      }else{
        
      }
      
  }
}

export default Fonctions;