import { useState } from "react";

function App() {
  const [songs, setSongs] = useState([
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/Let-Me-Down-Slowly.mp3"
    },
    {
      title: "Song 2",
      artist: "Artist liar",
      img_src: "./images/song-2.jpg",
      src: "./music/Bad-Liar.mp3"
    },
    {
      title: "Song 3",
      artist: "Taylor Swift",
      img_src: "./images/song-3.jpg",
      src: "./music/Blank-Space.mp3"
    },
    {
      title: "Song 4",
      artist: "Taylor Swift",
      img_src: "./images/song-4.jpg",
      src: "./music/Look-What-You Made-Me-Do.mp3"
    }
  ])
  return (
    <div className="App">
     <p>app</p>
    </div>
  );
}

export default App;
