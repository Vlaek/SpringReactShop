import { FC } from "react";
import styles from "./Loader.module.less";

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => {
  return (
    <div className={styles.container} data-testid="Loader">
      <div className={styles.loader}></div>
    </div>
  );
};

export { Loader };
