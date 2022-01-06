import React from 'react';
import { Button } from 'antd';

const Watchlist = () => {
	return (
		<Button onClick={() => console.log('Removed from watchlist')}>
			-Remove from watchlist
		</Button>
	);
};

export default Watchlist;
