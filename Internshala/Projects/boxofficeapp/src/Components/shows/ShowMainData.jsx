import React from "react";

const ShowMainData = ({ image, name, rating, summary, genres }) => {
  return (
    <div>
      <img src={image ? image.original : "/notfound.png"} alt={name} style={{width:"50%"}} />
      <div>
        <h1>{name}</h1>
        <div>{rating.average || "N/A"}</div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
        <div>
          Genres:{" "}
          <div>
            {genres.map((genere) => (
              <span> {genere} </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMainData;
