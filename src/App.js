import "./App.css";
import SalatTime from "./SalatTime";
import AdanCard from "./adanCard.jsx";
import Ville from "./ville.jsx";
import { useState } from "react";


function App() {
    const [ville, setVille] = useState("");
  
  const onChangeVille = (e) => {
  setVille(e.target.value);
};
  return (
    <div
      className="App"
      style={{ backgroundColor: "#413c3c", color: "white", height: "100vh" }}
    >
      <container>
        <SalatTime ville={ville} />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <AdanCard />
        </div>
      <Ville value={ville} onChangeVille={onChangeVille} />
      </container>
    </div>
  );
}

export default App;
