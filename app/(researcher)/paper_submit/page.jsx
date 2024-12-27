'use client'
import { useState } from "react";

export default function SubmitPaper() {
  const [formData, setFormData] = useState({
    paper_id: "",
    paper_file: "",
    title:"",
    publication_year:"",
    submitted_researcher_id: "",
    team_id: "",
    name_of_author: "",
    email: "",
    publication_option: "",
    participation_type: "",
    mobile_no: "",
    co_authors: [""],
    paper_abstract: "",
    keywords: "",
    paper_category: "",
    status:"",
    fields_of_research: [],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [file_id, setFile_id] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCoAuthorChange = (index, value) => {
    const newCoAuthors = [...formData.co_authors];
    newCoAuthors[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      co_authors: newCoAuthors,
    }));
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert("Please, upload the file.");
      return;
    }
    const formDat = new FormData();
    formDat.append('file', selectedFile);
    formDat.append('file-name', selectedFile.name);  // Add file name
    formDat.append('file-type', selectedFile.type);  // Add file type

    try {
      const response = await fetch("/api/file_upload", {
        method: 'POST',
        body: formDat,
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`File upload failed: ${errorData.error}`);
      }
      const data = await response.json();
      setFile_id(data.file_id);  // Store the file_id after upload
    } catch (error) {
      console.error('There was an error uploading the file:', error);
      setError(error.message);  // Handle error
    } finally {
      setSelectedFile(null);  // Clear the selected file after upload attempt
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const addCoAuthor = () => {
    setFormData((prevData) => ({
      ...prevData,
      co_authors: [...prevData.co_authors, ""],
    }));
  };

  const removeCoAuthor = (index) => {
    const newCoAuthors = formData.co_authors.filter((_, i) => i !== index);
    setFormData((prevData) => ({
      ...prevData,
      co_authors: newCoAuthors,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      fields_of_research: checked
        ? [...prevData.fields_of_research, value]
        : prevData.fields_of_research.filter((field) => field !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file_id) {
      setError("Please upload a file before submitting.");
      return;
    }

    setLoading(true);

    const formDataObj = {
      paper_file: file_id, 
      title: formData.title,
      publishing_year: formData.publishing_year,
      submitted_researcher_id: formData.submitted_researcher_id,
      team_id: formData.team_id,
      name_of_author: formData.name_of_author,
      email: formData.email,
      publication_option: formData.publication_option,
      participation_type: formData.participation_type,
      mobile_no: formData.mobile_no,
      co_authors: formData.co_authors,
      paper_abstract: formData.paper_abstract,
      keywords: formData.keywords,
      paper_category: formData.paper_category,
      status:"uploaded",
      fields_of_research: formData.fields_of_research,
    };

    try {
      const res = await fetch("/api/paper_submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Indicate JSON payload
        },
        body: JSON.stringify(formDataObj), // Convert the object to JSON for the request body
      });

      if (!res.ok) throw new Error("Failed to submit the paper.");

      const data = await res.json();
      setSuccess(true);
      setFormData({
        paper_id: "",
        paper_file: "",
        submitted_researcher_id: "",
        title:"",
        publishing_year: "",
        team_id: "",
        name_of_author: "",
        email: "",
        publication_option: "",
        participation_type: "",
        mobile_no: "",
        co_authors: [""],
        paper_abstract: "",
        keywords: "",
        paper_category: "",
        status: "",
        fields_of_research: [],
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mt-36"></div>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Paper Submission</h1>

        {error && <div className="text-red-500 mb-4">{error}</div>}
        {success && (
          <div className="text-green-500 mb-4">
            Paper submitted successfully! Paper ID: <strong>{formData.paper_id}</strong>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Form Fields */}
                   
         <input
         type="text"
         name="submitted_researcher_id"
         placeholder="Submitted Researcher ID"
         value={formData.submitted_researcher_id}
         onChange={handleChange}
         className="w-full p-2 border rounded"
         required
         />
         <input
         type="text"
         name="title"
         placeholder="Title of Paper"
         value={formData.title}
         onChange={handleChange}
         className="w-full p-2 border rounded"
         required
         />
         <input
         type="text"
         name="Publishing_year"
         placeholder="Publication Year"
         value={formData.publishing_year}
         onChange={handleChange}
         className="w-full p-2 border rounded"
         required
         />
         <input
         type="text"
         name="team_id"
         placeholder="Team ID"
         value={formData.team_id}
         onChange={handleChange}
         className="w-full p-2 border rounded"
         />
         <input
         type="text"
         name="name_of_author"
         placeholder="Name of Author"
         value={formData.name_of_author}
         onChange={handleChange}
         className="w-full p-2 border rounded"
         required
         />
         <input
         type="email"
         name="email"
         placeholder="Email"
         value={formData.email}
         onChange={handleChange}
         className="w-full p-2 border rounded"
         required
         />
         <select
         name="publication_option"
         value={formData.publication_option}
         onChange={handleChange}
         className="w-full p-2 border rounded"
         required
         >
         <option value="">Select Publication Option</option>
         <option value="IEEE">IEEE Conference Proceedings (IEEE)</option>
         <option value="LNEE">Lecture Notes in Electrical Engineering (LNEE)</option>
         <option value="PES">Proceedings on Engineering Sciences (PES)</option>
         <option value="JCC">Journal of Computational and Cognitive Engineering (JCC)</option>
         <option value="JIPD">Journal of Infrastructure, Policy and Development (JIPD)</option>
         </select>
         <select
         name="participation_type"
         value={formData.participation_type}
         onChange={handleChange}
         className="w-full p-2 border rounded"
         required
         >
         <option value="">Select Participation Type</option>
         <option value="student">Student</option>
         <option value="faculty">Faculty</option>
         <option value="other">Other</option>
         </select>
         <input
         type="text"
         name="mobile_no"
         placeholder="Mobile No."
         value={formData.mobile_no}
         onChange={handleChange}
         className="w-full p-2 border rounded"
         required
         />
         {formData.co_authors.map((coAuthor, index) => (
         <div key={index} className="flex space-x-2">
           <input
            type="text"
            placeholder={`Co-author ${index + 1}`}
            value={coAuthor}
            onChange={(e) => handleCoAuthorChange(index, e.target.value)}
            className="flex-grow p-2 border rounded"
          />
        <button
          type="button"
          onClick={() => removeCoAuthor(index)}
          className="px-4 bg-red-500 text-white rounded"
        >
          X
        </button>
      </div>
      ))}
      <button
      type="button"
      onClick={addCoAuthor}
      className="w-full p-2 border border-2 font-bold rounded"
      >
      Add Co-author
      </button>
      <textarea
      name="paper_abstract"
      placeholder="Paper Abstract"
      value={formData.paper_abstract}
      onChange={handleChange}
      className="w-full p-2 border rounded"
      required
      />
      <input
      type="text"
      name="keywords"
      placeholder="Keywords (comma separated)"
      value={formData.keywords}
      onChange={handleChange}
      className="w-full p-2 border rounded"
      required
      />
      <select
      name="paper_category"
      value={formData.paper_category}
      onChange={handleChange}
      className="w-full p-2 border rounded"
      required
      >
      <option value="">Select Paper Category</option>
      <option value="original_research">Original Research</option>
      <option value="review_paper">Review Paper</option>
      <option value="case_study">Case Study</option>
      <option value="short_communication">Short Communication</option>
      <option value="other">Other</option>
      </select>
      <div className="space-y-2">
      <p className="font-bold">Fields of Research:</p>
      {['Artificial Intelligence', 'Data Science', 'Mathematical Sciences', 'Physics', 'Engineering', 'Social Sciences', 'Other'].map((field) => (
        <label key={field} className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="fields_of_research"
            value={field}
            checked={formData.fields_of_research.includes(field)}
            onChange={handleCheckboxChange}
            className="form-checkbox"
          />
          <span>{field}</span>
        </label>
      ))}
      </div>
          {/* More form fields here ... */}

          {/* File Upload Section */}
          <div className="file-upload">
            <input type="file" onChange={handleFileChange} />
            <button type="button" onClick={handleFileUpload}>
              {file_id ? "File Uploaded" : "Upload File"}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading || !file_id}
            className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
          >
            {loading ? "Submitting..." : "Submit Paper"}
          </button>
        </form>
      </div>
    </>
  );
}

