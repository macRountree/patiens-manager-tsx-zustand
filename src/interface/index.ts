export interface Patient {
  id: string;
  name: string;
  email: string;
  date: Date;
  symptoms: string;
}
//*when create a new patient, id is generated automatically

export type DraftPatient = Omit<Patient, 'id'>;
