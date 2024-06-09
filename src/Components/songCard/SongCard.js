import React from 'react'
import './SongCard.css'
import AlbumImage from './AlbumImage'
import AlbumInfo from './AlbumInfo'


function SongCard({album}) {
  console.log(album);
  return (
    <div className='songCard-body flex'>
       <AlbumImage url={album?.images[0]?.url}/>
       <AlbumInfo album={album}/>
    </div>
  )
}

export default SongCard