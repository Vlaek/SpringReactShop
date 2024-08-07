import { FC, useEffect } from "react";
import styles from "./UserList.module.less";
import { useGetUsersQuery } from "../../../store/api/api";
import { Loader, LoadingError, User } from "@/shared/components";

interface UserListProps {}

const UserList: FC<UserListProps> = () => {
  const { data, error, isLoading } = useGetUsersQuery();

  useEffect(() => {
    if (error) {
      console.error("Ошибка загрузки данных:", error);
    }
  }, [error]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <LoadingError error={error} />;
  }

  return (
    <ul className={styles.list}>
      {data && data.map((user) => <User user={user} key={user.id} />)}
    </ul>
  );
};

export { UserList };
