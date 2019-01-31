import * as PropTypes from 'prop-types';

export const validateGetProductsRequest = PropTypes.shape({
  shopId: PropTypes.number.isRequired,
  productId: PropTypes.number.isRequired,
  country: PropTypes.oneOf(['SG', 'MY', 'TH', 'PH', 'VN', 'ID', 'TW']),
});
