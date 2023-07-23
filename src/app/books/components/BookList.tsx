import { Book } from "@/app/models/book";
import BookShow from "./BookShow";
import { Typography } from "@material-tailwind/react";

interface Props {
    books : Book[];
    onDelete : (id: number) => void;
    onEdit : (id: number, newTitle: string) => void;
}

const BookList = ( {books, onDelete, onEdit} : Props) => {
    const renderBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>;
    });

    return (
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {renderBooks}
        </div>
    );
}

export default BookList;