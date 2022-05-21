import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';



export const nodeAPI=createApi( {
  reducerPath: "nodeAPI",
  baseQuery: fetchBaseQuery( { baseUrl: "http://127.0.0.1:3001/api/v1" } ),

  // Entities of API
  tagTypes: [ "Veteran", "Post" ],



  endpoints: ( builder ) => ( {

    //Optimize:  ************************** Veterans Authentication ******************************


    //********** Login query
    veteranLogin: builder.mutation( {
      query: ( body ) => ( {
        url: '/veterans/login',
        method: 'POST',
        body,
      } ),
      // invalidatesTags: [ 'User' ],
    } ),

    //********** Sign up query
    veteranSignup: builder.mutation( {
      query: ( body ) => ( {
        url: '/veterans/signup',
        method: 'POST',
        body,
      } ),
      // invalidatesTags: [ 'User' ],
    } ),

    //********** get all veterans
    getAllVeterans: builder.query( {
      query: ( body ) => ( {
        url: '/veterans/',
        method: 'GET',
        headers: {
          'authorization': `Bearer ${Cookies.get( 'jwt' )}`,
        }


      } ),
      // invalidatesTags: [ 'User' ],
    } ),
    //********** get all veterans
    getSingleVeteran: builder.query( {
      query: ( id ) => ( {
        url: `/veterans/veteranBy/ID/${id}`,
        method: 'GET',
        headers: {
          'authorization': `Bearer ${Cookies.get( 'jwt' )}`,
        }


      } ),
      // invalidatesTags: [ 'User' ],
    } ),
    followPerson: builder.mutation( {
      query: ( id ) => ( {
        url: `/veterans/followperson/${id}`,
        method: 'PATCH',
        body: {},
        headers: {
          'authorization': `Bearer ${Cookies.get( 'jwt' )}`,
        }


      } ),
      // invalidatesTags: [ 'User' ],
    } ),

    //Optimize:  ************************** Organization/community Authentication ******************************


    //********** Login query
    communityLogin: builder.mutation( {
      query: ( body ) => ( {
        url: '/community/login',
        method: 'POST',
        body,
      } ),
      // invalidatesTags: [ 'User' ],
    } ),

    //********** Sign up query
    communitySignup: builder.mutation( {
      query: ( body ) => ( {
        url: '/community/signup',
        method: 'POST',
        body,
      } ),
      // invalidatesTags: [ 'User' ],
    } ),
    getcommunities: builder.query( {
      query: () => ( {
        url: '/community/',
        method: 'GET',
        headers: {
          'authorization': `Bearer ${Cookies.get( 'jwt' )}`,
        }
      } )

      // invalidatesTags: [ 'User' ],
    } ),
    getSingleCommunity: builder.query( {
      query: ( id ) => ( {
        url: `/community/${id}`,
        method: 'GET',
        headers: {
          'authorization': `Bearer ${Cookies.get( 'jwt' )}`,
        }
      } )

      // invalidatesTags: [ 'User' ],
    } ),


    //Optimize:  ************************** post Authentication ******************************


    //********** create post query
    createPost: builder.mutation( {
      query: ( body ) => ( {
        url: '/posts/',
        method: 'POST',
        body,
        headers: {
          'authorization': `Bearer ${Cookies.get( 'jwt' )}`,
        }
      } ),
      invalidatesTags: [ 'Post' ],
    } ),

    //********** create post query
    getFollowedPosts: builder.query( {
      query: ( body ) => ( {
        url: '/veterans/post/followed/',
        method: 'GET',
        headers: {
          'authorization': `Bearer ${Cookies.get( 'jwt' )}`,
        }
      } ),
      providesTags: [ 'Post' ],
    } ),


    //Optimize:  ************************** Roles and permission ******************************
    //******** Get All roles query
    getRoles: builder.query( {
      query: ( body ) => ( {
        url: `/role/all-roles/${body.noOfItems}/${body.pageNumber}`,
        method: 'GET',
        headers: {
          'authorization': `Bearer ${Cookies.get( 'jwt' )}`,
        }

      } ),
      // providesTags: [ 'community' ],

    } ),


    
    // deleteCandidate: builder.mutation( {
    //   query: ( id ) => ( {
    //     url: '/candidate/delete-candidate',
    //     method: 'POST',
    //     body: {
    //       id,
    //     },
    //     headers: {
    //       'authorization': `Bearer ${Cookies.get( 'jwt' )}`,
    //     },
    //   } ),
    //   invalidatesTags: [ 'Candidate' ]
    // } ),
    


  } )

} );

export const { useVeteranSignupMutation, useVeteranLoginMutation, useCommunityLoginMutation, useCommunitySignupMutation, useCreatePostMutation, useGetFollowedPostsQuery, useGetAllVeteransQuery, useGetSingleVeteranQuery, useFollowPersonMutation, useGetcommunitiesQuery, useGetSingleCommunityQuery }=nodeAPI;

