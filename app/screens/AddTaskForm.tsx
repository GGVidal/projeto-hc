import { useState } from "react";

import { TractorListItem } from "../components/TractorListItem";
import { TractorList } from "./TractorList";
import { Input } from "../components/Input";
import { AddTractor } from "./AddTractor";
import { AddInspector } from "./AddInspector";
interface AddTaskFormProps {
  onSubmit: (description: string) => void;
}

function AddTaskForm({ onSubmit }: AddTaskFormProps) {
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    onSubmit(description);
    setDescription("");
  };

  return (
    <>
      <AddInspector />
      {/* <TractorListItem />
      <TractorListItem /> */}
    </>
  );
}

export default AddTaskForm;
