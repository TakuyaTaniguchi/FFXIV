import React from 'react';
import { connect } from 'react-redux';

import App from '../component/index.js';
import {increment}  from '../actions/index.js';


import Header from '../component/Header';
import { user }  from '../actions/user.js';



function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => {
        dispatch(increment());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


