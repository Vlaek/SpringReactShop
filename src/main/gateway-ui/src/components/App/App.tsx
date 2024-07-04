import { FC } from "react";
import styles from "./App.module.less";
import { SeparatorLine, UserList } from "@/shared/components";

const App: FC = () => {
  return (
    <div className={styles.app}>
      <h1 className={styles.app__title}>Список пользователей</h1>
      <SeparatorLine width="75%" />
      <UserList />
    </div>
  );
};

export default App;
