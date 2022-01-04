import './App.css';
import {
	Watchlist,
	Home,
	News,
	Cryptocurrencies,
	CryptoDetails,
	Navbar,
} from './components';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
			<Cryptocurrencies />
			<CryptoDetails />
			<Watchlist />
			<News />
		</div>
	);
}

export default App;
