import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';



export const nodeAPI=createApi( {
  reducerPath: "nodeAPI",
  baseQuery: fetchBaseQuery( { baseUrl: "http://127.0.0.1:3001/api/v1" } ),

  // Entities of API
  tagTypes: [  "User", "Employee" ],



  endpoints: ( builder ) => ( {

    //Optimize:  ************************** Authentication ******************************


    //********** Login query
    login: builder.mutation( {
      query: ( body ) => ( {
        url: '/users/login',
        method: 'POST',
        body,
      } ),
      // invalidatesTags: [ 'User' ],
    } ),

    //********** Sign up query
    signup: builder.mutation( {
      query: ( body ) => ( {
        url: '/users/signup',
        method: 'POST',
        body,
      } ),
      // invalidatesTags: [ 'User' ],
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
      providesTags: [ 'Role' ],

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

export const { useSignupMutation, useLoginMutation }=nodeAPI;

