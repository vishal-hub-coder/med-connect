import API from "./axios";
export const getMyProviderProfile =() =>{
    return API.get("/provider/me");
}

export const updateProviderProfile = (data)=>{
    return API.put("/auth/profile", data)
}

