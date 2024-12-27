'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [researchPapers, setResearchPapers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("year");
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from OpenAlex API
    const fetchPapers = async () => {
      try {
        const response = await fetch("https://api.openalex.org/works?search=AI");
        if (!response.ok) {
          throw new Error("Failed to fetch research papers");
        }
        const data = await response.json();
        setResearchPapers(data.results || []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPapers();
  }, []);

  const filteredPapers = researchPapers
    .filter((paper) =>
      paper.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.abstract?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOption === "year"
        ? b.publication_year - a.publication_year
        : a.title?.localeCompare(b.title)
    );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (loading) {
    return <div className="text-center mt-20 text-lg">Loading research papers...</div>;
  }

  if (error) {
    return <div className="text-center mt-20 text-lg text-red-500">Error: {error}</div>;
  }

  return (
    <div className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"} min-h-screen`}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center "
      style={{
        backgroundImage: "url('/images/book1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      >
        <Image src="/placeholder.svg" alt="Hero Image" layout="fill" objectFit="cover" className="opacity-20" />
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to Research Connect</h1>
          <p className="text-xl mb-6">Discover groundbreaking research and innovations</p>
          
        </div>
      </section>

      {/* Research List Section */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Search papers by title or abstract..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`${
              isDarkMode
                ? "w-3/5 px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded-lg"
                : "w-3/5 px-4 py-2 text-black bg-white border border-gray-300 rounded-lg"
            }`}
          />
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className={`${
              isDarkMode
                ? "px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded-lg"
                : "px-4 py-2 text-black bg-white border border-gray-300 rounded-lg"
            }`}
          >
            <option value="year">Sort by Year</option>
            <option value="title">Sort by Title</option>
          </select>
          <button
            onClick={toggleDarkMode}
            className="px-6 py-2 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

              <div className="grid grid-cols-1 gap-6">
        {filteredPapers.map((paper) => (
          <div
            key={paper.id}
            className={`hover:cursor-pointer p-6 rounded-lg transform transition-transform duration-300 ${
              isDarkMode
                ? "bg-gray-800 border border-gray-700 hover:scale-105 hover:bg-gray-700"
                : "bg-white border border-gray-300 shadow-md hover:scale-105 hover:bg-blue-100"
            }`}
            onClick={() => setSelectedPaper(paper)}
          >
            <h3 className="text-xl font-bold mb-2">{paper.title}</h3>
            <p className="text-sm text-gray-500 mb-4">
              {paper.authorships?.[0]?.author?.display_name || "Unknown Author"} -{" "}
              {paper.publication_year || "N/A"}
            </p>
            <p
              className="text-gray-700 mb-4 cursor-pointer"
              
            >
              {paper.doi || "No abstract available"}
            </p>
            <button
              className="px-4 py-2 text-sm font-bold text-white bg-blue-600 rounded-lg transition-all duration-300 transform hover:bg-blue-800 hover:scale-110"
              onClick={() => setSelectedPaper(paper)}
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      </section>

      {/* Modal for Selected Paper Details */}
      {selectedPaper && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div
            className={`p-6 rounded-lg   ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          >
            <h2 className="text-2xl font-bold mb-4">{selectedPaper.title}</h2>
            <p className="text-sm text-gray-500 mb-4">
              {selectedPaper.authorships?.[0]?.author?.display_name || "Unknown Author"} -{" "}
              {selectedPaper.publication_year || "N/A"}
            </p>
            <p className="mb-4">
              Type: {selectedPaper.type || "N/A"}
            </p>
            <p className="mb-4">
              DOI: {selectedPaper.doi ? (
                <a href={selectedPaper.doi} className="text-blue-400" target="_blank" rel="noopener noreferrer">
                  {selectedPaper.doi}
                </a>
              ) : (
                "No available DOI"
              )}
            </p>
            <p className="mb-4">Citations: {selectedPaper.cited_by_count || "0"}</p>
            
            {/* Display topics covered */}
            <p className="mb-4">Topics Covered: 
              {selectedPaper.topics?.map(topic => topic.display_name).join(", ") || "None"}
            </p>

            {/* Impact and Relevance */}
            <p className="mb-4">Impact and Relevance: 
              Cited in top {Math.round(selectedPaper.citation_normalized_percentile.value * 100)}% of papers.
            </p>

            {/* Research Contributions */}
            <p className="mb-4">Research Contributions: 
              This work contributes to the field of {selectedPaper.primary_topic?.display_name || 'N/A'}.
            </p>

            {/* Author's Affiliations */}
            <p className="mb-4">Author's Affiliations: 
              {selectedPaper.authorships?.[0]?.institutions?.map(inst => inst.display_name).join(", ") || "Unknown"}
            </p>

            <button
              className="px-4 py-2 text-sm font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              onClick={() => setSelectedPaper(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

