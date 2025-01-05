"use client";

import { loginUser } from '@/utils/loginUser';
import { registerUser } from '@/utils/registerUser';
import { validatePasswordStrength } from '@/utils/validatePasswordStrength';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi';

export const FormSignInPage = () => {
    const router = useRouter();
    const [user, setUser] = useState({name: "", email: "", password: ""});
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [passwordFeedback, setPasswordFeedback] = useState({message: "", color: ""});
    const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false);
    const [repeatPassword, setRepeatPassword] = useState("");
    const [statusMessage, setStatusMessage] = useState<string | null>(null);

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value;
        setUser((prev) => ({...prev, password}));
        setPasswordFeedback(validatePasswordStrength(password));
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const resOk = await loginUser(user.name, user.email, user.password);
        if (resOk?.success) {
            router.push("/");
        }
        else {
            setStatusMessage(resOk!.message);
        }
    }

  return (
    <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name" className='formLabel'>Your Name</label>
        <input
            className='formInput'
            value={user.name}
            onChange={(e) => setUser((prev) => ({...prev, name: e.target.value}))}
        />
        <label htmlFor="email" className='formLabel mt-3'>Your Email</label>
        <input
            className='formInput'
            value={user.email}
            onChange={(e) => setUser((prev) => ({...prev, email: e.target.value}))}
        />
        <label htmlFor="password" className='formLabel mt-3'>Your Password</label>
        <div className='flex items-center justify-between formInput'>
            <input
                className='bg-transparent focus:outline-none'
                type={isPasswordVisible ? "text" : "password"}
                value={user.password}
                onChange={(e) => handlePasswordChange(e)}
            />
            {isPasswordVisible ? (
                <FiEye onClick={() => setIsPasswordVisible(false)}/>
            ) : (
                <FiEyeOff onClick={() => setIsPasswordVisible(true)}/>
            )}
        </div>


        {statusMessage != null && (
            <p className='text-red-400 mt-4 text-sm text-center'>{statusMessage}</p>
        )}

        <button className='submitButton'>
            Sign In
        </button>
    </form>
  )
}
