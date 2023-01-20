import React, { useState } from "react";
import data from "./data";
import List from "./List";
function BirthdayReminder() {
  const [birthdays, setBirthdays] = useState(data);
  return (
    <div className=" bg-violet-900 rounded-lg flex flex-col items-center justify-center w-[50%] h-[60%] m-[8%] p-[5%]">
      <h1 className=" text-3xl font-bold text-blue-500">
        Number of birthdays today {birthdays.length}
      </h1>
      {birthdays
        .filter((birthday) => birthday.age >= 17)
        .map((birthday) => {
          return (
            <List
              img={birthday.image}
              age={birthday.age}
              name={birthday.name}
            />
          );
        })}
      {/* {birthdays.map((birthday) => {
        return (
          <List img={birthday.image} age={birthday.age} name={birthday.name} />
        );
      })} */}
      <button
        type="button"
        className=" rounded-lg border border-current h-8 w-24 bg-blue-500 text-gray-50"
        onClick={() => setBirthdays([])}
      >
        Clear list
      </button>
    </div>
  );
}

export default BirthdayReminder;
