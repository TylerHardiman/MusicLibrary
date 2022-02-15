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
            <center><bold><h2> Current Library </h2></bold></center>  {
                songLibrary.map((id) => ( 
                <ol ids = { id.id } >
                    <center><h3>Title: { id.title }, 
                    Album: { id.album }, 
                    Artist: { id.artist }, 
                    Genre: { id.genre },</h3></center> 
                    </ol>
                ))
            }
        </div>


   
        )}
        export default AllMusic;
