import React, { Component } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { TabBar } from 'antd-mobile';
import styles from './UserLayout.css';

class UserLayout extends Component {
  render() {
    const { children, changeUrl } = this.props;
    return (
      <div className={styles.app}>
        {children}
        <div style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          zIndex: '3',
        }}
        >
          <TabBar
            unselectedTintColor="#949494"
            barTintColor="white"
            hidden={false}
          >
            <TabBar.Item
              title="行情"
              key="price"
              icon={<div />}
              selectedIcon={<div />}
              onPress={() => { changeUrl('/') }}
            />

            <TabBar.Item
              title="交易"
              key="deal"
              icon={<div />}
              selectedIcon={<div />}
            />

            <TabBar.Item
              title="我的"
              key="mine"
              icon={<div />}
              selectedIcon={<div />}
              onPress={() => { changeUrl('/mine') }}
            />
          </TabBar>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  changeUrl: (url) => {
    dispatch(routerRedux.push(url));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserLayout);
