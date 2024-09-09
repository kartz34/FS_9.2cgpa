import { Link } from "react-router-dom";

const Home = () => {
  const handleScroll = () => {
    const star = document.querySelector(".star");
    const building = document.querySelector(".building");
    const scrollPosition = window.scrollY;

    star.style.transform = `translateY(${scrollPosition * -0.2}px)`;
    building.style.transform = `translateY(${scrollPosition * 0.25}px)`;
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Aboreto:wght@400;700&display=swap"
        rel="stylesheet"
      />
      {/* Parallax effect section */}
      <div className="parallax">
        <div className="layer star"></div>
        <div className="layer building"></div>
        <img
          src="design assets fulsltack/black.jpg"
          style={{
            zIndex: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <img
          src="design assets fulsltack/1.png"
          alt="FULLSTACK CLUB"
          style={{
            position: "absolute",
            top: "5%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 3,
            width: "200px",
            height: "auto",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
        <img
          src="design assets fulsltack/2.png"
          alt="Bennet university"
          style={{
            position: "absolute",
            top: "5%",
            left: "10%",
            transform: "translate(-50%, -50%)",
            zIndex: 3,
            width: "90px",
            height: "auto",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
        <img
          src="design assets fulsltack/4.png"
          alt="9.2 sgpa"
          style={{
            position: "absolute",
            top: "27%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 3,
            width: "250px",
            height: "auto",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
        <img
          src="design assets fulsltack/3.png"
          alt="student cabinet"
          style={{
            position: "absolute",
            top: "5%",
            left: "90%",
            transform: "translate(-50%, -50%)",
            zIndex: 3,
            width: "100px",
            height: "auto",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
        <img
          src="design assets fulsltack/7.png"
          alt="star"
          style={{
            position: "absolute",
            top: "25%",
            left: "75%",
            transform: "translate(-50%, -50%)",
            zIndex: 3,
            width: "100px",
            height: "auto",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
        <img
          src="design assets fulsltack/7.png"
          alt="star"
          style={{
            position: "absolute",
            top: "25%",
            left: "25%",
            transform: "translate(-50%, -50%)",
            zIndex: 3,
            width: "100px",
            height: "auto",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
      </div>

      {/* Floating cards section */}
      <div className="cards-section ">
        <div className="min-h-25 bg-gradient-to-b from-black via-blue-950 to-blue-700 text-white p-6">
          <div className="text-center mb-12">
            <link
              href="https://fonts.googleapis.com/css2?family=Aboreto:wght@400;700&display=swap"
              rel="stylesheet"
            />
            <h1
              className="text-lg md:text-xl "
              style={{
                fontFamily: "Aboreto",
              }}
            >
              First Year Resource Hub
            </h1>
            <p
              className="text-lg md:text-xl mt-4"
              style={{
                fontFamily: "Aboreto",
              }}
            >
              Your gateway to study materials and activities
            </p>
          </div>

          {/* Floating Cards for Semesters and Extracurricular */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 ">
            <Link to="/semester1" className="group">
              <div className="bg-gradient-to-r from-orange-600 to-yellow-500 p-8 rounded-lg shadow-xl transform hover:scale-105 text-white transition-all duration-300 ease-in-out">
                <h2 className="text-2xl font-bold text-center">Semester 1</h2>
                <p className="mt-4 text-center">
                  Find all resources for Semester 1 here.
                </p>
              </div>
            </Link>

            <Link to="/semester2" className="group">
              <div className="bg-gradient-to-r from-pink-600 to-orange-500 p-8 rounded-lg shadow-xl transform hover:scale-105 text-white transition-all duration-300 ease-in-out">
                <h2 className="text-2xl font-bold text-center">Semester 2</h2>
                <p className="mt-4 text-center">
                  Find all resources for Semester 2 here.
                </p>
              </div>
            </Link>

            <Link to="/extracurricular" className="group">
              <div className="bg-gradient-to-r from-amber-600 to-pink-600 p-8 rounded-lg shadow-xl transform hover:scale-105 text-white transition-all duration-300 ease-in-out">
                <h2 className="text-2xl font-bold text-center">
                  Extracurricular
                </h2>
                <p className="mt-4 text-center">
                  Explore extracurricular activities here.
                </p>
              </div>
            </Link>

            {/* <Link to="/previous" className="group">
              <div className="bg-gradient-to-r from-amber-200 to-orange-900 p-8 mb-10 rounded-lg shadow-xl transform hover:scale-105 text-white transition-all duration-300 ease-in-out">
                <h2 className="text-2xl font-bold text-center">
                  Previous Year Question
                </h2>
                <p className="mt-4 text-center">Previous Year papers</p>
              </div>
            </Link> */}
          </div>
        </div>
      </div>
      {/* Footer section */}
      <div className="footer bg-blue-700 h-screen p-6">
        <link
          href="https://fonts.googleapis.com/css2?family=Aboreto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <h2 className="text-2xl font-bold text-center mb-4">
          Made with ♥️ by-
        </h2>
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-1/3 md:w-1/3 xl:w-1/3 p-4">
            <h3 className="text-lg font-bold">Shubh Gupta</h3>
            <p className="text-sm">
              <a
                href="https://www.instagram.com/shubh_.xyz?igsh=emUxY2dza21lamt1 "
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram "></i>{" "}
                <img
                  src="design assets fulsltack/inst.png"
                  alt="Instagram"
                  style={{ width: "40px", height: "40px", marginLeft: "5px" }}
                />
              </a>
              <br />
              <a
                href="https://www.linkedin.com/in/shubh-gupta-27918428a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
          "
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin "></i>{" "}
                <img
                  src="design assets fulsltack/lin.png"
                  alt="linkedin"
                  style={{
                    width: "37px",
                    height: "37px",
                    marginLeft: "60px",
                    marginTop: "-60px",
                  }}
                />
              </a>
            </p>
          </div>
          <div className="w-1/3 md:w-1/3 xl:w-1/3 p-4">
            <h3 className="text-lg font-bold">Kartik Gupta</h3>
            <p className="text-sm">
              <a
                href="https://www.instagram.com/_kart1k_?igsh=MTU5c3ByNzViajJrYw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>{" "}
                <img
                  src="design assets fulsltack/inst.png"
                  alt="Instagram id- _kart1k_"
                  style={{ width: "40px", height: "40px", marginLeft: "5px" }}
                />
              </a>
              <br />
              <a
                href="https://www.linkedin.com/in/kartik-gupta-038473322"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>{" "}
                <img
                  src="design assets fulsltack/lin.png"
                  alt="linkedin"
                  style={{
                    width: "37px",
                    height: "37px",
                    marginLeft: "60px",
                    marginTop: "-60px",
                  }}
                />
              </a>
            </p>
          </div>
          <div className="w-1/3 md:w-1/3 xl:w-1/3 p-4">
            <h3 className="text-lg font-bold">Vaibhav Kothari</h3>
            <p className="text-sm">
              <a
                href="https://www.instagram.com/vaibhavkothari_33?igsh=MTA4bG9lYW43M214cg=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>{" "}
                <img
                  src="design assets fulsltack/inst.png"
                  alt="Instagram"
                  style={{ width: "40px", height: "40px", marginLeft: "5px" }}
                />
              </a>
              <br />
              <a
                href="https://www.linkedin.com/in/vaibhavkothari33/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>{" "}
                <img
                  src="design assets fulsltack/lin.png"
                  alt="linkedin"
                  style={{
                    width: "37px",
                    height: "37px",
                    marginLeft: "60px",
                    marginTop: "-60px",
                  }}
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
