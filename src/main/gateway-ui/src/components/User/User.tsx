import { FC } from "react";
import styles from "./User.module.less";
import { IUser } from "../../types";
import { useDeleteUserMutation } from "../../store/api/api";

export interface UserProps {
  user: IUser;
}

const User: FC<UserProps> = (props) => {
  const {
    user: { id, username, email, role, password },
  } = props;

  const userString = `${id}. ${username} - ${email} - ${password} - ${role}`;

  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

  if (isDeleting) {
    return <div>Is Deleting</div>;
  }

  return (
    <div
      className={styles.user}
      data-testid="User"
      onClick={() => deleteUser(id ?? -1)}
    >
      {userString}
    </div>
  );
};

export default User;
