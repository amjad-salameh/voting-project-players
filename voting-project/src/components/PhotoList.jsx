// src/components/PhotoList.js

import Photo from "./Photo";

const PhotoList = ({ photos, onVote }) => {
  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} onVote={onVote} />
      ))}
    </div>
  );
};

export default PhotoList;
