import { GetProductsRequest } from '../../schema/api';

export function validateGetProductsRequest(
  value: any,
): value is GetProductsRequest {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof value.shopId === 'number' &&
    typeof value.productId === 'number' &&
    ['SG', 'MY', 'TH', 'PH', 'VN', 'ID', 'TW'].includes(value)
  );
}
