import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//	Redux persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//	Reducers
import {
	getPropsReducer,
	getPropDetailsReducer,
} from './reducers/propReducers';
import { categoryReducer } from './reducers/categoryReducers';
import { requestReducer } from './reducers/requestReducers';
import { requestMessageReducer } from './reducers/requestMessageReducer';

//	Combine Reducer
const reducer = combineReducers({
	getProps: getPropsReducer,
	getPropDetails: getPropDetailsReducer,
	currentCategory: categoryReducer,
	request: requestReducer,
	requestMessage: requestMessageReducer,
});

const persistConfig = {
	key: 'root',
	storage,
	blacklist: [
		'getProps',
		'getPropDetails',
		'currentCategory',
		'requestMessage',
	],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const middleware = [thunk];

export const store = createStore(
	persistedReducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
