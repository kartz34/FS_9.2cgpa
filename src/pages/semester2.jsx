import { useState } from "react";
import { semester2Subjects } from "../data/subjects";
import Modal from "../components/modal";

const Semester2 = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleTileClick = (subject) => {
    setSelectedSubject(subject);
  };

  const handleCloseModal = () => {
    setSelectedSubject(null);
  };

  return (
    <div>
      <h1>Semester 2</h1>
      <div className="subject-list">
        {semester2Subjects.map((subject) => (
          <div
            className="subject-tile"
            key={subject.id}
            onClick={() => handleTileClick(subject)}
          >
            <h2>{subject.title}</h2>
          </div>
        ))}
      </div>

      <Modal isOpen={!!selectedSubject} onClose={handleCloseModal}>
        {selectedSubject && (
          <div>
            <h2>{selectedSubject.title}</h2>
            <ul>
              {selectedSubject.resources.map((resource, index) => (
                <li key={index}>
                  {resource.link ? (
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
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

export default Semester2;
