import React from 'react';
import { connect } from 'dva';
import { Tabs } from 'antd';
import styles from './IndexPage.css';

const TabPane = Tabs.TabPane;

const IndexPage = ({ loginServer, user }) => {
  return (
    <div className={styles.app}>
      <header className={styles.app_header} />
      <div className={styles.main_content}>
        111
      </div>
      <Tabs defaultActiveKey="1" tabPosition="bottom">
        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
      </Tabs>
    </div>
  );
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
