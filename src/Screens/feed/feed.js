import React, { useEffect, useState } from 'react'
import APIKit from "../../Spotify/Spotify";
import { useNavigate } from 'react-router-dom';
import './Feed.css'
import Search from '../../Components/Search/Search';

import FeedBody from '../../Components/FeedBody/FeedBody';

function Feed() {
  const [FeedPlay, setFeedPlay] = useState([])
  console.log(FeedPlay);

  useEffect(() => {
    APIKit.get("me/playlists").then(function (response) {
      setFeedPlay(response.data.items);
      console.log(response.data.items);
    });
  }, [])


  const navigate = useNavigate()

  const feedPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
    console.log(feedPlaylist);
  };




  return (
    <div className='screen-container'>

      <div className="body">
        <Search
        //  spotify={spotify}
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
        </div>
        <div className='block-align'>
          {FeedPlay?.map((playlistss) => (
            <div className="body__info"
              key={playlistss.id}
              onClick={() => feedPlaylist(playlistss.id)}
            >
              <img src={playlistss?.images[0]?.url} className='body__info' alt='playing' />
              <div className="body__infoText">
                <h3>      {playlistss?.name} </h3>
              </div>
            </div>
          ))}
          <FeedBody />
        </div>
      </div>
    </div>
  )
}

export default Feed