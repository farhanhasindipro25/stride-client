import axiosInstance from "../providers/AxiosInstance";


export const GetTasks = async (params: any) => {
    const response = await axiosInstance.get("/tasks", { params });
    return response;
};

export const GetTaskByUID = async (uid: string) => {
    const response = await axiosInstance.get(`/tasks/${uid}`);
    return response;
};

export const CreateTask = async (data: any) => {
    const response = await axiosInstance.post("/tasks/create", data);
    return response;
};

export const UpdateTask = async (uid: string, data: any) => {
    const response = await axiosInstance.patch(`/tasks/${uid}`, data);
    return response;
};

export const MarkComplete = async (uid: string) => {
    const response = await axiosInstance.patch(`/tasks/${uid}/mark-complete`);
    return response;
};

export const DeleteTask = async (uid: string) => {
    const response = await axiosInstance.delete(`/tasks/delete/${uid}`);
    return response;
};
