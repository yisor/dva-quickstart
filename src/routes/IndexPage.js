import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import styles from './IndexPage.css';


const IndexPage = ({ loginServer, user }) => {
  return (
    <div className={styles.app}>
      <header className={styles.app_header} />
      <div className={styles.main_content}>
        111
      </div>
      <Button type="primary" onClick={loginServer}>Primary</Button>
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
