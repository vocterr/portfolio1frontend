import { User } from '@/types';
import { editUser } from '@/utils/editUser';
import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export const FormUserPage = ({ user, setUser }: { user: User, setUser: Dispatch<SetStateAction<User>> }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [repeatPassword, setRepeatPassword] = useState("");
    const [profilePicture, setProfilePicture] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [statusMessage, setStatusMessage] = useState<{ success: Boolean, message: string } | null>(null);

    const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            setProfilePicture(file);
            const reader = new FileReader();
            reader.onload = () => setPreviewImage(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (user.password !== repeatPassword) {
            setStatusMessage({ success: false, message: "Passwords do not match!" });
            return;
        }

        const formData = new FormData();
        formData.append("name", user.name);
        formData.append("email", user.email);
        formData.append("password", user.password);
        if (profilePicture) {
            formData.append("image", profilePicture);
        }

        const result = await editUser(formData);
        setStatusMessage({ success: result?.success || false, message: result?.message || "Error updating profile." });
    };

    return (
        <form className='flex flex-col mt-6' onSubmit={(e) => handleSubmit(e)}>
            {/* User Name */}
            <label htmlFor="name" className='formLabel'>User's Name</label>
            <input
                className='formInput'
                value={user.name}
                onChange={(e) => setUser((prev) => ({ ...prev, name: e.target.value }))}
            />

            {/* User Email */}
            <label htmlFor="email" className='formLabel mt-3'>User's Email</label>
            <input
                className='formInput'
                value={user.email}
                onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}
            />

            {/* User Password */}
            <label htmlFor="password" className='formLabel mt-3'>User's Password</label>
            <div className='flex items-center justify-between formInput'>
                <input
                    className='bg-transparent focus:outline-none'
                    type={isPasswordVisible ? "text" : "password"}
                    value={user.password}
                    onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
                />
                {isPasswordVisible ? (
                    <FiEye onClick={() => setIsPasswordVisible(false)} />
                ) : (
                    <FiEyeOff onClick={() => setIsPasswordVisible(true)} />
                )}
            </div>

            {/* Repeat Password */}
            <label htmlFor="repeatPassword" className='formLabel mt-3'>Repeat Your Password</label>
            <div className='flex items-center justify-between formInput'>
                <input
                    className='bg-transparent focus:outline-none'
                    type={isPasswordVisible ? "text" : "password"}
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                />
                {isPasswordVisible ? (
                    <FiEye onClick={() => setIsPasswordVisible(false)} />
                ) : (
                    <FiEyeOff onClick={() => setIsPasswordVisible(true)} />
                )}
            </div>

            {/* Profile Picture Upload */}
            <label htmlFor="profilePicture" className='formLabel mt-3'>Profile Picture</label>
            <div className='flex items-center space-x-4'>
                <input
                    type="file"
                    accept="image/*"
                    id="profilePicture"
                    onChange={handleProfilePictureChange}
                    className='w-[70%]'
                />
                {previewImage && (
                    <img
                        src={previewImage}
                        alt="Preview"
                        className="w-16 h-16 rounded-full object-cover border border-gray-300"
                    />
                )}
            </div>

            {/* Status Message */}
            {statusMessage?.success ? (
                <p className='text-green-400 text-sm text-center mt-4'>{statusMessage.message}</p>
            ) : (
                <p className='text-red-400 text-sm text-center mt-4'>{statusMessage?.message}</p>
            )}

            {/* Submit Button */}
            <button className='submitButton relative bottom-2 mt-4'>
                Submit Changes
            </button>
        </form>
    );
};
