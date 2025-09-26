import { useNavigate } from "react-router-dom";




const About = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate ("/")
  };
  return (
    <div>
      <h1>About</h1>
      <p>Questa è una semplice applicazione To-Do creata con React e React Router.</p>
      <button onClick={goHome}>Torna alla Home</button>
    </div>
  );
};

export default About;
