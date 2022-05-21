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


    //Optimize:  ************************** Organization/community Authentication ******************************


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

    //********** create event query
    createEvent: builder.mutation( {
      query: ( body ) => ( {
        url: '/events/',
        method: 'POST',
        body,
        headers: {
          'authorization': `Bearer ${Cookies.get( 'jwt' )}`,
        }
      } ),
      invalidatesTags: [ 'Post' ],
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

export const { useVeteranSignupMutation, useVeteranLoginMutation, useCommunityLoginMutation, useCommunitySignupMutation, useCreatePostMutation,useCreateEventMutation }=nodeAPI;

