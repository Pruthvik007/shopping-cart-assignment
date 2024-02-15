export type Page = {
  limit: number;
  skip: number;
  total: number;
};

export type FailureResponse = {
  message: string;
};

export type User = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type Products = {
  products: Product[];
};

export type FilterType = {
  searchTerm: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
export type CartType = {
  items: {
    [key: number]: CartItem;
  };
  totalItems: number;
  totalAmount: number;
};
