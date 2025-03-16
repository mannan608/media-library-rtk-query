import { apiSlice } from "../api/apiSlice";


const mediaApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMedias: builder.query({
            query: () => "/medias"
        }),
        getMedia: builder.query({
            query: (mediaId) => `/medias/${mediaId}`
        }),
        addMedia: builder.mutation({
            query: (data) => ({
                url: "/medias",
                method: "POST",
                headers: { "Content-Type": "application/json" }, // Ensure JSON format
                body: JSON.stringify(data)
            })
        })
    })
})

export const { useGetMediasQuery, useGetMediaQuery, useAddMediaMutation } = mediaApi;
