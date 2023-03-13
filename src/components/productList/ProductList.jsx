import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="productList">
      <div className="productList-texts">
        <h1 className="productList-title">Pet Project</h1>
        <p className="productList-desc">
          Ebook
        </p>
      </div>
      <div className="productList-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;