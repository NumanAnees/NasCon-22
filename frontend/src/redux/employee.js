import { createSlice } from '@reduxjs/toolkit'

//******* Declare your state variable here
const initialState={
  emp_id: null,
  employeeData: {},
  emp_pagination: 1,
}

export const employeeSlice=createSlice( {
  name: 'employeeID',

  initialState,

  reducers: {
    setEmployeeID: ( state, action ) => {
      state.emp_id=action.payload
    },
    setEmployeeData: ( state, action ) => {
      state.employeeData=action.payload
    },
    setEmployeePagination: ( state, action ) => {
      state.emp_pagination=action.payload
    },

  },

} )


// Action creators are generated for each case reducer function
export const { setEmployeeID, setEmployeeData, setEmployeePagination }=employeeSlice.actions

export default employeeSlice.reducer;


