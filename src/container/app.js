import React from 'react';
import { connect } from 'react-redux';

import App from '../component/index.js';
import {increment}  from '../actions/index.js';
console.log(increment);

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