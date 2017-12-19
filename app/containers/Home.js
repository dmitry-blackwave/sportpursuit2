import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';
import { makeState } from '../reducers/index';

export default connect(state => makeState)(Home);
