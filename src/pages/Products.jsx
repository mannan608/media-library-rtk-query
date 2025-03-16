
import ChooseFromGallery from '../components/media/ChooseFromGallery'

const Products = () => {
    return (
        <div>
            <form action="">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="form-group position-relative mb-3">
                            <label htmlFor="" className="form-label">
                                Product Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Product Name"
                            />
                        </div>
                    </div>
                    <div className="col-sm-12" >
                        <div className="form-group position-relative mb-3" data-bs-toggle="modal" data-bs-target="#new_media_file_modal">
                            <div className="uploadedContainer position-relative">
                                <div className="dragDrop-area">
                                    <label
                                        className="uploaded-label d-flex align-items-center justify-content-center flex-column"

                                    >
                                        <img src="images/img_upload.svg" alt="" className="w-auto h-auto" />
                                        <p className="font-16 mt-2">drag and drop here</p>
                                        <small className="fw-400 mt-1">Max file size 2MB</small>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-action d-flex justify-content-end mt-3">
                            <button className='btn btn-primary btn-sm'>Save</button>
                        </div>
                    </div>

                </div>
            </form>

            <ChooseFromGallery />


        </div>
    )
}

export default Products