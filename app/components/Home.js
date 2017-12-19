import React, { Component } from 'react';
import { ActivityIndicator, Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import BestSellers from './bestSellers/BestSellers';
import Banner from './banner/Banner';
import FlashSales from './flashSales/FlashSales';
import * as Colors from '../constants/Colors';
import CartButton from './common/CartButton';
import Button from './common/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  globalPadding: {
    padding: 5,
  },
  cartArea: {
    paddingTop: 6,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: Colors.SECONDARY_COLOR,
    height: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  homeSubHeader: {
    backgroundColor: Colors.PRIMARY_COLOR,
    flex: 1,
  },
  homeSubHeaderText: {
    color: Colors.DEFAULT_TEXT_COLOR,
    fontSize: 14,
    fontWeight: '500',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
  },
});

/**
 * Component for render main screen
 */
export default class Home extends Component {
  static propTypes = {
    banners: PropTypes.object.isRequired,
    bestSellers: PropTypes.object.isRequired,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <View style={styles.globalPadding}>
            {!this.props.banners ? <ActivityIndicator size="small" color={Colors.PRIMARY_COLOR}/>
              : <Banner
                bannerItems={this.props.banners.banners.topBanner}
              />}
          </View>
          <View style={styles.homeSubHeader}>
            <Text style={styles.homeSubHeaderText}>Bestsellers</Text>
          </View>
          <View style={styles.globalPadding}>
            {!this.props.bestSellers ? <ActivityIndicator size="small" color={Colors.PRIMARY_COLOR}/>
              : <BestSellers
                bestSellers={this.props.bestSellers.items}
              />}
          </View>
          <View style={styles.homeSubHeader}>
            <Text style={styles.homeSubHeaderText}>Flash Sales</Text>
          </View>
          <View style={styles.globalPadding}>
            {!this.props.banners ? <ActivityIndicator size="small" color={Colors.PRIMARY_COLOR}/>
              : <FlashSales
                flashSales={this.props.banners.banners.featuredSales}
              />}
          </View>
        </ScrollView>
        <View style={styles.cartArea}>
          <View>
            <CartButton
              onPress={() => {
                Alert.alert(
                  'Shopping cart message',
                  'Go to shopping cart',
                  [
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                  ],
                  { cancelable: true },
                );
              }}
            />
          </View>
          <View/>
          <View>
            <Button
              text="Checkout"
              onPress={() => {
                Alert.alert(
                  'Checkout message',
                  'Go to payment system',
                  [
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                  ],
                  { cancelable: true },
                );
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
