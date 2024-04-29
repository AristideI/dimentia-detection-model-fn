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
  profilePic: string;
  password: string;
}

export interface UserResDto {
  id: string;
  names: string;
  phone: string;
  email: string;
  token: string;
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
  educationLevel: string;
  dominantHand: string;
  familyHistory: string;
  smokingStatus: string;
  APOE_ε4: string;
  physicalActivity: string;
  depressionStatus: string;
  cognitiveTestScores: number;
  medicationHistory: string;
  nutritionDiet: string;
  sleepQuality: string;
  chronicHealthConditions: string;
  dementia: boolean;
  prescription: string;
  dosage: number;
  patientNid: string;
  doctorEmail: string;
}

export interface RecordReqDto {
  diabetic: boolean;
  alcoholLevel: number;
  heartRate: number;
  bloodOxygenLevel: number;
  bodyTemperature: number;
  weight: number;
  MRI_Delay: number;
  educationLevel: string;
  dominantHand: string;
  familyHistory: string;
  smokingStatus: string;
  APOE_ε4: string;
  physicalActivity: string;
  depressionStatus: string;
  cognitiveTestScores: number;
  medicationHistory: string;
  nutritionDiet: string;
  sleepQuality: string;
  chronicHealthConditions: string;
  patientNid: string;
  doctorEmail: string;
}
