'use strict'

var React = require('react');
var ReactNative = require('react-native');

var {
  AppRegistry,
  BackAndroid,
  Navigator,
  StyleSheet,
  ToolbarAndroid,
  View,
} = ReactNative;

var NewsListScreen = require('./app/components/NewsListScreen')
var NewsDetailScreen = require('./app/components/NewsDetailScreen')

var _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

var RouteMapper = function (route, navigator) {
  _navigator = navigator;

  if (route.name === 'news_list') {
    return (
      <View style={styles.container}>

        <ToolbarAndroid
          style={styles.toolbar}
          title="Haberler"
          titleColor='white' />

        <NewsListScreen
          navigator={navigator}  />

      </View>
    );
  } else if (route.name === 'news_detail') {
    return (
      <View style={styles.container}>

        <ToolbarAndroid
          style={styles.toolbar}
          title="Haber Detayı"
          titleColor='white'/>

        <NewsDetailScreen
          navigator={navigator}
          news={route.news}  />

      </View>
    );
  }
};

export default class NewsApp extends React.Component {

  render() {
    var initialRoute = { name: 'news_list' };

    return (
      <Navigator
        style={styles.container}
        initialRoute={initialRoute}
        renderScene={RouteMapper}
        />
    );
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  toolbar: {
    backgroundColor: '#dd4b39',
    height: 56
  },
});

AppRegistry.registerComponent('SampleNewsApp', () => NewsApp);