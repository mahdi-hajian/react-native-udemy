import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumsList extends Component {
    componentWillMount() {
        console.log('componentWillMount in run');
    }

    render() {
        return (
            <View>
                <Text>لیست آلبوم ها !!</Text>
            </View>
        );
    }
}

export default AlbumsList;
