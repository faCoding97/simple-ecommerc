// src/pages/Signup.jsx

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // تابع ثبت‌نام که فعلاً فقط پیام میده
  const onSubmit = (data) => {
    console.log(data);
    toast.success("🟢 Registered successfully (test only)");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create an Account
        </h2>

        {/* Name */}
        <label className="block mb-2 font-medium">Name</label>
        <input
          {...register("name", { required: "Name is required" })}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}

        {/* Email */}
        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        {/* Password */}
        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Minimum 6 characters" },
          })}
          className="w-full p-2 mb-6 border border-gray-300 rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
