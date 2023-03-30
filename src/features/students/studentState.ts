import { createEntityAdapter } from "@reduxjs/toolkit";

export const initialState = createEntityAdapter.getInitialState({
  id: 0,
  name: '',
  email: '',
  age: '',
  lastname:'',
  studentRegistrationError: null,
  studentLoginError: null,
  studentDeleteError: null,
  status: ''
});

