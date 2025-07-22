import "./App.css";
import SalatTime from "./SalatTime";
import AdanCard from "./adanCard.jsx";
import Ville from "./ville.jsx";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "#413c3c", color: "white", height: "100vh" }}
    >
      <container>
        <SalatTime />
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
        <Ville />
      </container>
    </div>
  );
}

export default App;
