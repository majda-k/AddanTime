import { useState } from "react";

export default function Ville() {
  const villes = [
    "Casablanca",
    "Rabat",
    "Fès",
    "Marrakech",
    "Tanger",
    "Agadir",
    "Oujda",
    "Meknès",
    "Tétouan",
    "Laâyoune",
    // Tu peux ajouter plus de villes...
  ];
  const [ville, setVille] = useState("");

  const handleChangeVille = (e) => {
    setVille(e.target.value);
  };
  return (
    <div>
      <select style={{width:"200px" , height:"30px" , marginTop:"20px" , backgroundColor: "#413c3c" , color :"white"}} onChange={handleChangeVille} value={ville}>
        <option>المدينة</option>
        {villes.map((ville, index) => (
          <option key={index} value={ville}>
            {ville}
          </option>
        ))}
      </select>
    </div>
  );
}
