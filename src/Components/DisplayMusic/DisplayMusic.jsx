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
            <ul><center><h2> Current List </h2></center></ul>  {
                songLibrary.map((id) => ( 
                <center><h3><ol ids = { id.id } >
                    Title: { id.title } <br></br>
                    Album: { id.album } <br></br>
                    Artist: { id.artist } <br></br>
                    Genre: { id.genre } <br></br>
                    </ol></h3></center>
                ))
            }
        </div>


   
        )}
        export default AllMusic;
