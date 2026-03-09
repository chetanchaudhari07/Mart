import { memo, useMemo } from "react";

const ProductTable = ({ products }) => {

  const renderedProducts = useMemo(() => {
    return products.map((product) => (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>₹{product.price}</td>
        <td>{product.category}</td>
        <td>{product.stock}</td>
      </tr>
    ));
  }, [products]);

  return (
    <div>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>{renderedProducts}</tbody>
      </table>
    </div>
  );
};

export default memo(ProductTable);