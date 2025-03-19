import { useEffect } from 'react'
import { useDeleteMediaMutation, useGetMediaQuery, useUpdateMediaMutation } from '../../features/media/media';
import { skipToken } from '@reduxjs/toolkit/query';
import Field from '../form/Field';
import { useForm } from 'react-hook-form';


const FileDetails = ({ selectImage }) => {
    const { register, handleSubmit, reset } = useForm();

    const { data: media, isLoading, isError } = useGetMediaQuery(selectImage ?? skipToken);

    const [updateMedia, { isSuccess: isUpdateSuccess }] = useUpdateMediaMutation();
    const [deleteMedia, { isSuccess: isDeleteSuccess }] = useDeleteMediaMutation();

    useEffect(() => {
        if (isDeleteSuccess || isUpdateSuccess) {
            const modalElement = document.querySelector('[data-bs-dismiss="modal"]');
            modalElement?.click();
        }
    }, [isDeleteSuccess, isUpdateSuccess]);


    const handleDelete = async () => {
        if (window.confirm(`Are you sure you want to delete this ${selectImage} ?`)) {
            await deleteMedia(selectImage);
        }
    };

    const onSubmit = async (data) => {

        await updateMedia({ id: selectImage, ...data });
    };

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
                            <form action="" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="image">
                                            <img src={media?.url} alt={media?.title} />
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="form-group position-relative mb-3">
                                            <Field label="Alternative Text">
                                                <textarea className="form-control" placeholder="Enter text" id="name"
                                                    name="alt" defaultValue={media?.alt}
                                                    {...register("alt")} />
                                            </Field>

                                        </div>
                                        <div className="form-group position-relative mb-3">
                                            <Field label="Title">
                                                <input type="text" id="title" name="title" defaultValue={media?.title} className="form-control" placeholder="Title here" {...register("title")} />
                                            </Field>
                                        </div>
                                        <div className="form-group position-relative mb-3">
                                            <Field label="Caption">
                                                <input type="text" id="caption" name="caption" defaultValue={media?.caption} className="form-control" placeholder="Caption here" {...register("caption")} />
                                            </Field>
                                        </div>
                                        <div className="form-group position-relative mb-3">
                                            <Field label="Description">
                                                <textarea className="form-control" placeholder="Enter Description" id="desc"
                                                    name="desc" defaultValue={media?.desc}
                                                    {...register("desc")} />
                                            </Field>
                                        </div>
                                        <div className="form-group position-relative mb-3">
                                            <Field label="File URL">
                                                <input type="text" className="form-control" placeholder="Enter URL" id="url"
                                                    name="url" defaultValue={media?.url}
                                                    {...register("url")} />
                                            </Field>
                                        </div>
                                        {/* <div className="form-group position-relative mb-3">
                                                <label htmlFor="" className="form-label">File URL</label>
                                                <input type="text" className="form-control" placeholder=" File URL here" />
                                            </div> */}
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
                                <div href="#" className='text-danger font-14 cursor-pointer' onClick={handleDelete} > Delete permanently</div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileDetails