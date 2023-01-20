import React from "react";

const List = ({ img, name, id, age, length }) => {
  return (
    <div className=" flex w-full gap-12 items-center m-4 bg-orange-200 p-[1%] rounded-md">
      <img src={img} alt="player" className=" h-16 w-16 rounded-full" />
      <div>
        <p className=" text-violet-900 font-semibold text-lg">{name} </p>
        <p className=" text-violet-900 font-semibold text-sm">{age} </p>
      </div>
    </div>
  );
};

export default List;
