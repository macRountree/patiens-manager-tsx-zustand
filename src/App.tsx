import PatientForm from './components/PatientForm';
import {PatientsList} from './components/PatientsList';

function App() {
  return (
    <>
      <div className="container mx-auto mt-16">
        <h1 className="text-center text-5xl md:w-2/3 md:mx-auto font-black text-cyan-600">
          Clinical Patient Monitoring System
        </h1>

        <div className="mt-12 md:flex md:gap-5">
          <PatientForm />
          <PatientsList />
        </div>
      </div>
    </>
  );
}

export default App;
