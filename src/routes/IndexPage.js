import React from 'react';
import { connect } from 'dva';
import './Home.css';

const IndexPage = ({ loginServer, user }) => {
  return (
    <div className="App">
      <header className="app-header" />
      <div className="main-content">
        111
      </div>
      <footer className="app-footer" />
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
