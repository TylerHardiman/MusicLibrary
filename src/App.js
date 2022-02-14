import axios from "axios";
import React, { useEffect, useState } from "react";

function App(){
  const[allSongs, seeAllSongs] = useState([]);
  
  useEffect(() => {
    DisplayAllMusic()
  }, [])

  
  
  async function DisplayAllMusic() {
    let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
    seeAllSongs(response.data);
    
  };
  
  return (
    <div className="App">
        <h1>Music Library</h1>
          <App allSongs={allSongs}/>

    </div>
  );
  
}
export default App;

