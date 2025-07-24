

export default function Ville({ value, onChangeVille }) {
     
  const villes = [
    "الدار البيضاء",
 "الرباط",
"فاس",
"مراكش",
"طنجة",
 "أكادير",
"وجدة",
 "مكناس",
"تطوان",
 "العيون"
    // Tu peux ajouter plus de villes...
  ];

console.log("value:", value);
console.log("onChangeVille:", onChangeVille);
 

  return (
    <div>
      <select style={{width:"200px" , height:"30px" , marginTop:"20px" , backgroundColor: "#413c3c" , color :"white"}}  onChange={onChangeVille}
        value={value} >
        <option value="">المدينة</option>
        {villes.map((ville, index) => (
          <option key={index} value={ville}>
            {ville}
          </option>
        ))}
      </select>
    </div>
  );

  
}
