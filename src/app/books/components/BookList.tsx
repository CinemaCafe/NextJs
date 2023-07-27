import { Book } from "@/app/models/book";
import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "@/app/contexts/books";
import { Button } from "@material-tailwind/react";

interface Props {
    books : Book[];
    onDelete : (id: number) => void;
    onEdit : (id: number, newTitle: string) => void;
}

const BookList = ( {books, onDelete, onEdit} : Props) => {
    // const bookValue = useContext(BooksContext);
    const {count, incrementCount} = useContext(BooksContext);
    const renderBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>;
    });

    return (
        <>
            <Button className="mb-3" onClick={incrementCount}>Context Example Click ({count})</Button>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {renderBooks}
            </div>
        </>
    );
}

export default BookList;