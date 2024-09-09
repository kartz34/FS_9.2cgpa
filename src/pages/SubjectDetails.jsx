import { useParams } from "react-router-dom";
import { semester1Subjects } from "../data/subjects";
import { semester2Subjects } from "../data/subjects";
import { extraCurricularSkills } from "../data/subjects";

function SubjectPage() {
  const { semester, id } = useParams();
  console.log("Semester:", semester);
  console.log("ID:", id);

  let subjects = [];

  if (semester === "semester1") {
    subjects = semester1Subjects;
  } else if (semester === "semester2") {
    subjects = semester2Subjects;
  } else if (semester === "extracurricular") {
    subjects = extraCurricularSkills;
  }

  const subject = subjects.find((subject) => subject.id === parseInt(id));

  if (!subject) {
    return <div>Subject not found</div>;
  }

  return (
    <div>
      <h1>{subject.title}</h1>
      <ul>
        {subject.resources.map((resource, index) => (
          <li key={index}>
            {resource.link ? (
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                {resource.description}
              </a>
            ) : (
              <span>{resource.description}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubjectPage;
