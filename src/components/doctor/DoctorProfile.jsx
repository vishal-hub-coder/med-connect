import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProviderProfile } from "../../features/provider/providerThunk";
import Loader from "../Loader";

const DoctorProfile = () => {
  const dispatch = useDispatch();

  const { profile, loading, error } = useSelector(
    (state) => state.provider
  );
console.log("Profile Data :", profile);
  useEffect(() => {
    dispatch(fetchProviderProfile());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <Loader/>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center mt-10">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      <div className="bg-white shadow-lg rounded-2xl p-8">

        <div className="flex items-center gap-6">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
            className="w-28 h-28 rounded-full"
          />

          <div>
            <h1 className="text-3xl font-bold">
              {profile?.userId?.fullName}
            </h1>

            <p className="text-gray-500">
              {profile?.specialization}
            </p>

            <p className="text-sm text-green-600 mt-2">
              {profile?.availability
                ? "Available"
                : "Unavailable"}
            </p>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <div>
            <h3 className="font-semibold text-xl mb-4">
              Professional Information
            </h3>

            <p>
              <strong>Qualification :</strong>{" "}
              {profile?.qualification}
            </p>

            <p>
              <strong>Experience :</strong>{" "}
              {profile?.experience} Years
            </p>

            <p>
              <strong>City :</strong>{" "}
              {profile?.city}
            </p>

            <p>
              <strong>Address :</strong>{" "}
              {profile?.address}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">
              Charges
            </h3>

            <p>
              ₹{profile?.charges?.perHour} / Hour
            </p>

            <p>
              ₹{profile?.charges?.perDay} / Day
            </p>

            <p>
              ₹{profile?.charges?.perMonth} / Month
            </p>

            <p>
              ₹{profile?.charges?.perYear} / Year
            </p>
          </div>

        </div>

        <div className="mt-10">
          <h3 className="font-semibold text-xl mb-4">
            About
          </h3>

          <p className="text-gray-600">
            {profile?.about}
          </p>
        </div>

      </div>

    </div>
  );
};

export default DoctorProfile;