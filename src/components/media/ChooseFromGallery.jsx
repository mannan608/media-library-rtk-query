import React from 'react'
import ChooseFromDestop from './ChooseFromDestop'
import MediaLibary from './MediaLibary'

const ChooseFromGallery = () => {
    return (
        <div className="modal fade" id="new_media_file_modal" data-bs-backdrop="static">
            <div className="modal-dialog  modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h6 className="font-18 mt-2">Insert Media</h6>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        <div className="new_media_file_modal">
                            <div className='tab-menu'>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="upload-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#upload-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="upload-tab-pane"
                                            aria-selected="true"
                                        >
                                            Upload Files
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="media-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#media-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="media-tab-pane"
                                            aria-selected="false"
                                        >
                                            Media Library
                                        </button>
                                    </li>
                                </ul>
                                <form action="">
                                    <div className="tab-content mt-3" id="myTabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="upload-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="upload-tab"
                                            tabIndex={0}
                                        >
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="form-group position-relative mb-3">
                                                        <ChooseFromDestop />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="media-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="media-tab"
                                            tabIndex={0}                                        >

                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <div className="title-sort">
                                                        <div className="filter-area d-flex justify-content-start">
                                                            <div className="form-group position-relative mb-3">
                                                                <div className="search-box flex-sm-grow-1">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control filter-input"
                                                                        placeholder="Search Media"
                                                                        id="searchInput"
                                                                        name="search"
                                                                    />
                                                                    <img
                                                                        src="/images/search_box_icon.svg"
                                                                        alt=""
                                                                        className="search_icon w-auto h-auto"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="store-media">

                                                        <MediaLibary />

                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
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
                                                        />

                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-action d-flex justify-content-end mt-3">
                                                <button className='btn btn-primary btn-sm'>Select</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseFromGallery