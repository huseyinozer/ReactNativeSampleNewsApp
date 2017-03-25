'use strict'

var React = require('react');
var ReactNative = require('react-native');

var {
    StyleSheet,
    ListView,
    Text,
    View,
    TouchableNativeFeedback,
    Alert,
    Platform
} = ReactNative;

var NewsItem = require('./NewsItem')
var NewsDatas = require('../datas/NewsDatas')

var NewsDetailScreen = require('./NewsDetailScreen')

class NewsListScreen extends React.Component {

    constructor() {
        super();

        this.renderRow = this.renderRow.bind(this)
        this.onItemClickNews = this.onItemClickNews.bind(this)

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(NewsDatas),
        };

    }

    renderRow(news) {
        return <NewsItem
            item={news}
            onItemClick={() => this.onItemClickNews(news) }/>
    }
    
    renderSeparator(sectionId, rowId){
        return <View key={rowId} style={styles.separator} />
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderSeparator={this.renderSeparator}  />
            </View>
        );
    }

    onItemClickNews(news) {
        if (Platform.OS === 'ios') {
            this.props.navigator.push({
                title: news.title,
                component: NewsDetailScreen,
                passProps: { 
                    news: news 
                },
            });
        } else {
            this.props.navigator.push({
                title: news.title,
                name: 'news_detail',
                news: news,
            });
        }
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#E0E0E0',
    },
});

module.exports = NewsListScreen;