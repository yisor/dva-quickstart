import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';

const ProductList = ({ loading, loadMore, products }) => {

  return (
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      loading={loading}
      itemLayout="horizontal"
      loadMore={loadMore()}
      dataSource={products}
      renderItem={item => (<List.Item>{item.id}</List.Item>)}
    />
  );
};

ProductList.propTypes = {
  onDelete: PropTypes.func,
  products: PropTypes.array.isRequired,
};

export default ProductList;