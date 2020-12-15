import React, {useState, useEffect} from 'react';
import './App.css'
import Headers from './components/Ui/Headers'
import axios from 'axios';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/Ui/Search';

const App = () => {

      const [items,setItems]  = useState([]);
      const [isLoading,setIsLoading]  = useState(true);
      const [query,setQuery]  = useState("");

      // https://www.youtube.com/watch?v=YaioUnMw0mo

    useEffect(()=>{

            const fetchItems = async () =>{
              const result = await axios.get( `https://www.breakingbadapi.com/api/characters?name=${query}`)
              // console.log(result.data);
                setItems(result.data)
                setIsLoading(false)

            }

            fetchItems()

    },[query])   // when the depenct query is changed this will fire off the fetch


  return (
    <div className= "contriner">
      <Headers />
      <Search getQuery={(q)=>setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items}/>
     
    </div>
  );
}

export default App;
