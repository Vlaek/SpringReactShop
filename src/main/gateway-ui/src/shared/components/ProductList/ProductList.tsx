import { FC, useEffect } from "react";
import styles from "./ProductList.module.less";
import { useGetProductsQuery } from "@/store/api/api";
import { Product } from "../Product/Product";

interface ProductListProps {}

const ProductList: FC<ProductListProps> = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  useEffect(() => {
    if (error) {
      console.error("Ошибка загрузки данных:", error);
    }
  }, [error]);

  if (isLoading) {
    return <div className={styles.loader}>Загрузка...</div>;
  }

  return (
    <ul className={styles.list}>
      {data &&
        data.map((product) => <Product product={product} key={product.id} />)}
    </ul>
  );
};

export { ProductList };
