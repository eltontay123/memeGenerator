import React from 'react'
import '../styles/meme.css'
import memesdata from '../memesdata'

export default function Meme() {
  const [meme,setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: "https://i.imgflip.com/30b1gx.jpg"
  })
  const [allMemeImages, setAllMemeImages] = React.useState(memesdata)

  function getImage() {
    let memesArray = allMemeImages.data.memes
    let idx = Math.floor(Math.random() * memesArray.length)
    let url = memesArray[idx].url
    setMeme(prevMeme=>({
      ...prevMeme,
      randomImage: url
    }))
  }

  return (
    <div className='meme'>
      <div className='meme-form'>
          <input className='form-field-1' placeholder='Top text' type='text'/>
          <input className='form-field-2' placeholder='Bottom text' type='text'/>
          <button className='form-button' onClick={getImage}>Get a new meme image</button>
      </div>
      <img className='meme-img' src={meme.randomImage}/>
    </div>

  )
}
