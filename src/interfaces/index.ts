export interface StudentState {
  id: number;
  name: string;
  email: string;
  age: string;
  lastname: string;
  studentRegistrationError: any;
  studentLoginError: any;
  aruswnrDeleteError: any;
  status: string;
}

export interface IStudentCreate {
  name: string;
  email: string;
  age: string;
  lastname: string;
  password: string;
}

export interface IStudentUpdate {
  name: string;
  email: string;
  age  : string;
  lastname: string;
  password: string;
}

export interface IStudentDelete {
  id: number;
  name: string;
}

