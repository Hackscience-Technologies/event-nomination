

import {createApi, fetchBaseQuery, retry} from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../config';

const baseQuery = fetchBaseQuery({

    baseUrl: BASE_URL
})
  
const baseQueryWithRetry = retry(baseQuery, {maxRetries: 0});

export const merchantApi = createApi({
    baseQuery:  baseQueryWithRetry,
    reducerPath:"merchantApi",
    endpoints: () =>({}), 
})

