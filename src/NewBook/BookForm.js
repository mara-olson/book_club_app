import React, { useState } from "react";
import "./BookForm.css";

const NewBook = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [rate, setEnteredRate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const authorChangeHandler = (event) => {
        setEnteredAuthor(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const rateChangeHandler = (event) => {
        setEnteredRate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const bookData = {
            title: enteredTitle,
            author: enteredAuthor,
            date: enteredDate,
            rate: new Date(enteredRate)
        };

    props.onSaveBookData(bookData)
    }
    
    
    
    return (
        <form onSubmit={submitHandler}>
            <div
        </form>
    )
}