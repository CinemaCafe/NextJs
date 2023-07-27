import { PropsWithChildren, createContext, useState } from "react";

interface BookContextValue {
    count : number,
    incrementCount: () => void;
}

const BooksContext = createContext<BookContextValue>({count: 0, incrementCount : () => {}});

// create a Provider for wrap the App component and share the state.
const Provider = ( { children } : PropsWithChildren<any> ) => {
    const [count, setCount] = useState(5);

    // BookContextValue object
    const valueToShare = {
        count : count,
        incrementCount: () => {
            setCount(count + 1);
        }
    }

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export { Provider };
export default BooksContext;