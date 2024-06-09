import React,{useState,useEffect} from 'react'
import apiClient from "../../Spotify/Spotify";
import { useNavigate } from 'react-router-dom';
import './Favourites.css'

function Favourites() {

  const [featureds, setFeatureds] = useState([]);

  useEffect(() => {

    apiClient
    .get(`/browse/featured-playlists`)
    .then((res) => {
      const a = res.data?.playlists.items.slice(0, 20);
      setFeatureds(a);
      
    })
    .catch((err) => console.error(err));

  }, []);

  const navigate = useNavigate()

  const MadePlaylist = (id) => {
    navigate("/player", { state: { id: id } });
    console.log(MadePlaylist);
  };


  return (
    <div className='screen-container'>
      <h2 className='song-title'>MADE FOR U</h2>
    <div className='song-card'>
       {featureds?.map((featured) => (
          <div className="album-cover"
           
            key={featured.id}
            onClick={() => MadePlaylist(featured.id)}
>
            <img src={featured?.images[0]?.url} className='body__info'alt='playing'/>
            
        <strong className='playlist-label'>PLAYLIST</strong>
        <div className="song-info">
        
        <p className='song-description'>
            {featured?.description}
            </p>
            
      </div>   
          </div>
        ))}
    </div>
    </div>
  )
}

export default Favourites