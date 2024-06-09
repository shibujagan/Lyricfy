import React, { useState } from 'react'
import './Search.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import Greeting from './Greeting/Greeting';

function Search() {


  const [searchKey, setSearchKey] = useState('');
  // const [tracks, setTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);


  // console.log(tracks);

  const token = window.localStorage.getItem('token');

  const searchTracks = async (e) => {
    e.preventDefault();
    {/*    const { data:tracksData } = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: 'track'
      },


    });  */}
    const { data: playlistsData } = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: 'playlist',
      },
    });

    //  setTracks(tracksData.tracks.items);
    setPlaylists(playlistsData.playlists.items)

    // setTracks(data.tracks.items);
    // console.log(data.tracks.items);
  };


  const navigate = useNavigate()

  const Searchidkey = (id) => {
    navigate("/player", { state: { id: id } });
    console.log(Searchidkey);
  };




  return (
    <div>




      <div className="header ">
        <div className="search-container" >
          <form className="search-form" onSubmit={searchTracks}>
            <div className='icon-search'><IoSearch /></div>

            <input
              className="search-input"
              type="text"
              onChange={(e) => setSearchKey(e.target.value)}
              placeholder="Search for a song"
            />
            <button className="search-button" type="submit">Search</button>
          </form>
          <div className="results-container">
            {/*    {tracks.map((track) => (
          <div className="track" key={track.id}>
            <img className="track-image" src={track.album.images[0].url} alt={track.name} />
            <div className="track-info"  onClick={() => Searchidkey(track.id)}>
              <p className="track-name">{track.name}</p>
              <p className="track-artist">{track.artists[0].name}</p>
            </div>
          </div>
        ))}         */}

            {playlists.map((playlist) => (
              <div className="playlist" key={playlist.id}>
                <img className="playlist-image" src={playlist.images[0]?.url} alt={playlist.name} />
                <div className="playlist-info" onClick={() => Searchidkey(playlist.id)}>
                  <p className="playlist-name">{playlist.name}</p>
                  <p className="playlist-description">{playlist.description}</p>
                </div>
              </div>
            ))}

          </div>
        </div>

        <div className="header__right">


          <p className='header-name'> <Greeting /></p>
        </div>

      </div>
    </div>

  )
}

export default Search