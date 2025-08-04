{/*import React, { useState } from "react";

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
      const response = await fetch("http://localhost:5001/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Signup Successful:", data);
        alert("Signup successful!");
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Post a Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Job Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
            placeholder="e.g. Software Engineer"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
            placeholder="e.g. Google"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleSignUpChange}
            required
            className="w-full border px-4 py-2 rounded"
            placeholder="e.g. s"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Date of Birth</label>
          <input
            type="date"
            name="date"
            value={formData.date_of_birth}
            onChange={handleSignUpChange}
            className="w-full border px-4 py-2 rounded"
            placeholder="e.g. 01/11/2001"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Password</label>
          <textarea
            name="password"
            value={formData.password}
            onChange={handleSignUpChange}
            rows={4}
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
*/}
