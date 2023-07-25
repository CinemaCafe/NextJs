"use client";
import { useEffect, useRef, useState } from "react";
import { Book } from "../models/book";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { Typography } from "@material-tailwind/react";
import agent from "../api/agent";


const BookApp = () => {
    const [books, setBooks] = useState<Book[]>([]);

    const deleteBookById = async (id:number) => {
        await agent.BookAPI.delete(id);
        const updateBooks = books.filter(book => book.id !== id);
        setBooks(updateBooks);
    }

    // update book title
    const editBookById = async (id: number, newTitle: string) => {
        const response = await agent.BookAPI.update(id, newTitle)
        // sconsole.log(response);
        const updateBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response }
            }
            return book;
        });
        setBooks(updateBooks);
    }

    // add new book
    const createBook = async(title: string) => {
        const response = await agent.BookAPI.create(title)
        setBooks(prev => [...prev, response]);
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

    const fetchBook = async () => {
        const response = await agent.BookAPI.getlist();
        setBooks(response);
    }
    // useEffect example
    // https://codepen.io/sgrider/pen/BarEowz 
    useEffect(()=> {
        fetchBook();
    }, [])

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