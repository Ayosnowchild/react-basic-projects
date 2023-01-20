import React from "react";

const List = ({ img, name, id, age }) => {
  return (
    <div>
      <img src={img} alt="player" className=" h-16 w-16" />
      <div>
        <p>{name} </p>
        <p>{age} </p>
      </div>
    </div>
  );
};

export default List;
