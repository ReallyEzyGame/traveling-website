import { useSetImageGallery } from "../../../custom-hook/useSetImageGallery";
import "./body.css"


/*This component is an image gallery contain all the images that user can find and try before having a trip to there */

function Gallery() {
    const { images } = useSetImageGallery();

    if (!images)
        return (
        <div>
            <h3>OOps!! This part is empty</h3>
        </div>
        );

    return (
        <div className="gallery-container">
            {
                images.map(item => {
                    <img key={item} src={item} alt={item} />
                })
            }
        </div>
    );
}

export default Gallery;