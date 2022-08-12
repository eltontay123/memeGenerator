import React from 'react'
import '../styles/meme.css'
import memesdata from '../memesdata'

export default function Meme() {

  const [memeImg, setMemeImg] = React.useState('')

  function getImage() {
    let noImages = memesdata.data.memes.length;
    let idx = Math.floor(Math.random() * noImages)
    setMemeImg(memesdata.data.memes[idx].url);
  }

  return (
    <div className='meme'>
      <div className='meme-form'>
          <input className='form-field-1' placeholder='Top text' type='text'/>
          <input className='form-field-2' placeholder='Bottom text' type='text'/>
          <button className='form-button' onClick={getImage}>Get a new meme image</button>
      </div>
      <img className='meme-img' src={memeImg}/>
    </div>

  )
}
