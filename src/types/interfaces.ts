export interface LoginReqDto {
  email: string;
  password: string;
}

export interface LoginResDto {
  isAdmin: boolean;
  token: string;
  names: string;
}

export interface UserReqDto {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  profilePic?: string;
  password: string;
}

export interface UserResDto {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  token: string;
  profilePic?: string;
  isAdmin: boolean;
}
export interface LoginResDto {
  id: string;
  names: string;
  phone: string;
  email: string;
  token: string;
  profilePic?: string;
  isAdmin: boolean;
}

export interface PatientDto {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  gender: string;
  nid: string;
  dob: string;
}

export interface RecordDto {
  id: string;
  diabetic: boolean;
  alcoholLevel: number;
  heartRate: number;
  bloodOxygenLevel: number;
  bodyTemperature: number;
  weight: number;
  MRI_Delay: number;
  education_Level: string;
  dominant_Hand: string;
  family_History: string;
  smoking_Status: string;
  APOE_ε4: string;
  physical_Activity: string;
  depression_Status: string;
  cognitive_Test_Scores: number;
  medication_History: string;
  nutrition_Diet: string;
  sleep_Quality: string;
  chronic_Health_Conditions: string;
  dementia: boolean;
  prescription: string;
  dosage: number;
  patient_nid: string;
  doctor_email: string;
  created_at: Date;
}

export type PatientRecordsResponseDto = PatientDto & { records: RecordDto[] };

export interface RecordReqDto {
  diabetic: boolean;
  alcoholLevel: number;
  heartRate: number;
  bloodOxygenLevel: number;
  bodyTemperature: number;
  weight: number;
  MRI_Delay: number;
  education_Level: string;
  dominant_Hand: string;
  family_History: string;
  smoking_Status: string;
  APOE_ε4: string;
  physical_Activity: string;
  depression_Status: string;
  cognitive_Test_Scores: number;
  medication_History: string;
  nutrition_Diet: string;
  sleep_Quality: string;
  chronic_Health_Conditions: string;
  patient_nid: string;
  doctor_email: string;
}

export type DoctorPatientRecords = RecordDto & { patient: PatientDto };

export interface AllUserDto {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  profilePic?: string;
}

export type AdminPatientRecords = DoctorPatientRecords & {
  doctor: AllUserDto;
};
