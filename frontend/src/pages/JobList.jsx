import React, { useEffect, useState, useCallback } from "react";
import debounce from "lodash/debounce";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    title: "",
    city: "",
  });

  // Fetch jobs from backend
  const fetchJobs = async (queryFilters) => {
    const query = new URLSearchParams(queryFilters).toString();
    const response = await fetch(`http://localhost:5001/api/job?${query}`);
    const data = await response.json();
    setJobs(data);
  };

  // Debounced fetch
  const debouncedFetchJobs = useCallback(
    debounce((queryFilters) => {
      fetchJobs(queryFilters);
    }, 500),
    []
  );

  useEffect(() => {
    debouncedFetchJobs(filters);
  }, [filters, debouncedFetchJobs]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Highlight matched text
  const highlightText = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="bg-yellow-200">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Find Jobs</h2>

      {/* Live Search Form */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          name="title"
          value={filters.title}
          onChange={handleChange}
          placeholder="Search by job title"
          className="border px-3 py-2 rounded w-1/2"
        />
        <input
          type="text"
          name="city"
          value={filters.city}
          onChange={handleChange}
          placeholder="City"
          className="border px-3 py-2 rounded w-1/2"
        />
      </div>

      {/* Job Results */}
      <div className="space-y-4">
        {jobs.length === 0 ? (
          <p className="text-gray-500">No jobs found.</p>
        ) : (
          jobs.map((job) => (
            <div
              key={job._id}
              className="border p-4 rounded shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-bold">
                {highlightText(job.title, filters.title)}
              </h3>
              <p className="text-gray-700">{job.company}</p>
              <p className="text-gray-600">
                {highlightText(job.city, filters.city)}
              </p>
              <p className="text-sm text-gray-500">{job.salary}</p>
              <p className="mt-2 text-gray-700">{job.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default JobList;
