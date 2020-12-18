import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
import { all, call } from 'redux-saga/effects';
// saga 예제
// import { shopSagas } from './shop/shop.saga';
// import { userSagas } from './user/user.saga';
// import { cartSagas } from './cart/cart.saga';

import deviceStore from './device';

// const sagaMiddleware = createSagaMiddleware();
const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
const rootReducer = combineReducers({
  deviceStore,
});

// function* rootSaga() {
//   // 예제
//   yield all([call(shopSagas), call(userSagas), call(cartSagas)]);

// }
const store = createStore(rootReducer, applyMiddleware(...middlewares));
// sagaMiddleware.run(rootSaga);

export default store;
process.env.NODE_ENV === 'development' && console.log(store.getState());
