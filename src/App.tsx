import { ToastContainer } from 'react-toastify';
import PatientForm from './components/PatientForm';
import PatientsList from './components/PatientsList';
import 'react-toastify/ReactToastify.css';

function App() {
  return (
    <div className='relative'>
      <div className="absolute inset-0 bg-[url('./assets/animals.jpg')] bg-center bg-contain bg-no-repeat opacity-20 pointer-events-none"></div>

      <div className='relative'>
        <div className='container mx-auto mt-20'>
          <h1 className='font-black text-5xl text-center md:w-2/3 md:mx-auto'>
            <p className='text-2xl text-indigo-700 text-center sm:1/6'>By Ariel F.G. Developer Full Stack</p>
            Seguimiento de Pacientes {''}
            <span className='text-green-700'>Veterinaria</span>
          </h1>

          <div className='mt-12 md:flex'>
            <PatientForm />
            <PatientsList />
          </div>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
