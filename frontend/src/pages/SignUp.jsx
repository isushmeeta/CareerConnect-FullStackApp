import React, { useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    date_of_birth: "",
    password: "",
  });

  const handleSignUpChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Signup Successful:", data);
        alert("Signup successful!");
      } else {
        const errorData = await response.json();
        console.error("Signup failed:", errorData);
        alert(errorData.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-1 text-gray-900 dark:text-gray-100 text-center">Sign Up</h2>

      <form onSubmit={handleSignUpSubmit} className="space-y-4">
        {/* First Name */}
        <div>
          <label className="block font-medium mb-1 text-gray-900 dark:text-gray-100">First Name</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleSignUpChange}
            required
            className="w-full border px-4 py-2 rounded"
            placeholder="John"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block font-medium mb-1 text-gray-900 dark:text-gray-100">Last Name</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleSignUpChange}
            required
            className="w-full border px-4 py-2 rounded"
            placeholder="Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1 text-gray-900 dark:text-gray-100">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleSignUpChange}
            required
            className="w-full border px-4 py-2 rounded"
            placeholder="e.g. example@mail.com"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block font-medium mb-1 text-gray-900 dark:text-gray-100">Date of Birth</label>
          <input
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleSignUpChange}
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block font-medium mb-1 text-gray-900 dark:text-gray-100">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleSignUpChange}
            required
            className="w-full border px-4 py-2 rounded"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
