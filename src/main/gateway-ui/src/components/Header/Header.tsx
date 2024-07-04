import { FC, useState } from "react";
import { FaShopify } from "react-icons/fa6";
import styles from "./Header.module.less";

const Header: FC = () => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  const handleAuthorize = () => {
    setIsAuthorized(!isAuthorized);
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <FaShopify className={styles.header__icon} />
        <div className={styles.header__title}>Header</div>
      </div>
      <div className={styles.header__menu} onClick={handleAuthorize}>
        {isAuthorized ? "Выйти" : "Войти"}
      </div>
    </div>
  );
};

export default Header;
