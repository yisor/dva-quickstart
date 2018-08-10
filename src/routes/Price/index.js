import React, { Component } from 'react';
import { connect } from 'dva';
import { ListView } from 'components';
import { SearchBar, Tabs } from 'antd-mobile';
import { routerRedux } from 'dva/router';

const tabs = [
  { title: '自选' },
  { title: 'USDT' },
  { title: 'BTC' },
  { title: 'ETH' },
  { title: 'HT' }
];

const PriceItem = (props) => {
  const item = props.itemInfo
  return (
    <div style={{ height: 45 }}>{item.id}</div>
  )
}

class PricePage extends Component {

  componentDidMount() {
    this.props.getTicker();
  }

  render() {
    const { ticker, loading } = this.props;
    return (
      <div>
        <SearchBar
          placeholder="搜索币种"
          maxLength={20} />
        <Tabs
          tabs={tabs}
          initialPage={1}
          tabBarActiveTextColor="#35BAA0"
          tabBarInactiveTextColor="#797F85"
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <ListView
            data={ticker}
            ListItem={PriceItem}
            loading={loading}
          />
        </Tabs>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ticker: state.price.ticker,
  loading: state.loading.effects['price/fetch']
})

const mapDispatchToProps = (dispatch) => ({
  getTicker: () => {
    dispatch({ type: 'price/fetch' });
  },
  changeUrl: (url) => {
    dispatch(routerRedux.push(url));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PricePage);