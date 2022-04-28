import React, { useState } from "react";
import Books from "./components/Books";

const App = () => {
  const library = [
    {
      id: "1",
      title: "The Meaning of Man",
      author: "Viktor Frankl",
      read_date: new Date(2020, 7, 14),
      rate: "4",
    },
    {
      id: "2",
      title: "Sapiens",
      author: "Yuval Harari",
      read_date: new Date(2021, 2, 28),
      rate: "5",
    },
    {
      id: "3",
      title: "Zen and the Art of Motorcycle Maintenance",
      author: "Rovert Pirsig",
      read_date: new Date(2021, 5, 12),
      rate: "3",
    },
  ];
  return (
    <div>
      <h1>My Library</h1>
      <Books library={library} />
    </div>
  );
};

export default App;
