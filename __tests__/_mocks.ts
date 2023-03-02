export const MockProduct = {
  id: 1,
  key: 1,
  title: "Title",
  price: 234,
  description: "Description",
  category: "Category",
  image: "https://image.jpeg",
  rating: { count: 567, rate: 8.9 },
  hasPrime: false,
};

export default {
  Product: MockProduct,
  ProductsList: [MockProduct],
};
