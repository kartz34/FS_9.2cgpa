import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/semester1">
        <button>sem1</button>
      </Link>
      <Link to="/semester2">
        <button>sem2</button>
      </Link>
      <Link to="/extracurricular">
        <button>exta_curr</button>
      </Link>
    </div>
  );
};

export default Home;
