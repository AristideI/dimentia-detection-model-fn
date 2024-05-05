import { useForm } from "react-hook-form";
import { PatientDto } from "../../types/interfaces";
import { Except } from "type-fest";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import { ToastContainer, toast } from "react-toastify";
import { useGetOnePatient } from "../../hooks/useGetPatients";
import "react-toastify/dist/ReactToastify.css";
import { updatePatient } from "../../utils/addPatient";

export default function UpdatePatientForm() {
  const patientId = useParams().id;
  const { patient } = useGetOnePatient(`${patientId}`);
  const { register, handleSubmit, setValue } =
    useForm<Except<PatientDto, "id">>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (patient) {
      setValue("firstName", patient.firstName);
      setValue("lastName", patient.lastName);
      setValue("phone", patient.phone);
      setValue("email", patient.email);
      setValue("nid", patient.nid);
      setValue("dob", patient.dob);
    }
  }, [patient, setValue]);

  async function onSubmit(data: Except<PatientDto, "id">) {
    setLoading(true);
    try {
      await updatePatient(`${patient?.nid}`, data);
      toast.success("Patient Updated Successfully");
      setLoading(false);
    } catch (error) {
      toast.error("Failed to Update Patient");
      setLoading(false);
      return;
    }
  }

  return (
    <>
      <ToastContainer />
      {patient && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center w-full md:w-2/3 gap-12 mt-12"
        >
          <div className="w-full">
            <p className="text-left text-2xl font-bold">Update Patient</p>
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
              National ID
              <input
                type="text"
                placeholder="National ID"
                className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
                {...register("nid", { required: false, disabled: true })}
              />
            </label>
            <label className="flex flex-col w-1/2 gap-1 font-medium">
              Gender
              <select
                className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
                {...register("gender", { required: true })}
              >
                <option value="Male" selected={patient.gender === "Male"}>
                  Male
                </option>
                <option value="Female" selected={patient.gender === "Female"}>
                  Female
                </option>
              </select>
            </label>
          </div>
          <div className="flex gap-6 w-full">
            <label className="flex flex-col w-1/2 gap-1 font-medium">
              Date of Birth
              <input
                type="date"
                placeholder="Date of Birth"
                className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
                {...register("dob", { required: true })}
              />
            </label>
          </div>
          <button className="bg-primary-400 text-primary-100 py-2 w-full rounded-lg font-bold text-lg">
            {loading ? <LoadingSpinner size={40} /> : "Update Patient"}
          </button>
        </form>
      )}
    </>
  );
}
