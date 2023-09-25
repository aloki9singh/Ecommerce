import React from "react";
import { Link } from "react-router-dom";
const ShowCard = ({ name, image, id, summary, onStarClick, isStarred }) => {
  const summaryStripped = summary
    ? summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")
    : "No description";

  return (
    <div>
      <div>
        <img src={image} alt={image} />
      </div>
      <h1>{name}</h1>
      <p>{summaryStripped}</p>
      <div>
        {/* <Link to={`/show/${id}`}> Read More ...</Link> */}

        {/* /if wE WANT TO OPEN LINKJ IN NEW TAB. */}
        <a href={`/show/${id}`} target={"_blank"} rel="noreferrer">
          Read More ...
        </a>
        <button type="button" onClick={() => onStarClick(id)}>
          {isStarred ? "Unstar Me" : "Star me"}
        </button>
      </div>
    </div>
  );
};
export default ShowCard;
