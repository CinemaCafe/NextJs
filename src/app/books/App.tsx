"use client";
import { useState } from "react";
import { Book } from "../models/book";
import BookCreate from "./components/BookCreate";


const BookApp = () => {
    const [books, setBooks] = useState<Array<Book>>([]);

    const createBook = (title: string) => {
        // console.log('Need to add book with:', title);
        setBooks(prev => [...prev, {title: title}]);
    };

    console.log(books);

    return (
        <BookCreate onCreate={createBook}/>
    )
}

export default BookApp;