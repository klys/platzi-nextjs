import React, { useEffect, useState } from "react";
import Hero from "@components/hero";
import ProductList from "@components/ProductList";

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data);
      });
  }, []);
  return (
    <div>
      <h1>Avoshop</h1>
      <Hero />
      <ProductList products={productList} />
    </div>
  );
};

export default Home;
