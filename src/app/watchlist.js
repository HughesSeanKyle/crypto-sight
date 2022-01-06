import { createSlice } from '@reduxjs/toolkit';

export const watchlistSlice = createSlice({
	name: 'watchlist',
	initialState: {
		watchlist: localStorage.getItem('watchlist')
			? // Convert back from string an array => Return
			  JSON.parse(localStorage.getItem('watchlist'))
			: [],
	},
	reducers: {
		// Added with map statement inside cryptoDetails (Helper)
		addToWatchlist: (state) => {
			state.watchlist.push({ word: 'Hello' });
		},
		removeFromWatchlist: (state) => {
			// state.count -= 1;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;
