import { FC } from "react";
import styles from "./SeparatorLine.module.less";

interface SeparatorLineProps {
  width?: string;
}

const SeparatorLine: FC<SeparatorLineProps> = (props) => {
  const { width = "100%" } = props;
  return (
    <div
      style={{ width }}
      className={styles.separatorLine}
      data-testid="SeparatorLine"
    ></div>
  );
};

export { SeparatorLine };
