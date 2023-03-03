import './App.css';
import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className="bg-zinc-800">

    </div>
  );
}

export default App;
