
import { Link } from 'react-router-dom'
import AddNewMedia from '../components/media/AddNewMedia'
import FileDetails from '../components/media/FileDetails'
import { useGetMediasQuery } from '../features/media/media'
import { useState } from 'react'

const Media = () => {

    const [selectImage, setSelectImage] = useState(null);

    const { data: media, isLoading, isError } = useGetMediasQuery();



    let content = null;

    if (isLoading) {
        content = "logind";
    }
    if (!isLoading && isError) {
        content = "error";
    }

    if (!isLoading && !isError && media?.length === 0) {
        content = "No media file found ";
    }


    if (!isLoading && !isError && media?.length > 0) {
        content = media.map((image) => (

            <div className="media-file " key={image.id} onClick={() => setSelectImage(image.id)}>
                <Link to="#" data-bs-toggle="modal" data-bs-target="#media_file_modal">
                    <img src={image.url} alt={image.title} />
                </Link>
            </div>


        ));
    }




    return (
        <>
            <div className="page-title d-flex align-items-center justify-content-between">
                <h5 className="fw-600">Media Library</h5>
                <button
                    className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#addNewMediaModal" >
                    Add New Media File
                </button>
            </div>

            <div className="page-content mt-3">
                <div className="card p-3">
                    <div className="media-file-lists">
                        <form action="">
                            <div className="title d-flex align-items-center justify-content-between">
                                <div className="form-group position-relative mb-3">
                                    {/* <SelectBox options={category} placeholder="All media items" /> */}
                                </div>
                                <div className="form-group position-relative mb-3">
                                    <div className="search-box flex-sm-grow-1">
                                        <input
                                            type="text"
                                            className="form-control filter-input"
                                            placeholder="Search by name"
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
                        </form>
                        <div className="media-files d-flex flex-wrap gap-3">
                            {content}

                        </div>


                        <div className="loadMore d-flex justify-content-center align-items-center mt-5 flex-column gap-2">
                            <p>Showing 80 of 136 media items</p>
                            <button className="btn btn-primary btn-sm">Load More</button>
                        </div>
                    </div>
                </div>

                <FileDetails selectImage={selectImage} />

                <AddNewMedia />
            </div>
        </>
    )
}

export default Media