const products = [
  {
    id: "1",
    name: "mango a",
  },
  {
    id: "2",
    name: "mango b",
  },
  {
    id: "3",
    name: "mango c",
  },
  {
    id: "4",
    name: "mango d ",
  },
  {
    id: "5",
    name: "mango e",
  },
  {
    id: "6",
    name: "mango f",
  },
  {
    id: "7",
    name: "mango g ",
  },
  {
    id: "8",
    name: "mango v",
  },
  {
    id: "9",
    name: "mango p",
  },
];

export const getProducts = () => {
  return products;
};
export const getProductsById = (productId) => {
  return products.find(product => product.id === productId);
};