import React, { Component } from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import Item from './Item';

/**
 * Component for render bestSellers block on main screen
 */
export default class BestSellers extends Component {
  static propTypes = {
    bestSellers: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
    };
  }

  render() {
    return (
      <View
        onLayout={() => {
          this.setState({
            viewport: {
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height,
            },
          });
        }}
      >
        <FlatList
          data={this.props.bestSellers}
          renderItem={({ item, index }) => (
            <Item
              data={item}
              index={index}
            />
          )}
          keyExtractor={(item, index) => index}
          horizontal={true}
        />
      </View>
    );
  }
}
