import ImageShow from "./ImageShow";


const ImageList = ({ images }: any) => {
    const renderedImages = images.map((image: any) => {
        return <ImageShow key={image.id} image={image}/>
    })
    return (
        <div className="container mx-auto grid gap-2 sm:grid-cols-2 md:grid-cols-4">
            {renderedImages}
        </div>
    )
}

export default ImageList;