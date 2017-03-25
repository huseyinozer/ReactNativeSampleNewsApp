'use strict'

var React = require('react');
var ReactNative = require('react-native');

var {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableNativeFeedback,
    Alert,
    Platform,
    Image,
    ScrollView
} = ReactNative;

class NewsDetailScreen extends React.Component {

    render() {

        var item = this.props.news;

        return (
            <View style={styles.container}>
                <Image style={styles.newsImage}
                    source={{ uri: item.imageUrl }}/>

                <ScrollView automaticallyAdjustContentInsets={false} >
                    <View style={styles.containerPanel}>

                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.content}>{item.content}</Text>

                        <Text style={styles.date}>{item.date}</Text>

                    </View>
                </ScrollView>

            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    newsImage: {
        backgroundColor: 'gray',
        flex: 1
    },
    containerPanel: {
        flex: 1,
        flexDirection: 'column',
        padding: 16
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    content: {
        fontSize: 14,
        paddingTop: 10
    },
    date: {
        fontSize: 11,
        fontWeight: 'bold',
        color: 'orange',
        paddingTop: 10
    }
});

module.exports = NewsDetailScreen;