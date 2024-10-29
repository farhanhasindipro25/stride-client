import axiosInstance from "../providers/AxiosInstance";


export const GetCategories = async (params: any) => {
    const response = await axiosInstance.get("/categories", { params });
    return response;
};

export const GetCategoryByUID = async (uid: string) => {
    const response = await axiosInstance.get(`/categories/${uid}`);
    return response;
};

export const CreateCategory = async (data: any) => {
    const response = await axiosInstance.post("/categories/create", data);
    return response;
};

export const UpdateCategory = async (uid: string, data: any) => {
    const response = await axiosInstance.patch(`/categories/${uid}`, data);
    return response;
};

export const DeleteCategory = async (uid: string) => {
    const response = await axiosInstance.delete(`/categories/delete/${uid}`);
    return response;
};
