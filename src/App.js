import {useState} from 'react';
import './App.css';
import Axios from 'axios'
import Product from './Product';

function App() { 
  const YOUR_APP_ID = "f2994615";
  const YOUR_APP_KEY = "c76f8a67eacb2b4059f08c8a2ea35a13";
  const [query, setQuery] = useState('');
  const [results, setResult] = useState([]);

  async function callApi(){
    const url = await Axios.get(`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&calories=591-722&health=alcohol-free`);
    setResult(url.data.hits)
    console.log(url)
  }

  const onSubmit = (e) => {
    callApi();
    e.preventDefault();
  }

  return (
    <div className="App">
      <div className="main-container">
        <h1>Recipe App</h1>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Search recipes here.." value={query} onChange={(e) => setQuery(e.target.value)} className="search-input" />
          <input type="submit" value="Search" className="submit-btn" />
        </form>
        <Product results={results}/>
      </div>
    </div>
  );
}

export default App;
