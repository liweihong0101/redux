import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Reducer from './reducers/reducer';


import thunk from 'redux-thunk'

//中间件
const logger = store => next => action => {
    console.log('disptching...', action);
    let result = next(action);
    console.log('Next state..', store.getState());
    return result;
}

const error = store => next => action => {
    try{
        next(action)
    }catch(e){
        console.log('error' + e)
    }
}


const store = createStore(Reducer, applyMiddleware(thunk));


//react-redux 方式
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

//纯redux做法
// const render = () => {
//     ReactDOM.render(
//         <App
//             value={ store.getState() }
//             onIncrement = {() => store.dispatch(actions.increment())}
//             onDecrement = {() => store.dispatch(actions.decrement())}
//         />,
//         document.getElementById('root')
//     )
// }
// render();
// store.subscribe(render);
registerServiceWorker();
