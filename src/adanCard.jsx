import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import axios from "axios";
import { useState, useEffect } from "react";
import Ville from "./ville";

export default function AdanCard() {
  const title = {
    Fajr: "الفجر",
    Dhuhr: "الظهر",
    Asr: "العصر",
    Maghrib: "المغرب",
    Isha: "العشاء",
  };

  const [horaires, setHoraires] = useState({});
  const [setDateTime] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.aladhan.com/v1/timingsByCity?city=Casablanca&country=Morocco&method=5`
      )
      .then((response) => {
        setHoraires(response.data.data.timings);
        setDateTime(response.data.data.date.readable);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des horaires :", error);
      });
  }, [Ville]);

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
      {Object.entries(title).map(([key, value], index) => (
        <Card sx={{ maxWidth: 200, marginTop: "20px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="static/images/cards/image.jpeg"
              alt="ishae"
            />
            <CardContent>
              <Typography
                key={key}
                variant="h5"
                component="div"
                style={{ textAlign: "end", fontWeight: "bold" }}
              >
                {value}
              </Typography>

              <Typography
                key={index}
                variant="body2"
                sx={{
                  textAlign: "end",
                  fontWeight: "bold",
                  fontSize: 18,
                  color: "black",
                }}
              >
                {horaires[key]}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
