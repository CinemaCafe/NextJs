"use client";
import { Provider } from "../contexts/books";
import BookApp from "./App";

const Home =() => {
    return (
        <Provider>
            <BookApp />
        </Provider>
    )
}

export default Home;