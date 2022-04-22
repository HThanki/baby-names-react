import React from "react";
import babyNames from "./babyNamesData.json";

function BabyNames() {
  return (
    <div className="baby-names">
      {babyNames
        .sort((a, z) => {
          const nameA = a.name;
          const nameZ = z.name;
          if (nameA > nameZ) return 1;
          else if (nameA < nameZ) return -1;
          else 0;
        })
        .map((babyName) => {
          const { id, name, sex } = babyName;
          const isBoy = sex === "m";
          return <div className={isBoy ? "boy" : "girl"}>{name}</div>;
        })}
    </div>
  );
}

export default BabyNames;
