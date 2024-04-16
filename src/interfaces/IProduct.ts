type Category = ['Salgados', 'Doces', 'Bebidas', 'Pratos Quentes']

export default interface IProduct {
  name: string,
  description: string,
  price: number,
  category: Category
}