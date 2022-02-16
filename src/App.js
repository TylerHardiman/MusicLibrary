import axios from "axios";
import React, { useEffect, useState } from "react";
import FinalResult from "./Components/DisplayMusic/SearchResults";
import AllMusic from "./Components/DisplayMusic/DisplayMusic";




function App(){
  const[userSearch, seeUserSearch] = useState([]);
  const[allSongs, seeAllSongs] = useState([]);

  
  
  useEffect(() => {
    DisplayAllMusic()
  }, [])
  
  
  async function DisplayAllMusic() {
    let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
    seeUserSearch(response.data);
    seeAllSongs(response.data);
    
  };
  
  return (
    <div>
    <div className="App">
        <ul><center><h1>Music Library</h1></center></ul>
          <ul><center><FinalResult FinalResult={userSearch}/></center></ul>
          <center><AllMusic AllMusic={allSongs}/></center>
    </div>
    </div>
  );
  
  }
export default App;
