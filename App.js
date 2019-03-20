import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Main from './components/Main';
import {Provider} from 'react-redux';
import store from './store/store';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Main/>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default App;
