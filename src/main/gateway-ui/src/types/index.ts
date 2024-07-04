export interface IProduct {
  id: number;
  name: string;
  amount: number;
  category: ICategory;
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IUser {
  id?: number;
  username: string;
  email: string;
  password: string;
  role: "admin" | "user" | "bot";
}
