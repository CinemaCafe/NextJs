"use client"
import { useState } from "react";
import agent from "./api/agent";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

const App = () => {
    const [images, setImages] = useState([]);
    const handleSubmit = async (term: string) => {
        const result = await agent.ImageAPI.srch(term);
        setImages(result.results);
    }
    //images.length > 0 && console.log(images);
    return (
        <>
            <SearchBar onSubmit={handleSubmit}/>
            {
                images.length > 0 && <ImageList images={images}/>
            }
        </>
    )
}

export default App;