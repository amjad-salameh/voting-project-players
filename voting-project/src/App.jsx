import { useState } from "react";
import PhotoList from "./components/PhotoList";
import VotingResult from "./components/VotingResult";
import "./App.css";

const App = () => {
  const initialPhotos = [
    { id: 1, url: "https://static.dw.com/image/19548932_804.webp" },
    {
      id: 2,
      url: "https://media.voltron.alhurra.com/Drupal/01live-106/2022-12/2022-12-30T183410Z_1478716781_RC2AD395RTKU_RTRMADP_3_SOCCER-ENGLAND-RONALDO.JPG",
    },
    {
      id: 3,
      url: "https://www.kuna.net.kw/NewsPictures/2011/7/8/a766d570-6623-4a3a-b230-5e5729cab83a.jpg",
    },
    {
      id: 4,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCbQNJbs7UmGCkfwmT4UCduQpdyXwcYl_6Xg&s",
    },
  ];

  const [photos] = useState(initialPhotos);
  const [votes, setVotes] = useState({});

  const handleVote = (photoId) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [photoId]: (prevVotes[photoId] || 0) + 1,
    }));
  };

  return (
    <div className="App">
      <h1>Vote for Your Favorite player</h1>
      <PhotoList photos={photos} onVote={handleVote} />
      <VotingResult votes={votes} photos={photos} />
    </div>
  );
};

export default App;
