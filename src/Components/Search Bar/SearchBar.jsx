import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = () => {

  function handleSearch(){
    const[search, setSearch] = useState([]);
    
    useEffect(() => {
      SearchBar()
    }, [])
  
    
    
    async function SearchBar() {
      let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
      setSearch(response.data);
      
    };
  const setSearch = (event) =>{
    useEffect(() => {
        axios('http://www.devcodecampmusiclibrary.com/api/music')
        .then(response => {
        console.log(response.data)
        search(response.data);
        setSearch(response.data);
        })
        .catch(error => {
        console.log('Error getting fake data: ' + error);
        })
        }, []);
  return(
    <div>
        <div className="handleSearch">
        <div style={{ margin: '0 auto', marginTop: '10%' }}>
            <label>Search:</label>
            <input type="text" onChange={(event) =>handleSearch(event)} />
        </div>
        </div>
    </div>)
  }}}
export default useFetch;