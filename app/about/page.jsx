'use client';

export default function About() {
  return (
    <div className="mt-16 text-black">
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white p-6">
        <h1 className="text-3xl font-bold">About Our Platform</h1>
      </header>

      <main
  className="flex-1 h-screen w-full"
  style={{
    backgroundImage: "url('/images/book1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
      <div className="backdrop-blur-sm">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 my-4">
          <h2 className="text-2xl font-bold mb-4">Welcome to Our Research Platform</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our platform is designed to facilitate seamless collaboration and peer review among researchers and reviewers. Whether you're a seasoned academic or an emerging scholar, our tools aim to make research accessible, interactive, and impactful.
          </p>

          <h3 className="text-xl font-bold mb-2">Key Features:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Upload and manage your research papers with ease.</li>
            <li>View the full details of your papers directly on the platform.</li>
            <li>Receive constructive feedback from reviewers to enhance your work.</li>
            <li>Seamlessly review and comment on research papers in real-time.</li>
            <li>Role-based access to maintain academic integrity.</li>
          </ul>

          <h3 className="text-xl font-bold mb-2">Who We Serve:</h3>
          <p className="text-gray-700 mb-6">
            Our platform caters to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Researchers:</strong> Manage your publications, explore insightful feedback, and collaborate with peers to advance your research.
            </li>
            <li>
              <strong>Reviewers:</strong> Contribute to the academic community by reviewing research papers and providing valuable insights.
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-2">Our Mission:</h3>
          <p className="text-gray-700 mb-6">
            We aim to bridge the gap between researchers and reviewers by fostering a collaborative environment that encourages academic excellence and innovation.
          </p>

          <h3 className="text-xl font-bold mb-2">Contact Us:</h3>
          <p className="text-gray-700">
            Have questions or suggestions? Feel free to reach out to us at <a href="mailto:support@researchplatform.com" className="text-blue-600 underline">support@researchplatform.com</a>.
          </p>
        </div>
        </div>
      </main>

    </div>
    </div>
  );
}