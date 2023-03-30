import { IStudentCreate, IStudentUpdate, IStudentDelete } from "../../interfaces/index";

const apiUrl = "http://localhost:8081/api/v1/student";

export const studentCreate = (data: IStudentCreate) => {
  return fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      ContentType: "application/json"
    },
  });
}

export const studentUpdate = (data: IStudentUpdate) => {
  return fetch(apiUrl, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      ContentType: "application/json"
    },
  });
}

export const studentDeleteById = (data: IStudentDelete) => {
  return fetch(apiUrl, {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: {
      ContentType: "application/json"
    },
  });
}

