import React from "react";
import ShowCard from "./ShowCard";

const ShowGrid = ({ shows }) => {
  return (
    <div className="shows">
      {shows.map((e) => (
        <ShowCard
          key={e.show.id}
          name={e.show.name}
          image={e.show.image ? e.show.image.medium : "/notfound.png"}
          id={e.show.id}
          summary={e.show.summary}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
