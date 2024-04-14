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