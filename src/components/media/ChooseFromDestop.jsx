import { useState } from 'react'

const ChooseFromDestop = ({ onSave }) => {
    const [preViewImage, setPreViewImage] = useState([])
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);

        const preview = files.map((file) => {
            return URL.createObjectURL(file);
        })
        setPreViewImage([...preViewImage, ...preview]);
    }
    const handleRemoveImage = (index) => {
        setPreViewImage((prevImages) => prevImages.filter((_, i) => i !== index));
    };
    return (
        <>
            <div className="uploadedContainer position-relative">
                <div className="dragDrop-area">
                    <input
                        type="file"
                        accept="image/*"
                        className="form-control fileInput"
                        id="files"
                        multiple
                        onChange={onSave}
                    />
                    <label
                        className="uploaded-label d-flex align-items-center justify-content-center flex-column"
                        htmlFor="files"
                    >
                        <img src="images/img_upload.svg" alt="" className="w-auto h-auto" />
                        <p className="font-16 mt-2">drag and drop here</p>
                        <small className="fw-400 mt-1">Max file size 2MB</small>
                    </label>
                </div>

                {/* Image Preview Section */}
                <div className="uploadedImagePreview d-flex align-items-center gap-4 mt-4">
                    {preViewImage.map((img, index) => (
                        <div key={index} className="uplodedImage position-relative">
                            <img src={img} alt={`preview-${index}`} className="image" />
                            <img
                                src="/images/close_icon_upload_img.svg"
                                alt="remove"
                                className="close-icon"
                                onClick={() => handleRemoveImage(index)}

                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ChooseFromDestop