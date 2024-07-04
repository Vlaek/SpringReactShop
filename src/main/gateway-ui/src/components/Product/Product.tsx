import { FC } from "react";
import { IProduct } from "../../types";
import styles from "./Product.module.less";

interface IProductProps {
  product: IProduct;
}

const Product: FC<IProductProps> = (props) => {
  const {
    product: { id, name, amount, category },
  } = props;

  const productString = `${id}. ${name} - ${amount}`;

  return (
    <div className={styles.product} title={category.name}>
      {productString}
    </div>
  );
};

export default Product;
