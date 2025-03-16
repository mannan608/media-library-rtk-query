import { useState } from 'react';
import CheckSign from '../icon/CheckSign';

const images = [
    { id: 1, src: '/images/product.png' },
    { id: 2, src: '/images/product.png' },
    { id: 4, src: '/images/product.png' },
    { id: 5, src: '/images/product.png' },
    { id: 6, src: '/images/product.png' },
    { id: 7, src: '/images/product.png' },
    { id: 8, src: '/images/product.png' },
    { id: 9, src: '/images/product.png' },
    { id: 10, src: '/images/product.png' }
];

const MediaLibary = () => {

    const [selectedId, setSelectedId] = useState(null);

    const handleSelect = (id) => {
        setSelectedId(prev => (prev === id ? null : id));
    };
    return (
        <div className="gallery">
            {images.map((image) => (
                <div
                    key={image.id}
                    className="image"
                    onClick={() => handleSelect(image.id)}
                >
                    {selectedId === image.id && (
                        <span className="check">
                            <CheckSign />
                        </span>
                    )}
                    <img src={image.src} alt={`gallery-image-${image.id}`} />
                </div>
            ))}
        </div>
    )
}

export default MediaLibary