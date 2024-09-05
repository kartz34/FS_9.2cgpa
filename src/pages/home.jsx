import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-blue-900 to-orange-900 text-white">
      {/* Hero Section  kartik bhai ye app ke section hai */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wider">First Year Resource Hub</h1>
        <p className="text-lg md:text-xl mt-4">Your gateway to study materials and activities</p>
      </div>

      {/* Floating Cards for Semesters and Extracurricular */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <Link to="/semester1" className="group">
          <div className="bg-gradient-to-r from-orange-600 to-yellow-500 p-8 rounded-lg shadow-xl  transform hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-center">Semester 1</h2>
            <p className="mt-4 text-center">Find all resources for Semester 1 here.</p>
          </div>
        </Link>

        <Link to="/semester2" className="group">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 rounded-lg shadow-xl  transform hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-center">Semester 2</h2>
            <p className="mt-4 text-center">Find all resources for Semester 2 here.</p>
          </div>
        </Link>

        <Link to="/extracurricular" className="group">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-lg shadow-xl  transform hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-center">Extracurricular</h2>
            <p className="mt-4 text-center">Explore extracurricular activities here.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
