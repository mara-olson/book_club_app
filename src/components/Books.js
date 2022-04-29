import React, { useState } from "react";
import BookItem from "./BookItem.js";
import Card from "./Card.js";
import "./Books.css";

const Books = (props) => {
  return (
    <Card className="books">
      <BookItem
        title={props.library[0].title}
        author={props.library[0].author}
        date={props.library[0].read_date}
        rate={props.library[0].rate}
      />
      <BookItem
        title={props.library[1].title}
        author={props.library[1].author}
        date={props.library[1].read_date}
        rate={props.library[1].rate}
      />
      <BookItem
        title={props.library[2].title}
        author={props.library[2].author}
        date={props.library[2].read_date}
        rate={props.library[2].rate}
      />
    </Card>
  );
};

export default Books;
