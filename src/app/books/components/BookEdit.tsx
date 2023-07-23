import { Book } from "@/app/models/book";
import { CheckIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { Card, CardBody, Typography, CardFooter, Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";

interface Props {
    book : Book;
    onSubmit : (id: number, title: string) => void
}

const BookEdit = ({book, onSubmit} : Props) => {
    const [title, setTitle] = useState(book.title);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(book.id, title);
    }

    return (
        <Card >
            <form onSubmit={handleSubmit}>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-4 flex items-center gap-3">
                        <PencilSquareIcon strokeWidth={2} className="h-4 w-4"/>Change Book title
                    </Typography>
                        <Input label="Title" value={title} onChange={handleChange}/>
                </CardBody>
                <CardFooter className="pt-0 flex justify-center">
                    <Button type="submit" color="green" className="flex items-center gap-3">
                        <CheckIcon strokeWidth={2} className="h-4 w-4"/>Save
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}

export default BookEdit;