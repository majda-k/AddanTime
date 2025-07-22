
import { useState , useEffect } from "react";
import moment from "moment-timezone";
import "moment/locale/ar"; // Si tu veux affiche



export default function SalatTime() {
const [dateTime, setDateTime] = useState("");
 


  useEffect(() => {
    // Mettre à jour la date chaque seconde
    const interval = setInterval(() => {
      const now = moment().tz("Africa/Casablanca");
      const formattedDate = now.format("dddd, D MMMM YYYY - HH:mm:ss");
      setDateTime(formattedDate);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "end",
          height: "20vh",
          marginRight: "200px",
        }}
      >
        <div style={{ marginRight: "200px", color: "grey" }}>
          متبقي حق صلاة المغرب
          <div
            style={{
              fontWeight: "bold",
              fontSize: 25,
              marginTop: "10px",
              color: "white",
            }}
          >
            1:23:40
          </div>
        </div>
        <div style={{ color: "grey" }}>
          {dateTime}
          <br></br>
          <div
            style={{
              fontWeight: "bold",
              fontSize: 25,
              marginTop: "10px",
              color: "white",
            }}
          >
            المغرب
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "0px" , width:"80%" , border:"0.5px solid gray"}} />
    
    </>
    
  );
};


