import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/users");
        setUsers(response?.data?.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    })();
  }, []);

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get Users Data</h1>
          <p>
            This is a MERN Stack CI/CD project with Docker, GitHub Actions, and
            Nginx.
          </p>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div>
          <h2>Users Data</h2>

          {users?.length > 0 ? (
            users?.map((user: any, index) => (
              <ul>
                <li key={index}>{user.id}</li>
                <li>{user.name}</li>
                <li>{user.age}</li>
              </ul>
            ))
          ) : (
            <div>No users found.</div>
          )}
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
