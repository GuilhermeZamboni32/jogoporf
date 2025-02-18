import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [emojis, setEmojis] = useState([
    "😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "🥰", "😗", "😙", "🥲", "😚", "♣️", 
    "🙂", "🤗", "🤩", "🤔", "🫡", "🤨", "😐", "😑", "😶", "🫥", "😶‍🌫️", "🙄", "😏", "😣", "😥", "😮", "🤐", "😯", "😪", "😫", 
    "🥱", "😴", "😌", "😛", "😜", "😝", "🤤", "😒", "🥳", "🤠", "🤑", "🤓", "🤯", "🥺", "🫣", "🫠", "😵", "😇"
  ]);
  const [emoji, setEmoji] = useState('♣️')

  /*useEffect(() => {
    sortearEmoji()
  },[])*/
 
  function sortearEmoji(){
    if(emojis.length > 0){
      let i = Math.floor(Math.random() * emojis.length)
      setEmoji(emojis[i])
      setEmojis([...emojis.filter((e) => e != emoji[i])])
      console.log(emojis.length)

    }else{
      alert(acabo)

    }

  }



  return (
    <div className='container-app'>
      <p className='emoji' onClick={sortearEmoji}>{emoji}</p>
      {/*emojis*/}

    </div>
  )
}

export default App
