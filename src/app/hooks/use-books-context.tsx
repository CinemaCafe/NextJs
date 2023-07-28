import { useContext } from "react";
import BooksContext from "../contexts/books";

// create custom hook
// React Hook names must start with the word "use"
const useBooksContext = () => {
    const context = useContext(BooksContext);
    if (context === undefined) {
        throw Error("Oops - we do not seem to be inside the provider");
    }
    return context;
}

export default useBooksContext;