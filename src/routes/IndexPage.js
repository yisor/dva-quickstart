import React, { Component } from 'react';
import { connect } from 'dva';
import { Button, TabBar } from 'antd-mobile';
import styles from './IndexPage.css';

class IndexPage extends Component {

  render() {
    const { tab, user, loginServer, children } = this.props;
    return (
      <div className={styles.app}>
        <header className={styles.appHeader} />
        <div className={styles.mainContent}>
          {user.id}
        </div>
        <Button type="primary" onClick={loginServer}>Primary</Button>
        <TabBar
          unselectedTintColor="#949494"
          barTintColor="white"
          hidden={false}
        >
          <TabBar.Item
            title="主页"
            key="home"
            icon={<div />}
            selectedIcon={<div />}
            onPress={loginServer}
          />

          <TabBar.Item
            title="我的"
            key="mine"
            icon={<div />}
            selectedIcon={<div />}
            onPress={loginServer}
          />
        </TabBar>
        {children}
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
  loginServer: (act) => {
    dispatch({ type: 'user/login', payload: act });
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
