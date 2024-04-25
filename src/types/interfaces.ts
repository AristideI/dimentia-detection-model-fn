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
  isAdmin: boolean;
  password: string;
}

export interface UserResDto {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  isAdmin: boolean;
}

export interface PatientDto {
  id: string;
  nid: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  dob: string;
}

export interface Record {
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
  doctorId: string;
}
