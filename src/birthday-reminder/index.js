import React, { useState } from "react";
import data from "./data";
import List from "./List";
function BirthdayReminder() {
  const [birthdays, setBirthdays] = useState(data);
  return (
    <div className=" bg-blue-500">
      <h1>BirthdayReminder</h1>
      {birthdays
        .filter((birthday) => birthday.age >= 24)
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
        className=" rounded-lg border border-current h-8 w-24"
      >
        Clear list
      </button>
    </div>
  );
}

export default BirthdayReminder;
