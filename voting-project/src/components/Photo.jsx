const Photo = ({ photo, onVote }) => {
  return (
    <div className="photo-item">
      <img src={photo.url} alt={`Photo ${photo.id}`} />
      <button onClick={() => onVote(photo.id)}>Vote</button>
    </div>
  );
};

export default Photo;
