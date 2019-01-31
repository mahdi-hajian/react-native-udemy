// import a library
import React from 'react';
import { Text, View, Platform } from 'react-native';

// create a Component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#e4e4e4',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        position: 'relative',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.9,
            },
            android: {
                elevation: 6,
            }
        })
    },
    textStyle: {
        fontSize: 23,
        fontFamily: 'Vazir'
    }
};

//make the component available to other part of the app 
export default Header;
