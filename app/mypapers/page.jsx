'use client';

import { useState, useEffect } from 'react';

export default function MyPapers() {
  const [papers, setPapers] = useState([]);
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [userRole, setUserRole] = useState(''); 
  const [user, setUser] = useState('');
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // Fetch papers on component load
  useEffect(() => {
    const userRol = localStorage.getItem('role');
    setUserRole(userRol || ''); // Set default role if none is found in localStorage
    const user = localStorage.getItem('user_id');
    setUser(user);

    const fetchPapers = async () => {
      const response = await fetch(`/api/getpapers?submitted_researcher_id=${user}`);
      const data = await response.json();

      if (data.success) {
        setPapers(data.papers); // Set papers from the API response
      } else {
        console.error('Failed to fetch papers', data.message);
      }
    };

    fetchPapers();
  }, []);

  // Fetch PDF for the selected paper
  const fetchPdf = async (paperId) => {
    try {
      console.log(selectedPaper);
      const response = await fetch(`/api/getfile?file_id=${selectedPaper.paper_file}`);
      const blob = await response.blob();
      const filename = response.headers.get('Content-Disposition');
      return { fileUrl: URL.createObjectURL(blob), filename };
    } catch (error) {
      console.error('Error fetching PDF:', error);
    }
  };

  const handlePaperClick = async (paper) => {
    setSelectedPaper(paper);
    if (userRole === 'reviewer') {
      setComments([]);
    }

    
    if (userRole==='reviewer'&& paper && paper.paper_id) {
      const { fileUrl } = await fetchPdf(paper.paper_id);
      setSelectedPaper(prevState => ({ ...prevState, fileUrl }));
    }
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    const comment = {
      text: newComment,
      reviewer: "You", // Placeholder reviewer name
      timestamp: new Date().toISOString(),
    };
    setComments([...comments, comment]);
    setNewComment('');
  };

  return (
    <div className='mt-16 text-black'>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-xl font-bold">My Research Papers</h1>
        </header>

        <div className={`flex ${userRole === 'researcher' ? 'flex-col' : 'flex-row'} flex-1`}>
          {/* Left Section: List of Papers */}
          {/* <div className={`${userRole === 'researcher' ? 'w-full' : 'w-1/2'} bg-white border-r overflow-y-auto`}>
            {papers.map((paper) => (
              <div
                key={paper.paper_id}
                className="p-4 cursor-pointer hover:bg-gray-100"
                onClick={() => handlePaperClick(paper)}
              >
                <h2 className="text-lg font-semibold">{paper.title}</h2>
                <p className="text-sm text-gray-500">{paper.name_of_author || "Unknown Author"}</p>
                <p className="text-sm text-gray-400">{paper.publication_option}</p>
              </div>
            ))}
          </div> */}
            <div className={` flex ${userRole === 'researcher' ? 'flex-col' : 'flex-row'} flex-1`}>
              {/* Left Section: List of Papers */}
              <div className={`${userRole === 'researcher' ? 'w-full mx-40 my-10' : ' ml-10 my-10 w-2/3'} bg-white border-r overflow-y-auto `}>
                {papers.map((paper) => (
                  <div
                    key={paper.paper_id}
                    className={`p-6 rounded-lg cursor-pointer hover:bg-gray-100 `}
                    onClick={() => handlePaperClick(paper)}
                  >
                    <h3 className="text-xl font-bold mb-2">{paper.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{paper.name_of_author || "Unknown Author"}</p>
                    <p className="text-sm text-gray-400 mb-4">{paper.publication_type}</p>
                    <button
                      className="px-4 py-2 text-sm font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                      onClick={() => handlePaperClick(paper)}
                    >
                      Read More
                    </button>
                  </div>
                ))}
              </div>
            </div>


          {/* Right Section: Paper Details and Comments (for reviewers only) */}
          {userRole === 'reviewer' && selectedPaper && (
            <div className="w-1/2 flex flex-col p-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">{selectedPaper.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{selectedPaper.name_of_author || "Unknown Author"} - {selectedPaper.publication_year}</p>
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">Document Viewer</h3>
                  {/* If available, display the paper file */}
                  {selectedPaper.fileUrl ? (
                   <iframe
                     src={selectedPaper.fileUrl} // This should now have the URL for the PDF
                     className="w-full h-96 border"
                     title="Document Viewer"
                     type="application/pdf"
                   />
                 ) : (
                   <p>No document available for preview</p>
                 )}
                </div>

                {/* Comments Section */}
                <h3 className="text-xl font-bold mb-4">Reviewer Comments</h3>
                <div className="space-y-4 mb-4">
                  {comments.map((comment, index) => (
                    <div key={index} className="p-4 bg-gray-100 rounded-lg">
                      <p className="text-gray-700">{comment.text}</p>
                      <p className="text-sm text-gray-500">- {comment.reviewer}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="flex-1 p-2 border rounded-lg"
                    placeholder="Add a comment..."
                  />
                  <button
                    onClick={handleAddComment}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
