"use client"
import { BookOpenIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Card, CardBody, Typography, CardFooter, Button, Input, IconButton } from "@material-tailwind/react";
import { useState } from "react";
interface Props {
    onCreate : (title: string) => void;
}

const BookCreate = ({onCreate} : Props) => {
    const [title, setTitle] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title === "") return;
        onCreate(title);
        setTitle("");
    }

    return (
        <div className="container mx-auto flex justify-center mb-3 sticky inset-x-0 bottom-0 ">
            <Card className="w-96" >
                <form onSubmit={handleSubmit}>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-4 flex items-center gap-3">
                            <BookOpenIcon strokeWidth={2} className="h-4 w-4"/>Add a Book
                        </Typography>
                            <Input label="Title" value={title} onChange={handleChange}/>
                    </CardBody>
                    <CardFooter className="pt-0 flex justify-center">
                        <Button type="submit" className="flex items-center gap-3">
                            <PlusIcon strokeWidth={2} className="h-4 w-4"/>Submit
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}

export default BookCreate;