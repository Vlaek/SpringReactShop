import { FC, useEffect } from "react";
import { useGetProductsQuery, useGetUsersQuery } from "../../store/api/api";
import Product from "../Product/Product";
import User from "../User/User";
import styles from "./App.module.less";

const App: FC = () => {
  const {
    data: productsList,
    error: productsError,
    isLoading: productsIsLoading,
  } = useGetProductsQuery();
  const {
    data: usersList,
    error: usersError,
    isLoading: usersIsLoading,
  } = useGetUsersQuery();

  useEffect(() => {
    if (productsError || usersError) {
      console.error("Ошибка загрузки данных:", productsError);
    }
  }, [productsError]);

  if (productsIsLoading || usersIsLoading) {
    return <div className={styles.app__loader}>Загрузка...</div>;
  }

  return (
    <div className={styles.app}>
      <h1 className={styles.app__title}>Список продуктов</h1>
      <ul className={styles.app__list}>
        {productsList &&
          productsList.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        {usersList &&
          usersList.map((user) => <User user={user} key={user.id} />)}
      </ul>
    </div>
  );
};

export default App;
