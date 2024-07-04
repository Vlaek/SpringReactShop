import { FC } from "react";
import styles from "./LoadingError.module.less";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

interface LoadingErrorProps {
  error: FetchBaseQueryError | SerializedError;
}

const LoadingError: FC<LoadingErrorProps> = (props) => {
  const { error } = props;

  if ("status" in error) {
    const errMsg = "error" in error ? error.error : JSON.stringify(error.data);

    return (
      <div className={styles.container} data-testid="LoadingError">
        <div className={styles.error}>{errMsg}</div>
      </div>
    );
  }

  return (
    <div className={styles.container} data-testid="LoadingError">
      <div className={styles.error}>{error.message}</div>
    </div>
  );
};

export { LoadingError };
