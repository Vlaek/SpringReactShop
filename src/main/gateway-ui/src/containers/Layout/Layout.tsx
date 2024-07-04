import { FC, ReactNode } from "react";
import cl from "classnames";
import styles from "./Layout.module.less";

type LayoutProps = {
  header: ReactNode;
  aside?: ReactNode;
  main: ReactNode;
  footer: ReactNode;
};

const Layout: FC<LayoutProps> = (props) => {
  const { header, aside, main, footer } = props;

  return (
    <div className={cl(styles.layout, { [styles.has_aside]: aside })}>
      <header>{header}</header>
      <aside>{aside}</aside>
      <main>{main}</main>
      <footer>{footer}</footer>
    </div>
  );
};

export default Layout;
