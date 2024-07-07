import { FC } from "react";
import { FaShopify } from "react-icons/fa6";
import styles from "./Header.module.less";
import { Navigation } from "@/shared/components";

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <FaShopify className={styles.header__icon} />
        <div className={styles.header__title}>Header</div>
      </div>
      <Navigation />
    </div>
  );
};

export { Header };
