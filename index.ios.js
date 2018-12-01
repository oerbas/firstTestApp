import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import PostList from './src/components/PostList';

export default class App extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText={'Hello World!'}/>
                <PostList />
            </View>
        );
    }
}
