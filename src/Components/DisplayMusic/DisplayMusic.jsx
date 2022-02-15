import { useEffect, useState } from "react";
import axios from "axios";

    function AllMusic(){
        const[songLibrary, setSongLibrary] = useState([]);
        
        useEffect(() => {
          turtles()
        }, [])
      
          
  async function turtles() {
    let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
    setSongLibrary(response.data);
    
  };
  
        return (
        <div className = "AllMusic">
            <h2> Current Library </h2>  {
                songLibrary.map((id) => ( 
                <h5><ol ids = { id.id } >
                    Title: { id.title }, 
                    Album: { id.album }, 
                    Artist: { id.artist } 
                    Genre: { id.genre }, 
                    </ol></h5>
                ))
            }
        </div>


   
        )}
        export default AllMusic;
