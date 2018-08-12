import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import styles from './MinePage.css';

class MinePage extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader} />
        <div className={styles.mainContent}>
          我的
          {this.props.intl.formatMessage({id: 'intl.name'},{name: 'dva'})}
        </div>
      </div>
    );
  }
}

export default injectIntl(MinePage);