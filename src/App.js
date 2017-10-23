/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Alert,
    
} from 'react-native';

import styles from './styles'

export default class LearningnFlexbox extends Component {

  onPressLearnMore = () => {
     Alert.alert(
       'Alert Title',
          'My Alert Msg',
          [
            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
     )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Text style={styles.navBarButton}>Back</Text>
          <Text style={styles.navBarHeader}>Awesome</Text>
          <Text style={styles.navBarButton}>More</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>
            Welcome to Awesome App!
          </Text>
          <View style={styles.contentButton}>
            <Button
               onPress={this.onPressLearnMore}
               title="Click!!!!"
               color="#2ecc71"
               accessibilityLabel="onPress"
           />
        </View>
      </View>
        <View style={styles.tabBar}>
           <View style={[styles.tabBarButton, styles.button1]} />
           <View style={[styles.tabBarButton, styles.button2]} />
           <View style={[styles.tabBarButton, styles.button3]} />
           <View style={[styles.tabBarButton, styles.button4]} />
           <View style={[styles.tabBarButton, styles.button5]} />
        </View>
      </View>
    );
  }
}


AppRegistry.registerComponent('LearningnFlexbox', () => LearningnFlexbox);
