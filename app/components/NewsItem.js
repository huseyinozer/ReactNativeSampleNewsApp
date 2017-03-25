'use strict'

var React = require('react');
var ReactNative = require('react-native');

var {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    View,
} = ReactNative;

class NewsItem extends React.Component {

    render() {
        var TouchableElement = TouchableHighlight;
        if (Platform.OS === 'android') {
            TouchableElement = TouchableNativeFeedback;
        }

        var item = this.props.item;

        return (
            <TouchableElement onPress={this.props.onItemClick}  underlayColor="#D9D9D9">
                <View style={styles.container}>

                    <Image style={styles.newsImage}
                        resizeMode='cover'
                        source={{ uri: item.imageUrl }}/>

                    <View style={styles.containerPanel}>

                        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                        <Text style={styles.subtitle} numberOfLines={2}>{item.content}</Text>

                        <Text style={styles.date}>{item.date}</Text>

                    </View>

                </View>
            </TouchableElement>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row', 
        padding: 10
    },
    newsImage: {
        width: 80,
        height: 80,
        margin: 2,
        backgroundColor: 'gray'
    },
    containerPanel: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 8
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    subtitle: {
        fontSize: 14
    },
    date: {
        fontSize: 11,
        fontWeight: 'bold',
        color: 'orange'
    }
});

module.exports = NewsItem;