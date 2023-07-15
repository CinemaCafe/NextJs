
const ImageShow = ({image} : any) => {
    return (
        <div>
            <img className="mb-[10px] w-[100%]" src={image.urls.small} alt={image.alt_description} />
        </div>
    )
}

export default ImageShow;