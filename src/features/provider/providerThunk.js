import {
    getMyProviderProfile,
    updateProviderProfile,
} from "../../API/providerAPI";

import {
    providerStart,
    providerSuccess,
    providerFail,
    updateProviderSuccess,
} from "./providerSlice";

export const fetchProviderProfile = () => async (dispatch) => {
  try {
    dispatch(providerStart());

    const { data } = await getMyProviderProfile();

    console.log("GET /provider/me Response :", data);

    dispatch(
      providerSuccess(data.profile)
    );
  } catch (error) {
    console.log("Fetch Error :", error.response?.data);

    dispatch(
      providerFail(
        error.response?.data?.message ||
        "Failed to fetch profile"
      )
    );
  }
};

export const updateProviderAction =
    (formData, navigate) => async (dispatch) => {
        try {
            dispatch(providerStart());

            const { data } = await updateProviderProfile(formData);
            console.log("API Response:", data);
            dispatch(
                updateProviderSuccess(data.profile)
            );

            navigate("/doctor/profile");
        } catch (error) {
            dispatch(
                providerFail(
                    error.response?.data?.message ||
                    "Failed to update profile"
                )
            );
        }
    };