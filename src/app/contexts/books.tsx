import { PropsWithChildren, createContext, useState } from "react";
import agent from "../api/agent";
import { Book } from "../models/book";

interface BookContextValue {
    books : Book[];
    fetchBook: () => void;
    deleteBookById : (id:number) => void;
    editBookById :  (id: number, newTitle: string) => void;
    createBook : (title: string) => void;
}

const BooksContext = createContext<BookContextValue>({books: [], fetchBook : () => {}, deleteBookById : (id:number) => {}, editBookById : (id: number, newTitle: string) => {}, createBook : (title: string) => {}});
// const BooksContext = createContext<BookContextValue | undefined>(undefined);

// create a Provider for wrap the App component and share the state.
const Provider = ( { children } : PropsWithChildren<any> ) => {
    const [books, setBooks] = useState<Book[]>([]);

    const fetchBook = async () => {
        const response = await agent.BookAPI.getlist();
        setBooks(response);
    }

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
    const createBook = async (title: string) => {
        const response = await agent.BookAPI.create(title)
        setBooks(prev => [...prev, response]);
    };


    // put all these things in the object
    const valueToShare = {
        books, 
        fetchBook,
        deleteBookById,
        editBookById,
        createBook
    }


    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export { Provider };
export default BooksContext;