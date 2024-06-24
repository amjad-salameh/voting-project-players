

const VotingResult = ({ votes, photos }) => {
  return (
    <div className="voting-result">
      <h2>Voting Results</h2>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            Photo {photo.id}: {votes[photo.id] || 0} votes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VotingResult;
