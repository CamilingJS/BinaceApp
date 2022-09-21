import "./styles.css";
import {useEffect, useState} from "react"

// Use this API
// https://api2.binance.com/api/v3/ticker/24hr

// symbols we want...
// BTCUSDT (Bitcoin)
// ETHUSDT (Ethereum)
// SOLUSDT (Solana)
// ADAUSDT (Cardano)
// DOGEUSDT (DogeCoin)

export default function App() {
  // 1. STATE AND USEEFFECT HERE
  const [lastId, setlastId] = useState("")
  const [symbol, setSymbol] = useState("")
  const [prevClosePrice, setprevClosePrice] = useState("")
  const [priceChangePercent, setpriceChangePercent] = useState("")
  const [data, setData] = useState({})
  
  useEffect(()=>{
    fetch("https://api2.binance.com/api/v3/ticker/")
      .then((res)=> res.json())
      .then((data)=>{
          console.log({data})
          setData(data)});     
  }, [])
  
  console.log(`This the my data: ${{data}}`)
  
      

  // 2. How will you "Pull out" the symbols we need?

  // 3. ...and then store them in state?

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
          <tr>
            <th>Last ID#</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h %</th>
          </tr>
          {/* 4. Display data here... */}
          {/* HINT: Map to JSX */}

          {/* Up? Green + ▲ */}
          {/* Down? Red + ▼ */}
          <tr>
            <td>1</td>
            <td>Bitcoin</td>
            <td>$40,000</td>
            <td style={{ color: "green" }}>▲1.02%</td>
          </tr>
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
