import { PatientDto, RecordDto, UserResDto } from "../../types/interfaces";

const dummyDoctor: UserResDto = {
  id: "1",
  firstName: "Aristide",
  lastName: "Niyungeko",
  phone: "0781234567",
  email: "aristide@gmail.com",
  isAdmin: true,
};

const dummyPatient: PatientDto = {
  id: "1",
  firstName: "Aristide",
  lastName: "Niyungeko",
  phone: "0781234567",
  email: "aristide",
  gender: "male",
  nid: "0987654321098765",
  dob: "1990-01-01",
};

const dummyRecord: RecordDto = {
  id: "1",
  diabetic: false,
  alcoholLevel: 0,
  heartRate: 0,
  bloodOxygenLevel: 0,
  bodyTemperature: 0,
  weight: 0,
  MRI_Delay: 0,
  educationLevel: "",
  dominantHand: "",
  familyHistory: "",
  smokingStatus: "",
  APOE_ε4: "",
  physicalActivity: "",
  depressionStatus: "",
  cognitiveTestScores: 0,
  medicationHistory: "",
  nutritionDiet: "",
  sleepQuality: "",
  chronicHealthConditions: "",
  dementia: false,
  prescription: "",
  dosage: 0,
};

export default function ViewRecord() {
  return (
    <article className="flex flex-col gap-6">
      <section>
        <h1 className="text-3xl font-semibold text-dark text-center">
          Record Details
        </h1>
      </section>
      <section className="flex gap-6 md:flex-row flex-col">
        <section className="w-1/2 bg-primary-200 px-8 py-3">
          <h2 className="text-2xl font-semibold text-dark">Patient Details</h2>
          <div>
            <h3>First Name: {dummyPatient?.firstName}</h3>
            <h3>Last Name: {dummyPatient?.lastName}</h3>
            <h3>Patient NID: {dummyPatient?.nid}</h3>
            <h3>Phone: {dummyPatient?.phone}</h3>
          </div>
        </section>
        <section className="w-1/2 bg-primary-300/15 px-8 py-3">
          <h2 className="text-2xl font-semibold text-dark">Doctor Details</h2>
          <div>
            <h3>First Name: {dummyDoctor?.firstName}</h3>
            <h3>Last Name: {dummyDoctor?.lastName}</h3>
            <h3>Phone: {dummyDoctor?.phone}</h3>
            <h3>Email: {dummyDoctor?.email}</h3>
          </div>
        </section>
      </section>
      <table className="min-w-full divide-y divide-primary-400">
        <thead className="bg-primary-300 text-dark text-bold">
          <tr>
            <th scope="col" className="px-12 py-3.5 text-left">
              Test
            </th>

            <th scope="col" className="px-4 py-3.5 text-left">
              Value
            </th>
          </tr>
        </thead>
        <tbody className="bg-primary-300/35 divide-y font-medium">
          {Object.entries(dummyRecord).map(([key, value], ind) => (
            <tr
              key={key}
              className={`${ind % 2 !== 0 ? "" : "bg-primary-200"}`}
            >
              <td className="px-4 py-4whitespace-nowrap">
                <div>
                  <p className="">{key}</p>
                </div>
              </td>
              <td className="px-12 py-4whitespace-nowrap">
                <div className="inline px-3 py-1">{value}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}
