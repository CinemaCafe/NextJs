/* eslint-disable @next/next/no-img-element */
import { Book } from "@/app/models/book";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Card, CardBody, Typography, CardFooter, Button, CardHeader } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import BookEdit from "./BookEdit";
import agent from "@/app/api/agent";
interface Props {
    book : Book;
    onDelete : (id: number) => void;
    onEdit : (id: number, newTitle: string) => void;
}

const BookShow = ({book, onDelete, onEdit} : Props) => {
    const [showEdit, setShowEdit] = useState(false);
    const [imgUrl, setImgUrl] = useState("");

    const handleDeleteClick = () => {
        onDelete(book.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = (id: number, title: string) => {
        setShowEdit(false);
        onEdit(id, title);
    }

    let contnet = (
        <Typography variant="h5" color="blue-gray" className="mb-2">
            {book.title}
        </Typography>
    );

    if (showEdit) {
        contnet = <BookEdit book={book} onSubmit={handleSubmit}/>
    }

    const bookImg = async (term: string) => {
        const result = await agent.ImageAPI.srch(term);
        // setImages(result.results);
        return result.results[0].urls.small;
    }

    useEffect(() => {
        agent.ImageAPI.srch(book.title).then(data => {
            setImgUrl(data.results[0].urls.small);
        });
    }, [book.title])

    

    return (
        <Card className="mx-1 md:mx-0">
            <CardHeader floated={false} className="h-60">
                {/* <img src={`https://picsum.photos/seed/${book.id}/800/800`} alt="profile-picture" /> */}
                <img src={imgUrl} alt="profile-picture" className="h-full w-full"/>
            </CardHeader>
            <CardBody>
                {contnet}
            </CardBody>
            <CardFooter className="pt-0">
                <Button className="me-2" color="cyan" title="Edit" onClick={handleEditClick}><PencilSquareIcon strokeWidth={2} className="h-4 w-4"/></Button>
                <Button color="red" title="Delete" onClick={handleDeleteClick}><TrashIcon strokeWidth={2} className="h-4 w-4"/></Button>
            </CardFooter>
        </Card>
    )
}

export default BookShow;