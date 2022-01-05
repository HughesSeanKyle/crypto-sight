import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import './App.css';
import {
	Watchlist,
	Home,
	News,
	Cryptocurrencies,
	CryptoDetails,
	Navbar,
} from './components';

/*
  <Route path='/welcome' element={<Home/>} />
*/

const App = () => (
	<div className="app">
		<div className="navbar">
			<Navbar />
		</div>
		<div className="main">
			<Layout>
				<div className="routes">
					<Routes>
						{/* Default Route => Home */}
						<Route path="/" element={<Home />} />
						<Route path="/watchlist" element={<Watchlist />} />
						<Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
						<Route path="/crypto/:coinId" element={<CryptoDetails />} />
						<Route path="/news" element={<News />} />
					</Routes>
				</div>
			</Layout>
			<div className="footer">
				<Typography.Title
					level={5}
					style={{ color: 'white', textAlign: 'center' }}
				>
					Copyright © 2022
					<Link to="/"> CryptoSight Inc.</Link> <br />
					All Rights Reserved.
				</Typography.Title>
				<Space>
					<Link to="/">Home</Link>
					<Link to="/watchlist">Watchlist</Link>
					<Link to="/news">News</Link>
				</Space>
			</div>
		</div>
	</div>
);

export default App;
