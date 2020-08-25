import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Product from "@components/Product";

const ProductItem = () => {
  const { query } = useRouter();

  const [product, setProduct] = useState<TProduct | null>(null);

  useEffect(() => {
    if (query.id) {
      window
        .fetch(`/api/avo/${query.id}`)
        .then((response) => response.json())
        .then((data: TProduct) => {
          setProduct(data);
        });
    }
  }, [query.id]);

  return (
    <div>
      <p>Esta es la pagina de products {query.id}</p>
      <p>Name:{product == null ? null : <Product data={product}></Product>}</p>
    </div>
  );
};

export default ProductItem;
