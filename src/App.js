import axios from "axios";
import React, { useEffect, useState } from "react";
import AllMusic from "./Components/DisplayMusic/DisplayMusic"

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
    <div>
    <div className="App">
        <center><bold><h1>Music Library</h1></bold></center>
          <AllMusic AllMusic={allSongs}/>;

   
    </div>
    </div>
  );
  
  }
export default App;
