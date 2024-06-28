import { useState } from "react";
import { sculptureList } from "./data";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleShowMore() {
    setShowMore(!showMore);
  }

  function handleClick() {
    setIndex(index + 1);
  }
  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleShowMore}>
        {showMore ? "Hide" : "Show"} details
      </button>
      <p>{showMore && sculpture.description}</p>
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
