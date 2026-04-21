import { useState } from "react";
function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1>Like button with counter </h1>
      <h1>Likes 👍: {likes}</h1>

      <button onClick={() => setLikes(likes + 1)}>
        Like 👍
      </button>


    </div>
  );
}

export default LikeButton