import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Library from '../library/library'
import Favourites from '../favourites/favourites'
import Player from '../player/player'
import Feed from '../feed/feed'
import Trending from '../trending/trending'
import Sidebar from '../../Components/sidebar/Sidebar'
import "./home.css"
import Login from '../auth/Login'
import { setClientToken } from '../../Spotify/Spotify'
import Signout from '../SignOut/Signout'
//import apiClient from '../../Spotify/Spotify'




function Home() {


  const [token, setToken] = useState("")
  const [refreshToken, setRefreshToken] = useState("");
  //const [ClientToken, setClientToken] = useState('');
  //console.log(token);
  console.log(refreshToken ? "Token is present" : "Token is absent");


  const refreshAccessToken = async (refreshToken) => {
    const client_id = '448b873384ac4bdf87dddb078de11e14'; // Replace with your Spotify client ID
    const client_secret = 'c428665fb4234ec7bcc064c65f0b559d'; // Replace with your Spotify client secret




    try {
      const body = new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: client_id,
        client_secret: client_secret,
      });

      const response = await axios.post('https://accounts.spotify.com/api/token', body.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'

        }

      }); setRefreshToken(response.data.refresh_token);

    } catch (error) {
      console.error("Error refreshing access token:", error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash
    window.location.hash = "";

    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1]
      window.localStorage.setItem("token", _token)
      setToken(_token)
      setClientToken(_token)
    } else {
      setToken(token)
    }

  }, []);



















  return !token ? (

    <Login />
  ) : (
    <Router>
      <div className='main-body'>

        <Sidebar />
        <Routes>
          <Route path='/' element={<Library />} />

          <Route path='/favourites' element={<Favourites />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/player' element={<Player />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/login' element={<Signout />} />
        </Routes>
      </div>
    </Router>
  )
}

export default Home