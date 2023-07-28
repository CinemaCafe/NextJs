"use client";
import { useEffect, useRef } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { Typography } from "@material-tailwind/react";
import useBooksContext from "../hooks/use-books-context";


const BookApp = () => {
    // const { fetchBook } = useContext(BooksContext);
    const { fetchBook } = useBooksContext();
    
    // useEffect example
    // https://codepen.io/sgrider/pen/BarEowz 
    useEffect(()=> {
        fetchBook();
    }, [fetchBook])

    // books.length > 0 &&  console.log(books);

    const bottomRef = useRef<HTMLDivElement>(null);
    
    // useEffect用於偵測books的變化，改成context時候需要再優化
    useEffect(() => {
        // 滾動到最底部
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
          }
    }, []);

    return (
        <div className="container mx-auto relative">
            <Typography variant="h5">Reading List</Typography>
            <BookList/>
            <div className="mb-2" ref={bottomRef}></div>
            <BookCreate />
        </div>
    )
}

export default BookApp;