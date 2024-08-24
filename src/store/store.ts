//*IMPORTS
import {create} from 'zustand';
import {DraftPatient, Patient} from '../interface';
import {v4 as uuidv4} from 'uuid';
interface PatientState {
  patients: Patient[];
  addPatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient['id']) => void;
}

//* id
const createPatient = (patient: DraftPatient): Patient => {
  return {
    ...patient,
    id: uuidv4(),
  };
};
//*STATE
export const usePatientStore = create<PatientState>(set => ({
  patients: [],
  addPatient: data => {
    const newPatient = createPatient(data);
    set(state => ({patients: [...state.patients, newPatient]}));
  },
  deletePatient: id => {
    set(state => ({
      patients: state.patients.filter(patient => patient.id !== id),
    }));
  },
}));

//*ACTIONS
