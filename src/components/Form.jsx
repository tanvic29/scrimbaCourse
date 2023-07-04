import React from 'react'
import Jokes from '../Jokes';
function Form() {
    // const [memeimg,setmemeimg]=React.useState("http://i.imgflip.com/1bij.jpg")
    const[meme, setmeme ]=React.useState(
      {
        topText:"",
        bottomText:"",
        randomImg: "http://i.imgflip.com/1bij.jpg" 
      }
    )
    const[allmemeimgs, setallmemeimgs]=React.useState(Jokes)
    function getmemeimg()
    {
        const memearr=allmemeimgs.data.memes;
 const randomnum= Math.floor(Math.random() * memearr.length)
 const url=memearr[randomnum].url
        setmeme(prevmeme =>(
          {
            ...prevmeme,randomImg:url
          }
        ))
   
    }
  return (
    <main>
        <div className='form'>
            <input type="text"
            placeholder='Top-text'
            className='form--input'/>
            <input type="text"
            placeholder='Bottom-text'
            className='form--input'/>
            <button className='form--button'
            onClick={getmemeimg}>Get a new meme image </button>
        </div>
        <img src={meme.randomImg} className='meme--img'/>
    </main>
  )
}

export default Form


