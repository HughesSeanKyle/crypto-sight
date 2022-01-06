import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';
import counterReducer from './counter';

export default configureStore({
	reducer: {
		/*
            Set reducerpath string (cryptoApi) as key 
        */
		[cryptoApi.reducerPath]: cryptoApi.reducer,
		[cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
		counter: counterReducer,
	},
});
