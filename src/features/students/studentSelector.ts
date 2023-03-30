import { useAppSelector } from "../../app/hook";
import { RootState } from "../../app/store";

const selectCurrentId = (state: RootState) => state.student.id;
export const readCurrentId = useAppSelector(selectCurrentId);

const selectEmail = (state: RootState) => state.student.email;
export const readCurrentEmail = useAppSelector(selectEmail);

const selectAge = (state: RootState) => state.student.age;
export const readCurrentAge = useAppSelector(selectAge);

const selectRegistrationError = (state: RootState) => state.student.studentRegistrationError;
export const readCurrentRegistrationError = useAppSelector(selectRegistrationError);

const selectLoginError = (state: RootState) => state.student.studentLoginError;
export const readCurrentLoginError = useAppSelector(selectLoginError);

const selectDeleteError = (state: RootState) => state.student.studentDeleteError;
export const readCurrentDeleteError = useAppSelector(selectDeleteError);

const selectStatus = (state: RootState) => state.student.status;
export const readCurrentStatus = useAppSelector(selectStatus);
