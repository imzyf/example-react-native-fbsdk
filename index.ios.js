/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
    LoginManager,
} = FBSDK;

export default class FacebookSDKDemo extends Component {

  loginFb(){
      // 防止切换账号后的 Login Faild
      LoginManager.logOut();

      LoginManager.logInWithReadPermissions(['public_profile']).then(
          function(result) {
              if (result.isCancelled) {
                  alert('Login was cancelled');
              } else {
                  alert('Login was successful with permissions: '
                      + result.grantedPermissions.toString());
              }
          },
          function(error) {
              alert('Login failed with error: ' + error);
          }
      );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>

        <Text style={styles.welcome}
          onPress={()=>{
            this.loginFb()
          }}
        >Login FaceBook</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FacebookSDKDemo', () => FacebookSDKDemo);
