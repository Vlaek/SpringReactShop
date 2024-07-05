import { FC, ReactNode } from "react";
import cl from "classnames";
import styles from "./Layout.module.less";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

type LayoutProps = {
  header: ReactNode;
  aside?: ReactNode;
  main: ReactNode;
  footer: ReactNode;
};

const Layout: FC<LayoutProps> = (props) => {
  const { header, aside, main, footer } = props;
  const isAside = useSelector((state: RootState) => state.main.isAside);

  return (
    <div className={cl(styles.layout, { [styles.has_aside]: isAside })}>
      <header>{header}</header>
      {isAside && <aside>{aside}</aside>}
      <main>{main}</main>
      <footer>{footer}</footer>
    </div>
  );
};

export { Layout };
