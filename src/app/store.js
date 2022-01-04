import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi';

export default configureStore({
	reducer: {
		/*
            Set reducerpath string (cryptoApi) as key 
        */
		[cryptoApi.reducerPath]: cryptoApi.reducer,
	},
});
