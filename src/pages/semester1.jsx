import { useState } from "react";
import { Link } from "react-router-dom";
import { semester1Subjects } from "../data/subjects";
import Modal from "../components/modal";

const Semester1 = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleTileClick = (subject) => {
    setSelectedSubject(subject);
  };

  const handleCloseModal = () => {
    setSelectedSubject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-orange-900 text-white p-8">
      {/* Back Button */}
      <div className="mb-8">
        <Link to="/" className="text-lg font-semibold hover:underline flex items-center space-x-2">
          <span className="material-icons">Back to Home</span>
          {/* <span>Back to Home</span> */}
        </Link>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-12">Semester 1</h1>

      {/* Subject Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {semester1Subjects.map((subject) => (
          <div
            key={subject.id}
            className="bg-gradient-to-r from-orange-600 to-yellow-500 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            onClick={() => handleTileClick(subject)}
          >
            <h2 className="text-2xl font-semibold text-center">{subject.title}</h2>
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
