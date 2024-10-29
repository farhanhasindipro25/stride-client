import axiosInstance from "../providers/AxiosInstance";


export const GetTags = async (params: any) => {
    const response = await axiosInstance.get("/tags", { params });
    return response;
};

export const GetTagByUID = async (uid: string) => {
    const response = await axiosInstance.get(`/tags/${uid}`);
    return response;
};

export const CreateTag = async (data: any) => {
    const response = await axiosInstance.post("/tags/create", data);
    return response;
};

export const UpdateTag = async (uid: string, data: any) => {
    const response = await axiosInstance.patch(`/tags/${uid}`, data);
    return response;
};

export const DeleteTag = async (uid: string) => {
    const response = await axiosInstance.delete(`/tags/delete/${uid}`);
    return response;
};
