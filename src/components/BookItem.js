import React, { useState } from "react";

import ReadDate from "./ReadDate";
import Card from "./Card";
import "./BookItem.css";

const BookItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Changed");
    console.log(title);
  };

  return (
    <Card className="book-item">
      <ReadDate date={props.date} />
      <div className="book-item__description">
        <h2>{props.title}</h2>
        <div className="book-item__rate">{props.rate}</div>
      </div>
      <button onClick={clickHandler}>Button</button>
    </Card>
  );
};
export default BookItem;
