// import a library
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/Components/header';
import AlbumsList from './src/Components/albumsList';

// create a Component
const App = () => (
    <View>
        <Header headerText='آلبوم!' />
        <AlbumsList />
    </View>
);

// render it to the device
AppRegistry.registerComponent('albums', () => App);
