import { useForm } from "react-hook-form";
import { UserReqDto } from "../../types/interfaces";
import addAdmin from "../../utils/addAdmin";
import { useState } from "react";
import { toast } from "react-toastify";
import uploadImage from "../../utils/uploadImage";

export default function AddAdminForm() {
  const { register, handleSubmit } = useForm<
    UserReqDto & { confirmPassword: string }
  >();
  const [image, setImage] = useState<File | null>(null);

  async function onSubmit(data: UserReqDto) {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const adminData: UserReqDto = {
      ...data,
      isAdmin: true,
      profilePic: "",
    };
    try {
      const imageLink = await uploadImage(image!);
      adminData.profilePic = imageLink;
      await addAdmin(adminData);
    } catch (error) {
      console.error(error);
      toast.error("Failed to Create Admin");
      return;
    }
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      // Check if size is greater than 3MB
      if (file.size > 3500000) {
        alert("Image size must not exceed 3MB");
        e.target.value = "";
        return;
      }
      setImage(file);
    } else {
      setImage(null);
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
            onChange={handleImageChange}
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
      <div className="flex gap-6 w-full">
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Confirm Password
          <input
            type="password"
            placeholder="Confirm Password"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("confirmPassword", { required: true })}
          />
        </label>
      </div>
      <button className="bg-primary-400 text-primary-100 py-2 w-full rounded-lg font-bold text-lg">
        Add Admin
      </button>
    </form>
  );
}
