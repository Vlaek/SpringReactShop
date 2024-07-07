import { FC, useState } from "react";
import styles from "./Navigation.module.less";

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
  // TODO: Сделать isAuthorized через back
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  const handleAuthorize = () => {
    setIsAuthorized(!isAuthorized);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__list__item}>Пользователи</li>
        <li className={styles.nav__list__item}>Продукты</li>
        {isAuthorized ? (
          <li className={styles.nav__list__item} onClick={handleAuthorize}>
            Выйти
          </li>
        ) : (
          <li className={styles.nav__list__item} onClick={handleAuthorize}>
            Войти
          </li>
        )}
      </ul>
    </nav>
  );
};

export { Navigation };
