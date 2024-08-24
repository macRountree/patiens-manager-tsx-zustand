import {toast} from 'react-toastify';
import {Patient} from '../interface';
import {usePatientStore} from '../store/store';
import {PatientDetailItem} from './PatientDetailItem';

interface PatientDetailsProps {
  patient: Patient;
}

export const PatientDetails = ({patient}: PatientDetailsProps) => {
  const deletePatient = usePatientStore(state => state.deletePatient);
  const handleClickDelete = () => {
    deletePatient(patient.id);
    toast.error('Patient Deleted Successfully');
  };
  const getPatientById = usePatientStore(state => state.getPatientById);
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl ">
      <PatientDetailItem label="ID" data={patient.id} />
      <PatientDetailItem label="Name" data={patient.name} />
      <PatientDetailItem label="Email" data={patient.email} />
      <PatientDetailItem label="Date" data={patient.date.toString()} />
      <PatientDetailItem label="Symptoms" data={patient.symptoms} />
      {/* Edit, Delete Buttons */}

      <div className="lg:flex-row lg:justify-between gap-3 mt-5 flex flex-col ">
        <button
          className="py-2 px-10 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-lg uppercase"
          type="button"
          onClick={() => getPatientById(patient.id)}
        >
          Edit
        </button>
        <button
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg uppercase transition-colors"
          type="button"
          onClick={handleClickDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
