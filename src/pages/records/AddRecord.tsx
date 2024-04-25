// export interface Record {
//   id: string;
//   diabetic: boolean;
//   alcoholLevel: number;
//   heartRate: number;
//   bloodOxygenLevel: number;
//   bodyTemperature: number;
//   weight: number;
//   MRI_Delay: number;
//   educationLevel: string;
//   dominantHand: string;
//   familyHistory: string;
//   smokingStatus: string;
//   APOE_ε4: string;
//   physicalActivity: string;
//   depressionStatus: string;
//   cognitiveTestScores: number;
//   medicationHistory: string;
//   nutritionDiet: string;
//   sleepQuality: string;
//   chronicHealthConditions: string;
//   dementia: boolean;
//   prescription: string;
//   dosage: number;
//   patientNid: string;
//   doctorId: string;
// }

import { useForm } from "react-hook-form";
import { RecordDto } from "../../types/interfaces";

export default function AddRecord() {
  const { register, handleSubmit } = useForm<RecordDto>();
  const onSubmit = (data: RecordDto) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center w-full md:w-2/3 gap-12 mt-12"
    >
      <div className="w-full">
        <p className="text-left text-2xl font-bold">Test Patient</p>
      </div>
      <div className="flex gap-6 w-full">
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Patient National ID
          <input
            type="text"
            placeholder="Patient National ID"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("patientNid", { required: true })}
          />
        </label>
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Doctor ID
          <input
            type="text"
            placeholder="Doctor ID"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("doctorId", { required: true })}
          />
        </label>
      </div>
      <div className="flex gap-6 w-full">
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Diabetic
          <input
            type="checkbox"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("diabetic", { required: true })}
          />
        </label>
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Alcohol Level
          <input
            type="number"
            placeholder="Alcohol Level"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("alcoholLevel", { required: true })}
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
          />
        </label>
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Blood Oxygen Level
          <input
            type="number"
            placeholder="Blood Oxygen Level"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("bloodOxygenLevel", { required: true })}
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
          />
        </label>
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Weight
          <input
            type="number"
            placeholder="Weight"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("weight", { required: true })}
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
          />
        </label>
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Education Level
          <input
            type="text"
            placeholder="Education Level"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("educationLevel", { required: true })}
          />
        </label>
      </div>
      <div className="flex gap-6 w-full">
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Dominant Hand
          <input
            type="text"
            placeholder="Dominant Hand"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("dominantHand", { required: true })}
          />
        </label>
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Family History
          <input
            type="text"
            placeholder="Family History"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("familyHistory", { required: true })}
          />
        </label>
      </div>
      <div className="flex gap-6 w-full">
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Smoking Status
          <input
            type="text"
            placeholder="Smoking Status"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("smokingStatus", { required: true })}
          />
        </label>
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          APOE_ε4
          <input
            type="text"
            placeholder="APOE_ε4"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("APOE_ε4", { required: true })}
          />
        </label>
      </div>
      <div className="flex gap-6 w-full">
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Physical Activity
          <input
            type="text"
            placeholder="Physical Activity"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("physicalActivity", { required: true })}
          />
        </label>
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Depression Status
          <input
            type="text"
            placeholder="Depression Status"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("depressionStatus", { required: true })}
          />
        </label>
      </div>
      <div className="flex gap-6 w-full">
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Cognitive Test Scores
          <input
            type="number"
            placeholder="Cognitive Test Scores"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("cognitiveTestScores", { required: true })}
          />
        </label>
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Medication History
          <input
            type="text"
            placeholder="Medication History"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("medicationHistory", { required: true })}
          />
        </label>
      </div>
      <div className="flex gap-6 w-full">
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Nutrition Diet
          <input
            type="text"
            placeholder="Nutrition Diet"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("nutritionDiet", { required: true })}
          />
        </label>
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Sleep Quality
          <input
            type="text"
            placeholder="Sleep Quality"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("sleepQuality", { required: true })}
          />
        </label>
      </div>
      <div className="w-full">
        <p className="text-left text-2xl font-bold">Test Record</p>
      </div>
      <div className="flex gap-6 w-full">
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Chronic Health Conditions
          <input
            type="text"
            placeholder="Chronic Health Conditions"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("chronicHealthConditions", { required: true })}
          />
        </label>
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Dementia
          <input
            type="checkbox"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("dementia", { required: true })}
          />
        </label>
      </div>
      <div className="w-full">
        <p className="text-left text-2xl font-bold">Prescription</p>
      </div>
      <div className="flex gap-6 w-full">
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Prescription
          <input
            type="text"
            placeholder="Prescription"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("prescription", { required: true })}
          />
        </label>
        <label className="flex flex-col w-1/2 gap-1 font-medium">
          Dosage
          <input
            type="number"
            placeholder="Dosage"
            className="bg-gray-200/0 border-2 border-primary-400/35  rounded-lg py-2 px-4"
            {...register("dosage", { required: true })}
          />
        </label>
      </div>
      <button className="bg-primary-400 text-primary-100 py-2 w-full rounded-lg font-bold text-lg">
        Test
      </button>
    </form>
  );
}
