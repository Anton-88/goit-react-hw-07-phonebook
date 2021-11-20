import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mockApiSlice = createApi({
  reducerPath: "mockApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6194ee5074c1bd00176c6a4b.mockapi.io/",
  }),
  tagTypes: ["Contact"],
  endpoints: (build) => ({
    getContacts: build.query({
      query: () => `contacts`,
      providesTags: [{ type: "Contacts" }],
    }),
    createContact: build.mutation({
      query: (newContact) => ({
        url: "contacts",
        method: "POST",
        body: newContact,
      }),
      invalidatesTags: [{ type: "Contacts" }],
    }),
    deleteContact: build.mutation({
      query: (contactId) => ({
        url: `contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Contacts" }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = mockApiSlice;
