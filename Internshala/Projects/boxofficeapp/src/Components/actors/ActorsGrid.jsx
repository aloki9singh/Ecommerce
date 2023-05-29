import React from "react";
import ActorsCard from "./ActorsCard";

const ActorsGrid = ({ actors }) => {
  return (
    <div className="actors">
      {actors.map((e) => (
        <ActorsCard
          key={e.person.id}
          name={e.person.name}
          image={e.person.image ? e.person.image.medium : "/notfound.png"}
          country={e.person.country?e.person.country.name:null}
          gender={e.person.gender}
          birthday={e.person.birthday}
          deathday={e.person.deathday}
        />
      ))}
    </div>
  );
};

export default ActorsGrid;
