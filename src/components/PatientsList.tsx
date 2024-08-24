import {usePatientStore} from '../store/store';
import {PatientDetails} from './PatientDetails';
export const PatientsList = () => {
  const patients = usePatientStore(state => state.patients);
  console.log('patients', patients);
  return (
    <div
      className={`md:w-1/2 lg:w-3/5 md:max-h-screen  
         ${patients.length ? 'overflow-y-scroll' : ''}`}
    >
      {patients.length ? (
        <>
          <h2 className="font-black text-center text-3xl text-cyan-600">
            List of Patients
          </h2>
          <p className="text-xl mt-5 text-center font-bold">
            {' '}
            Manage your <span className="text-cyan-600">Patient</span> and
            {''}
            <span className="text-cyan-600"> Appointments</span>
          </p>
          {patients.map(patient => (
            <PatientDetails key={patient.id} patient={patient} />
          ))}
        </>
      ) : (
        <>
          {' '}
          <h2 className="font-black text-2xl bg-red-600 text-center text-white p-2 rounded-lg mx-1 ">
            Not Patients Yet
          </h2>
          <p className="text-xl mt-10 text-center mb-10 leading-10 ">
            {' '}
            <span className="bg-cyan-700 text-white p-2 rounded-lg font-bold ">
              Add new patients
            </span>{' '}
            and show them right here{' '}
          </p>
        </>
      )}
    </div>
  );
};
