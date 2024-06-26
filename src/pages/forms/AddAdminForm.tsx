import { useForm } from "react-hook-form";
import { UserReqDto } from "../../types/interfaces";
import addAdmin from "../../utils/addAdmin";
import { useState } from "react";
import { toast } from "react-toastify";
import uploadImage from "../../utils/uploadImage";
import { handleImageChange } from "../../utils/handleImageChange";
import { useNavigate } from "react-router";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function AddAdminForm() {
  const { register, handleSubmit } = useForm<UserReqDto>();
  const [image, setImage] = useState<File | null>(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  async function onSubmit(data: UserReqDto) {
    setLoading(true);
    const adminData: UserReqDto = {
      ...data,
      profilePic: "",
    };
    try {
      if (image) {
        const imageLink = await uploadImage(image);
        adminData.profilePic = imageLink;
      }
      await addAdmin(adminData);
      toast.success("Admin Created Successfully");
      navigate("/admins");
    } catch (error) {
      toast.error("Failed to Create Admin");
      return;
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center w-full md:w-2/3 gap-12 mt-12"
    >
      <div className="w-full">
        <p className="text-left text-2xl font-bold">Create New Admin</p>
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
          Email
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("email", { required: true })}
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
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Password
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("password", { required: true })}
          />
        </label>
      </div>
      <button className="bg-primary-400 text-primary-100 py-2 w-full rounded-lg font-bold text-lg">
        {loading ? <LoadingSpinner size={40} /> : "Add Admin"}
      </button>
    </form>
  );
}
