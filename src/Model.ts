export interface cartItems {
  id: number;
  name: string;
  price: number;
  img: string;
  qty: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  img: string;
  isFavourite: boolean;
  rating: number[];
}

export interface user {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  phone: number;
  address: string;
}

export interface details {
  name: string;
  id: string;
  img: string;
  qty: number;
  price: number;
}

export interface transaction extends details {
  date?: string;
  details?: details[];
  status?: string;
  total?: number;
}

export interface error {
  code: string;
}
