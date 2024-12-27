'use client';

import React, { useState, useEffect } from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const AdminCharts = () => {
  const [chartData, setChartData] = useState(null);
  const [chartData1, setChartData1] = useState([]); // For filtered paper results
  const [filters, setFilters] = useState({
    publication_option: "",
    participation_type: "",
    paper_category: "",
    fields_of_research: "",
    sort: "",
  });
  const [loadingFilteredData, setLoadingFilteredData] = useState(false);

  // Fetch initial chart data
  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const res = await fetch("/api/admincharts");
        const data = await res.json();
        if (data.success) {
          setChartData(data);
        }
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchChartData();
  }, []);

  // Fetch filtered paper data
  const fetchFilteredData = async () => {
    setLoadingFilteredData(true);
    try {
      // Filter out empty filters to avoid unnecessary query parameters
      const activeFilters = Object.entries(filters)
        .filter(([_, value]) => value)
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
      const query = new URLSearchParams(activeFilters).toString();
      console.log(`/api/paperfilters?${query}`); // Log API request URL
      const res = await fetch(`/api/paperfilters?${query}`);
      const data = await res.json();
      if (data.success) {
        setChartData1(data.data);
      } else {
        console.error("Error fetching filtered data:", data.message);
      }
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    } finally {
      setLoadingFilteredData(false);
    }
  };

  // Fetch filtered data whenever filters change
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchFilteredData();
    }, 300); 
    return () => clearTimeout(timeoutId); 
  }, [filters]);

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  if (!chartData) return <p>Loading charts...</p>;

  // Chart data for "Papers by Status"
  const paperStatusLabels = chartData.paperStatusCounts.map((item) => item.label || "Unknown");
  const paperStatusCounts = chartData.paperStatusCounts.map((item) => item.count);
  
  const paperStatusData = {
    labels: paperStatusLabels,
    datasets: [
      {
        label: "Papers by Status",
        data: paperStatusCounts,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  // Chart data for "Students Published vs Total Students"
  const studentsData = {
    labels: ["Published", "Not Published"],
    datasets: [
      {
        label: "Students",
        data: [
          chartData.publishedStudentCount,
          chartData.totalStudents - chartData.publishedStudentCount,
        ],
        backgroundColor: ["#4CAF50", "#F44336"],
      },
    ],
  };

  return (
    <div className="mt-40">
      <h2 className="font-bold text-2xl text-center pb-8">Admin Analytics Dashboard</h2>
      
      {/* Charts */}
      <div className="flex items-center justify-around">
        <div className="p-20" style={{ marginBottom: "30px", maxWidth: "500px" }}>
          <h3>Papers by Status</h3>
          <Pie data={paperStatusData} options={{ responsive: true }} />
        </div>
        
        <div className="px-20 p-2" style={{ marginBottom: "30px", maxWidth: "500px" }}>
          <h3>Students Published vs Total Students</h3>
          <Bar data={studentsData} options={{ responsive: true }} />
        </div>
      </div>

      {/* Filters Section */}
      <div className="filter-section grid grid-cols-2 gap-4 px-20 py-4" style={{ marginBottom: "30px" }}>
        <label className="font-medium flex flex-col">
          <span className="font-bold mb-1">Publication Option:</span>
          <select className="p-2 border rounded" name="publication_option" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="IEEE">IEEE Conference Proceedings (IEEE)</option>
            <option value="LNEE">Lecture Notes in Electrical Engineering (LNEE)</option>
            <option value="PES">Proceedings on Engineering Sciences (PES)</option>
            <option value="JCC">Journal of Computational and Cognitive Engineering (JCC)</option>
            <option value="JIPD">Journal of Infrastructure, Policy and Development (JIPD)</option>
          </select>
        </label>

        <label className="font-medium flex flex-col">
          <span className="font-bold mb-1">Participation Type:</span>
          <select className="p-2 border rounded" name="participation_type" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label className="font-medium flex flex-col">
          <span className="font-bold mb-1">Paper Category:</span>
          <select className="p-2 border rounded" name="paper_category" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="original_research">Original Research</option>
            <option value="review_paper">Review Paper</option>
            <option value="case_study">Case Study</option>
            <option value="short_communication">Short Communication</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label className="font-medium flex flex-col">
          <span className="font-bold mb-1">Fields of Research:</span>
          <input
            className="p-2 border rounded"
            type="text"
            name="fields_of_research"
            placeholder="Comma-separated"
            onChange={handleFilterChange}
          />
        </label>

        <label className="font-medium flex flex-col">
          <span className="font-bold mb-1">Sort By:</span>
          <select className="p-2 border rounded" name="sort" onChange={handleFilterChange}>
            <option value="">Default</option>
            <option value="last_month">Last Month</option>
            <option value="last_year">Last Year</option>
          </select>
        </label>
      </div>

      {/* Filtered Paper Results */}
      {loadingFilteredData ? (
        <p>Loading filtered papers...</p> 
      ) : (
        <>
          {chartData1 && chartData1.length > 0 ? (
            <div className="px-20 p-2">
              <h3 className="font-bold text-2xl text-center">Filtered Papers</h3>
              {chartData1.map((paper) => (
                <div className="px-6 py-4 border-b border-2 m-4 rounded-lg" key={paper.paper_id}>
                  <h4 className="font-bold">{paper.title}</h4>
                  <p><strong>Author:</strong> {paper.name_of_author}</p>
                  <p><strong>Year:</strong> {paper.publication_year}</p>
                  <p><strong>Reviewer:</strong> {paper.reviewer }</p>
                </div>
              ))}
            </div>
          ) : (
            !loadingFilteredData && (
              <p className="px-20">No papers found based on the selected filters.</p>
            )
          )}
        </>
      )}
    </div>
  );
};

export default AdminCharts;
