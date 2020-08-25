import React from "react";
import Link from "next/link";

const ProductList = (props) => {
  return (
    <React.Fragment>
      <div className="columns is-multiline">
        {props.products.map((product) => {
          return (
            <div className="column is-one-third">
              <Link href={"/product/" + product.id}>
                <a>
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img src={product.image} alt="Placeholder image" />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48">
                            <img
                              src="https://bulma.io/images/placeholders/96x96.png"
                              alt="Placeholder image"
                            />
                          </figure>
                        </div>
                        <div className="media-content">
                          <p className="title is-4">{product.name}</p>
                          <p className="subtitle is-6">{product.price}</p>
                        </div>
                      </div>

                      <div className="content">
                        {product.attributes.descripcion} <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br />
                        <time>11:09 PM - 1 Jan 2016</time>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
      <style jsx>
        {`
          .card {
            max-width: 400px;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default ProductList;
