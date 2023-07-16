import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

const ImageShow = ({image} : any) => {
    console.log(image);
    return (
        // <div>
        //     <img className="mb-[10px] object-cover w-full rounded-lg shadow-xl" src={image.urls.small} alt={image.alt_description} />
        // </div>
        <Card className="h-80">
            <CardHeader floated={false}>
                <img src={image.urls.small} alt={image.alt_description} />
            </CardHeader>
            <CardBody className="text-center">
                <Typography color="blue" className="font-medium" textGradient>
                    {image.alt_description}
                </Typography>
            </CardBody>
        </Card>

    )
}

export default ImageShow;