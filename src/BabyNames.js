import React from "react";
import babyNames from "./babyNamesData.json";

function BabyNames() {
  return (
    <div className="baby-names">
      {babyNames.map((babyName) => {
        const { id, name, sex } = babyName;
        const isBoy = sex === "m";
        return <div className={isBoy ? "boy" : "girl"}>{name}</div>;
      })}
    </div>
  );
}

export default BabyNames;
