export interface IProduct {
  id: number
  name: string
  amount: number
  category: ICategory
}

export interface ICategory {
  id: number
  name: string
}

export enum IUserRole {
  ADMIN = 'admin',
  USER = 'user',
  BOT = 'bot',
}

export interface IUser {
  id?: number
  username: string
  email: string
  password: string
  role: IUserRole
}
