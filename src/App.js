import {useEffect, useState} from "react"
import "./styles.css";

const COINS = Object.keys(COIN_NAME)

const COIN_NAME = {
  BTCUSDT: 'Bitcoin',
  ETHUSDT: 'Ethereum',
  SOLUSDT: 'Solana',
  ADAUSDT: 'Cardano',
  DOGEUSDT: 'DogeCoin'
}

export default function App() {
 
  const [coinData, setCoinData] = useState([]);
  
  useEffect(()=>{
    fetch("https://api2.binance.com/api/v3/ticker/24hr")
      .then((res)=> res.json())
      .then( (data)=>{
        const filteredData = data.filter( ticker =>{
          if(COINS.includes(ticker.symbol)){
            return true 
          }
        } );

        setCoinData(filteredData);
        
      } );
  }, []);

  return (
    <div className="App">
      <nav>
        <img
          alt="logo"
          src="https://res.cloudinary.com/dxctpvd8v/image/upload/v1663731601/JayCam-Dev_Horizontal-White_hchcwc.svg"
        />
        <input type="text" placeholder="Search" />
      </nav>
      <div className="main-content">
        <h2>Today's cryptocurrency prices</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>24h %</th>
            </tr>
          </thead>
          
          <tbody>
          {
            coinData.map((coin, i)=> {
              return(
                <tr key={coin.symbol} >
                <td class="className" >{COIN_NAME[coin.symbol]}</td>
                <td>{coin.symbol}</td>
                <td>${ Number(coin.lastPrice).toLocaleString() }</td>
                <td style={ Number(coin.priceChangePercent) > 0 
                            ? { color: "green" } 
                            : { color: "red" } }>
                  { Number(coin.priceChangePercent) > 0 ? "🚀": "📉" } {coin.priceChangePercent}%</td>
                </tr>
              )
              
              })
          }  
          
            
          </tbody>
          
        </table>
        <div className="bottom-logo-ctr">
          <img
            className="bottom-logo"
            alt="logo"
            src="https://res.cloudinary.com/dxctpvd8v/image/upload/v1663731601/JayCam-Dev_Horizontal-White_hchcwc.svg"
          />
        </div>
      </div>
    </div>
  );
}
