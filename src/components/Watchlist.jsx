import React from 'react';
import { useDispatch } from 'react-redux';

import { decrement } from '../app/counter';

import { Button } from 'antd';

const Watchlist = () => {
	const dispatch = useDispatch();

	return (
		<Button id="btn-padding" onClick={() => dispatch(decrement())}>
			-Remove from watchlist
		</Button>
	);
};

export default Watchlist;
