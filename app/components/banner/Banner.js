import React, { Component } from 'react';
import { Dimensions, FlatList, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Item from './Item';

const styles = StyleSheet.create({
  separator: {
    width: 5,
    marginLeft: 0,
  },
});

/**
 * Component for show banner carousel on main screen
 */
export default class Banner extends Component {
  static propTypes = {
    bannerItems: PropTypes.array.isRequired,
  };

  /**
   * Set default state
   *
   * @param props
   */
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
          data={this.props.bannerItems}
          renderItem={({ item, index }) => (
            <Item
              data={item}
              index={index}
            />
          )}
          keyExtractor={(item, index) => index}
          horizontal={true}
          ItemSeparatorComponent={({ highlighted }) => (
            <View style={styles.separator}/>
          )}
        />
      </View>
    );
  }
}
