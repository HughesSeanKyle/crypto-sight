import React from 'react';
import { useDispatch } from 'react-redux';

import { decrement } from '../app/counter';

import { Button } from 'antd';

/*
	1. This component will need state to keep track of what crypto is being pushed in 
		- - useState 
		- - This state will have to mapped 
			- - 1. Initial state 
				- - []
			- - 2. Modified state 
				- - [{1}, {2}, {3}]
		- - This state will have to check 
			- - 1.1 If the object pushed in from Crypto is in this state already 
			- - 1.2 Make it possible to disable the addTowishlist btn in crypto 
				- - You will have to send a 
	2. It will need to rerender each time a crypto is added 
		- - useEffect 
	3. 

	- - *FLOW => When you add to watchlist from cryptodetails comp
		- - 1. Gets added to Global watchlist state (Persisted on localstorage)
		- - 2. The watchlist(this) comp will also have access to the global state 
		- - 3. Check if Id of added crypto present in watchlist 
			- - if true 
				- - then set disabled tag to true on addToWatchList btn 
			- - if false 
				- - then set disabled to false on addToWatchList btn
		- - 4. Render watchlist
			- - Use same card as CryptoDetails  


*/

const Watchlist = () => {
	const dispatch = useDispatch();

	return (
		<Button id="btn-padding" onClick={() => dispatch(decrement())}>
			-Remove from watchlist
		</Button>
	);
};

export default Watchlist;
