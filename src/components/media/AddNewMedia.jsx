
import { useState } from "react";
import { useAddMediaMutation } from "../../features/media/media";
import Field from "../form/Field";
import { useForm } from "react-hook-form";



const AddNewMedia = () => {

    const { register, handleSubmit, reset } = useForm();
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [addMedia, { isLoading }] = useAddMediaMutation();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    }

    const onSubmit = async (data) => {
        if (!selectedImage) {
            alert("Please select an image");
            return;
        }
        const readFileAsDataURL = (file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
            });
        };

        try {
            const filePath = await readFileAsDataURL(selectedImage);
            const response = await addMedia({ ...data, url: filePath });
            console.log("Media added successfully:", response);

            reset();
            setSelectedImage(null);
            setImagePreview(null);
        } catch (error) {
            console.error("Error uploading media:", error);
        }
    };



    return (
        <>
            <div className="modal fade" id="addNewMediaModal" data-bs-backdrop="static">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="font-18 mt-2">Insert Media</h6>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="addNewMedia">
                                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group position-relative mb-3 chose_file">
                                                <div className="uploadedContainer position-relative">
                                                    <div className="dragDrop-area">
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            className="form-control fileInput"
                                                            id="files"
                                                            {...register("image")}
                                                            onChange={handleFileChange}
                                                        />
                                                        <label className="uploaded-label d-flex align-items-center justify-content-center flex-column" htmlFor="files">
                                                            <img src="images/img_upload.svg" alt="" className="w-auto h-auto" />
                                                            <p className="font-16 mt-2">Drag and drop here</p>
                                                            <small className="fw-400 mt-1">Max file size 2MB</small>
                                                        </label>
                                                    </div>

                                                    {/* Image Preview */}
                                                    {imagePreview && (
                                                        <div className="uploadedImagePreview d-flex align-items-center gap-4 mt-4">
                                                            <div className="uplodedImage position-relative">
                                                                <img src={imagePreview} alt="preview" className="image" />
                                                                <img
                                                                    src="/images/close_icon_upload_img.svg"
                                                                    alt="remove"
                                                                    className="close-icon"
                                                                    onClick={() => {
                                                                        setSelectedImage(null);
                                                                        setImagePreview(null);
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group position-relative mb-3">
                                                <Field label="Alternative Text">
                                                    <textarea className="form-control" placeholder="Enter text" id="name"
                                                        name="alt"
                                                        {...register("alt")} />
                                                </Field>

                                            </div>
                                            <div className="form-group position-relative mb-3">
                                                <Field label="Title">
                                                    <input type="text" id="title" name="title" className="form-control" placeholder="Title here" {...register("title")} />
                                                </Field>
                                            </div>
                                            <div className="form-group position-relative mb-3">
                                                <Field label="Caption">
                                                    <input type="text" id="caption" name="caption" className="form-control" placeholder="Caption here" {...register("caption")} />
                                                </Field>
                                            </div>
                                            <div className="form-group position-relative mb-3">
                                                <Field label="Description">
                                                    <textarea className="form-control" placeholder="Enter Description" id="desc"
                                                        name="desc"
                                                        {...register("desc")} />
                                                </Field>
                                            </div>
                                            {/* <div className="form-group position-relative mb-3">
                                                <label htmlFor="" className="form-label">File URL</label>
                                                <input type="text" className="form-control" placeholder=" File URL here" />
                                            </div> */}
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-action d-flex justify-content-end mt-3">
                                                <button className='btn btn-primary btn-sm' type="submit" disabled={isLoading}>
                                                    {isLoading ? "Loading..." : "Save Media"}</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddNewMedia;
