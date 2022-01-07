import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input, Button } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { increment } from '../app/counter';
import { addToWatchlist } from '../features/watchlist/watchlist';
import Loader from './Loader';

const Cryptocurrencies = ({ simplified }) => {
	const testObj = {
		id: 1,
		name: 'Marie',
	};

	const count = simplified ? 10 : 100;

	const { data: cryptosList, isFetching } = useGetCryptosQuery(count);

	const [cryptos, setCryptos] = useState();
	const [searchTerm, setSearchTerm] = useState('');

	const dispatch = useDispatch();

	useEffect(() => {
		setCryptos(cryptosList?.data?.coins);
		const filteredData = cryptosList?.data?.coins.filter((item) =>
			item.name.toLowerCase().includes(searchTerm)
		);
		setCryptos(filteredData);
	}, [cryptosList, searchTerm]);

	if (isFetching) return <Loader />;

	return (
		<>
			{!simplified && (
				<div className="search-crypto">
					<Input
						placeholder="Search Cryptocurrency"
						onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
					/>
				</div>
			)}
			<Row gutter={[32, 32]} className="crypto-card-container">
				{cryptos?.map((currency) => (
					<Col
						xs={24}
						sm={12}
						lg={6}
						className="crypto-card"
						key={currency.uuid}
					>
						<Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
							<Card
								title={`${currency.rank}. ${currency.name}`}
								extra={
									<img
										className="crypto-image"
										src={currency.iconUrl}
										alt={currency.name}
									/>
								}
								hoverable
							>
								<p>Price: {millify(currency.price)}</p>
								<p>Market Cap: {millify(currency.marketCap)}</p>
								<p>Daily Change: {currency.change}%</p>
							</Card>
						</Link>
						<Button
							id="btn-padding"
							onClick={() => dispatch(addToWatchlist(testObj))}
						>
							+Add to watchlist
						</Button>
					</Col>
				))}
			</Row>
		</>
	);
};

export default Cryptocurrencies;
