import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { decrement } from '../app/counter';
import { removeFromWatchlist } from '../features/watchlist/watchlist';

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

	4. The watchlist comp will need to have internal state 
		- - [showWatchlist, setShowWatchlist] = useState([])
			- - The reason this will need internal state is because 
				- - useEffect will be needed to rerender Watchlist each time 
					- - an item is added to the state 
		- - Set a check in place to see if state is empty or not 
			- - If empty 
				- - Render 'You currently have no items in your watchlist'
			- - Else 
				- - Render the selected items 
					- - Will route to crypto details page 

		- - To test removing specific id from state 
			- - Set the default state of showWatchlist to 
				- - {
						[
							{id: 1, name: a}, {id: 2, name: b}, {id: 3, name: c}
						]
					}

*/

const Watchlist = () => {
	/*
		obj[Object.keys(obj)[0]]
	*/
	const testObj = {
		id: 1,
		name: 'Marie',
	};

	const { watchlist } = useSelector((state) => state.watchlist);
	console.log(watchlist);

	watchlist.map((item) => {
		console.log(item.payload);
	});

	const dispatch = useDispatch();

	return (
		<Button
			id="btn-padding"
			onClick={() => dispatch(removeFromWatchlist(testObj))}
		>
			-Remove from watchlist
		</Button>
	);
};

export default Watchlist;
