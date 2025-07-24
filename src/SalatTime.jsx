import { useState, useEffect } from "react";
import moment,{ now } from "moment-timezone";
import "moment/locale/ar-dz"; // Si tu veux affiche


export default function SalatTime({ ville }) {
  const [nextPrayerIndex, setNextPrayerIndex] = useState(0);
  const [remaingsTime , setRemaingsTime] = useState("");
  const [timings, setTimings] = useState({
    Fajr: "04:35",
    Dhuhr: "13:15",
    Asr: "16:45",
    Maghrib: "19:20",
    Isha: "21:00",
  });
  const PrayersArray = [
    { key: "Fajr", displayName: "الفجر" },
    { key: "Dhuhr", displayName: "الظهر" },
    { key: "Asr", displayName: "العصر" },
    { key: "Maghrib", displayName: "المغرب" },
    { key: "Isha", displayName: "العشاء" },
  ];

  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    // Mettre à jour la date chaque seconde
    const interval = setInterval(() => {
      const now = moment().tz("Africa/Casablanca");
      const formattedDate = now.format("dddd, D MMMM YYYY | HH:mm:ss");
      setDateTime(formattedDate);
      setupCountdownTimer();
    }, 1000);

    return () => clearInterval(interval);
  }, [timings]);

  const setupCountdownTimer = () => {
    const momentNow = moment().tz("Africa/Casablanca");
    let nextPrayerIndex = 2;

    if (
      momentNow.isAfter(moment(timings["Fajr"], "HH:mm")) &&
      momentNow.isBefore(moment(timings["Dhuhr"], "HH:mm"))
    ) {
      nextPrayerIndex = 1;
    } else if (
      momentNow.isAfter(moment(timings["Dhuhr"], "HH:mm")) &&
      momentNow.isBefore(moment(timings["Asr"], "HH:mm"))
    ) {
      nextPrayerIndex = 2;
    } else if (
      momentNow.isAfter(moment(timings["Asr"], "HH:mm")) &&
      momentNow.isBefore(moment(timings["Maghrib"], "HH:mm"))
    ) {
      nextPrayerIndex = 3;
    } else if (
      momentNow.isAfter(moment(timings["Maghrib"], "HH:mm")) &&
      momentNow.isBefore(moment(timings["Isha"], "HH:mm"))
    ) {
      nextPrayerIndex = 4;
    } else {
      nextPrayerIndex = 0;
    }

    setNextPrayerIndex(nextPrayerIndex);


const nextPrayerObject = PrayersArray[nextPrayerIndex];
const nextPrayerTime = timings[nextPrayerObject.key];
const nextPrayerTimeMoment = moment(nextPrayerTime,"HH:mm").tz("Africa/Casablanca");
let remaingTime = moment(nextPrayerTime , "HH:mm:ss").diff(momentNow);

if(remaingTime<0){
const midNightDiff = moment("23:59:59" , "HH:mm:ss").tz("Africa/Casablanca").diff(momentNow);
const FajerToNightDiff = nextPrayerTime(nextPrayerTimeMoment).diff("00:00:00" , "HH:mm:ss").tz("Africa/Casablanca");
const TotalDiff = midNightDiff +FajerToNightDiff;

remaingTime= TotalDiff.tz("Africa/Casablanca");
}
console.log(remaingTime);

const durationRemaingTime = moment.duration(remaingTime);
setRemaingsTime(`${durationRemaingTime.hours() + 1 }: ${durationRemaingTime.minutes()} : ${durationRemaingTime.seconds()}`)

console.log("duration is : " , durationRemaingTime.hours() , durationRemaingTime.minutes() , durationRemaingTime.seconds());


  };



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
          متبقي حق صلاة {PrayersArray[nextPrayerIndex].displayName}
          <div
            style={{
              fontWeight: "bold",
              fontSize: 25,
              marginTop: "10px",
              color: "white",
              
            }}
          >
          {remaingsTime}
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
            {ville ? `${ville}` : "اختر مدينة"}
          </div>
        </div>
      </div>

      <hr
        style={{ marginTop: "0px", width: "80%", border: "0.5px solid gray" }}
      />
    </>
  );
}
