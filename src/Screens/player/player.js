import React, { useEffect, useState } from 'react'
import './player.css'
import { useLocation } from "react-router-dom";
import apiClient from "../../Spotify/Spotify";
import SongCard from '../../Components/songCard/SongCard';
import Queue from '../../Components/queue/Queue';
import AudioPlayer from '../../Components/audioPlayer/AudioPlayer';
import Widgets from '../../Components/widgets/Widgets';
import ClipLoader from "react-spinners/ClipLoader";
function Player() {

  const location = useLocation();
  console.log(location);
  const [tracks, setTracks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState({});
  

  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          // console.log(res.data);
          setCurrentTrack(res.data?.items[0]?.track);
        });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);


  return (
    <div className='screen-container flex  '>
  
      <div className="left-player-body">
        <AudioPlayer currentTrack={currentTrack} total={tracks} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
 
        <Widgets artistID={currentTrack?.album?.artists[0]?.id} />
 
      </div>
      <div className="right-player-body">
        <SongCard album={currentTrack?.album} />

        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />

      </div>
    
    </div>

  )
}

export default Player