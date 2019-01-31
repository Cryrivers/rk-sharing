export type Product = {
  /**
   * The name of the product
   * @faker {{commerce.productAdjective}} {{commerce.productName}}
   */
  name: string;
  /**
   * The price of the product
   * @range 1 99
   */
  price: number;
  /**
   * Seller's address
   * @faker {{address.city}}, {{address.state}}, {{address.country}}
   */
  sellerAddress: string;
  /**
   * The description of the product
   * @example This is really a good product.
   */
  description: string;
};
