"use client";
import { useEffect, useRef, useState } from "react";
import { Book } from "../models/book";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { Typography } from "@material-tailwind/react";


const BookApp = () => {
    const [books, setBooks] = useState<Book[]>([]);

    const deleteBookById = (id:number) => {
        const updateBooks = books.filter(book => book.id !== id);
        setBooks(updateBooks);
    }

    // update book title
    const editBookById = (id: number, newTitle: string) => {
        const updateBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle }
            }
            return book;
        });
        setBooks(updateBooks);
    }

    // add new book
    const createBook = (title: string) => {
        setBooks(prev => [...prev, {id: Math.round(Math.random() * 9999), title}]);
    };

    // books.length > 0 &&  console.log(books);

    const bottomRef = useRef<HTMLDivElement>(null);
    // useEffect用於偵測books的變化
    useEffect(() => {
        // 滾動到最底部
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [books]);

    return (
        <div className="container mx-auto relative">
            <Typography variant="h5">Reading List</Typography>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
            <div className="mb-2" ref={bottomRef}></div>
            <BookCreate onCreate={createBook}/>
        </div>
    )
}

export default BookApp;