import React from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ loading, loadMore, products }) => {

  return (
   <div></div>
  );
};

ProductList.propTypes = {
  onDelete: PropTypes.func,
  products: PropTypes.array.isRequired,
};

export default ProductList;