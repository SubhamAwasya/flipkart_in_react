import HomeCategory from "../components/mini-comp/HomeCategory";
import Product from "../components/Product";
import DummyProduct from "../components/DummyProduct";
import Skeleton from "../components/mini-comp/Skeleton";
import Grid from "../components/mini-comp/Grid";
import { useEffect, useState } from "react";

function Home() {
  const pro = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
        console.log(res.products);
      });
  }, []);

  return (
    <>
      <HomeCategory />
      {products.length === 0 && <Skeleton />}
      <Grid>
        {products.map((product, index) => (
          <DummyProduct key={index} product={product} />
        ))}
      </Grid>
    </>
  );
}

export default Home;
