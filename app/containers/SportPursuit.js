import React from 'react';
import { connect } from 'react-redux';
import { makeState } from '../reducers/index';
import SportPursuit from '../components/SportPursuit';

export default connect(state => makeState)(SportPursuit);
