import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { initialState } from "./studentState";
import { actionStudentCreate, actionStudentUpdate, actionStudentDelete } from "./studentActions";
import { StudentState } from "../../interfaces/index";

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {

  },
  extraReducers: (builder: any) => {
    builder
      .addCase(actionStudentCreate.pending, (state: RootState) => {

      })
      .addCase(actionStudentCreate.fulfilled, (state: RootState, action: PayloadAction<StudentState>) => {

      })
      .addCase(actionStudentCreate.rejected, (state: RootState, action: PayloadAction<StudentState>) => {

      });

    builder
      .addCase(actionStudentUpdate.pending, (state: RootState) => {

      })
      .addCase(actionStudentUpdate.fulfilled, (state: RootState, action: PayloadAction<StudentState>) => {

      })
      .addCase(actionStudentUpdate.rejected, (state: RootState, action: PayloadAction<StudentState>) => {

      });

    builder
      .addCase(actionStudentDelete.pending, (state: RootState, action: PayloadAction<StudentState>) => {

      })
      .addCase(actionStudentDelete.fulfilled, (state: RootState, action: PayloadAction<StudentState>) => {

      })
      .addCase(actionStudentDelete.rejected, (state: RootState, action: PayloadAction<StudentState>) => {

      });
  }
});

export default studentSlice.reducer;
