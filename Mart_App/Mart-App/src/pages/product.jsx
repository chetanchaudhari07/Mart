import { useEffect, useState } from "react";
import api from "../api";
import ProductTable from "../components/productTable";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await api.get("/products");
    setProducts(res.data.data);
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductTable products={products} />
    </div>
  );
}