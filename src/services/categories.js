





import { merchantApi } from './api';
import { PROGRAM_ID } from '../config';


const categoryApi = merchantApi.injectEndpoints({
    endpoints: (build) => ({
        getCategories: build.query({
            query: () => {
                return {
                    url: `/api/v1/categories?program_id=${PROGRAM_ID}`,
                    method: "GET",
                   
                }
            },
        }),
        nomination: build.mutation({
            query: (payload) => {
                return {
                    url: "/api/v1/start-nomination",
                    method: "POST",
                    body: payload
                }
            }
        }),
    })
})

export const { useGetCategoriesQuery,useNominationMutation} = categoryApi