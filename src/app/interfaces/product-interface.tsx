export interface ProductInterface {
  productId?: number;
  productName: string;
  price: number;
  picture: string;
  description: string;
  category: string;
  categoryId?: number;
}
export interface Product {
  id_product: number;
  name_product: string;
  price: number;
  picture: string;
  description: string;
  category_id: number;
  name_category: string;
}

export interface ProductPostPayload {
  nameProduct: string | null;
  price: number | null;
  picture: string | null;
  description: string | null;
  category?: string | null;
}
