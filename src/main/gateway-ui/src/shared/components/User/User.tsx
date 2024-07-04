import { FC } from "react";
import styles from "./User.module.less";
import { IUser } from "@/types";
import { useDeleteUserMutation } from "@/store/api/api";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";

export interface UserProps {
  user: IUser;
}

const User: FC<UserProps> = (props) => {
  const {
    user: { id, username, email, role, password },
  } = props;

  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

  const handleOnClickDeleteButton = (id: number, username: string) => {
    deleteUser(id);
    toast.error(`${username} удален`);
  };

  if (isDeleting) {
    return <div>Удаляется</div>;
  }

  return (
    <div className={styles.user} data-testid="User">
      <div>{id}</div>
      <div>{username}</div>
      <div>{email}</div>
      <div>{password}</div>
      <div>{role}</div>
      <RxCross2
        className={styles.user__btn_delete}
        onClick={() => handleOnClickDeleteButton(id ?? -1, username)}
      />
    </div>
  );
};

export { User };
