'use client'

import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

// ** Third Party
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

// ** Component
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


type Variant = "LOGIN" | "REGISTER"

export const AuthForm = () => {
  const router = useRouter()
  const [variant, setVariant] = useState<Variant>('LOGIN')
  const [isLoading, setIsLoading] = useState(false)

//   useEffect(() => {
//     if(session?.status === 'authenticated') {
//       router.push("/dashboard")
//     }
//   }, [session?.status])
  

  const toggleVariant = useCallback(
    () => {
      if(variant === "LOGIN") {
        setVariant('REGISTER')
      }else {
        setVariant('LOGIN');
      }
    },
    [variant],
  )

  const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = async(data) => {
    setIsLoading(true);

    if(variant === "REGISTER"){
      try {
       
      } catch (error) {
        // toast.error("Something went wrong!!!")
      } finally {
        
        setIsLoading(false);
      }
    }  

    if(variant === "LOGIN"){
      // Next Signin
      try {

      } catch (error) {
        // toast.error("Something went wrong!!!")
      } finally{
        setIsLoading(false);
      }
      
    }  
  }
  
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Inputs */}
          {
            variant === "REGISTER" && (
              <Input id="name" label="Name"    register={register} errors={errors} disabled={isLoading} />
            )
          }
          <Input id="email"  label="Email address"  register={register} errors={errors} disabled={isLoading} />
          <Input id="password"  label="Password" type="password"  register={register} errors={errors} disabled={isLoading} />
          {/* ==== Submit Button === */}
          <div>
            <Button
              disabled={isLoading}
              type="submit"
              className="w-full"
            >
              {variant === "LOGIN" ? 'Sign in' : 'Register'}
            </Button>
          </div>
        </form>
        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          <div>
            {variant === "LOGIN" ? 'New to Clepher?' : 'Already have an account?'}
          </div>
          <div className="underline cursor-pointer" onClick={toggleVariant}>
            {variant === "LOGIN" ? 'Sign up?' : 'Sign in'}
          </div>
        </div>
      </div>
    </div>
  )
}