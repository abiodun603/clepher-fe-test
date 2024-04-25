import Image from 'next/image'

// ** Assets
import { Assets } from '@/assets'

// ** Components 
import { AuthForm } from './components/AuthForm'

const Auth = () => {
  return (
    <div 
      className="flex flex-col justify-center min-h-screen py-12 sm:px-6 lg;:px-8 bg-gray-100"
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image 
          alt="Logo"
          height={48}
          width={48}
          className="mx-auto"
          src={Assets.logo}
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      {/* AuthForm */}
      <AuthForm />
    </div>
  )
}

export default Auth