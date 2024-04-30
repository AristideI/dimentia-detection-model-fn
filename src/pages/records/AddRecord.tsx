import { useForm } from "react-hook-form";
import { LoginResDto, RecordReqDto } from "../../types/interfaces";
import { useState } from "react";
import AddPatientRecord from "../../utils/addRecord";
import { useNavigate, useParams } from "react-router";

export default function AddRecord() {
  const patientId = useParams().id;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<RecordReqDto>();
  const user = JSON.parse(
    localStorage.getItem("user") as string
  ) as LoginResDto;
  const onSubmit = async (data: RecordReqDto) => {
    setIsSubmitting(true);

    data.patient_nid = `${patientId}`;
    data.doctor_email = user.email;
    data.alcoholLevel = Number(data.alcoholLevel);
    data.heartRate = Number(data.heartRate);
    data.bloodOxygenLevel = Number(data.bloodOxygenLevel);
    data.bodyTemperature = Number(data.bodyTemperature);
    data.weight = Number(data.weight);
    data.MRI_Delay = Number(data.MRI_Delay);
    data.cognitive_Test_Scores = Number(data.cognitive_Test_Scores);

    const result = await AddPatientRecord(data);
    setIsSubmitting(false);

    navigate(`/patients/${result.patient_nid}/${result.id}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center w-full md:w-2/3 gap-12 mt-12"
    >
      <div className="w-full">
        <p className="text-left text-2xl font-bold">Biomedical Data</p>
      </div>
      <div className="flex gap-6 w-full">
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Diabetic
          <select
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("diabetic", { required: true })}
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </label>
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Alcohol Level
          <input
            type="number"
            placeholder="Alcohol Level"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("alcoholLevel", { required: true })}
            step={0.00001}
          />
        </label>
      </div>
      <div className="flex gap-6 w-full">
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Heart Rate
          <input
            type="number"
            placeholder="Heart Rate"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("heartRate", { required: true })}
            step={0.00001}
          />
        </label>
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Blood Oxygen Level
          <input
            type="number"
            placeholder="Blood Oxygen Level"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("bloodOxygenLevel", { required: true })}
            step={0.00001}
          />
        </label>
      </div>
      <div className="flex gap-6 w-full">
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Body Temperature
          <input
            type="number"
            placeholder="Body Temperature"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("bodyTemperature", { required: true })}
            step={0.00001}
          />
        </label>
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Weight
          <input
            type="number"
            placeholder="Weight"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("weight", { required: true })}
            step={0.00001}
          />
        </label>
      </div>
      <div className="flex gap-6 w-full">
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          MRI Delay
          <input
            type="number"
            placeholder="MRI Delay"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("MRI_Delay", { required: true })}
            step={0.00001}
          />
        </label>
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Chronic Health Conditions
          <select
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("chronic_Health_Conditions", { required: true })}
          >
            <option value="nan">No Disease</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Heart Disease">Heart Disease</option>
            <option value="Hypertension">Hypertension</option>
          </select>
        </label>
      </div>
      <div className="w-full">
        <p className="text-left text-2xl font-bold">Demographic Data</p>
      </div>
      <div className="flex gap-6 w-full">
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Dominant Hand
          <select
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("dominant_Hand", { required: true })}
          >
            <option value="Right">Right</option>
            <option value="Left">Left</option>
          </select>
        </label>
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Family History
          <select
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("family_History", { required: true })}
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </label>
      </div>
      <div className="flex gap-6 w-full">
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Smoking Status
          <select
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("smoking_Status", { required: true })}
          >
            <option value="Never Smoked">Never Smoked</option>
            <option value="Current Smoker">Current Smoker</option>
            <option value="Former Smoker">Former Smoker</option>
          </select>
        </label>
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          APOE_ε4
          <select
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("APOE_ε4", { required: true })}
          >
            <option value="Negative">Negative</option>
            <option value="Positive">Positive</option>
          </select>
        </label>
      </div>
      <div className="flex gap-6 w-full">
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Physical Activity
          <select
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("physical_Activity", { required: true })}
          >
            <option value="Mild Activity">Mild Activity</option>
            <option value="Moderate Activity">Moderate Activity</option>
            <option value="Sedentary">Sedentary</option>
          </select>
        </label>
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Depression Status
          <select
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("depression_Status", { required: true })}
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </label>
      </div>
      <div className="flex gap-6 w-full">
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Cognitive Test Scores
          <select
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("cognitive_Test_Scores", { required: true })}
          >
            {Array.from(Array(11).keys()).map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Medication History
          <select
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("medication_History", { required: true })}
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </label>
      </div>
      <div className="flex gap-6 w-full">
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Nutrition Diet
          <select
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("nutrition_Diet", { required: true })}
          >
            <option value="Balanced Diet">Balanced Diet</option>
            <option value="Low-Carb Diet">Low-Carb Diet</option>
            <option value="Mediterranean Diet">Mediterranean Diet</option>
          </select>
        </label>
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Sleep Quality
          <select
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("sleep_Quality", { required: true })}
          >
            <option value="Good">Good</option>
            <option value="Poor">Poor</option>
          </select>
        </label>
      </div>
      <div className="flex gap-6 w-full">
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Education Level
          <select
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("education_Level", { required: true })}
          >
            <option value="No School">No School</option>
            <option value="Primary School">Primary School</option>
            <option value="Secondary School">Secondary School</option>
            <option value="Diploma/Degree">Diploma/Degree</option>
          </select>
        </label>
      </div>

      {isSubmitting && (
        <button
          type="button"
          className="bg-primary-400 text-primary-100 py-2 w-full rounded-lg font-bold text-lg"
        >
          Submiting...
        </button>
      )}

      {!isSubmitting && (
        <button className="bg-primary-400 text-primary-100 py-2 w-full rounded-lg font-bold text-lg">
          Test
        </button>
      )}
    </form>
  );
}
