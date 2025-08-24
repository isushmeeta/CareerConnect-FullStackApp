import React, { useState } from "react";

function PostJob() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    city: "",
    description: "",
    salary: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5001/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Job Posted:", data);
      alert("Job Posted Successfully!");

      // Clear form
      setFormData({
        title: "",
        company: "",
        city: "",
        description: "",
        salary: "",
      });
    } else {
      const errorData = await response.json();
      alert("Failed to post job: " + errorData.error);
    }
  } catch (error) {
    console.error("Error posting job:", error);
    alert("Something went wrong while posting the job.");
  }
};


  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-1 text-gray-900 dark:text-gray-100 text-center">Post a Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1 text-gray-900 dark:text-gray-100">Job Title</label>
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
          <label className="block font-medium mb-1 text-gray-900 dark:text-gray-100">Company</label>
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
          <label className="block font-medium mb-1 text-gray-900 dark:text-gray-100">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
            placeholder="e.g. Dhaka"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-900 dark:text-gray-100">Salary</label>
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            placeholder="e.g. 50,000 BDT/month"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-900 dark:text-gray-100">Job Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            required
            className="w-full border px-4 py-2 rounded"
            placeholder="Describe the job responsibilities and qualifications"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700"
        >
          Post Job
        </button>
      </form>
    </div>
  );
}

export default PostJob;