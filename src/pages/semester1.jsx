import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { semester1Subjects } from "../data/subjects";
import Modal from "../components/modal";

const Semester1 = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const navigate = useNavigate(); // Hook to handle back navigation

  const handleTileClick = (subject) => {
    setSelectedSubject(subject);
  };

  const handleCloseModal = () => {
    setSelectedSubject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-orange-900 text-white p-6">
      {/* Back Button */}
      <div className="mb-6 flex justify-between">
        <button
        onClick={() => navigate(-1)}
        className="ml-4 mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        Back
      </button>
      </div>

      {/* Page Title */}
      <h1 className="text-5xl font-extrabold text-center mb-12 text-orange-400">
        Semester 1
      </h1>

      {/* Subject Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {semester1Subjects.map((subject) => (
          <div
            key={subject.id}
            className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            onClick={() => handleTileClick(subject)}
          >
            <h2 className="text-xl font-bold text-center text-orange-300">
              {subject.title}
            </h2>
          </div>
        ))}
      </div>

      {/* Modal to show the subject details */}
      <Modal isOpen={!!selectedSubject} onClose={handleCloseModal}>
        {selectedSubject && (
          <div className="p-6 bg-white rounded-lg shadow-xl text-black">
            <h2 className="text-2xl font-bold mb-4">{selectedSubject.title}</h2>
            <ul className="list-disc pl-5">
              {selectedSubject.resources.map((resource, index) => (
                <li key={index} className="mb-2">
                  {resource.link ? (
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {resource.description}
                    </a>
                  ) : (
                    <span>{resource.description}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Semester1;
