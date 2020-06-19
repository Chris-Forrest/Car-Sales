import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
/**********************my imports for redux and initial state *************************/
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { addFeatureReducer } from './reducers/addFeature';

import 'bulma/css/bulma.css';
import './styles.scss';

/**********************create a redux store  ***************************************/
const store = createStore(addFeatureReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>, 
    rootElement);
