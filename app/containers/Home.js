import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';
import { makeState, makeDispatch } from '../reducers/index';

export default connect(state => makeState, dispatch => makeDispatch)(Home);
