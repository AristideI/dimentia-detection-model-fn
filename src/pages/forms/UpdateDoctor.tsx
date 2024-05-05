import { useForm } from "react-hook-form";
import { UserReqDto } from "../../types/interfaces";
import { useEffect, useState } from "react";
import { handleImageChange } from "../../utils/handleImageChange";
import uploadImage from "../../utils/uploadImage";
import { updateDoctor } from "../../utils/addDoctor";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router";
import LoadingSpinner from "../../components/LoadingSpinner";
import "react-toastify/dist/ReactToastify.css";
import { useGetOneDoctor } from "../../hooks/useGetDoctor";

export default function UpdateDoctorForm() {
  const doctorEmail = useParams().id;
  const { doctor } = useGetOneDoctor(`${doctorEmail}`);
  const { register, handleSubmit, setValue } = useForm<UserReqDto>();
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (doctor) {
      setValue("firstName", doctor.firstName);
      setValue("lastName", doctor.lastName);
      setValue("phone", doctor.phone);
      setValue("email", doctor.email);
      setValue("profilePic", doctor.profilePic);
    }
  }, [doctor, setValue]);

  async function onSubmit(data: UserReqDto) {
    setLoading(true);

    try {
      if (image) {
        const imageLink = await uploadImage(image);
        data.profilePic = imageLink;
      }
      await updateDoctor(`${doctorEmail}`, data);
      toast.success("Doctor Updated Successfully");
    } catch (error) {
      toast.error("Failed to Update");
      return;
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <ToastContainer />
      {doctor && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center w-full md:w-2/3 gap-12 mt-12"
        >
          <div className="w-full">
            <p className="text-left text-2xl font-bold">Update Doctor</p>
          </div>
          <div className="flex gap-6 w-full">
            <label className="flex flex-col w-1/2 gap-1 font-medium">
              Firstname
              <input
                type="text"
                placeholder="First Name"
                className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
                {...register("firstName", { required: true })}
              />
            </label>
            <label className="flex flex-col w-1/2 gap-1 font-medium">
              Lastname
              <input
                type="text"
                placeholder="Last Name"
                className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
                {...register("lastName", { required: true })}
              />
            </label>
          </div>
          <div className="flex gap-6 w-full">
            <label className="flex flex-col w-1/2 gap-1 font-medium">
              Phone Number
              <input
                type="text"
                placeholder="Phone"
                className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
                {...register("phone", { required: true })}
              />
            </label>
            <label className="flex flex-col w-1/2 gap-1 font-medium">
              Password
              <input
                type="password"
                placeholder="Password"
                className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
                {...register("password", { required: false })}
              />
            </label>
          </div>
          <div className="flex gap-6 w-full">
            <label className="flex flex-col w-1/2 gap-1 font-medium">
              Image
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, setImage)}
                className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
              />
            </label>
          </div>
          <button className="bg-primary-400 text-primary-100 py-2 w-full rounded-lg font-bold text-lg">
            {loading ? <LoadingSpinner size={40} /> : "Update Doctor"}
          </button>
        </form>
      )}
    </>
  );
}
