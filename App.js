import React from "react";
import Screens from "./Screens/Screens";
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/reducer';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import rootSaga from './sagas/sagas';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));


export default function App() {
  return(
    <Provider store={store}>
      <Screens/>
    </Provider>
  );
}
sagaMiddleware.run(rootSaga);