import { useNavigate } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col p-8 w-full items-center justify-center gap-4">
      <Button onClick={() => navigate("/confetti")}>Confetti 🎉</Button>
      <Button onClick={() => navigate("/grid")}>BentoGrid 🗳</Button>
    </div>
  );
}

export default App;
