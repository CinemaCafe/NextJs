import BookShow from "./BookShow";
import useBooksContext from "@/app/hooks/use-books-context";

const BookList = () => {
    
    // const { books } = useContext(BooksContext);
    // custom hook
    const { books } = useBooksContext();

    const renderBooks = books.map((book) => {
        return <BookShow key={book.id} book={book}/>;
    });

    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {renderBooks}
            </div>
        </>
    );
}

export default BookList;