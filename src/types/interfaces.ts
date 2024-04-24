export interface Admin {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  isAdmin: boolean;
  password: string;
}

export interface Doctor {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  hospital: string;
  isAdmin: boolean;
  password: string;
}

export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  dob: string;
  NID: string;
}

export interface Record {
  id: string;
  patientNames: string; // added
  doctorNames: string; // added
  hospital: string; // added
  Diabetic: boolean;
  AlcoholLevel: number;
  HeartRate: number;
  BloodOxygenLevel: number;
  BodyTemperature: number;
  Weight: number;
  MRI_Delay: number;
  Age: number;
  Education_Level: string;
  Dominant_hand: string;
  gender: string;
  Family_History: string;
  Smoking_Status: string;
  APOE_ε4: string;
  Physical_Activity: string;
  Depression_Status: string;
  Cognitive_Test_Scores: string;
  Medication_History: string;
  Nutrition_Diet: string;
  Sleep_Quality: string;
  Chronic_Health_Conditions: string;
  Dementia: string;
  Prescription: string;
  Dosage_in_mg: number;
}
