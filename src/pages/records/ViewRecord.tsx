import { useGetRecordById } from "../../hooks/useGetPatientRecords";
import { useGetOnePatient } from "../../hooks/useGetPatients";
import { useGetOneDoctor } from "../../hooks/useGetDoctor";
import { useParams } from "react-router";
import html2pdf from "html2pdf.js";
import { useRef } from "react";
import dayjs from "dayjs";

export default function ViewRecord() {
  const patientId = useParams().id;
  const recordId = useParams().recordId;

  const { patient } = useGetOnePatient(`${patientId}`);
  const { record } = useGetRecordById(`${recordId}`);
  const { doctor } = useGetOneDoctor(`${record?.doctor_email}`);
  const contentRef = useRef(null);

  const convertToPdf = () => {
    const content = contentRef.current;

    const options = {
      filename: `${patient?.firstName} ${patient?.lastName} ${dayjs(
        record?.created_at
      ).format("YYYY-MM-DD HH:mm")}.pdf`,
      margin: 1,
      image: { type: "jpeg", quality: 0.98 },
      jsPDF: {
        unit: "em",
        format: "a4",
        orientation: "l",
      },
    };

    html2pdf().set(options).from(content).save();
  };

  
  return (
    <>
      <section className="flex justify-end items-center px-10 mb-10">
        <button
          className="font-bold text-primary-100 bg-primary-400 px-8 py-2 rounded-md"
          onClick={convertToPdf}
        >
          Download Record
        </button>
      </section>
      <article className="flex flex-col gap-6" ref={contentRef}>
        <section>
        <img src="/logow.png" className="w-60" alt="" />
          <h1 className="text-3xl font-semibold text-dark text-center">
            Patient Record Details
          </h1>
        </section>
        <section className="flex gap-6 md:flex-row flex-col">
          <section className="w-1/2 bg-primary-200 px-8 py-3">
            <h2 className="text-2xl font-semibold text-dark">
              Patient Details
            </h2>
            <div>
              <h3>First Name: {patient?.firstName}</h3>
              <h3>Last Name: {patient?.lastName}</h3>
              <h3>Patient NID: {patient?.nid}</h3>
              <h3>Phone: {patient?.phone}</h3>
            </div>
          </section>
          <section className="w-1/2 bg-primary-300/15 px-8 py-3">
            <h2 className="text-2xl font-semibold text-dark">Doctor Details</h2>
            <div>
              <h3>First Name: {doctor?.firstName}</h3>
              <h3>Last Name: {doctor?.lastName}</h3>
              <h3>Phone: {doctor?.phone}</h3>
              <h3>Email: {doctor?.email}</h3>
            </div>
          </section>
        </section>
        <table className="min-w-full divide-y divide-primary-400">
          <thead className="bg-primary-300 text-dark text-bold">
            <tr>
              <th scope="col" className="px-5 py-3.5 text-left">
                Test
              </th>

              <th scope="col" className="px-16 py-3.5 text-left">
                Value
              </th>
            </tr>
          </thead>
          <tbody className="bg-primary-300/35 divide-y font-medium">
            {record &&
              Object.entries(record)
                .filter(
                  ([key]) =>
                    key !== "id" &&
                    key !== "doctor_email" &&
                    key !== "patient_nid"
                )
                .map(([key, value], ind) => (
                  <tr
                    key={key}
                    className={`${ind % 2 !== 0 ? "" : "bg-primary-200"}`}
                  >
                    <td className="px-4 py-2 whitespace-nowrap">
                      <div>
                        <p className="">{key}</p>
                      </div>
                    </td>
                    <td className="px-12 py-2 whitespace-nowrap">
                      <>
                        {key === "dementia" ? (
                          <div className="inline px-3 py-1">
                            {value ? "Yes" : "No"}
                          </div>
                        ) : key === "created_at" ? (
                          <div className="inline px-3 py-1">
                            {dayjs(value).format("YYYY-MM-DD HH:mm:ss")}
                          </div>
                        ) : key === "dosage" && value ? (
                          <div className="inline px-3 py-1">
                            {parseFloat(value).toFixed(3)} g
                          </div>
                        ) : (
                          <div className="inline px-3 py-1">{value}</div>
                        )}
                      </>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </article>
    </>
  );
}
