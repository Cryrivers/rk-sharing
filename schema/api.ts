import { Product } from './data/product';

export type Country = 'SG' | 'MY' | 'PH' | 'TH' | 'TW' | 'VN' | 'ID';

type WithResponseSuccess<T> = {
  status: 'ok';
  data: T;
};

type WithResponseFailure = {
  status: 'error';
  /**
   * @example User Not Login
   */
  reason: string;
};

type WithResponse<T> = WithResponseSuccess<T> | WithResponseFailure;

/**
 * The URL Query Schema for API /getProducts
 */
export type GetProductsRequest = {
  /**
   * The owner's shop id for the product to be fetched
   */
  shopId: number;
  /**
   * The item id for the product to be fetched
   */
  productId: number;
  country: Country;
};

type ProductList = {
  products: Product[];
};

/**
 * The Response Data Schema for API /getProducts
 */
export type GetProductsResponse = WithResponse<ProductList>;

export type GetProductsResponseSuccess = WithResponseSuccess<ProductList>;
