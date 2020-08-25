import React from "react";

const Product = (props) => {
  return (
    <div className="tile is-ancestor">
      <div className="tile is-vertical is-8">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child box">
              <h2>Product price</h2>
              {props.data.price}
            </article>
            <article className="tile is-child box">
              <h2>Product details</h2>
              <h4>Taste: {props.data.attributes.taste}</h4>
              <h4>Hardiness: {props.data.attributes.hardiness}</h4>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <h1>{props.data.name}</h1>
              <img
                src={
                  "https://platzi-nextjs-delta.vercel.app/" + props.data.image
                }
              />
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">Give your comments</article>
        </div>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child box">
          {props.data.attributes.description}
        </article>
      </div>
    </div>
  );
};

export default Product;
