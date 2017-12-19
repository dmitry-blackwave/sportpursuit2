import React, { Component } from 'react';
import { Alert, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import Home from '../containers/Home';
import Menu from '../components/Menu';
import * as Colors from '../constants/Colors';

const styles = StyleSheet.create({
  icon: {
    color: Colors.DEFAULT_TEXT_COLOR,
  },
  profileIcon: {
    right: 15,
  },
  barsIcon: {
    left: 15,
  },
  navBar: {
    backgroundColor: Colors.PRIMARY_COLOR,
  },
  navBarImage: {
    height: 30,
    width: 160,
  },
});

/**
 * Component for render base application screen with drawer menu events and home screen
 */
export default class SportPursuit extends Component {
  static propTypes = {
    menu: PropTypes.object.isRequired,
  };

  /**
   * Open drawer menu event
   */
  openControlPanel = () => {
    this.drawer.open();
  };

  /**
   * Render profile button
   * @param props
   */
  renderRightButton = props => (
    <TouchableOpacity onPress={() => {
      Alert.alert(
        'Profile message',
        'This is native alert for ios/android',
        [
          { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: true },
      );
    }} style={styles.profileIcon}>
      <Icon name='user' size={20} style={styles.icon}/>
    </TouchableOpacity>
  );

  /**
   * Render menu button
   * @param props
   */
  renderLeftButton = props => (
    <TouchableOpacity onPress={this.openControlPanel}
                      style={styles.barsIcon}>
      <Icon name='bars' size={20} style={styles.icon}/>
    </TouchableOpacity>
  );

  render() {
    return (
      <Drawer
        ref={(ref) => {
          this.drawer = ref;
        }}
        content={<Menu menu={this.props.menu}/>}
        openDrawerOffset={0.55}
        tapToClose={true}
      >
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <Router>
          <Stack key="root">
            <Scene
              key="home"
              component={Home}
              title="Main page"
              navigationBarTitleImage={require('../../assets/logo.png')}
              navigationBarTitleImageStyle={styles.navBarImage}
              navigationBarStyle={styles.navBar}
              right={this.renderRightButton}
              left={this.renderLeftButton}
              initial
            />
          </Stack>
        </Router>
      </Drawer>
    );
  }
}
