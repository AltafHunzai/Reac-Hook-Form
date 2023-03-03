import './App.css';
import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className="bg-zinc-800">
      <div className=' grid place-items-center py-10'>
        <h1 className='text-3xl text-white font-medium text-center'><span className='text-green-500 block font-bold mb-3'>Sign up</span> form using <span className="text-green-500">React</span> Hook Form</h1>
        <div className="mt-10 w-10/12 sm:w-7/12 md:w-5/12">
          <form onSubmit={handleSubmit((data) => { console.log(data) })} className='bg-slate-700 rounded-md p-5 mx-auto'>
            <div className="mt-3">
              <label className='block text-white mb-2' htmlFor="fullName">Full Name</label>
              <input {...register('fullName', { required: true, })} name='fullName' className='block text-slate-200 w-full mb-1 p-1 sm:p-2 text-lg rounded-sm bg-zinc-900 border-none' type="text" placeholder='Jhon Doe' />
              {errors.fullName && <span className='text-red-600'>Please enter your details</span>}
            </div>

            <div className="mt-3">
              <label className='block text-white mb-2' htmlFor="email">Email Address</label>
              <input {...register('email', { required: true, })} name='email' className='block text-slate-200 w-full mb-1 p-1 sm:p-2 text-lg rounded-sm bg-zinc-900 border-none' type="email" placeholder='example@gmail.com' />
              {errors.email && <span className='text-red-600'>Please enter your details</span>}
            </div>
            <div className="mt-3">
              <label className='block text-white mb-2' htmlFor="password">Password</label>
              <input {...register('password', { required: true, })} name='password' className='block text-slate-200 w-full mb-1 p-1 sm:p-2 text-lg rounded-sm bg-zinc-900 border-none' type="password" placeholder='chuy76366*gU%' />
              {errors.password && <span className='text-red-600'>Please enter your details</span>}
            </div>
            <div className="mt-3">
              <label className='block text-white mb-2' htmlFor="confirmPassword">Confirm Password</label>
              <input {...register('confirmPassowrd', { required: true, })} name='confirmPassowrd' className='block text-slate-200 w-full mb-1 p-1 sm:p-2 text-lg rounded-sm bg-zinc-900 border-none' type="password" placeholder='chuy76366*gU%' />
              {errors.confirmPassowrd && <span className='text-red-600'>Please enter your details</span>}
            </div>
            <div className="mt-5">
              <button type='submit' className="p-2 text-lg text-white font-medium bg-cyan-600 hover:bg-cyan-700 rounded-sm w-full">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
