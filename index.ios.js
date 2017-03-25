'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
} = ReactNative;

var NewsListScreen = require('./app/components/NewsListScreen');

export default class NewsApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        titleTextColor='white'
        barTintColor='#dd4b39'
        tintColor='white'
        initialRoute={{
          title: 'Haberler',
          component: NewsListScreen,
        }}
      />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('SampleNewsApp', () => NewsApp);