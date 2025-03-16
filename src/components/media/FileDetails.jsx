import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetMediaQuery } from '../../features/media/media';

const FileDetails = ({ selectImage }) => {

    const { id } = useParams();
    const { data: media, isLoading, isError } = useGetMediaQuery(selectImage, { skip: !selectImage });
    console.log("single data", media);
    return (
        <div className="modal fade" id="media_file_modal" data-bs-backdrop="static">
            <div className="modal-dialog  modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h6 className="font-18 mt-2">Attachment details</h6>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        <div className="media_file_modal">
                            <form action="">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="image">
                                            <img src={media?.url} alt={media?.title} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group position-relative mb-3">
                                            <label htmlFor="" className="form-label">
                                                Alternative Text
                                            </label>
                                            <textarea
                                                name=""
                                                className="form-control"
                                                id=""
                                                placeholder="Enter text"
                                            />
                                        </div>
                                        <div className="form-group position-relative mb-3">
                                            <label htmlFor="" className="form-label">
                                                Title
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Title here"
                                                // value={media?.title}
                                                defaultValue={media?.title}
                                            />

                                        </div>
                                        <div className="form-group position-relative mb-3">
                                            <label htmlFor="" className="form-label">
                                                Caption
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Caption here"
                                            />

                                        </div>
                                        <div className="form-group position-relative mb-3">
                                            <label htmlFor="" className="form-label">
                                                Description
                                            </label>
                                            <textarea
                                                name=""
                                                className="form-control"
                                                id=""
                                                placeholder="Enter Description"
                                            />

                                        </div>
                                        <div className="form-group position-relative mb-3">
                                            <label htmlFor="" className="form-label">
                                                File URL
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=" File URL here"
                                                value={media?.url}
                                            />

                                        </div>

                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-action d-flex justify-content-end mt-3">
                                            <button className='btn btn-primary btn-sm'>Update</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="w-100 d-flex align-items-center gap-3 mt-3">
                                <a href="#" className='text-black font-14' >Download file  </a> |
                                <a href="#" className='text-danger font-14' > Delete permanently</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileDetails