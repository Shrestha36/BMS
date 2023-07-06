import { createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/";

 const apiSlice = createApi({
    reducerPath: 'pokeApi',
    baseQuery: fetchBaseQuery({baseUrl: "https://pokeapi.co/api/v2/"}),
    endpoints: (builder)=>({
        getPokemon: builder.query({
            query:() => 'pokemon',
        }),
        getLazyPokemon: builder.query({
            query:()=>'pokemon ',
            providesTags: (result, error, id)=>['Pokemon'],
        }),
        }),
    });

    export const {useGetPokemonQuery, useGetLazyPokemonLazyQuery} = apiSlice;
    export default apiSlice;
