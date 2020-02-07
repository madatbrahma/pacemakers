import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class EachComment extends Component {
    render() {
        return (



            <View style={styles.container}>
                <Text style={styles.text}>{this.props.commentBy}</Text>
                <Text style={styles.text}>{this.props.comment}</Text>

            </View>






        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
       // flexDirection: 'row',
      //  alignContent: 'stretch',
        borderRadius: 10,
        marginTop: 30,
        marginHorizontal: 10,
        maxHeight: 150,
        paddingBottom: 150,
        elevation: 5,


    },
    hairline: {
        backgroundColor: '#A2A2A2',
        paddingTop: 50,
        width: 30,
    },
    daySummary: {
        marginTop: 10,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    woSummary: {
        paddingTop: 50,
        marginTop: 5,
        alignItems: 'center'
    },
    text: {
        color: 'black',
        fontSize: 17
    }
});

export default EachComment;