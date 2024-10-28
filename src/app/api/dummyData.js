import { apiSlice } from "./apiSlice";

export const dummyDataApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ currentPage = 0, category, sort, order }) => (
                category ?
                    {
                        url: `/products/category/${category}`,
                    }
                    :
                    sort ?
                        {
                            url: "/products",
                            params: {
                                limit: 15,
                                sortBy: sort,
                                order: order,
                            }
                        }
                        :
                        {
                            url: "/products",
                            params: {
                                limit: 15,
                                skip: (currentPage - 1) * 15,
                            }
                        }
            ),
        }),
        getSingleProduct: builder.query({
            query: ({ id }) => ({
                url: `/products/${id}`,
            }),
        }),
        getCategory: builder.query({
            query: () => ({
                url: "/products/category-list"
            })
        })
    }),
})

export const { useGetProductsQuery, useGetSingleProductQuery, useGetCategoryQuery } = dummyDataApiSlice