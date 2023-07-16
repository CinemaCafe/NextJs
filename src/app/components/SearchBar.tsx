"use client";
import { Button, Card, CardBody, CardFooter, Input, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";

interface Props {
    onSubmit : (term: string) => void;
}

const SearchBar = ( {onSubmit} : Props) => {
    const [term, setTerm] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    };


    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(term);
    }

    // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === "Enter") {
    //         handleClick();
    //     }
    // }
    
    // const handleClick = () => {
    //     onSubmit(term);
    // }

    // const normalHtml = (
    //     <div className="container p-3">
    //         <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleFormSubmit}>
    //             <Input label="Term" value={term} onChange={handleInputChange}/>
    //         </form>
    //     </div>
    // );

    
    return ( 
        <div className="container mx-auto flex justify-center mb-6">
            <Card className="mt-6 w-96">
                <form onSubmit={handleFormSubmit}>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-4">
                            Enter Search Term
                        </Typography>
                            {/* <Input label="Term" value={term} onChange={handleInputChange} onKeyDown={handleKeyDown}/> */}
                            <Input label="Term" value={term} onChange={handleInputChange}/>
                    </CardBody>
                    <CardFooter className="pt-0">
                        {/* <Button onClick={handleClick}>Click Me</Button> */}
                        <Button type="submit" className="me-3">Click me</Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
        //normalHtml
    )
}

export default SearchBar; 