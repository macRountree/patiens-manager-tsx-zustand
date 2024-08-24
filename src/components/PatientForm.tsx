import {useForm} from 'react-hook-form';
import {HandleError} from './HandleError';
import {DraftPatient} from '../interface';
import {usePatientStore} from '../store/store';
export default function PatientForm() {
  const addPatient = usePatientStore(state => state.addPatient); //*addPatient is the function that will be used to add a new patient

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<DraftPatient>(); //* DraftPatient is the type of data that will be sent
  const registerPatient = (data: DraftPatient) => {
    addPatient(data);
    reset();
    console.log('registerPatient', data);
  };
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Add Patients and Monitoring
      </h2>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(registerPatient)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Patient
          </label>
          <input
            id="name"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Nombre del Paciente"
            {...register('name', {
              required: 'Name must be required',
              // maxLength: {
              //   value: 8,
              //   message: 'Name must be less than 8 characters',
              // },
            })} //*
          />
          {errors.name && <HandleError>{errors.name?.message}</HandleError>}
          {/* {errors.maxLength && (
            <HandleError>{errors.maxLength?.message}</HandleError>
          )} */}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3  border border-gray-100"
            type="email"
            placeholder="Email"
            {...register('email', {
              required: 'El Email es Obligatorio',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <HandleError>{errors.email?.message}</HandleError>}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Discharge Date
          </label>
          <input
            id="date"
            className="w-full p-3  border border-gray-100"
            type="date"
            {...register('date', {required: 'Date must be required'})}
          />
          {errors.date && <HandleError>{errors.date?.message}</HandleError>}
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Symptoms
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3  border border-gray-100"
            placeholder="Symptoms"
            {...register('symptoms', {required: 'symptoms must be required'})}
          />
          {errors.symptoms && (
            <HandleError>{errors.symptoms?.message}</HandleError>
          )}
        </div>

        <input
          type="submit"
          className="bg-cyan-600 w-full p-3 text-white uppercase font-bold hover:bg-cyan-700 cursor-pointer transition-colors rounded-lg "
          value="Save"
        />
      </form>
    </div>
  );
}
