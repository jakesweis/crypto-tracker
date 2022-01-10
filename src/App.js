import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Coin from './Coin';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Watchlists from './pages/watchlists';

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
    }).catch(error => console.log(error))
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className='coin-app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/watchlists' component={Watchlists} />
        </Routes>
      </Router>
      <div className='coin-search'>
        <h1 className='coin-text'>Crypto Tracker</h1>
        <form>
          <input type='text' placeholder='Search'
          className='coin-input' onChange=
          {handleChange}/>
        </form>
      </div>
      {filteredCoins.map(coin => {
        return <Coin
          rank={coin.market_cap_rank}
          key={coin.id} 
          name={coin.name} 
          image={coin.image}
          symbol={coin.syymbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
          />;
      })}
    </div>
  );
}

export default App;