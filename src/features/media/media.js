import { apiSlice } from "../api/apiSlice";


const mediaApi = apiSlice.injectEndpoints({
    // tagTypes: ["Medias"],
    endpoints: (builder) => ({
        getMedias: builder.query({
            query: () => "/medias",
            keepUnusedDataFor: 600,
            providesTags: ["Medias"]
        }),
        getMedia: builder.query({
            query: (mediaId) => `/medias/${mediaId}`
        }),
        addMedia: builder.mutation({
            query: (data) => ({
                url: "/medias",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            }),
            invalidatesTags: ["Medias"]
        }),
        updateMedia: builder.mutation({
            query: ({ id, ...updatedMedia }) => ({
                url: `/medias/${id}`,
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedMedia)
            }),
            invalidatesTags: ["Medias"]
        }),
        deleteMedia: builder.mutation({
            query: (id) => ({
                url: `/medias/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Medias"],
        })
    })
})

export const { useGetMediasQuery, useGetMediaQuery, useAddMediaMutation, useUpdateMediaMutation, useDeleteMediaMutation } = mediaApi;
