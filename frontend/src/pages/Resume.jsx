import React, { useState } from "react";
import axios from "axios";

export default function Resume() {
  const [file, setFile] = useState(null);
  const [parsedText, setParsedText] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await axios.post("http://localhost:5001/api/resume/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setParsedText(res.data.text);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div className="flex flex-col items-center mt-16">
      <h1 className="text-2xl font-bold text-orange-800 mb-4">Post Your Resume</h1>
      <form onSubmit={handleUpload} className="flex flex-col items-center">
        <input
          type="file"
          className="mb-4 border p-2 rounded-md"
          accept=".pdf"
          onChange={handleFileChange}
        />
        <button className="bg-orange-700 text-white px-6 py-2 rounded-md hover:bg-orange-800">
          Upload Resume
        </button>
      </form>

      {parsedText && (
        <div className="mt-6 p-4 border rounded-md w-2/3 bg-gray-50">
          <h2 className="font-bold mb-2">Extracted Resume Text:</h2>
          <pre className="whitespace-pre-wrap text-sm">{parsedText}</pre>
        </div>
      )}
    </div>
  );
}
