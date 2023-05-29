import React from "react";
import { Link } from "react-router-dom";
const ActorsCard = ({ name, image, gender, country, birthday, deathday }) => {
  // const summaryStripped = summary
  //   ? summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")
  //   : "No description";

  return (
    <div>
      <div>
        <img src={image} alt={image} />
      </div>
      <h1>
        {name}
        {!!gender && `(${gender})`}{" "}
      </h1>
      <p>{country ? `Comes from ${country}` : "No country known"}</p>
      {!!birthday && <p>Born {birthday}</p>}
      <p>{deathday ? `Died ${deathday}` : "Alive"}</p>
      <div>
        <Link> Read More ...</Link>
        <button type="button">Star me</button>
      </div>
    </div>
  );
};

export default ActorsCard;
