import { FC } from "react";
import { FaFilter } from "react-icons/fa";
import styles from "./Aside.module.less";

const Aside: FC = () => {
  return (
    <div className={styles.aside}>
      <div className={styles.aside__header}>
        <FaFilter className={styles.aside__icon} />
        <div className={styles.aside__title}>Фильтр</div>
      </div>
      <div className={styles.aside__menu}>Filter Menu</div>
    </div>
  );
};

export default Aside;
