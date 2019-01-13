import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

YellowBox.ignoreWarnings(['Remote debugger', 'Setting a timer']);

class App extends Component {

    render() {
        
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
           <Provider store={store}>
                <Router />
           </Provider>
        );
    }

}

export default App;