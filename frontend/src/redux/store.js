import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { save, load } from 'redux-localstorage-simple';
import reducer from './reducers/index.js'
const composeEnhancers = composeWithDevTools({
    trace: true
});
const store = createStore(reducer, load(), composeEnhancers(
    applyMiddleware(save(), thunk),
    // other store enhancers if any
));
export default store;