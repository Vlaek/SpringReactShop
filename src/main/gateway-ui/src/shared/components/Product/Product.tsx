import { FC } from "react";
import styles from "./Product.module.less";
import { IProduct } from "@/types";

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

export { Product };
