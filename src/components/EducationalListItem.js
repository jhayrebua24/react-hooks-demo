import React from "react";
import { useFormContext } from "./hooks";

function EducationalListItem() {
  const formContextValue = useFormContext();
  console.log(formContextValue, "fc value");

  return <div>EducationalListItem</div>;
}

export default EducationalListItem;
