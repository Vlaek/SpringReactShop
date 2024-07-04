import { FC, ReactNode } from "react";
import styles from "./MainContainer.module.less";

type MainContainerProps = {
  children: ReactNode;
};

const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return <div className={styles.main_container}>{children}</div>;
};

export default MainContainer;
