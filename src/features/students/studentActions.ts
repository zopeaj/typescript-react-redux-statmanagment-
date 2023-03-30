import { createAsyncThunk } from "@reduxjs/toolkit";
import { studentCreate, studentUpdate, studentDeleteById } from "./studentApi";
import { IStudentCreate, IStudentUpdate, IStudentDelete } from "../../interfaces/index";

export const actionStudentCreate = createAsyncThunk("student/studentCreate", async (data: IStudentCreate) => {

});

export const actionStudentUpdate = createAsyncThunk("student/studentUpdate", async (data: IStudentUpdate) => {

});

export const actionStudentDelete = createAsyncThunk("student/studentDelete", async (data: IStudentDelete) => {

});


