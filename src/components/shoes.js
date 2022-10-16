import React from "react";

function Shoes(props) {
  const { product, addToCart } = props;

  const style3 = {
    borderRadius: "5px",
    padding: "1em",
  };
  return (
    <div style={style3} className="col-4 mt-2 mb-2">
      <div style={{ backgroundColor: "#c3c3c3", textAlign: "center" }}>
        <img src={`${product.image}`} alt="image" />
      </div>
      <div style={{ width: "90%" }}>
        {product.desc}: Un pull-over, un chandail ou encore un tricot est un
        vêtement tricoté qui couvre les épaules, le dos, le torse et surtout les
        bras
        <p
          className="text-danger text-center {{width:'90%'}}"
          style={{ fontSize: "1.5em" }}
        >
          Prix {product.prix}
        </p>
        <p
          className="text-center "
          style={{ fontSize: "1.5em", width: "70%" }}
        ></p>
        <h6 style={{ width: "70%" }}>
          <button
            className="bg-danger rounded-start  rounded-end p-2 text-white text-center w-100"
            onClick={() => addToCart(product)}
          >
            {" "}
            Add to Cart{" "}
          </button>
        </h6>
      </div>
    </div>
  );
}
export default Shoes;
