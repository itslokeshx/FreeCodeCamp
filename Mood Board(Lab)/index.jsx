export const MoodBoardItem = ({ color, image, description }) => {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
};

export const MoodBoard = () => {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>

      <div className="mood-board">
        <MoodBoardItem
          color="blue"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="Peaceful pathway"
        />

        <MoodBoardItem
          color="green"
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
          description="Fresh green grass"
        />

        <MoodBoardItem
          color="orange"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Relaxing beach shore"
        />

        <MoodBoardItem
          color="purple"
          image="https://cdn.freecodecamp.org/curriculum/labs/ship.jpg"
          description="Adventure on the sea"
        />

        <MoodBoardItem
          color="pink"
          image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"
          description="Beautiful Santorini vibes"
        />
      </div>
    </div>
  );
};
