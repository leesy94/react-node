//import Button from "./Button";
//import React, {useEffect} from "react";
import styled from "./App.module.css";
import { useState , useEffect } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins , setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            })
    }, [])
    return <div>
        <h3>The Coins {loading ? "" :`(${coins.length})`}</h3>
        {loading ? "Loadings...." :
        <ul>
            {coins.map((coin) => <li key={coin.id}>{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD</li>)}
        </ul>
        }
    </div>
}
export default App;
